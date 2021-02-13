"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Input;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _reactNativeGestureHandler=require("react-native-gesture-handler");var _palleteColors=_interopRequireDefault(require("../palleteColors"));var _vectorIcons=require("@expo/vector-icons");var _jsxFileName="/home/pepe/Escritorio/beylapp/components/general_components/forms/FormInput.js";function Input(_ref){var placeholder=_ref.placeholder,icon=_ref.icon,secureTextEntry=_ref.secureTextEntry,otherProps=(0,_objectWithoutProperties2["default"])(_ref,["placeholder","icon","secureTextEntry"]);return _react["default"].createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:9,columnNumber:9}},icon&&_react["default"].createElement(_vectorIcons.MaterialCommunityIcons,{style:styles.icon,name:icon,size:20,color:_palleteColors["default"].textSecondaryColor,__source:{fileName:_jsxFileName,lineNumber:10,columnNumber:24}}),_react["default"].createElement(_reactNativeGestureHandler.TextInput,(0,_extends2["default"])({style:styles.textInput,placeholderTextColor:_palleteColors["default"].textPrimaryColor,placeholder:placeholder,secureTextEntry:secureTextEntry},otherProps,{__source:{fileName:_jsxFileName,lineNumber:11,columnNumber:13}})));}var styles=_reactNative.StyleSheet.create({container:{width:"100%",backgroundColor:_palleteColors["default"].backgroundSecondary,padding:12,borderRadius:10,fontFamily:"poppins-regular",marginTop:12,flexDirection:"row",alignItems:"center"},icon:{marginRight:8},textInput:{fontSize:14,fontFamily:"poppins-regular",width:"100%",color:_palleteColors["default"].textPrimaryColor,paddingRight:30}});