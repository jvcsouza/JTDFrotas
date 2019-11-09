using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JTDBusiness.Interfaces;
using JTDBusiness.Model;
using JTDLib;
using Microsoft.EntityFrameworkCore;

namespace JTDBusiness
{
    public class GuestBusiness : IGuestService
    {
        private readonly JTDContext _context;

        public GuestBusiness(JTDContext context)
        {
            _context = context;
        }

        public async Task<GuestDto> GetGuest(int id)
        {
            var pe = _context.Guests.Where(g => g.Person.Id == id)
                .Select(g => new GuestDto()
                {
                    Phone = g.Person.Phones.Where(p => p.IsMain).Select(p => p.PhoneNumber).FirstOrDefault(),
                    ContactName = g.Person.Phones.Where(p => p.IsMain).Select(p => p.Contact).FirstOrDefault(),
                    City = g.Person.City.Name,
                    Name = g.Person.Name,
                    Cpf = g.Cpf,
                    Id = g.Id
                })
                .FirstOrDefaultAsync();

            var r = await pe;

            return r;
        }

        public async Task<List<GuestDto>> GetGuests()
        {
            return await _context.Guests
               .Select(g => new GuestDto()
               {
                   Phone = g.Person.Phones.Where(p => p.IsMain).Select(p => p.PhoneNumber).FirstOrDefault(),
                   ContactName = g.Person.Phones.Where(p => p.IsMain).Select(p => p.Contact).FirstOrDefault(),
                   City = g.Person.City.Name,
                   Name = g.Person.Name,
                   Cpf = g.Cpf,
                   Id = g.Id
               })
               .ToListAsync();
        }
    }
}
