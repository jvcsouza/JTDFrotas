using System;
using System.Linq;
using System.Threading.Tasks;
using JTDBusiness.Interfaces;
using JTDBusiness.Model;
using JTDLib;
using JTDLib.Model;
using Microsoft.EntityFrameworkCore;

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

        public async Task<object[]> GetAll()
        {
            return await _context.Travels.Select(t => new
            {
                t.Id,
                Client = t.Person.Name,
                t.TotalKmStr,
                Origin = t.Origin.Name,
                Destiny = t.Destiny.Name,
                t.LastChange,
                t.DurationStr
            })
            .ToArrayAsync();
        }

        public async Task<Travel> GetTravel(int id)
        {
            return await _context.Travels.Where(t => t.Id == id).FirstOrDefaultAsync();
        }

        public async Task IncludeVehicle(int idTravel, int idVehicle, int idGuest)
        {
            var vehicle = await _vehicleService.Get(idVehicle);
        }

        public async Task<Travel> SaveTravel(TravelDto model)
        {
            var travel = new Travel()
            {
                DestinyId = model.DestinyId,
                DurationStr = model.DurationStr,
                LastChange = DateTime.Now.ToShortDateString(),
                PersonId = model.PersonId,
                TotalKmStr = model.TotalKm,
                RegistrationDate = DateTime.Now.ToShortDateString(),
                OriginId = model.OriginId,
                UserId = 1,
            };

            await _context.Travels.AddAsync(travel);
            await _context.SaveChangesAsync();
            return travel;
        }
    }
}
