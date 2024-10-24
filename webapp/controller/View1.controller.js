sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/m/library'
],
function (Controller, JSONModel, mobileLibrary) {
    "use strict";

    return Controller.extend("com.sap.announcepfp.controller.View1", {
        onInit: function () {
            let data = [
                {
                    "directorate": "FINANCE",
                    "userdepartment": "Finance",
                    "focalpointname": "Danara",
                    "focalpointemailaddress": "danara@abc.com",
                    "pfpStartYear": "2024",
                    "pfpEndYear": "2025",
                    "focalpointrole":"Executer"
                },
                {
                    "directorate": "HR",
                    "userdepartment": "HR",
                    "focalpointname": "Dmitriy",
                    "focalpointemailaddress": "dmitriy @abc.com",
                    "pfpStartYear": "2024",
                    "pfpEndYear": "2025",
                    "focalpointrole":"Executer"
                },
                {
                    "directorate": "PURCHASE",
                    "userdepartment": "Purchase",
                    "focalpointname": "Mikhail",
                    "focalpointemailaddress": "mikhail@abc.com",
                    "pfpStartYear": "2024",
                    "pfpEndYear": "2025",
                    "focalpointrole":"Approver"
                }
            ];
            let model = new JSONModel(data);
            this.getView().setModel(model, "jModel");
        },
        onCancel: function(){
            var URLHelper = mobileLibrary.URLHelper;
            URLHelper.redirect("https://development-and-test-kjejpj21.launchpad.cfapps.eu10.hana.ondemand.com/site?siteId=3c82b50b-ab5f-4739-9d2e-d7dae4f3ee5f#Shell-home", true);
        },
       
    });
});
