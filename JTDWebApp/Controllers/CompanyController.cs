using JTDBusiness.Interfaces;
using System.Threading.Tasks;
using System.Web.Http;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/company")]
    public class CompanyController : ApiController
    {
        private ICompanyService _service;

        public CompanyController(ICompanyService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> GetCompanies()
        {
            var p = await _service.GetCompanies();

            return Ok(p);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IHttpActionResult> GetCompany(int id)
        {
            var p = await _service.GetCompany(id);

            return Ok(p);
        }
    }
}