using JTDBusiness.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JTDBusiness.Interfaces
{
    public interface IGuestService
    {
        Task<GuestDto> GetGuest(int id);
        Task<List<GuestDto>> GetGuests();
    }
}
