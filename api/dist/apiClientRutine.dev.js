"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _apiClient=_interopRequireDefault(require("./apiClient"));var getRutine=function getRutine(){return _apiClient["default"].get('rutine_client/');};var getRutineDay=function getRutineDay(id){return _apiClient["default"].get('rutine_client/'+id+"/");};var _default={getRutine:getRutine,getRutineDay:getRutineDay};exports["default"]=_default;