"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Article;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _title=_interopRequireDefault(require("../../../../general_components/titles/title2"));var _title2=_interopRequireDefault(require("../../../../general_components/titles/title5"));var _bold=_interopRequireDefault(require("../../../../general_components/titles/bold"));var _palleteColors=_interopRequireDefault(require("../../../../general_components/palleteColors"));var _Ionicons=_interopRequireDefault(require("@expo/vector-icons/Ionicons"));var _MaterialCommunityIcons=_interopRequireDefault(require("@expo/vector-icons/MaterialCommunityIcons"));var _reactNativeGestureHandler=require("react-native-gesture-handler");var _native=require("@react-navigation/native");var _jsxFileName="/home/pepe/Escritorio/beyl/beyl_mobile_app/components/normal_navigation/components/home/Components/Article.js";function Article(_ref){var obj=_ref.obj;var navigation=(0,_native.useNavigation)();return _react["default"].createElement(_reactNativeGestureHandler.TouchableOpacity,{style:styles.container,onPress:function onPress(){return navigation.navigate('Article',{obj:obj});},__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:9}},_react["default"].createElement(_reactNative.Image,{style:styles.image,source:{uri:obj.image},__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:13}}),_react["default"].createElement(_title["default"],{__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:13}},_react["default"].createElement(_bold["default"],{__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:21}},obj.title)),_react["default"].createElement(_reactNative.View,{style:{flexDirection:"row",marginTop:10,alignItems:"center"},__source:{fileName:_jsxFileName,lineNumber:25,columnNumber:13}},_react["default"].createElement(_MaterialCommunityIcons["default"],{name:"calendar",style:{color:_palleteColors["default"].mainColor,marginRight:10},size:25,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:17}}),_react["default"].createElement(_title2["default"],{__source:{fileName:_jsxFileName,lineNumber:27,columnNumber:17}},obj.created.slice(0,10))));}var styles=_reactNative.StyleSheet.create({container:{padding:15,backgroundColor:_palleteColors["default"].background,borderRadius:15,marginTop:20},image:{width:"100%",height:300,borderRadius:10,marginBottom:10}});