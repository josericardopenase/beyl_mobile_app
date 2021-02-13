"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Diet;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _picker=require("@react-native-community/picker");var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeGestureHandler=require("react-native-gesture-handler");var _apiClientDiet=_interopRequireDefault(require("../../../../api/apiClientDiet"));var _useApi=_interopRequireDefault(require("../../../../customHooks/useApi"));var _useApiCallback=_interopRequireDefault(require("../../../../customHooks/useApiCallback"));var _errorApi=_interopRequireDefault(require("../../../general_components/error_handling/errorApi"));var _generalContainer=_interopRequireDefault(require("../../../general_components/generalContainer"));var _loading=_interopRequireDefault(require("../../../general_components/loading"));var _palleteColors=_interopRequireDefault(require("../../../general_components/palleteColors"));var _launch=_interopRequireDefault(require("./diet/launch"));var _jsxFileName="/home/pepe/Escritorio/beylapp/components/normal_navigation/components/training/diet.js";function Diet(){var _React$createElement;var diet=(0,_useApiCallback["default"])(_apiClientDiet["default"].getDiet,function(data){setDay(data.diet_days[0].id);});var dayData=(0,_useApiCallback["default"])(_apiClientDiet["default"].getDietDay,function(data){return setRefreshing(false);});var _useState=(0,_react.useState)(),_useState2=(0,_slicedToArray2["default"])(_useState,2),day=_useState2[0],setDay=_useState2[1];var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2["default"])(_useState3,2),refreshing=_useState4[0],setRefreshing=_useState4[1];(0,_react.useEffect)(function(){diet.request();},[]);(0,_react.useEffect)(function(){if(day!=undefined){dayData.request(day);}},[day]);var onRefresh=function onRefresh(){setRefreshing(true);if(day!=undefined){dayData.request(day);}};if(diet.error||day===undefined){return _react["default"].createElement(_errorApi["default"],{error:"Tu dieta no esta disponible espera que tu entrenador la termine",__source:{fileName:_jsxFileName,lineNumber:41,columnNumber:20}});}if(diet.loading|dayData.loading){return _react["default"].createElement(_loading["default"],{__source:{fileName:_jsxFileName,lineNumber:45,columnNumber:16}});}console.log(day);return _react["default"].createElement(_reactNativeGestureHandler.ScrollView,(_React$createElement={showsVerticalScrollIndicator:false},(0,_defineProperty2["default"])(_React$createElement,"showsVerticalScrollIndicator",false),(0,_defineProperty2["default"])(_React$createElement,"refreshControl",_react["default"].createElement(_reactNative.RefreshControl,{refreshing:refreshing,onRefresh:onRefresh,__source:{fileName:_jsxFileName,lineNumber:52,columnNumber:111}})),(0,_defineProperty2["default"])(_React$createElement,"__source",{fileName:_jsxFileName,lineNumber:52,columnNumber:9}),_React$createElement),_react["default"].createElement(_generalContainer["default"],{style:{marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:54,columnNumber:13}},_react["default"].createElement(_reactNative.View,{style:{backgroundColor:_palleteColors["default"].mainColor,color:"white",borderRadius:10,marginTop:15},__source:{fileName:_jsxFileName,lineNumber:56,columnNumber:17}},_react["default"].createElement(_picker.Picker,{style:{color:"white",fontFamily:"poppins-regular"},selectedValue:day,onValueChange:function onValueChange(itemValue,itemIndex){return setDay(itemValue);},__source:{fileName:_jsxFileName,lineNumber:57,columnNumber:21}},diet.data.diet_days.map(function(obj){return _react["default"].createElement(_picker.Picker.Item,{label:obj.name,value:obj.id,key:obj.id,__source:{fileName:_jsxFileName,lineNumber:60,columnNumber:61}});}))),dayData.data.diet_groups.map(function(obj){return _react["default"].createElement(_launch["default"],{obj:obj,key:obj.id,__source:{fileName:_jsxFileName,lineNumber:67,columnNumber:58}});})));}