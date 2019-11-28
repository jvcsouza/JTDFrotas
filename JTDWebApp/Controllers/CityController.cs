using JTDBusiness.Interfaces;
using System.Threading.Tasks;
using System.Web.Http;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/city")]
    public class CityController : ApiController
    {
        private readonly ICityService _service;

        public CityController(ICityService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("GetCities")]
        public async Task<IHttpActionResult> GetCities()
        {
            var r = await _service.GetCities();
            return Ok(r);
        }
    }
}