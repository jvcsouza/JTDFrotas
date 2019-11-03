using JTDFrotas.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using System.Web.Http.Filters;

namespace JTDFrotas
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Serviços e configuração da API da Web

            // Rotas da API da Web
            config.MapHttpAttributeRoutes();

            config.Filters.Add(new ApplicationExceptionFilter());

            var api = config.Routes.CreateRoute("api/{controller}/{id}", new { id = RouteParameter.Optional }, null);
            config.Routes.Add("DefaultApi", api);
            
            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);
        }
    }
}
