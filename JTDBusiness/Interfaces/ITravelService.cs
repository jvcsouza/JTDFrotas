using JTDBusiness.Model;
using JTDLib.Model;
using System.Threading.Tasks;

namespace JTDBusiness.Interfaces
{
    public interface ITravelService
    {
        Task IncludeVehicle(int idTravel, int idVehicle, int idGuest);
        Task<int> SaveTravel(TravelDto model);
        Task<Travel> GetTravel(int id);
        Task<object[]> GetAll();
    }
}
