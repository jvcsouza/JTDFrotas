using JTDBusiness;
using JTDLib;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using SimpleInjector.Lifestyles;
using System.Web.Http;

namespace JTDWebApp.App_Start
{
    public class IoCConfig
    {
        public static void Registrar(HttpConfiguration config)
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();
            container.Register<JTDContext>(() => new JTDContext(), Lifestyle.Scoped);
            container.Register<IPersonService, PersonBusiness>();
            container.RegisterWebApiControllers(config);
            GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(container);
            container.Verify();
        }
    }
}