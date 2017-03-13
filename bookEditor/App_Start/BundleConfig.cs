﻿using System.Web;
using System.Web.Optimization;

namespace bookEditor
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jsApp").Include(
                      "~/Scripts/angular/angular.js",
                      "~/Scripts/app/app.js",
                      "~/Scripts/app/modules/angular-route.js",
                      "~/Scripts/app/modules/ng-file-upload-shim.js",
                      "~/Scripts/app/modules/ng-file-upload.js",
                      "~/Scripts/app/modules/ngDialog.js",
                      "~/Scripts/app/modules/angular-cookies.js",
                      "~/Scripts/app/controllers/addAuthorModalCtrl.js",
                      "~/Scripts/app/controllers/addBookCtrl.js",
                      "~/Scripts/app/controllers/authorListCtrl.js",
                      "~/Scripts/app/controllers/bookListCtrl.js",
                      "~/Scripts/app/controllers/editBookCtrl.js",
                      "~/Scripts/app/controllers/navigationCtrl.js",
                      "~/Scripts/app/services/bookService.js",
                      "~/Scripts/app/services/authorService.js",
                      "~/Scripts/app/services/notificationService.js",
                      "~/Scripts/app/directives/serverSideValidationDirective.js",
                      "~/Scripts/app/directives/uniqueAuthorDirective.js",
                      "~/Scripts/app/directives/customScrollDirective.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/underscore").Include(
                      "~/Scripts/underscore.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap.css.map",
                      "~/Content/ngDialog.css",
                      "~/Content/ngDialog-theme-default.css",
                      "~/Content/ngDialog-theme-plain.css",
                      "~/Content/site.css"));   
        }
    }
}
