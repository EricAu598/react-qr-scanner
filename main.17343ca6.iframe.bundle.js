(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./ sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/QrScanner.stories.tsx":"./stories/QrScanner.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./ sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./ sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./ sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./ sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./ sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./stories/QrScanner.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ScanCode",(function(){return ScanCode}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),jsx_runtime=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var styles={count:{bottom:0,right:5,fontSize:30,color:"#fff",position:"absolute",zIndex:1}},Finder_Finder=function Finder(props){var scanCount=props.scanCount,hideCount=props.hideCount,_props$border=props.border,border=void 0===_props$border?80:_props$border,_useState2=_slicedToArray(Object(react.useState)("rgba(255, 0, 0, 0.5)"),2),color=_useState2[0],setColor=_useState2[1];Object(react.useEffect)((function(){if(0!==scanCount){setColor("rgba(0, 255, 0, 0.5)");var timer=setTimeout((function(){setColor("rgba(255, 0, 0, 0.5)")}),500);return function(){clearTimeout(timer)}}}),[scanCount]);var Count=function Count(){return hideCount?null:Object(jsx_runtime.jsx)("div",{style:styles.count,children:scanCount})};return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Count,{}),Object(jsx_runtime.jsxs)("svg",{viewBox:"0 0 100 100",style:{top:0,left:0,zIndex:1,boxSizing:"border-box",border:border+"px solid rgba(0, 0, 0, 0.1)",position:"absolute",width:"100%",height:"100%"},children:[Object(jsx_runtime.jsx)("path",{fill:"none",d:"M23,0 L0,0 L0,23",stroke:color,strokeWidth:"5"}),Object(jsx_runtime.jsx)("path",{fill:"none",d:"M0,77 L0,100 L23,100",stroke:color,strokeWidth:"5"}),Object(jsx_runtime.jsx)("path",{fill:"none",d:"M77,100 L100,100 L100,77",stroke:color,strokeWidth:"5"}),Object(jsx_runtime.jsx)("path",{fill:"none",d:"M100,23 L100,0 77,0",stroke:color,strokeWidth:"5"})]})]})};try{Finder_Finder.displayName="Finder",Finder_Finder.__docgenInfo={description:"",displayName:"Finder",props:{scanCount:{defaultValue:null,description:"",name:"scanCount",required:!0,type:{name:"number"}},hideCount:{defaultValue:null,description:"",name:"hideCount",required:!0,type:{name:"boolean"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Finder.tsx#Finder"]={docgenInfo:Finder_Finder.__docgenInfo,name:"Finder",path:"src/components/Finder.tsx#Finder"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/core-js/modules/es.promise.js");var browser_esm=__webpack_require__("./node_modules/@zxing/browser/esm/index.js");__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if(void 0!==_cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function _construct(Parent,args,Class){return _construct=_isNativeReflectConstruct()?Reflect.construct:function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var InsecureContextError=function(_Error){_inherits(InsecureContextError,_Error);var _super=_createSuper(InsecureContextError);function InsecureContextError(){var _this;return _classCallCheck(this,InsecureContextError),(_this=_super.call(this,"Camera access is only permitted in secure context. Use HTTPS or localhost.")).name="InsecureContextError",_this}return _createClass(InsecureContextError)}(_wrapNativeSuper(Error)),StreamApiNotSupportedError=function(_Error2){_inherits(StreamApiNotSupportedError,_Error2);var _super2=_createSuper(StreamApiNotSupportedError);function StreamApiNotSupportedError(){var _this2;return _classCallCheck(this,StreamApiNotSupportedError),(_this2=_super2.call(this,"This browser has no support for Stream API.")).name="StreamApiNotSupportedError",_this2}return _createClass(StreamApiNotSupportedError)}(_wrapNativeSuper(Error)),isStreamApiSupported=function isStreamApiSupported(){var _navigator,_navigator$mediaDevic;if(!window.isSecureContext)throw new InsecureContextError;if(void 0===(null===(_navigator=navigator)||void 0===_navigator||null===(_navigator$mediaDevic=_navigator.mediaDevices)||void 0===_navigator$mediaDevic?void 0:_navigator$mediaDevic.getUserMedia))throw new StreamApiNotSupportedError};function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var useQrScanner_useQrScanner=function useQrScanner(props){var scanDelay=props.scanDelay,constraints=props.constraints,onResult=props.onResult,onError=props.onError,videoId=props.videoId,controlsRef=Object(react.useRef)(null);Object(react.useEffect)((function(){return function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){var codeReader;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return codeReader=new browser_esm.a(void 0,{delayBetweenScanAttempts:scanDelay}),isStreamApiSupported(),_context.prev=2,_context.next=5,codeReader.decodeFromConstraints({video:constraints},videoId,(function(result,error){void 0!==result&&onResult(result,codeReader)}));case 5:controlsRef.current=_context.sent,_context.next=11;break;case 8:_context.prev=8,_context.t0=_context.catch(2),_context.t0 instanceof Error&&onError(_context.t0,codeReader);case 11:case"end":return _context.stop()}}),_callee,null,[[2,8]])})))(),function(){var _controlsRef$current;null===(_controlsRef$current=controlsRef.current)||void 0===_controlsRef$current||_controlsRef$current.stop()}}),[])};function QrScanner_slicedToArray(arr,i){return function QrScanner_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function QrScanner_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function QrScanner_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return QrScanner_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return QrScanner_arrayLikeToArray(o,minLen)}(arr,i)||function QrScanner_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function QrScanner_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var QrScanner_styles_container={width:"100%",paddingTop:"100%",overflow:"hidden",position:"relative"},QrScanner_styles_video={top:0,left:0,width:"100%",height:"100%",display:"block",overflow:"hidden",position:"absolute"},QrScanner_QrScanner=function QrScanner(props){var containerStyle=props.containerStyle,videoStyle=props.videoStyle,_props$scanDelay=props.scanDelay,scanDelay=void 0===_props$scanDelay?500:_props$scanDelay,_props$videoId=props.videoId,videoId=void 0===_props$videoId?"videoId":_props$videoId,constraintsProps=props.constraints,onResult=props.onResult,onError=props.onError,onDecode=props.onDecode,ViewFinder=props.viewFinder,_props$hideCount=props.hideCount,hideCount=void 0===_props$hideCount||_props$hideCount,viewFinderBorder=props.viewFinderBorder,defaultConstraints={facingMode:"environment",width:{min:640,ideal:720,max:1920},height:{min:640,ideal:720,max:1080}},_useState2=QrScanner_slicedToArray(Object(react.useState)(0),2),scanCount=_useState2[0],setScanCount=_useState2[1],_useState4=QrScanner_slicedToArray(Object(react.useState)(Object.assign({},defaultConstraints,constraintsProps)),2),constraints=_useState4[0],setConstraints=_useState4[1];Object(react.useEffect)((function(){setConstraints(Object.assign({},defaultConstraints,constraintsProps))}),[constraintsProps]);return useQrScanner_useQrScanner({constraints:constraints,scanDelay:scanDelay,onResult:function handleOnResult(result,codeReader){onResult&&onResult(result,codeReader),onDecode&&onDecode(result.getText()),setScanCount((function(count){return count+1}))},onError:function handleOnError(error,codeReader){onError&&onError(error,codeReader)},videoId:videoId}),Object(jsx_runtime.jsxs)("div",{style:Object.assign({},QrScanner_styles_container,containerStyle),children:[ViewFinder?Object(jsx_runtime.jsx)(ViewFinder,{}):Object(jsx_runtime.jsx)(Finder_Finder,{scanCount:scanCount,hideCount:hideCount,border:viewFinderBorder}),Object(jsx_runtime.jsx)("video",{muted:!0,id:videoId,style:Object.assign({},QrScanner_styles_video,videoStyle,{transform:"user"===(null==constraints?void 0:constraints.facingMode)&&"scaleX(-1)"})})]})};QrScanner_QrScanner.displayName="QrScanner";var components_QrScanner=QrScanner_QrScanner;try{QrScanner_QrScanner.displayName="QrScanner",QrScanner_QrScanner.__docgenInfo={description:"",displayName:"QrScanner",props:{containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"any"}},videoStyle:{defaultValue:null,description:"",name:"videoStyle",required:!1,type:{name:"any"}},scanDelay:{defaultValue:null,description:"",name:"scanDelay",required:!1,type:{name:"number"}},videoId:{defaultValue:null,description:"",name:"videoId",required:!1,type:{name:"string"}},constraints:{defaultValue:null,description:"",name:"constraints",required:!1,type:{name:"MediaTrackConstraints"}},onResult:{defaultValue:null,description:"",name:"onResult",required:!1,type:{name:"OnResultFunction"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"OnErrorFunction"}},onDecode:{defaultValue:null,description:"",name:"onDecode",required:!1,type:{name:"((result: string) => void)"}},viewFinder:{defaultValue:null,description:"",name:"viewFinder",required:!1,type:{name:"((props: any) => ReactElement<any, string | JSXElementConstructor<any>> | null)"}},hideCount:{defaultValue:null,description:"",name:"hideCount",required:!1,type:{name:"boolean"}},viewFinderBorder:{defaultValue:null,description:"",name:"viewFinderBorder",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QrScanner.tsx#QrScanner"]={docgenInfo:QrScanner_QrScanner.__docgenInfo,name:"QrScanner",path:"src/components/QrScanner.tsx#QrScanner"})}catch(__react_docgen_typescript_loader_error){}var QrScanner_stories_styles={container:{width:400,margin:"auto"}},QrScanner_stories_Template=function Template(args){return Object(jsx_runtime.jsx)("div",{style:QrScanner_stories_styles.container,children:Object(jsx_runtime.jsx)(components_QrScanner,Object.assign({},args,{onResult:function onResult(result){Object(esm.action)("onResult")(result)},onDecode:function onDecode(result){Object(esm.action)("onDecode")(result)},onError:function onError(error){Object(esm.action)("onError")(null==error?void 0:error.message)}}))})};QrScanner_stories_Template.displayName="Template";var ScanCode=QrScanner_stories_Template.bind({});ScanCode.args={scanDelay:100,constraints:{facingMode:"environment"}};__webpack_exports__.default={title:"QR Scanner",component:components_QrScanner};ScanCode.parameters=Object.assign({storySource:{source:"(args) => {\n    return (\n        <div style={styles.container}>\n            <QrScanner\n                {...args}\n                onResult={(result) => {\n                    action('onResult')(result);\n                }}\n                onDecode={(result) => {\n                    action('onDecode')(result);\n                }}\n                onError={(error) => {\n                    action('onError')(error?.message);\n                }}\n            />\n        </div>\n    );\n}"}},ScanCode.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);