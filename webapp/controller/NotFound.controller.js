sap.ui.define([
		"jetCources/MyFirstProject/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("jetCources.MyFirstProject.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);