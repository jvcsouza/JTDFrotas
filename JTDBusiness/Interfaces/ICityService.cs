using JTDLib.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JTDBusiness.Interfaces
{
    public interface ICityService
    {
        Task<City> GetByName(string name);
        Task<City> Get(int id);
        Task<List<City>> GetCities();
    }
}
