/**
 *	@project FireSpark
 *	@desc JavaScript Service Computing Platform
 *
 *	@class FireSpark
 *	@desc Provides Registry and Kernel functionalities
 *	
 *	@author Vibhaj Rajan <vibhaj8@gmail.com>
 *
 *	@desc Services are generic modules providing resuable stateless functionalities
 *
 *	@interface Service {
 *		public function input(){
 *			... returns array of required parameters and object of optional parameters
 *		}
 *		public function run(message, memory){
 *			... uses memory during execution for receiving and returning parameters
 *			... save reference in Registry, if required, instead of returning objects
 *		}
 *		public function output(){
 *			... returns array of parameters to return 
 *		}
 *	}
 *
 *	@format Message {
 *		service : (reference),
 *		... parameters ...
 *	}
 *
 *	@desc Workflows are array of services that use common memory for state management
 *
 *	@format workflow = [{	
 *		service : ...,
 *		( ... params : ... )
 *	}];
 *
 * 	@desc Navigator is compact way of representing messages
 *	@format Navigator root:name=value:name=value
 *
 *	@example #testtab:tabtitle=Krishna:loadurl=test.php
 *
 *	@escapes basic '=' with '~'
 *
 *	@escapes limited for usage in form id
 *	'#' by '_' 
 *	'=' by '.'
 *
 *	@escapes advanced (not implemented yet) using URL encoding
 *	
**/

