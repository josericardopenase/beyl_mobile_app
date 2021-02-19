"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apiClient = _interopRequireDefault(require("./apiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(email, password) {
  return _apiClient.default.post('login/athletes/', {
    email: email,
    password: password
  });
};

var register = function register(fields) {
  return _apiClient.default.post('register_athlete/', fields);
};

var saveToken = function saveToken(token) {
  return _apiClient.default.post('profile/expoToken/', {
    token: token
  });
};

var _default = {
  login: login,
  register: register,
  saveToken: saveToken
};
exports.default = _default;