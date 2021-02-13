"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=App;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _expoFont=require("expo-font");var _tabNavigation=_interopRequireDefault(require("./components/normal_navigation/tabNavigation"));var _native=require("@react-navigation/native");var _loginNavigation=_interopRequireDefault(require("./components/login_navigation/loginNavigation"));var _context2=_interopRequireDefault(require("./auth/context"));var _storage=_interopRequireDefault(require("./auth/storage"));var _expo=require("expo");var _apiProfile=_interopRequireDefault(require("./api/apiProfile"));var _profileContext=_interopRequireDefault(require("./auth/profileContext"));var _palleteColors=_interopRequireDefault(require("./components/general_components/palleteColors"));var _expoStatusBar=require("expo-status-bar");var _jsxFileName="/home/pepe/Escritorio/beylapp/App.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function App(){var _useState=(0,_react.useState)(),_useState2=(0,_slicedToArray2["default"])(_useState,2),user=_useState2[0],setUser=_useState2[1];var _useState3=(0,_react.useState)(),_useState4=(0,_slicedToArray2["default"])(_useState3,2),profile=_useState4[0],setProfile=_useState4[1];var _useState5=(0,_react.useState)(true),_useState6=(0,_slicedToArray2["default"])(_useState5,2),loading=_useState6[0],setLoading=_useState6[1];var _useFonts=(0,_expoFont.useFonts)({'poppins-regular':require("./assets/fonts/Poppins-Regular.ttf"),'poppins-bold':require("./assets/fonts/Poppins-SemiBold.ttf"),'poppins-black':require("./assets/fonts/Poppins-Bold.ttf")}),_useFonts2=(0,_slicedToArray2["default"])(_useFonts,1),fontsLoaded=_useFonts2[0];var restoreUser=function restoreUser(){var user;return _regenerator["default"].async(function restoreUser$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator["default"].awrap(_storage["default"].getUser());case 2:user=_context.sent;console.log(user);if(user)setUser(user);case 5:case"end":return _context.stop();}}});};if(!fontsLoaded){return null;}var MyTheme=_objectSpread({},_native.DefaultTheme,{colors:_objectSpread({},_native.DefaultTheme.colors,{background:!user?_palleteColors["default"].background:_palleteColors["default"].backgroundSecondary})});if(loading)return _react["default"].createElement(_expo.AppLoading,{startAsync:restoreUser,onFinish:function onFinish(){return setLoading(false);},__source:{fileName:_jsxFileName,lineNumber:52,columnNumber:12}});return _react["default"].createElement(_profileContext["default"].Provider,{value:{profile:profile,setProfile:setProfile},__source:{fileName:_jsxFileName,lineNumber:56,columnNumber:5}},_react["default"].createElement(_expoStatusBar.StatusBar,{backgroundColor:_palleteColors["default"].background,style:"light",__source:{fileName:_jsxFileName,lineNumber:57,columnNumber:7}}),_react["default"].createElement(_context2["default"].Provider,{value:{user:user,setUser:setUser},__source:{fileName:_jsxFileName,lineNumber:58,columnNumber:7}},_react["default"].createElement(_native.NavigationContainer,{theme:MyTheme,__source:{fileName:_jsxFileName,lineNumber:60,columnNumber:9}},user?_react["default"].createElement(_tabNavigation["default"],{__source:{fileName:_jsxFileName,lineNumber:66,columnNumber:11}}):_react["default"].createElement(_loginNavigation["default"],{__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:11}}))));}var styles=_reactNative.StyleSheet.create({container:{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}});