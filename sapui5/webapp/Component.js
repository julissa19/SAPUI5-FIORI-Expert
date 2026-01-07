sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, ResourceModel) {
    "use strict";

    return UIComponent.extend("logalilaboratorio.sapui5.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            var oI18nModel = new ResourceModel({
                bundleName: "logalilaboratorio.sapui5.i18n.i18n"
            });

            this.setModel(oI18nModel, "i18n");
        }
    });
});