var FireSpark = (function(){
	/**
	 *	@var references array
	 *	@desc an array for saving references
	 *	
	 *	references may be accessed through the Registry
	 *
	**/
	var $references = new Array();
	
	/**
	 *	@var navigator roots array
	 *	@desc an array that saves roots to service workflows
	 *
	**/
	var $navigators = new Array();
	
	return {
		/**
		 *	@var Registry object
		 *	@desc manages references and navigator roots
		 *
		**/
		Registry : {
			/**
			 *	@method save
			 *	@desc saves a Reference with index
			 *
			 *	@param index string
			 *	@param reference object or any type
			 *
			**/
			save : function($index, $reference){
				$references[$index] = $reference;
			},
			
			/**
			 *	@method get
			 *	@desc gets the Reference for index
			 *
			 *	@param index string
			 *
			**/
			get : function($index){
				return $references[$index];
			},
			
			/**
			 *	@method remove
			 *	@desc removes a Reference with index
			 *
			 *	@param index string
			 *
			**/
			remove : function($index){
				$references[$index] = 0;
			},
			
			/**
			 *	@method add
			 *	@desc adds a Navigator root 
			 *
			 *	@param root string
			 *	@param workflow object
			 *
			**/
			add : function($root, $workflow){
				$navigators[$root] = $workflow;
			},
			
			/**
			 *	@method removeNavigator
			 *	@desc removes a Navigator root
			 *
			 *	@param root string
			 *
			**/
			removeNavigator : function($root){
				$navigators[$root] = 0;
			}
		},
		
		/**
		 *	@var Kernel object
		 *	
		 *	@desc manages the following tasks
		 *		runs services and workflows when requested
		 *		processes navigators when received and launch workflows
		 *
		**/
		Kernel : {			
			/** 
			 *	@method execute
			 *	@desc executes a workflow with the given definition
			 *
			 *	@param message object Workflow definition
			 *	@param memory object optional default {}
			 *
			**/
			execute : function($workflow, $memory){
				/**
				 *	create a new memory if not passed
				**/
				$memory = $memory || {};
				$memory['valid'] = $memory['valid'] || true;
			
				for(var $i in $workflow){
					var $message = $workflow[$i];
					
					/**
					 *	Check for non strictness
					**/
					var $nonstrict = $message['nonstrict'] || false;
					
					/**
					 *	Continue on invalid state if non-strict
					**/
					if($memory['valid'] !== true && $nonstrict !== true)
						continue;
					
					/**
					 *	run the service with the message and memory
					**/
					$memory = this.run($message, $memory);
				}
				
				return $memory;
			},
			
			/** 
			 *	@method run
			 *	@desc runs a service with the given definition
			 *
			 *	@param message object Service definition
			 *	@param memory object optional default {}
			 *
			**/
			run : function($message, $memory){
				/**
				 *	Read the service instance
				**/
				var $service = $message['service'];
				
				/**
				 *	Read the service arguments
				**/
				var $args = $message['args'] || [];
				
				/**
				 *	Copy arguments if necessary
				**/
				for(var $i in $args){
					var $key = $args[$i];
					$message[$key] = $message[$key] || $memory[$key] || false
				}
				
				/**
				 *	Read the service input
				**/
				var $input = $message['input'] || {};
				var $sin = $service.input();
				var $sinreq = $sin['required'] || [];
				var $sinopt = $sin['optional'] || {};
				
				/**
				 *	Copy required input if not exists (return valid false if value not found)
				**/
				for(var $i in $sinreq){
					var $key = $sinreq[$i];
					var $param = $input[$key] || $key;
					$message[$key] = $message[$key] || $memory[$param] || false;
					if($message[$key] === false){
						$memory['valid'] = false;
						return $memory;
					}
				}
				
				/**
				 *	Copy optional input if not exists
				**/
				for(var $key in $sinopt){
					var $param = $input[$key] || $key;
					$message[$key] = $message[$key] || $memory[$param] || $sinopt[$key];
				}
				
				/**
				 *	Run the service with the message as memory
				**/
				$message = $service.run($message);
				
				/**
				 *	Read the service output and return if not valid
				**/
				var $output = [];
				$memory['valid'] = $message['valid'] || false;
				if($memory['valid']){
					$output = $message['output'] || [];
				}
				else {
					return $memory;
				}
				var $sout = $service.output();
				
				/**
				 *	Copy output
				**/
				for(var $i in $sout){
					var $key = $sout[$i];
					var $param = $output[$key] || $key;
					$memory[$param] = $message[$key] || false;
				}
				
				/**
				 *	Return the memory
				**/
				return $memory;
			},
			
			/**
			 *	@method launch
			 *	@desc processes the navigator received to launch workflows
			 *
			 *	@param navigator string
			 *	@param escaped boolean optional default false
			 *
			**/
			launch : function($navigator, $escaped){
				
				/**
				 *	Process escaped navigator
				**/
				if($escaped || false){
					$navigator = $navigator.replace(/_/g, '#');
					$navigator = $navigator.replace(/\./g, '=');
				}
				//$navigator = $navigator.replace(/\+/g, '%20');
				
				/**
				 *	Parse navigator
				 **/
				var $req = $navigator.split(':');
				var $index = $req[0];
				
				/**
				 *	Construct message for workflow
				**/
				var $message = {};
				for(var $i=1, $len=$req.length; $i<$len; $i++){
					var $param = ($req[$i]).split('=');
					var $arg = $param[1];
					$arg = $arg.replace(/~/g, '=');
					//$arg = unescape($arg);
					$message[$param[0]] = $arg;
				}
				
				/**
				 *	Run the workflow and return the valid value
				**/
				if($navigators[$index] || false){
					$message['service'] = $navigators[$index];
					$message = this.run($message, {});
					return $message['valid'];
				}
				
				return false;
			}
		}
	};
})();
FireSpark.core = {};

FireSpark.core.service = {};
FireSpark.core.workflow = {};

FireSpark.core.helper = {};
FireSpark.core.constant = {};

FireSpark.core.constant.loadmsg = '<p class="loading">Loading ...</p>';
FireSpark.core.constant.loaderror = '<p class="error">The requested resource could not be loaded</p>';
/**
 *	@helper readFileSize
 *
**/
FireSpark.core.helper.readFileSize = function(size){
	var kb = size/1024.0;
	if(kb > 1024.0){
		var mb = kb/1024.0;
		return mb.toFixed(2) + ' MB';
	}
	return kb.toFixed(2) + ' KB';
}
FireSpark.jquery = {};

