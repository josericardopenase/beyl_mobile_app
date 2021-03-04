"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=TrainerInformation;var _core=require("@material-ui/core");var _native=require("@react-navigation/native");var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _apiSettings=_interopRequireDefault(require("../../../../../api/apiSettings"));var _FormButton=_interopRequireDefault(require("../../../../general_components/forms/FormButton"));var _palleteColors=_interopRequireDefault(require("../../../../general_components/palleteColors"));var _profileImage=_interopRequireDefault(require("../../../../general_components/profileImage"));var _bold=_interopRequireDefault(require("../../../../general_components/titles/bold"));var _title=_interopRequireDefault(require("../../../../general_components/titles/title3"));var _jsxFileName="/home/pepe/Escritorio/beyl/beyl_mobile_app/components/normal_navigation/components/profile/components/trainerInformation.js";function TrainerInformation(_ref){var trainer=_ref.trainer;var navigation=(0,_native.useNavigation)();return _react["default"].createElement(_reactNative.View,{style:{backgroundColor:_palleteColors["default"].background,padding:10,borderRadius:10,flexDirection:"row",alignItems:"center"},__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:9}},trainer?_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(_profileImage["default"],{url:trainer.profile_pic,size:60,__source:{fileName:_jsxFileName,lineNumber:21,columnNumber:25}}),_react["default"].createElement(_title["default"],{style:{marginLeft:20},primary:true,__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:25}},_react["default"].createElement(_bold["default"],{__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:73}},trainer.first_name+" "+trainer.last_name))):_react["default"].createElement(_reactNative.View,{style:{alignItems:"center",width:"100%",padding:10},__source:{fileName:_jsxFileName,lineNumber:25,columnNumber:21}},_react["default"].createElement(_reactNative.View,{style:{flexDirection:"row"},__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:25}},_react["default"].createElement(_title["default"],{style:{marginLeft:0},primary:true,__source:{fileName:_jsxFileName,lineNumber:27,columnNumber:29}},_react["default"].createElement(_bold["default"],{__source:{fileName:_jsxFileName,lineNumber:27,columnNumber:76}},"No tienes")),_react["default"].createElement(_title["default"],{style:{marginLeft:5},color:_palleteColors["default"].mainColor,__source:{fileName:_jsxFileName,lineNumber:28,columnNumber:29}},_react["default"].createElement(_bold["default"],{__source:{fileName:_jsxFileName,lineNumber:28,columnNumber:93}},"entrenador"))),_react["default"].createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:25}},_react["default"].createElement(_FormButton["default"],{placeholder:"Agrega un entrenador",onPress:function onPress(){return navigation.navigate("JoinTrainer");},__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:29}}))));}