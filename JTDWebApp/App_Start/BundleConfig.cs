using System.Web;
using System.Web.Optimization;

namespace JTDWebApp
{
    public class BundleConfig
    {
        // Para obter mais informações sobre o agrupamento, visite https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

	        /*Angular Scripts*/
            var angularScripts = new ScriptBundle("~/bundles/angular-main-scripts").Include(
                "~/_bundles/vendors~oneapp.*",
                "~/_bundles/oneapp.*",
                "~/node_modules/angular-material/angular-material.js",
                "~/node_modules/sweetalert2/dist/sweetalert2.all.min.js",
                "~/node_modules/propellerkit/dist/js/bootstrap.min.js",
                "~/node_modules/propellerkit/dist/js/propeller.min.js",
                "~/scripts/stickyStates.js",
                //"~/scripts/x0popup.js",
                "~/scripts/easy-loading.min.js");
		
	        bundles.Add(angularScripts);

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.min.js",
                        "~/app/app-config-routes.js",
                        "~/app/app.js"));

            //// Use a versão em desenvolvimento do Modernizr para desenvolver e aprender. Em seguida, quando estiver
            //// pronto para a produção, utilize a ferramenta de build em https://modernizr.com para escolher somente os testes que precisa.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      //"~/Content/x0popup.css",
                      //"~/node_modules/propellerkit/dist/fonts/roboto/Roboto-Regular-webfont.ttf",
                      "~/node_modules/sweetalert2/dist/sweetalert2.min.css",
                      "~/node_modules/angular-material/angular-material.css",
                      "~/node_modules/propellerkit/dist/css/propeller.min.css",
                      "~/Content/x0popup.default.css",
                      "~/Content/easy-loading.min.css"));
                      //"~/Content/site.css"));
        }
    }
}
