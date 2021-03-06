'use strict';

// remove underscore from string
angular.module('mean.system').filter('getSheikhName', function() {

	return function (string) {
		if(string) {
			return 'Sheikh ' + string.split('_')[0].split('Sheikh')[1];
		}
	};
});

angular.module('mean.system').filter('validateSurah', function() {

	return function (string) {
		if (string) {
			if (string.length < 9) {
				return ' - ';
			}
			else {
				return string.replace('(', '').replace(')', '');
			}
		}
	};
});
