using System.Threading.Tasks;
using System.Web.Http;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/driver/")]
    public class DriverController : ApiController
    {
        public async Task<IHttpActionResult> Get()
        {
            return Ok();
        }
    }
}