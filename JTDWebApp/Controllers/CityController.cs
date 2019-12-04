using JTDBusiness.Interfaces;
using JTDLib;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/city")]
    public class CityController : ApiController
    {
        private readonly ICityService _service;
        private readonly JTDContext _context;

        public CityController(JTDContext context, ICityService service)
        {
            _service = service;
            _context = context;
        }

        [HttpGet]
        [Route("GetCities")]
        public async Task<IHttpActionResult> GetCities()
        {
            var r = await _service.GetCities();
            return Ok(r);
        }

        [Route("GetCityAutoComplete/{city}")]
        [HttpGet]
        public async Task<IHttpActionResult> GetCityAutoComplete(string city)
        {
            var s = city.WithoutAccents();
            var list = await _context.Cities.Where(c => c.Name.Contains(s))
                                    .Select(c => new
                                    {
                                        c.Id,
                                        c.Name,
                                        c.State.Initials
                                    })
                                    .ToArrayAsync();
            return Ok(list);
        }
    }
}