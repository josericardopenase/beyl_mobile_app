"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Rutine;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _picker=require("@react-native-community/picker");var _apiClientRutine=_interopRequireDefault(require("../../../../api/apiClientRutine"));var _useApiCallback=_interopRequireDefault(require("../../../../customHooks/useApiCallback"));var _generalContainer=_interopRequireDefault(require("../../../general_components/generalContainer"));var _palleteColors=_interopRequireDefault(require("../../../general_components/palleteColors"));var _title=_interopRequireDefault(require("../../../general_components/title"));var _excersise=_interopRequireDefault(require("./rutine/excersise"));var _excersiseGroup=_interopRequireDefault(require("./rutine/excersiseGroup"));var _loading=_interopRequireDefault(require("../../../general_components/loading"));var _errorApi=_interopRequireDefault(require("../../../general_components/error_handling/errorApi"));var Notifications=_interopRequireWildcard(require("expo-notifications"));var _jsxFileName="/home/pepe/Escritorio/beyl/beyl_mobile_app/components/normal_navigation/components/training/rutine.js";function Rutine(){var rutine=(0,_useApiCallback["default"])(_apiClientRutine["default"].getRutine,function(data){if(data.rutine_days!==undefined)if(data.rutine_days.length>0)if(data.rutine_days[0]!==undefined)return setDay(data.rutine_days[0].id);setDay(undefined);});var dayData=(0,_useApiCallback["default"])(_apiClientRutine["default"].getRutineDay,function(data){setRefreshing(false);});var _useState=(0,_react.useState)(),_useState2=(0,_slicedToArray2["default"])(_useState,2),day=_useState2[0],setDay=_useState2[1];var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2["default"])(_useState3,2),refreshing=_useState4[0],setRefreshing=_useState4[1];var notificationListener=(0,_react.useRef)();var reloadRutine=function reloadRutine(){rutine.request();if(day!=undefined){dayData.request(day);}};(0,_react.useEffect)(function(){notificationListener.current=Notifications.addNotificationReceivedListener(function(notification){var data=notification.request.content.data;if(data){if(data.action==='reloadRutine'){rutine.request();if(day!=undefined){dayData.request(day);}}}});rutine.request();},[]);(0,_react.useEffect)(function(){if(day!=undefined){dayData.request(day);}},[day]);var onRefresh=function onRefresh(){setRefreshing(true);rutine.request();if(day!=undefined){dayData.request(day);}};if(rutine.error||day===undefined){if(rutine.error)return _react["default"].createElement(_errorApi["default"],{loading:rutine.loading||dayData.loading,onPress:function onPress(){return reloadRutine();},error:rutine.data.detail,__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:28}});else return _react["default"].createElement(_errorApi["default"],{loading:rutine.loading||dayData.loading,onPress:function onPress(){return reloadRutine();},error:'Tu rutina no está disponible, espera que tu entrenador la termine',__source:{fileName:_jsxFileName,lineNumber:86,columnNumber:15}});}if(!rutine.loading&&!dayData.loading){return _react["default"].createElement(_generalContainer["default"],{style:{marginBottom:70},__source:{fileName:_jsxFileName,lineNumber:91,columnNumber:5}},dayData.loading?null:dayData.data.rutine_groups?_react["default"].createElement(_reactNative.FlatList,{ListHeaderComponent:_react["default"].createElement(_reactNative.View,{style:{backgroundColor:_palleteColors["default"].mainColor,color:'white',borderRadius:10,marginTop:15},__source:{fileName:_jsxFileName,lineNumber:101,columnNumber:8}},_react["default"].createElement(_picker.Picker,{style:{color:'white',fontFamily:'poppins-regular'},selectedValue:day,onValueChange:function onValueChange(itemValue,itemIndex){return setDay(itemValue);},__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:9}},rutine.data.rutine_days.map(function(obj){return _react["default"].createElement(_picker.Picker.Item,{key:obj.id,label:obj.name,value:obj.id,__source:{fileName:_jsxFileName,lineNumber:115,columnNumber:11}});}))),data:dayData.data.rutine_groups,renderItem:function renderItem(_ref){var item=_ref.item;return _react["default"].createElement(_excersiseGroup["default"],{obj:item,__source:{fileName:_jsxFileName,lineNumber:121,columnNumber:30}});},keyExtractor:function keyExtractor(item){return item.id;},refreshControl:_react["default"].createElement(_reactNative.RefreshControl,{refreshing:refreshing,onRefresh:onRefresh,__source:{fileName:_jsxFileName,lineNumber:123,columnNumber:23}}),refreshing:refreshing,onRefresh:onRefresh,showsVerticalScrollIndicator:false,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:6}}):null);}else{return _react["default"].createElement(_loading["default"],{__source:{fileName:_jsxFileName,lineNumber:136,columnNumber:10}});}}