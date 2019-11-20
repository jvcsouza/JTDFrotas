using System.Threading.Tasks;

namespace JTDBusiness.Interfaces
{
    public interface ITravelService
    {
        Task IncludeVehicle(int idTravel, int idVehicle, int idGuest);
    }
}
