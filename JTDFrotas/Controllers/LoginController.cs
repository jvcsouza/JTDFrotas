using JTDFrotas.Business.Interfaces;
using System.Web.Mvc;

namespace JTDFrotas.Controllers
{
    [RoutePrefix("Index")]
    public class LoginController : Controller
    {
        private readonly IPersonService _service;

        public LoginController(IPersonService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult Index(int id = 0)
        {
            ViewBag.Bool = false;
            ViewBag.Id = id;
            if (id != 0)
            {
                ViewBag.Bool = true;
                return RedirectToAction("Index", "Home", new { id = 2 });
            }
            return View();
        }
    }
}