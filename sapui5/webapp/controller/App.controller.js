sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast", // Librería para Mensaje Toast
    //"sap/ui/model/json/JSONModel" //Librería para modelo OData
    "logalilaboratorio/sapui5/model/Models"
], function (Controller, MessageToast, Models) { // lo pasamos como parámetro
    "use strict";

    return Controller.extend("logalilaboratorio.sapui5.controller.App", {
        onInit: function () {
            var oModel = Models.createRecipient();//Se crea el modelo con esos datos
            this.getView().setModel(oModel);//Se asigna a la vista
        },        

        onShowHello: function () {
            //MessageToast.show("Hello World");// Usamos MessageToast
            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var sName = this.getView().getModel().getProperty("/recipient/name");
            var sText = oBundle.getText("helloMessage", [sName]);

            MessageToast.show(sText);
        }
    });
});