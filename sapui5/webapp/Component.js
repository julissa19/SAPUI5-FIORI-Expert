sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel",
    "logalilaboratorio/sapui5/model/Models",
    "./controller/HelloDialog"
], function (UIComponent, ResourceModel, Models, HelloDialog) {
    "use strict";

    return UIComponent.extend("logalilaboratorio.sapui5.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(Models.createRecipient());

            var oI18nModel = new ResourceModel({
                bundleName: "logalilaboratorio.sapui5.i18n.i18n"
            });

            this.setModel(oI18nModel, "i18n");

            this._helloDialog = new HelloDialog(this.getRootControl());
        },

        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog; 
        },

        openHelloDialog : function () {
            this._helloDialog.open();
        }
    });
});