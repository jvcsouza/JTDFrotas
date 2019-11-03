using JTDBusiness;
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
        private IPersonService _personService;

        public CompanyController(IPersonService personService)
        {
            _personService = personService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> get()
        {
            var p = new List<Person>();
            
            p = await _personService.GetAll();
            
            return Ok(p);
        }
    }
}