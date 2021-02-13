"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Code;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _formik=require("formik");var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _form=_interopRequireDefault(require("../../general_components/form"));var _FormButton=_interopRequireDefault(require("../../general_components/forms/FormButton"));var _formCompleteInput=_interopRequireDefault(require("../../general_components/forms/input_types/formCompleteInput"));var _generalContainer=_interopRequireDefault(require("../../general_components/generalContainer"));var _bold=_interopRequireDefault(require("../../general_components/titles/bold"));var _title=_interopRequireDefault(require("../../general_components/titles/title1"));var Yup=_interopRequireWildcard(require("yup"));var _apiInvitationKey=_interopRequireDefault(require("../../../api/apiInvitationKey"));var _titleError=_interopRequireDefault(require("../../general_components/titles/titleError"));var _palleteColors=_interopRequireDefault(require("../../general_components/palleteColors"));var _title2=_interopRequireDefault(require("../../general_components/titles/title3"));var _title3=_interopRequireDefault(require("../../general_components/titles/title5"));var _apiSettings=_interopRequireDefault(require("../../../api/apiSettings"));var _native=require("@react-navigation/native");var _jsxFileName="/home/pepe/Escritorio/beylapp/components/login_navigation/Components/code.js";var validationSchema=Yup.object().shape({key:Yup.string().required("El código es necesario").min(8,"El código debe ser de 8 caracteres").max(8,"El código debe ser de 8 caracteres")});function Code(){var _useState=(0,_react.useState)(""),_useState2=(0,_slicedToArray2["default"])(_useState,2),error=_useState2[0],setError=_useState2[1];var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2["default"])(_useState3,2),failed=_useState4[0],setFailed=_useState4[1];var _useState5=(0,_react.useState)(false),_useState6=(0,_slicedToArray2["default"])(_useState5,2),modal=_useState6[0],setModal=_useState6[1];var _useState7=(0,_react.useState)(),_useState8=(0,_slicedToArray2["default"])(_useState7,2),information=_useState8[0],setInformation=_useState8[1];var navigation=(0,_native.useNavigation)();var handleSubmit=function handleSubmit(_ref){var key,result;return _regenerator["default"].async(function handleSubmit$(_context){while(1){switch(_context.prev=_context.next){case 0:key=_ref.key;_context.next=3;return _regenerator["default"].awrap(_apiInvitationKey["default"].validate(key));case 3:result=_context.sent;if(result.ok){_context.next=8;break;}setFailed(true);setError(result.data.detail);return _context.abrupt("return");case 8:setInformation(result.data);console.log(information);setError(false);setModal(true);case 12:case"end":return _context.stop();}}});};return _react["default"].createElement(_reactNative.View,{style:{padding:10,flex:1},__source:{fileName:_jsxFileName,lineNumber:48,columnNumber:9}},_react["default"].createElement(_title["default"],{__source:{fileName:_jsxFileName,lineNumber:49,columnNumber:21}},_react["default"].createElement(_bold["default"],{__source:{fileName:_jsxFileName,lineNumber:49,columnNumber:29}},"Introduce")," tu c\xF3digo de entrenador"),_react["default"].createElement(_reactNative.View,{style:{marginTop:60},__source:{fileName:_jsxFileName,lineNumber:50,columnNumber:21}},_react["default"].createElement(_formik.Formik,{initialValues:{key:''},onSubmit:function onSubmit(values){return handleSubmit(values);},validationSchema:validationSchema,__source:{fileName:_jsxFileName,lineNumber:51,columnNumber:21}},function(_ref2){var handleSubmit=_ref2.handleSubmit;return _react["default"].createElement(_form["default"],{style:{marginTop:0},__source:{fileName:_jsxFileName,lineNumber:56,columnNumber:33}},_react["default"].createElement(_formCompleteInput["default"],{name:"key",placeholder:"C\xF3digo de entrenador",icon:"qrcode",__source:{fileName:_jsxFileName,lineNumber:57,columnNumber:37}}),_react["default"].createElement(_FormButton["default"],{placeholder:"Validar c\xF3digo",onPress:handleSubmit,__source:{fileName:_jsxFileName,lineNumber:58,columnNumber:37}}),_react["default"].createElement(_titleError["default"],{error:error,visible:failed,__source:{fileName:_jsxFileName,lineNumber:59,columnNumber:37}}));}),_react["default"].createElement(_reactNative.Modal,{animationType:"slide",transparent:true,visible:modal,onRequestClose:function onRequestClose(){Alert.alert('Modal has been closed.');},__source:{fileName:_jsxFileName,lineNumber:65,columnNumber:21}},_react["default"].createElement(_reactNative.View,{style:styles.centeredView,__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:25}},information?_react["default"].createElement(_reactNative.View,{style:styles.modalView,__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:33}},_react["default"].createElement(_reactNative.View,{style:{alignItems:"center"},__source:{fileName:_jsxFileName,lineNumber:77,columnNumber:37}},_react["default"].createElement(_title3["default"],{__source:{fileName:_jsxFileName,lineNumber:78,columnNumber:41}},"code : ",information.key),_react["default"].createElement(_title["default"],{primary:true,__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:41}},_react["default"].createElement(_bold["default"],{__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:64}},information.trainer.user.first_name+" "+information.trainer.user.last_name)),_react["default"].createElement(_reactNative.Image,{style:{width:300,height:200,borderRadius:10,marginTop:10,marginBottom:10},source:{uri:_apiSettings["default"].url+information.trainer.user.profile_pic},__source:{fileName:_jsxFileName,lineNumber:80,columnNumber:41}})),_react["default"].createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){navigation.navigate("Register",information);setModal(false);},__source:{fileName:_jsxFileName,lineNumber:83,columnNumber:37}},_react["default"].createElement(_FormButton["default"],{placeholder:"Es mi entrenador",__source:{fileName:_jsxFileName,lineNumber:84,columnNumber:41}})),_react["default"].createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){return setModal(false);},__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:37}},_react["default"].createElement(_FormButton["default"],{placeholder:"Me he equivocado",background:_palleteColors["default"].background,color:_palleteColors["default"].mainColor,__source:{fileName:_jsxFileName,lineNumber:88,columnNumber:41}}))):null))));}var styles=_reactNative.StyleSheet.create({centeredView:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"rgba(0,0,0,0.7)"},modalView:{margin:20,backgroundColor:_palleteColors["default"].backgroundSecondary,borderRadius:20,padding:35,shadowColor:'#000',shadowOffset:{width:0,height:2},shadowOpacity:0.25,shadowRadius:3.84,elevation:5,width:"95%"},openButton:{backgroundColor:'#F194FF',borderRadius:20,padding:10,elevation:2},textStyle:{color:'white',fontWeight:'bold',textAlign:'center'},modalText:{marginBottom:15,textAlign:'center'}});