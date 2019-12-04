using JTDBusiness.Interfaces;
using JTDLib;
using JTDLib.Model;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/company")]
    public class CompanyController : ApiController
    {
        private readonly ICompanyService _service;
        private readonly JTDContext _context;

        public CompanyController(JTDContext context, ICompanyService service)
        {
            _service = service;
            _context = context;
        }

        [HttpPost]
        [Route("SaveCompany")]
        public async Task<IHttpActionResult> SaveCompany(Company model)
        {
            var comp = await _service.SaveCompany(model);
            await _context.SaveChangesAsync();
            return Ok(comp);
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> GetCompanies()
        {
            var p = await _service.GetCompanies();

            return Ok(p);
        }

        [HttpGet]
        [Route("GetCompaniesWithParams/{name}")]
        public async Task<IHttpActionResult> GetCompaniesWithParams(string name)
        {
            var p = await _service.GetCompanies();

            var rs = p.Where(c => c.Name.Contains(name.ToUpper()) || c.Cnpj.Contains(name.ToUpper())).ToArray();

            return Ok(rs);
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