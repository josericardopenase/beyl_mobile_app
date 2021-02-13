"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Weight;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _generalContainer=_interopRequireDefault(require("../../../../general_components/generalContainer"));var _reactNativeGestureHandler=require("react-native-gesture-handler");var _FormButton=_interopRequireDefault(require("../../../../general_components/forms/FormButton"));var _Feather=_interopRequireDefault(require("@expo/vector-icons/Feather"));var _palleteColors=_interopRequireDefault(require("../../../../general_components/palleteColors"));var _title=_interopRequireDefault(require("../../../../general_components/titles/title2"));var _bold=_interopRequireDefault(require("../../../../general_components/titles/bold"));var _apiUpdateWeight=_interopRequireDefault(require("../../../../../api/apiUpdateWeight"));var _useApiCallback=_interopRequireDefault(require("../../../../../customHooks/useApiCallback"));var _loading=_interopRequireDefault(require("../../../../general_components/loading"));var _native=require("@react-navigation/native");var _eventingBus=_interopRequireDefault(require("eventing-bus"));var _events=require("../../../../../events/events");var _jsxFileName="/home/pepe/Escritorio/beylapp/components/normal_navigation/components/progress/Weight/weight.js";function Weight(){var navigation=(0,_native.useNavigation)();var _useState=(0,_react.useState)(70.0),_useState2=(0,_slicedToArray2["default"])(_useState,2),weight=_useState2[0],setWeight=_useState2[1];var _useState3=(0,_react.useState)(true),_useState4=(0,_slicedToArray2["default"])(_useState3,2),decimal=_useState4[0],setDecimal=_useState4[1];var _useState5=(0,_react.useState)(false),_useState6=(0,_slicedToArray2["default"])(_useState5,2),loading=_useState6[0],setLoading=_useState6[1];var get_weight=(0,_useApiCallback["default"])(_apiUpdateWeight["default"].getWeight,function(data){setWeight(parseFloat(data.weight));});var post_weight=(0,_useApiCallback["default"])(_apiUpdateWeight["default"].postWeight,function(data){return navigation.navigate('home');});(0,_react.useEffect)(function(){get_weight.request();},[]);var weightDecimals=Math.floor((weight-Math.floor(weight))*10);var timer=null;var decreaseWeight=function decreaseWeight(){setWeight(decimal?weight-0.1:weight-1);};function increaseWeight(){setWeight(decimal?weight+0.1:weight+1);}function updateWeight(){return _regenerator["default"].async(function updateWeight$(_context){while(1){switch(_context.prev=_context.next){case 0:setLoading(true);_context.next=3;return _regenerator["default"].awrap(post_weight.request(weight));case 3:setLoading(false);_eventingBus["default"].publish(_events.WEIGHT_MODIFIED,weight);case 5:case"end":return _context.stop();}}});}if(get_weight.loading||loading)return _react["default"].createElement(_loading["default"],{__source:{fileName:_jsxFileName,lineNumber:58,columnNumber:16}});return _react["default"].createElement(_generalContainer["default"],{__source:{fileName:_jsxFileName,lineNumber:61,columnNumber:9}},_react["default"].createElement(_reactNative.View,{style:{justifyContent:"center",marginTop:70,alignItems:"center"},__source:{fileName:_jsxFileName,lineNumber:62,columnNumber:13}},_react["default"].createElement(_title["default"],{__source:{fileName:_jsxFileName,lineNumber:64,columnNumber:17}},_react["default"].createElement(_bold["default"],{__source:{fileName:_jsxFileName,lineNumber:64,columnNumber:25}},"\xBFCu\xE1nto pesas hoy?")),_react["default"].createElement(_reactNative.View,{style:{width:"100%",alignItems:"center",flexDirection:"row",justifyContent:"center",marginTop:30,marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:65,columnNumber:17}},_react["default"].createElement(_reactNativeGestureHandler.TouchableOpacity,{style:style.iconButton,onPressIn:function onPressIn(){return decreaseWeight();},__source:{fileName:_jsxFileName,lineNumber:66,columnNumber:21}},_react["default"].createElement(_Feather["default"],{name:"minus-circle",size:25,color:_palleteColors["default"].textSecondaryColor,__source:{fileName:_jsxFileName,lineNumber:67,columnNumber:25}})),_react["default"].createElement(_reactNativeGestureHandler.TouchableOpacity,{onPress:function onPress(){return setDecimal(false);},__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:21}},_react["default"].createElement(_reactNative.Text,{style:{fontSize:decimal?45:75,fontFamily:"poppins-regular",color:decimal?_palleteColors["default"].textSecondaryColor:_palleteColors["default"].textPrimaryColor},__source:{fileName:_jsxFileName,lineNumber:71,columnNumber:25}},Math.floor(weight))),_react["default"].createElement(_reactNativeGestureHandler.TouchableOpacity,{onPress:function onPress(){return setDecimal(true);},__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:21}},_react["default"].createElement(_reactNative.Text,{style:{fontSize:!decimal?45:75,fontFamily:"poppins-regular",color:!decimal?_palleteColors["default"].textSecondaryColor:_palleteColors["default"].textPrimaryColor},__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:25}},".",weightDecimals)),_react["default"].createElement(_reactNativeGestureHandler.TouchableOpacity,{style:style.iconButton,onPress:increaseWeight,__source:{fileName:_jsxFileName,lineNumber:78,columnNumber:21}},_react["default"].createElement(_Feather["default"],{name:"plus-circle",size:25,color:_palleteColors["default"].textSecondaryColor,__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:25}})))),_react["default"].createElement(_FormButton["default"],{placeholder:"Registrar",width:"70%",onPress:updateWeight,__source:{fileName:_jsxFileName,lineNumber:84,columnNumber:13}}));}var style=_reactNative.StyleSheet.create({iconButton:{margin:20}});