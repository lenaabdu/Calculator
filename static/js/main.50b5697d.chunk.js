(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_hp_Desktop_New_folder_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_hp_Desktop_New_folder_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_hp_Desktop_New_folder_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_hp_Desktop_New_folder_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_Result__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_KeyPad__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),App=function(_React$Component){Object(C_Users_hp_Desktop_New_folder_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_React$Component);var _super=Object(C_Users_hp_Desktop_New_folder_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;return Object(C_Users_hp_Desktop_New_folder_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){var checkResult="";checkResult=_this.state.result.includes("--")?_this.state.result.replace("--","+"):_this.state.result;try{_this.setState({result:(eval(checkResult)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(C_Users_hp_Desktop_New_folder_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",{className:"calculator"}," Calculator App "),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_KeyPad__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.onClick}))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=App},function(e,t,_){"use strict";var a=_(1),n=_(2),r=_(4),c=_(3),l=_(0),o=_.n(l),s=function(e){Object(r.a)(_,e);var t=Object(c.a)(_);function _(){return Object(a.a)(this,_),t.apply(this,arguments)}return Object(n.a)(_,[{key:"render",value:function(){var e=this.props.result;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"result"},o.a.createElement("p",null," ",e," ")))}}]),_}(o.a.Component);t.a=s},function(e,t,_){"use strict";var a=_(1),n=_(2),r=_(4),c=_(3),l=_(0),o=_.n(l),s=function(e){Object(r.a)(_,e);var t=Object(c.a)(_);function _(){return Object(a.a)(this,_),t.apply(this,arguments)}return Object(n.a)(_,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"button"},o.a.createElement("button",{name:"(",onClick:function(t){return e.props.onClick(t.target.name)}}," ( "),o.a.createElement("button",{name:"CE",onClick:function(t){return e.props.onClick(t.target.name)}}," CE "),o.a.createElement("button",{name:")",onClick:function(t){return e.props.onClick(t.target.name)}}," ) "),o.a.createElement("button",{className:"buttoncol",name:"C",onClick:function(t){return e.props.onClick(t.target.name)}}," C "),o.a.createElement("br",null),o.a.createElement("button",{name:"1",onClick:function(t){return e.props.onClick(t.target.name)}}," 1 "),o.a.createElement("button",{name:"2",onClick:function(t){return e.props.onClick(t.target.name)}}," 2 "),o.a.createElement("button",{name:"3",onClick:function(t){return e.props.onClick(t.target.name)}}," 3 "),o.a.createElement("button",{className:"buttoncol",name:"+",onClick:function(t){return e.props.onClick(t.target.name)}}," + "),o.a.createElement("br",null),o.a.createElement("button",{name:"4",onClick:function(t){return e.props.onClick(t.target.name)}}," 4 "),o.a.createElement("button",{name:"5",onClick:function(t){return e.props.onClick(t.target.name)}}," 5 "),o.a.createElement("button",{name:"6",onClick:function(t){return e.props.onClick(t.target.name)}}," 6 "),o.a.createElement("button",{className:"buttoncol",name:"-",onClick:function(t){return e.props.onClick(t.target.name)}}," - "),o.a.createElement("br",null),o.a.createElement("button",{name:"7",onClick:function(t){return e.props.onClick(t.target.name)}}," 7 "),o.a.createElement("button",{name:"8",onClick:function(t){return e.props.onClick(t.target.name)}}," 8 "),o.a.createElement("button",{name:"9",onClick:function(t){return e.props.onClick(t.target.name)}}," 9 "),o.a.createElement("button",{className:"buttoncol",name:"*",onClick:function(t){return e.props.onClick(t.target.name)}}," x "),o.a.createElement("br",null),o.a.createElement("button",{name:".",onClick:function(t){return e.props.onClick(t.target.name)}}," . "),o.a.createElement("button",{name:"0",onClick:function(t){return e.props.onClick(t.target.name)}}," 0 "),o.a.createElement("button",{name:"=",onClick:function(t){return e.props.onClick(t.target.name)}},"= "),o.a.createElement("button",{className:"buttoncol",name:"/",onClick:function(t){return e.props.onClick(t.target.name)}}," \xf7 "),o.a.createElement("br",null)))}}]),_}(o.a.Component);t.a=s},function(e,t,_){e.exports=_(17)},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var a=_(0),n=_.n(a),r=_(6),c=_.n(r),l=(_(15),_(7));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.50b5697d.chunk.js.map