sap.ui.define([], function () {
    "use strict";

    return {
        statusText: function (sStatus) {

            const resourceBoundle= this.getView().getModel("i18n").getResourceBundle();

            switch (sStatus) {
                case "A": return resourceBoundle.getText("invoicesStatusA");
                case "B": return resourceBoundle.getText("invoicesStatusB");
                case "C": return resourceBoundle.getText("invoicesStatusC");
                default: return sStatus;
            }
        }
    };
});