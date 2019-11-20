using System;
using System.Linq;
using System.Threading.Tasks;
using JTDBusiness.Interfaces;
using JTDLib;
using JTDLib.Model;
using Microsoft.EntityFrameworkCore;

namespace JTDBusiness
{
    public class VehicleBusiness : IVehicleService
    {
        private readonly JTDContext _context;

        public VehicleBusiness(JTDContext context)
        {
            _context = context;
        }

        private bool Validate(Vehicle vehicle)
        {
            if (vehicle == null)
                throw new Exception("Veiculo não encontrado");





            return true;
        }

        public async Task<Vehicle> Get(int id)
        {
            var vehicle = await _context.Vehicles.Where(v => v.Id == id).FirstOrDefaultAsync();

            Validate(vehicle);

            return vehicle;
        }

        public async Task<Vehicle> GetAvailable(int id)
        {
            var vehicle = await _context.Vehicles
                                        .Where(v => v.Id == id)
                                        .Where(v => v.Available)
                                        .Where(v => !v.InMaintenance)
                                        .FirstOrDefaultAsync();
            Validate(vehicle);

            return vehicle;
        }

        public async Task ChangeAvailable(int id, bool act = false)
        {
            var vehicle = await _context.Vehicles
                                        .Where(v => v.Id == id)
                                        .FirstOrDefaultAsync();
            Validate(vehicle);

            vehicle.Available = act;

            await _context.SaveChangesAsync();
        }
    }
}
