// requirejs_config.js
(function () {
    'use strict';
	require.config({
		baseUrl: './js',
		paths:{
			nls: '../nls'
		}
	});

	require(["i18n!nls/color"], function(color){
		console.log('i18n!nls/color');
		console.log('color.red:', color.red);
		console.log('color.blue:', color.blue);
		console.log('color.green:', color.green);
		console.log('color.only:', color.only);
		console.log('--------------');
	});

	require(["i18n!nls/fr-fr/color"], function(color){
		console.log('i18n!nls/fr-fr/color');
		console.log('color.red:', color.red);
		console.log('color.blue:', color.blue);
		console.log('color.green:', color.green);
		console.log('color.only:', color.only);
		console.log('--------------');
	});

	require(["i18n!nls/_com/color"], function(color){
		console.log('i18n!nls/_com/color');
		console.log('color.red:', color.red);
		console.log('color.blue:', color.blue);
		console.log('color.green:', color.green);
		console.log('color.only:', color.only);
		console.log('--------------');
	});

	require(["i18n!nls/_com/fr-fr/color"], function(color){
		console.log('i18n!nls/_com/fr-fr/color');
		console.log('color.red:', color.red);
		console.log('color.blue:', color.blue);
		console.log('color.green:', color.green);
		console.log('color.only:', color.only);
		console.log('--------------');
	});

	require(["i18n!nls/_co_uk/color"], function(color){
		console.log('i18n!nls/_co_uk/color');
		console.log('color.red:', color.red);
		console.log('color.blue:', color.blue);
		console.log('color.green:', color.green);
		console.log('color.only:', color.only);
		console.log('--------------');
	});
	require(["i18n!nls/_co_uk/fr-fr/color"], function(color){
		console.log('i18n!nls/_co_uk/fr-fr/color');
		console.log('color.red:', color.red);
		console.log('color.blue:', color.blue);
		console.log('color.green:', color.green);
		console.log('color.only:', color.only);
		console.log('--------------');
	});
}());