using System.Web;
using System.Web.Optimization;

namespace JTDFrotas
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

            var css = new StyleBundle("~/Content/css").Include(
                      "~/Content/css/site.css",
                      "~/Content/bootstrap.css",
                      "~/Content/css/main.css",
                      "~/Content/css/texts.css",
                      "~/Content/css/hover.css",
                      "~/Content/css/util.css",
                      "~/Content/vendor/bootstrap/css/bootstrap.min.css",
                      "~/Content/fonts/font-awesome-4.7.0/css/font-awesome.min.css",
                      "~/Content/fonts/Linearicons-Free-v1.0.0/icon-font.min.css");
            css.Transforms.Add(new CssMinify());
            bundles.Add(css);
        }
    }
}
