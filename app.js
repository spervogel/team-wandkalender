'use strict';

angular.module('app', [])

	.controller('blatt', function ($scope) {

		// Konfiguration des spezifischen Jahres
		$scope.jahr = 2021;
		$scope.gruppen = [
			{ name: '1J', team: ['Me', 'Le'] },
			{ name: '2J', team: ['Mc', 'Ar'] },
			{ name: '3J', team: ['So', 'In'] },
			{ name: 'Kiga', team: ['Si', 'To', 'Ml', '  '] }
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
		// immer 13 Monate von September bis September
		for (var m = 0; m < 13; ++m) {
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
