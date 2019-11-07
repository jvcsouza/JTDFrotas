using JTDBusiness;
using JTDBusiness.Interfaces;
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
            RegisterServices(container);
            container.RegisterWebApiControllers(config);
            GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(container);
            container.Verify();
        }

        private static void RegisterServices(Container container)
        {
            container.Register<JTDContext>(() => new JTDContext(),Lifestyle.Scoped);

            container.Register<IPersonService, PersonBusiness>();

            container.Register<ICompanyService, CompanyBusiness>();
            container.Register<IGuestService, GuestBusiness>();
        }
    }
}