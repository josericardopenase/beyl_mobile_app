"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Recipe;var _native=require("@react-navigation/native");var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _reactNativeGestureHandler=require("react-native-gesture-handler");var _MaterialCommunityIcons=_interopRequireDefault(require("@expo/vector-icons/MaterialCommunityIcons"));var _apiSettings=_interopRequireDefault(require("../../../../../api/apiSettings"));var _palleteColors=_interopRequireDefault(require("../../../../general_components/palleteColors"));var _jsxFileName="/home/pepe/Escritorio/beylapp/components/normal_navigation/components/training/diet/recipe.js";function Recipe(_ref){var obj=_ref.obj;var nav=(0,_native.useNavigation)();return _react["default"].createElement(_reactNativeGestureHandler.TouchableOpacity,{onPress:function onPress(){return nav.navigate('RecipeDetail',{"recipe":obj.id});},__source:{fileName:_jsxFileName,lineNumber:14,columnNumber:9}},_react["default"].createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:13}},_react["default"].createElement(_reactNative.View,{style:{flexDirection:"row",alignItems:"center"},__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:17}},_react["default"].createElement(_reactNative.Image,{style:styles.image,source:{uri:_apiSettings["default"].url+obj.image},__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:21}}),_react["default"].createElement(_reactNative.Text,{style:{marginLeft:10,fontFamily:"poppins-regular",fontSize:15,color:_palleteColors["default"].textPrimaryColor},__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:21}},obj.name)),_react["default"].createElement(_MaterialCommunityIcons["default"],{name:"arrow-right",size:30,color:_palleteColors["default"].textPrimaryColor,__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:17}})));}var styles=_reactNative.StyleSheet.create({container:{flexDirection:"row",justifyContent:"space-between",padding:10,backgroundColor:_palleteColors["default"].background,borderRadius:10,alignItems:"center",marginTop:10},image:{width:50,height:50,borderRadius:10}});