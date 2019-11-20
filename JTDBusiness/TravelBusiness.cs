using System.Threading.Tasks;
using JTDBusiness.Interfaces;
using JTDLib;

namespace JTDBusiness
{
    public class TravelBusiness : ITravelService
    {
        private readonly JTDContext _context;
        private readonly IVehicleService _vehicleService;

        public TravelBusiness(JTDContext context, IVehicleService vehicleService)
        {
            _context = context;
            _vehicleService = vehicleService;
        }

        public async Task IncludeVehicle(int idTravel, int idVehicle, int idGuest)
        {
            var vehicle = await _vehicleService.Get(idVehicle);
            


        }
    }
}
