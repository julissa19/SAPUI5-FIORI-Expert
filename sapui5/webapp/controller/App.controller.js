sap.ui.define([
    "sap/ui/core/mvc/Controller",
    //"sap/m/MessageToast", // Librería para Mensaje Toast
    //"sap/ui/model/json/JSONModel" //Librería para modelo OData
    //"logalilaboratorio/sapui5/model/Models"
], function (Controller) { // lo pasamos como parámetro
    "use strict";

    return Controller.extend("logalilaboratorio.sapui5.controller.App", {
        onInit: function () {

        },
        
        onOpenDialogHeader: function () {
            this.getOwnerComponent().openHelloDialog();
        }
        
    });
});