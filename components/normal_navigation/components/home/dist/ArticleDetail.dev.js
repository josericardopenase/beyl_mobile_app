"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=ArticleDetail;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _reactNativeGestureHandler=require("react-native-gesture-handler");var _generalContainer=_interopRequireDefault(require("../../../general_components/generalContainer"));var _palleteColors=_interopRequireDefault(require("../../../general_components/palleteColors"));var _bold=_interopRequireDefault(require("../../../general_components/titles/bold"));var _title=_interopRequireDefault(require("../../../general_components/titles/title2"));var _title2=_interopRequireDefault(require("../../../general_components/titles/title5"));var _reactNativeHtmlview=_interopRequireDefault(require("react-native-htmlview"));var _title3=_interopRequireDefault(require("../../../general_components/titles/title3"));var _jsxFileName="/home/pepe/Escritorio/beyl/beyl_mobile_app/components/normal_navigation/components/home/ArticleDetail.js";function ArticleDetail(props){var obj=props.route.params.obj;return _react["default"].createElement(_generalContainer["default"],{__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:9}},_react["default"].createElement(_reactNativeGestureHandler.ScrollView,{showsVerticalScrollIndicator:false,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:13}},_react["default"].createElement(_title["default"],{__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:17}},_react["default"].createElement(_bold["default"],{__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:25}},obj.title)),_react["default"].createElement(_reactNative.Image,{style:styles.image,source:{uri:obj.image},__source:{fileName:_jsxFileName,lineNumber:20,columnNumber:17}}),_react["default"].createElement(_title3["default"],{__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:17}},"obj.texto")));}var styles=_reactNative.StyleSheet.create({container:{padding:15,backgroundColor:_palleteColors["default"].background,borderRadius:10,marginTop:20},image:{marginTop:20,width:"100%",height:200,borderRadius:10,marginBottom:20}});var htmlStyles=_reactNative.StyleSheet.create({p:{color:_palleteColors["default"].textSecondaryColor},img:{width:"100%",height:70}});