using System.Threading.Tasks;
using System.Web.Http;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/dashboard/")]
    public class DashboardController : ApiController
    {
        [HttpGet]
        public async Task<IHttpActionResult> Get()
        {

            return Ok();
        }
    }
}