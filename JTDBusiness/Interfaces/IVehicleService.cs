using JTDLib.Model;
using System.Threading.Tasks;

namespace JTDBusiness.Interfaces
{
    public interface IVehicleService
    {
        Task<Vehicle> Get(int id);
        Task<Vehicle> GetAvailable(int id);
        Task ChangeAvailable(int id, bool act = false);
    }
}