FireSpark.jquery.service = {};
FireSpark.jquery.workflow = {};

FireSpark.jquery.helper = {};
FireSpark.jquery.constant = {};

FireSpark.jquery.template = {};
/**
 *	@service ElementContent
 *	@desc Fills element with content and animates it and returns element in memory
 *
 *	@param element string [memory]
 *	@param select boolean [memory] optional default false
 *	@param data html/text [memory] optional default ''
 *	@param animation string [memory] optional default 'fadein' ('fadein', 'fadeout', 'slidein', 'slideout')
 *	@param duration integer [memory] optional default 1000
 *	@param delay integer [memory] optional default 0
 *
 *	@return element element [memory]
 *
**/
FireSpark.jquery.service.ElementContent = {
	input : function(){
		return {
			required : ['element'],
			optional : { 
				select : false,
				data : '',
				animation : 'fadein',
				duration : 1000,
				delay : 0
			}
		};
	},
	
	run : function($memory){
		if($memory['select'] || false){
			var $element = $($memory['element']);
		}
		else {
			$element = $memory['element'];
		}
		
		var $animation = $memory['animation'];
		var $duration = $memory['duration'];
		
		if($animation == 'fadein' || $animation == 'slidein'){
			$element.hide();
		}
		
		$element.html($memory['data']);
		$element.trigger('load');
		$element.delay($memory['delay']);
		
		switch($animation){
			case 'fadein' :
				$element.fadeIn($duration);
				break;
			case 'fadeout' :
				$element.fadeOut($duration);
				break;
			case 'slidein' :
				$element.slideDown($duration);
				break;
			case 'slideout' :
				$element.slideUp($duration);
				break;
			default :
				$element.html('Animation type not supported').fadeIn($duration);
				break;
		}
		
		$memory['element'] = $element;
		$memory['valid'] = true;
		return $memory;
	},
	
	output : function(){
		return ['element'];
	}
};
/**
 *	@service ElementTab
 *	@desc Creates a new tab and returns the element
 *
 *	@param tabui string [memory]
 *  @param title string [memory]
 *  @param autoload boolean [memory] optional default false
 *  @param taburl string [memory] optional default false
 *
 *	@return element Element [memory]
 *
**/
FireSpark.jquery.service.ElementTab = {
	input : function(){
		return {
			required : ['tabui', 'title'],
			optional : { autoload : false,	taburl : false }
		};
	},
	
	run : function($memory){
		var $tabui = FireSpark.Registry.get($memory['tabui']);
		$memory['element'] = $tabui.add($memory['title'], $memory['autoload'], $memory['taburl']);
		$memory['valid'] = true;
		return $memory;
	},
	
	output : function(){
		return ['element'];
	}
};
/**
 *	@service ElementTabpanel
 *	@desc Creates a Tabpanel at element and saves a reference
 *
 *	@param element string [memory]
 *	@param select boolean [memory] optional default false
 *	@param savekey string [memory]
 *	@param cache boolean [memory] optional default false
 *	@param collapsible boolean [memory] optional default false
 *	@param event string [memory] optional default 'click'
 *	@param tablink boolean [memory] optional default false
 *	@param indexstart integer [memory] optional default 0
 *
 *	@save tabpanel object
 *
**/
FireSpark.jquery.service.ElementTabpanel = {
	input : function(){
		return {
			required : ['element', 'savekey'],
			optional : { 
				select : false, 
				cache : false,	
				collapsible : false, 
				event : 'click', 
				tablink : false, 
				indexstart : 0 
			}
		};
	},
	
	run : function($memory){
		if($memory['select']){
			var $element = $($memory['element']);
		}
		else {
			var $element = $memory['element'];
		}
		$element.hide();
		
		var $tab = new Array();
		var $index = $memory['indexstart'];
		
		var $options = {
			cache : $memory['cache'],
			collapsible : $memory['collapsible'],
			event : $memory['event'],
			tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
			add: function($event, $ui) {
				$tab[$index] = $($ui.panel);
			}
		};
		
		if($memory['tablink']){
			$options.load = function($event, $ui) {
				$('a', $ui.panel).click(function() {
					$($ui.panel).load(this.href);
					return false;
				});
			}
		}
		
		var $tabpanel = $element.tabs($options);
		$element.fadeIn(1000);
		
		$('.ui-icon-close').live( "click", function() {
			var $indx = $("li", $tabpanel).index($(this).parent());
			$tabpanel.tabs( "remove", $indx );
		});
		$index--;
		
		FireSpark.Registry.save($memory['savekey'], {
			add : function($tabtitle, $autoload, $taburl){
				$index++;
				var $url = '#ui-tab-' + $index;
				if($autoload || false){
					$url = $taburl;
				}
				$tabpanel.tabs('add', $url, $tabtitle);
				$tabpanel.tabs('select', '#ui-tab-' + $index);
				return $tab[$index];
			}
		});
		
		$memory['valid'] = true;
		return $memory;
	},
	
	output : function(){
		return [];
	}
};
/**
 *	@service LoadAjax
 *	@desc Uses AJAX to load data from server
 *
 *	@param url string [memory]
 *	@param data object [memory] optional default ''
 *	@param type string [memory] optional default 'json'
 *	@param request string [memory] optional default 'POST'
 *	@param process boolean [memory] optional default false
 *	@param mime string [memory] optional default 'application/x-www-form-urlencoded'
 *
 *	@param workflow Workflow [memory]
 *	@param errorflow	Workflow [memory] optional default false
 *
 *	@return data string [memory]
 *	@return error string [memory] optional
 *
**/
FireSpark.jquery.service.LoadAjax = {
	input : function(){
		return {
			required : ['url', 'workflow'],
			optional : { 
				data : '', 
				type : 'json', 
				request : 'POST', 
				process : false, 
				mime : 'application/x-www-form-urlencoded' ,
				errorflow : false
			}
		}
	},
	
	run : function($memory){
		
		/**
		 *	Load data from server using AJAX
		**/
		$.ajax({
			url: $memory['url'],
			data: $memory['data'],
			dataType : $memory['type'],
			type : $memory['request'],
			processData : $memory['process'],
			contentType : $memory['mime'],
			
			success : function($data, $status, $request){
				$memory['data'] = $data;
				//$memory['status'] = $status;
				
				/**
				 *	Run the workflow
				**/
				FireSpark.Kernel.execute($memory['workflow'], $memory);
			},
			
			error : function($request, $status, $error){
				$memory['error'] = $error;
				//$memory['status'] = $status;
				$memory['data'] = FireSpark.core.constant.loaderror + ' [Error : ' + $error + ']';
				
				/**
				 *	Run the errorflow if any
				**/
				if($memory['errorflow']){
					FireSpark.Kernel.execute($memory['errorflow'], $memory);
				}
			}
		});
		
		/**
		 *	@return false 
		 *	to stop default browser event
		**/
		return { valid : false };
	},
	
	output : function(){
		return [];
	}
};
/**
 *	@service LoadIframe
 *	@desc Uses IFRAME to load data from server
 *
 *	@param agent string [memory] 
 *	@param type string [memory] optional default 'json' ('json', 'html')
 *
 *	@param workflow Workflow [memory]
 *	@param errorflow	Workflow [memory] optional default false
 *
 *	@return data string [memory]
 *	@return error string [memory] optional
 *
**/
FireSpark.jquery.service.LoadIframe = {
	input : function(){
		return {
			required : ['agent', 'workflow'],
			optional : { 
				type : 'json', 
				errorflow : false
			}
		}
	},
	
	run : function($memory){
		
		/**
		 *	Genarate unique framename
		**/
		var $d= new Date();
		var $framename = 'firespark_iframe_' + $d.getTime();
		
		/**
		 *	Set target attribute to framename in agent
		**/
		$($memory['agent']).attr('target', $framename);
		
		/**
		 *	Create IFRAME and define callbacks
		**/
		var $iframe = $('<iframe id="' + $framename + '" name="'+ $framename + '" style="width:0;height:0;border:0px solid #fff;"></iframe>')
			.insertAfter($memory['agent'])
			.bind('load', function(){
				try {
					var $frame = FireSpark.core.helper.getFrame($framename);
					var $data = $frame.document.body.innerHTML;
					switch($memory['type']){
						case 'html' :
							$memory['data'] = $data;
							break;
						case 'json' :
						default :
							$memory['data'] = $.parseJSON($data);
							break;
					}
					
					/**
					 *	Run the workflow
					**/
					FireSpark.Kernel.execute($memory['workflow'], $memory);
				}
				catch($error){
					$memory['error'] = $error.description;
					$memory['result'] = FireSpark.core.constant.loaderror + '[Error :' + $error.description + ']';
					
					/**
					 *	Run the errorflow if any
					**/
					if($memory['errorflow']){
						FireSpark.Kernel.execute($memory['errorflow'], $memory);
					}
				}
			})
			.bind('error', function($error){
				$memory['error'] = $error;
				$memory['result'] = FireSpark.core.constant.loaderror;
				
				/**
				 *	Run the errorflow if any
				**/
				if($memory['errorflow']){
					FireSpark.Kernel.execute($memory['errorflow'], $memory);
				}
			});
			
		/**
		 *	Remove IFRAME after timeout (150 seconds)
		**/
		window.setTimeout(function(){
			$iframe.remove();
		}, 150000);
		
		/**
		 *	@return true 
		 *	to continue default browser event with target on iframe
		**/
		return { valid : true };
	},
	
	output : function(){
		return [];
	}
};
/**
 *	@service TemplateApply
 *	@desc Applies template
 *
 *	@param template Template [memory]
 *	@param data object [memory] optional default {}
 *
 *	@return result html [memory]
 *
**/
FireSpark.jquery.service.TemplateApply = {
	input : function(){
		return {
			required : ['template'],
			optional : { data : {} }
		};
	},
	
	run : function($memory){
		$memory['result'] = $.tmpl($memory['template'], $memory['data']);
		$memory['valid'] = true;
		return $memory;
	},
	
	output : function(){
		return ['result'];
	}
};
/**
 *	@service TemplateRead
 *	@desc Reads template definition into memory
 *
 *	@param data object [memory] optional default {}
 *	@param key string [memory] optional default 'template'
 *	@param template string [memory] optional default 'tpl-default' (FireSpark.jquery.template.Default)
 *
 *	@param result Template [memory]
 *	@param data object [memory]
 *
**/
FireSpark.jquery.service.TemplateRead = {
	input : function(){
		return {
			optional : { data : {}, key : 'template', template : 'tpl-default' }
		};
	},
	
	run : function($memory){
		if($memory['data'][$memory['key']]){
			$memory['result'] = $.template($memory['data'][$memory['key']]);
		}
		else if ($memory['data']['message'] && $memory['data']['message'][$memory['key']]){
			$memory['result'] = $.template($memory['data']['message'][$memory['key']]);
			$memory['data']['content'] = $memory['data']['message']['content'] || false;
		}
		else {
			$memory['result'] = FireSpark.Registry.get($memory['template']);
		}
		
		$memory['valid'] = true;
		return $memory;
	},
	
	output : function(){
		return ['result', 'data'];
	}
};
/**
 *	@template Default
**/
FireSpark.jquery.template.Default = $.template('\
	<p class="{{if valid}}success{{else}}error{{/if}}">${msg}</p>\
');

FireSpark.Registry.save('tpl-default', FireSpark.jquery.template.Default);