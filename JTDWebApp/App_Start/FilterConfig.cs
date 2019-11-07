
using JTDWebApp.Filters;
using System.Web.Http;
using System.Web.Mvc;

namespace JTDWebApp
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
        public static void Register(HttpConfiguration config)
        {
            config.Filters.Add(new ExceptionFilter());
        }
    }
}
