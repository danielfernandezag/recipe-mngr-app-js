'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimplePerson = function () {
	function SimplePerson() {
		var age = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 23;
		var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bob';

		_classCallCheck(this, SimplePerson);

		this.age = age;
		this.name = name;
	}

	_createClass(SimplePerson, [{
		key: 'getInfo',
		value: function getInfo() {
			return 'Hello my name is ' + this.name + ' and I am ' + this.age + ' years old';
		}
	}]);

	return SimplePerson;
}();

var newPerson = new SimplePerson(23, 'daniel');
var domPlaceholder = document.getElementById('placeholder');
domPlaceholder.innerHTML = newPerson.getInfo();
