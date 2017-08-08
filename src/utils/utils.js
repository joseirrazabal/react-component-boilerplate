exports.passengerCount = function (strValue) {
	let people = 0;
	const parsed = exports.parseString(strValue);
	parsed.forEach((r) => {
		people += r.adults.value;
		people += r.children.length;
	})
	return people;
}

exports.parseString = function (strValue) {
	"use strict";
	const defaultObject = { adults: { value: 2 }, children: [], key: Math.random() };

	let ret = [];


	if (strValue.length > 275) return defaultObject;

	const roomsSplitted = strValue.split('!')

	if (roomsSplitted.length > 10) return defaultObject;

	roomsSplitted.forEach((value) => {
		if (!value || value == '') {
			return;
		}

		var elem = { adults: { value: 0 }, children: [], key: Math.random() };
		const splitted = value.split('-');
		if (splitted.length > 9) return defaultObject;
		value.split('-').forEach((value, index) => {
			if (index > 0) {
				let num = parseInt(value);
				num = (isNaN(num) || num > 17 || num < 0 ) ? 0 : num; // Aca viene la edad, por defecto 0
				elem.children.push({ value: num });
			} else {
				let num = parseInt(value);
				num = (isNaN(num) || num > 8) ? 2 : num; // Error o mayor a 8 por defecto 2
				elem.adults.value = num;
			}
		});
		ret.push(elem);
	})
	return ret;
}

exports.parseObject = function (objValue) {
	"use strict";
	return objValue.reduce((ret, value) => {
		if (ret != '') ret += '!';
		ret += value.adults.value;
		value.children.forEach((value) => {
			ret += '-' + value.value;
		})
		return ret;
	}, '');

}

exports.toNemo = function (strValue) {
	"use strict";

	const rooms = exports.parseString(strValue);
	const nemoRooms = [];
	rooms.map(r => {
		const passengers = [];
		for (let i = 0; i < r.adults.value; i++) {
			passengers.push({ age: -1 });
		}
		r.children.forEach(c => {
			passengers.push({ age: c.value });
		});

		nemoRooms.push({ passengers });
	});
	return nemoRooms;
}
