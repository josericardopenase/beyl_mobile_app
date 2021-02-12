"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Home;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _reactNativeGestureHandler=require("react-native-gesture-handler");var _useAuth=_interopRequireDefault(require("../../../../auth/useAuth"));var _generalContainer=_interopRequireDefault(require("../../../general_components/generalContainer"));var _title=_interopRequireDefault(require("../../../general_components/title"));var _progressBox=_interopRequireDefault(require("../progress/history/progressBox"));var _progressDateBox=_interopRequireDefault(require("../progress/history/progressDateBox"));var _progressSnippet=_interopRequireDefault(require("../progress/progressSnippet"));var _Article=_interopRequireDefault(require("./Components/Article"));var _ArticleList=_interopRequireDefault(require("./Components/ArticleList"));var _jsxFileName="/home/pepe/Escritorio/beylapp/components/normal_navigation/components/home/home.js";function Home(){return _react["default"].createElement(_reactNative.View,{style:{paddingLeft:10,paddingRight:10,paddingBottom:60},__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:9}},_react["default"].createElement(_reactNativeGestureHandler.ScrollView,{showsVerticalScrollIndicator:false,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:13}},_react["default"].createElement(_title["default"],{title:["Bienvenido, ","denuevo"+" 👋"],__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:17}}),_react["default"].createElement(_progressSnippet["default"],{__source:{fileName:_jsxFileName,lineNumber:20,columnNumber:17}}),_react["default"].createElement(_ArticleList["default"],{__source:{fileName:_jsxFileName,lineNumber:21,columnNumber:17}})));}