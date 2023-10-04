'use strict';

angular.module('app', [])

	.controller('blatt', function ($scope) {

		// Konfiguration des spezifischen Jahres
		$scope.jahr = 2023;
		$scope.gruppen = [
			{ name: '1J', team: ['Sg', 'Yv'] },
			{ name: '  ', team: ['  '] },
			{ name: '2J', team: ['In', 'So'] },
			{ name: '3J', team: ['Ph', 'Pi', 'Sn'] },
			{ name: '  ', team: ['  '] },
			{ name: 'Kiga', team: ['Ml', 'Mc', 'Li', 'Ya'] }
		];

		// Text-Strings
		var namenMonate = [
			"Januar", "Februar", "März", "April", "Mai", "Juni",
			"Juli", "August", "September", "Oktober", "November", "Dezember"
		];
		var namenWochentage = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

		// Aufbereitung Team-Daten
		$scope.team = _.flatten($scope.gruppen, 'team');

		// Aufbereitung Kalender-Daten
		$scope.kalender = [];
		// immer 14 Monate von September bis Oktober
		for (var m = 0; m < 14; ++m) {
			var monatDate = new Date($scope.jahr, 8 + m, 1);
			var monatLaenge = new Date($scope.jahr, 8 + m + 1, 0).getDate();
			var tage = [];
			for (var t = 1; t < monatLaenge + 1; ++t) {
				var tagDate = new Date($scope.jahr, 8 + m, t);
				var wochentag = tagDate.getDay();
				var tag = {
					nummer: t,
					wochentag: namenWochentage[wochentag],
					wochenende: wochentag === 0 || wochentag === 6
				};
				tage.push(tag);
			}
			var monat = {
				name: namenMonate[monatDate.getMonth()],
				tage: tage
			};
			$scope.kalender.push(monat);
		}

	});
