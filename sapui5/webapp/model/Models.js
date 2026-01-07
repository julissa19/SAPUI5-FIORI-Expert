sap.ui.define([
    "sap/ui/model/json/JSONModel" //Librería para modelo OData
], function (JSONModel) {
    "use strict";

    return {
        createRecipient: function () {
            var oData = {
                recipient: {
                    name: "World"
                }
            };

            return new JSONModel(oData);
        }
    };
});