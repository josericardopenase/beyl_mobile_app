"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=ProfileDetailInfo;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _apiProfile=_interopRequireDefault(require("../../../../../api/apiProfile"));var _useApiCallback=_interopRequireDefault(require("../../../../../customHooks/useApiCallback"));var _boxContainer=_interopRequireDefault(require("../../../../general_components/containers/boxContainer"));var _loading=_interopRequireDefault(require("../../../../general_components/loading"));var _bold=_interopRequireDefault(require("../../../../general_components/titles/bold"));var _title=_interopRequireDefault(require("../../../../general_components/titles/title3"));var _profileInformationComponent=_interopRequireDefault(require("./profileInformationComponent"));var _eventingBus=_interopRequireDefault(require("eventing-bus"));var _events=require("../../../../../events/events");var _trainerInformation=_interopRequireDefault(require("./trainerInformation"));var _native=require("@react-navigation/native");var _reactNativeGestureHandler=require("react-native-gesture-handler");var _formik=require("formik");var _jsxFileName="/home/pepe/Escritorio/beyl/beyl_mobile_app/components/normal_navigation/components/profile/components/profileDetailInfo.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function ProfileDetailInfo(){var _useState=(0,_react.useState)(null),_useState2=(0,_slicedToArray2["default"])(_useState,2),information=_useState2[0],setInformation=_useState2[1];var getInformation=(0,_useApiCallback["default"])(_apiProfile["default"].getProfileAthlete,function(data){setInformation(data);});var navigation=(0,_native.useNavigation)();_eventingBus["default"].on(_events.WEIGHT_MODIFIED,function(data){return setInformation(_objectSpread({},information,{weight:data}));});_eventingBus["default"].on(_events.ADDED_TRAINER,function(data){return getInformation.loading?null:getInformation.request();});(0,_react.useEffect)(function(){getInformation.request();return function(){_eventingBus["default"].unregisterAllCallbacks();};},[]);if(getInformation.loading){return _react["default"].createElement(_loading["default"],{__source:{fileName:_jsxFileName,lineNumber:38,columnNumber:16}});}function getActivityLevel(activitie){switch(activitie){case'ne':return"ninguna";case'el':return"poca";case'em':return"media";case'ef':return"alta";case'emf':return"muy alta";}}return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(_boxContainer["default"],{title:"Tu entrenador:",__source:{fileName:_jsxFileName,lineNumber:62,columnNumber:13}},getInformation.data.trainer?_react["default"].createElement(_trainerInformation["default"],{trainer:getInformation.data.trainer.user,__source:{fileName:_jsxFileName,lineNumber:65,columnNumber:21}}):_react["default"].createElement(_trainerInformation["default"],{trainer:null,__source:{fileName:_jsxFileName,lineNumber:67,columnNumber:21}})),_react["default"].createElement(_boxContainer["default"],{title:"Tus datos actuales:",__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:13}},_react["default"].createElement(_reactNative.View,{style:(0,_defineProperty2["default"])({flexDirection:"row",marginTop:10,justifyContent:"space-between",width:"100%"},"justifyContent","space-between"),__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:17}},_react["default"].createElement(_profileInformationComponent["default"],{icon:"weight-kilogram",data:Math.floor(information.weight*10)/10+" kg",title:"peso",onPress:function onPress(){return navigation.push("Progress");},__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:21}}),_react["default"].createElement(_profileInformationComponent["default"],{icon:"human-male-height",data:information.height+" m",title:"altura",__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:21}}),_react["default"].createElement(_profileInformationComponent["default"],{icon:"soccer",data:getActivityLevel(information.amount_excersise),title:"Actividad fisica",__source:{fileName:_jsxFileName,lineNumber:77,columnNumber:21}}))));}