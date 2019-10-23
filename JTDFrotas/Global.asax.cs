using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using WebMatrix.WebData;

namespace JTDFrotas
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            WebSecurity.InitializeDatabaseConnection("JTDContext", "User", "Id", "Username", true);
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
