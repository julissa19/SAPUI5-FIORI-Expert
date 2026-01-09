sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/InvoicesFormatter",
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'

], function (Controller, JSONModel, InvoicesFormatter, Filter,FilterOperator) {
    "use strict";

    return Controller.extend("logalilaboratorio.sapui5.controller.InvoicesList", {

        formatter: InvoicesFormatter,

        onInit: function () {
            var oCurrencyModel = new JSONModel({
                usd: "USD",
                eur: "EUR"
            });

            this.getView().setModel(oCurrencyModel, "currency");
        },

        onFilterInvoices: function (oEvent) {
            var sQuery = oEvent.getParameter("query");
            var oList = this.byId("invoicesList");
            var oBinding = oList.getBinding("items");

            var aFilter = [];
            if (sQuery) {
                aFilter.push(new Filter(
                    "ProductName",
                    sap.ui.model.FilterOperator.Contains,
                    sQuery
                ));
            }

            oBinding.filter(aFilter);
        }

    });
});