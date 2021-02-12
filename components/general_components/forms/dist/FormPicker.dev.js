"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=FormPicker;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeGestureHandler=require("react-native-gesture-handler");var _palleteColors=_interopRequireDefault(require("../palleteColors"));var _vectorIcons=require("@expo/vector-icons");var _title=_interopRequireDefault(require("../titles/title3"));var _title2=_interopRequireDefault(require("../titles/title5"));var _formik=require("formik");var _titleError=_interopRequireDefault(require("../titles/titleError"));var _jsxFileName="/home/pepe/Escritorio/beylapp/components/general_components/forms/FormPicker.js";function FormPicker(_ref){var placeholder=_ref.placeholder,icon=_ref.icon,secureTextEntry=_ref.secureTextEntry,options=_ref.options,name=_ref.name,otherProps=(0,_objectWithoutProperties2["default"])(_ref,["placeholder","icon","secureTextEntry","options","name"]);var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),open=_useState2[0],setOpen=_useState2[1];var _useState3=(0,_react.useState)(),_useState4=(0,_slicedToArray2["default"])(_useState3,2),value=_useState4[0],setValue=_useState4[1];var _useFormikContext=(0,_formik.useFormikContext)(),setFieldTouched=_useFormikContext.setFieldTouched,handleChange=_useFormikContext.handleChange,errors=_useFormikContext.errors,touched=_useFormikContext.touched,setFieldValue=_useFormikContext.setFieldValue;return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){return setOpen(true);},__source:{fileName:_jsxFileName,lineNumber:20,columnNumber:13}},_react["default"].createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:21,columnNumber:17}},_react["default"].createElement(_reactNative.View,{style:{flexDirection:"row"},__source:{fileName:_jsxFileName,lineNumber:22,columnNumber:21}},icon&&_react["default"].createElement(_vectorIcons.MaterialCommunityIcons,{style:styles.icon,name:icon,size:20,color:_palleteColors["default"].textSecondaryColor,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:36}}),_react["default"].createElement(_reactNative.Text,{style:styles.textInput,__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:25}},value?value.label:placeholder)),_react["default"].createElement(_vectorIcons.MaterialCommunityIcons,{name:"chevron-down",size:20,color:_palleteColors["default"].textSecondaryColor,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:21}}))),_react["default"].createElement(_titleError["default"],{error:errors[name],visible:touched[name],__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:13}}),_react["default"].createElement(_reactNative.Modal,{visible:open,animationType:"fade",transparent:true,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:13}},_react["default"].createElement(_reactNative.View,{style:styles.centeredView,__source:{fileName:_jsxFileName,lineNumber:33,columnNumber:17}},_react["default"].createElement(_reactNative.View,{style:styles.modalView,__source:{fileName:_jsxFileName,lineNumber:34,columnNumber:21}},_react["default"].createElement(_reactNativeGestureHandler.FlatList,{data:options,keyExtractor:function keyExtractor(item){return item.value.toString();},renderItem:function renderItem(_ref2){var item=_ref2.item;return _react["default"].createElement(PickerItem,{item:item,onPress:function onPress(){setOpen(false);setValue(item);setFieldValue(name,item.value);setFieldTouched(name);},__source:{fileName:_jsxFileName,lineNumber:38,columnNumber:53}});},__source:{fileName:_jsxFileName,lineNumber:35,columnNumber:29}})))));}function PickerItem(_ref3){var item=_ref3.item,onPress=_ref3.onPress;return _react["default"].createElement(_reactNative.TouchableOpacity,{onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:53,columnNumber:9}},_react["default"].createElement(_reactNative.Text,{style:{fontSize:16,color:_palleteColors["default"].textPrimaryColor,padding:5},__source:{fileName:_jsxFileName,lineNumber:54,columnNumber:13}},item.label));}var styles=_reactNative.StyleSheet.create({container:{width:"100%",backgroundColor:_palleteColors["default"].backgroundSecondary,padding:12,borderRadius:10,fontFamily:"poppins-regular",marginTop:12,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},icon:{marginRight:8},textInput:{fontSize:14,fontFamily:"poppins-regular",color:_palleteColors["default"].textPrimaryColor},centeredView:{flex:1,justifyContent:'center',backgroundColor:"rgba(0,0,0,0.7)",zIndex:0},modalView:{margin:20,backgroundColor:_palleteColors["default"].backgroundSecondary,borderRadius:10,padding:20,shadowColor:'#000',shadowOffset:{width:0,height:2},shadowOpacity:0.25,shadowRadius:3.84,elevation:5},openButton:{backgroundColor:'#F194FF',borderRadius:20,padding:10,elevation:2},textStyle:{color:'white',fontWeight:'bold',textAlign:'center'},modalText:{marginBottom:15,textAlign:'center'}});