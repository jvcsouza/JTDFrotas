using System;
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

        public void Validade(GuestDto guest)
        {
            if (guest == null)
                throw new ArgumentException("Pessoa informada não encontrada");
        }

        public async Task<GuestDto> GetDrive(int id)
        {
            var guest = await _context.Guests
                                      .Where(g => g.Person.Id == id)
                                      .Where(p => p.Type == PersonType.Driver)
                                      .FirstOrDefaultAsync();
            return guest;
        }

        public async Task<List<DriverDto>> GetDrivers()
        {
            return await _context.Guests
               .Where(g => g.Type == PersonType.Driver)
               .Select(g => new DriverDto()
               {
                   Phone = g.Person.Phones.Where(p => p.IsMain).Select(p => p.PhoneNumber).FirstOrDefault(),
                   ContactName = g.Person.Phones.Where(p => p.IsMain).Select(p => p.Contact).FirstOrDefault(),
                   City = g.Person.City.Name,
                   Name = g.Person.Name,
                   Cpf = g.Cpf,
                   Id = g.Id,
                   LicenseId = g.LicenseId,
                   LicenseType = g.License.Type
               })
               .ToListAsync();
        }

        public async Task<GuestDto> GetGuest(int id)
        {
            var guest = await _context.Guests
                                      .Where(g => g.Person.Id == id)
                                      .Where(p => p.Type == PersonType.Client)
                                      .FirstOrDefaultAsync();
            return guest;
        }

        public async Task<List<GuestDto>> GetGuests()
        {
            return await _context.Guests
               .Where(g => g.Type == PersonType.Client)
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
