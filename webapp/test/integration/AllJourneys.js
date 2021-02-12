/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"jetCources/MyFirstProject/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"jetCources/MyFirstProject/test/integration/pages/Worklist",
	"jetCources/MyFirstProject/test/integration/pages/Object",
	"jetCources/MyFirstProject/test/integration/pages/NotFound",
	"jetCources/MyFirstProject/test/integration/pages/Browser",
	"jetCources/MyFirstProject/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "jetCources.MyFirstProject.view."
	});

	sap.ui.require([
		"jetCources/MyFirstProject/test/integration/WorklistJourney",
		"jetCources/MyFirstProject/test/integration/ObjectJourney",
		"jetCources/MyFirstProject/test/integration/NavigationJourney",
		"jetCources/MyFirstProject/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});