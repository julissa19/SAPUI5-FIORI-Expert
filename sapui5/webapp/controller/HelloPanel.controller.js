sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("logalilaboratorio.sapui5.controller.HelloPanel", {

        onInit: function (){

        },

        onShowHello: function () {
            //MessageToast.show("Hello World");// Usamos MessageToast
            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var sName = this.getView().getModel().getProperty("/recipient/name");
            var sText = oBundle.getText("helloMessage", [sName]);

            MessageToast.show(sText);
        },

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }

    });
});