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
            var t = await _service.GetTravel(id);
            return Ok(new
            {
                t.Id,
                Client = t.Person.Name,
                t.TotalKmStr,
                Origin = t.Origin.Name,
                Destiny = t.Destiny.Name,
                t.LastChange,
                t.DurationStr,
                t.PersonId,
                t.DestinyId,
                t.OriginId,
                OriginInit = t.Origin.State.Initials,
                DestinyInit = t.Destiny.State.Initials
            });
        }

        [HttpPost]
        [Route("Save")]
        public async Task<IHttpActionResult> SaveTravel(TravelDto model)
        {
            return Ok(await _service.SaveTravel(model));
        }
    }
}