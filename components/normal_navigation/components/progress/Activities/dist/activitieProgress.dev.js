"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=ActivitieProgress;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _title=_interopRequireDefault(require("../../../../general_components/titles/title2"));var _bold=_interopRequireDefault(require("../../../../general_components/titles/bold"));var _generalContainer=_interopRequireDefault(require("../../../../general_components/generalContainer"));var _title2=_interopRequireDefault(require("../../../../general_components/titles/title5"));var _palleteColors=_interopRequireDefault(require("../../../../general_components/palleteColors"));var _formik=require("formik");var _FormButton=_interopRequireDefault(require("../../../../general_components/forms/FormButton"));var _form=_interopRequireDefault(require("../../../../general_components/form"));var Yup=_interopRequireWildcard(require("yup"));var _datetimepicker=_interopRequireDefault(require("@react-native-community/datetimepicker"));var _formDateTimePicker=_interopRequireDefault(require("../../../../general_components/forms/input_types/formDateTimePicker"));var _useApiCallback=_interopRequireDefault(require("../../../../../customHooks/useApiCallback"));var _apiGeneralHistory=_interopRequireDefault(require("../../../../../api/apiGeneralHistory"));var _native=require("@react-navigation/native");var _titleError=_interopRequireDefault(require("../../../../general_components/titles/titleError"));var _eventingBus=_interopRequireDefault(require("eventing-bus"));var _events=require("../../../../../events/events");var _useApi=_interopRequireDefault(require("../../../../../customHooks/useApi"));var _loading=_interopRequireDefault(require("../../../../general_components/loading"));var _reactNativeReanimated=require("react-native-reanimated");var _jsxFileName="/home/pepe/Escritorio/beyl/beyl_mobile_app/components/normal_navigation/components/progress/Activities/activitieProgress.js";var validationSchema=Yup.object().shape({date:Yup.string().label("date").required(),time:Yup.string().label("time").required(),name:Yup.string(),has_distance:Yup["boolean"](),distanance:Yup.number()});function ActivitieProgress(props){var navigation=(0,_native.useNavigation)();var data=props.route.params;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),loading=_useState2[0],setLoading=_useState2[1];var post_general_history=(0,_useApiCallback["default"])(_apiGeneralHistory["default"].postHistory,function(data){_eventingBus["default"].publish(_events.ADDED_ACTIVITIE,data);navigation.navigate("Home");});var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2["default"])(_useState3,2),error=_useState4[0],setError=_useState4[1];var sendInformation=function sendInformation(_ref){var date,time,name,has_distance,distance;return _regenerator["default"].async(function sendInformation$(_context){while(1){switch(_context.prev=_context.next){case 0:date=_ref.date,time=_ref.time,name=_ref.name,has_distance=_ref.has_distance,distance=_ref.distance;setLoading(true);_context.next=4;return _regenerator["default"].awrap(post_general_history.request(date,time,name,has_distance,distance));case 4:case"end":return _context.stop();}}});};return _react["default"].createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:57,columnNumber:5}},_react["default"].createElement(_reactNative.View,{style:{alignItems:"center",width:"100%",backgroundColor:_palleteColors["default"].backgroundSecondary,padding:20},__source:{fileName:_jsxFileName,lineNumber:59,columnNumber:9}},_react["default"].createElement(_title["default"],{__source:{fileName:_jsxFileName,lineNumber:60,columnNumber:13}},_react["default"].createElement(_bold["default"],{__source:{fileName:_jsxFileName,lineNumber:60,columnNumber:21}},data.name)),_react["default"].createElement(_reactNative.Text,{style:{fontSize:70,marginTop:10},__source:{fileName:_jsxFileName,lineNumber:61,columnNumber:13}},data.emoji)),_react["default"].createElement(_generalContainer["default"],{__source:{fileName:_jsxFileName,lineNumber:64,columnNumber:5}},_react["default"].createElement(_title2["default"],{__source:{fileName:_jsxFileName,lineNumber:65,columnNumber:9}},"\xBFComo te ha ido?"),_react["default"].createElement(_form["default"],{__source:{fileName:_jsxFileName,lineNumber:66,columnNumber:9}},_react["default"].createElement(_formik.Formik,{initialValues:{date:'',time:'',name:data.emoji+" "+data.name,has_distance:false,distance:0},onSubmit:function onSubmit(values){return sendInformation(values);},validationSchema:validationSchema,__source:{fileName:_jsxFileName,lineNumber:68,columnNumber:17}},function(_ref2){var handleSubmit=_ref2.handleSubmit;return _react["default"].createElement(_form["default"],{style:{marginTop:20},__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:33}},_react["default"].createElement(_formDateTimePicker["default"],{name:"date",placeholder:"Fecha",mode:"date",first:true,__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:37}}),_react["default"].createElement(_formDateTimePicker["default"],{name:"time",placeholder:"Time",mode:"time",__source:{fileName:_jsxFileName,lineNumber:77,columnNumber:37}}),_react["default"].createElement(_titleError["default"],{error:"Ha ocurrido un error",visible:post_general_history.error,__source:{fileName:_jsxFileName,lineNumber:78,columnNumber:37}}),_react["default"].createElement(_FormButton["default"],{placeholder:"Registrar",loading:loading,onPress:handleSubmit,__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:37}}));}))));}