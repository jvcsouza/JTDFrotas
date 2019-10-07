using JTDFrotas.Business.Interfaces;
using System.Web.Mvc;

namespace JTDFrotas.Controllers
{
    public class HomeController : Controller
    {
        private readonly IPersonService _service;

        public HomeController(IPersonService service)
        {
            _service = service;
        }
        
        public ActionResult Index()
        {
            ViewBag.NamePerson = _service.GetPerson(1).Name;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}