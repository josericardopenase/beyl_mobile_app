"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _apiClient=_interopRequireDefault(require("./apiClient"));var getExerciseList=function getExerciseList(){return _apiClient["default"].get('rutine_client/');};var getExercise=function getExercise(id){return _apiClient["default"].get('excersise/'+id+"/");};var _default={getExerciseList:getExerciseList,getExercise:getExercise};exports["default"]=_default;