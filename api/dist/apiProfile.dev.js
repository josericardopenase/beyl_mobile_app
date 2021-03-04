"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apiClient = _interopRequireDefault(require("./apiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getProfile = function getProfile() {
  return _apiClient["default"].get('profile/');
};

var getProfileAthlete = function getProfileAthlete() {
  return _apiClient["default"].get('profile/athlete/');
};

var modifyProfileAthlete = function modifyProfileAthlete(data) {
  return _apiClient["default"].put('profile/athlete/', data);
};

var modifyProfile = function modifyProfile(data) {
  return _apiClient["default"].put('profile/edit/', data);
};

var changePassword = function changePassword(data) {
  return _apiClient["default"].put('profile/change_password', data);
};

var _default = {
  getProfile: getProfile,
  getProfileAthlete: getProfileAthlete,
  modifyProfile: modifyProfile,
  changePassword: changePassword,
  modifyProfileAthlete: modifyProfileAthlete
};
exports["default"] = _default;