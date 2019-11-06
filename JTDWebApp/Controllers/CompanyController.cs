using JTDBusiness;
using JTDBusiness.Interfaces;
using JTDLib.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/company")]
    public class CompanyController : ApiController
    {
        private IPersonService _service;

        public CompanyController(IPersonService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> get()
        {
            //var t = await _service.GetCompany(1);
            var p = new List<Person>()
            {
               //new Person
               //{
               //    Name = t.Name,
               //}
            };

            p = await _service.GetAll();

            return Ok(p);
        }
    }
}