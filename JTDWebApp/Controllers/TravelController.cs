using JTDBusiness.Interfaces;
using System.Threading.Tasks;
using System.Web.Http;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/travel")]
    public class TravelController : ApiController
    {
        private readonly ITravelService _service;

        public TravelController(ITravelService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IHttpActionResult> Get()
        {

            return Ok();
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IHttpActionResult> GetTravel(int id)
        {
            return Ok();
        }
    }
}