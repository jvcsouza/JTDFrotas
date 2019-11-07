using JTDBusiness.Interfaces;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/guest")]
    public class GuestController : ApiController
    {
        private readonly IGuestService _service;

        public GuestController(IGuestService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("")]
        public async Task<IHttpActionResult> GetGuests()
        {
            var guests = await _service.GetGuests();

            return Ok(guests);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IHttpActionResult> GetGuest(int id)
        {
            var guests = await _service.GetGuest(id);

            return Ok(guests);
        }
    }
}