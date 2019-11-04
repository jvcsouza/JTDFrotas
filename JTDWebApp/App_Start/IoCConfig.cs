using JTDBusiness;
using JTDLib;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace JTDWebApp.App_Start
{
    public class IoCConfig
    {
        public static void Registrar(HttpConfiguration config)
        {
            var container = new Container();
            container.RegisterSingleton<JTDContext>();
            container.Register<IPersonService, PersonBusiness>();
            container.RegisterWebApiControllers(config);
            GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(container);
            container.Verify();
        }
    }
}