using JTDBusiness.Interfaces;
using JTDBusiness.Model;
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
            var list = await _service.GetAll();
            return Ok(list);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IHttpActionResult> GetTravel(int id)
        {
            var travel = await _service.GetTravel(id);
            return Ok(travel);
        }

        [HttpPost]
        [Route("Save")]
        public async Task<IHttpActionResult> SaveTravel(TravelDto model)
        {
            var travel  = await _service.SaveTravel(model);
            return Ok(travel);
        }
    }
}