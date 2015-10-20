'use strict';

angular.module ('app', [])

.controller ('blatt', function ($scope) {

	// Konfiguration des spezifischen Jahres
	$scope.jahr = 2015;
	$scope.gruppen = [
		{ name:'Krippe', team:['Mi', 'Ph', 'Ro', 'Th', 'To'] },
		{ name:'3J', team:['Ca', 'Ke'] },
		{ name:'Kiga', team:['Fa', 'In', 'Jo', 'Ni', 'Su'] },
    { name:'', team:['Si'] }
	];

	// Text-Strings
	var namenMonate = [
		"Januar", "Februar", "März", "April", "Mai", "Juni",
		"Juli", "August", "September", "Oktober", "November", "Dezember"
	];
	var namenWochentage = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

	// Aufbereitung Team-Daten
	$scope.team = _.flatten ($scope.gruppen, 'team');

	// Aufbereitung Kalender-Daten
	$scope.kalender = [];
	// immer 13 Monate von September bis September
	for (var m = 0; m < 13; ++m) {
		var monatDate = new Date ($scope.jahr, 8 + m, 1);
		var monatLaenge = new Date ($scope.jahr, 8 + m + 1, 0).getDate ();
		var tage = [];
		for (var t = 1; t < monatLaenge + 1; ++t) {
			var tagDate = new Date ($scope.jahr, 8 + m, t);
			var wochentag = tagDate.getDay ();
			var tag = {
				nummer:t,
				wochentag:namenWochentage [wochentag],
				wochenende: wochentag === 0 || wochentag === 6
			};
			tage.push (tag);
		}
		var monat = {
			name:namenMonate [monatDate.getMonth()],
			tage:tage
		};
		$scope.kalender.push (monat);
	}

});
