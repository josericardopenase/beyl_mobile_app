"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useApiCallback = function useApiCallback(apiFunc, callback) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var request = function request() {
    var data,
        _args = arguments;
    return regeneratorRuntime.async(function request$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setError(false);
            setLoading(true);
            _context.next = 4;
            return regeneratorRuntime.awrap(apiFunc.apply(void 0, _args));

          case 4:
            data = _context.sent;

            if (!data.ok) {
              setError(true);
            }

            setData(data.data);
            if (data.ok) callback(data.data);
            setLoading(false);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  return {
    data: data,
    error: error,
    loading: loading,
    request: request
  };
};

var _default = useApiCallback;
exports["default"] = _default;