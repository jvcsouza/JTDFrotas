using JTDBusiness.Interfaces;
using JTDLib;
using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JTDBusiness
{
    public class CityBusiness : ICityService
    {
        private readonly JTDContext _context;

        public CityBusiness(JTDContext context)
        {
            _context = context;
        }

        public void Validade(City city)
        {
            if (city == null)
                throw new ArgumentException("Cidade não encontrada");
        }

        public async Task<City> Get(int id)
        {
            var city = await _context.Cities.Where(c => c.Id == id).FirstOrDefaultAsync();

            Validade(city);

            return city;
        }

        public async Task<City> GetByName(string name)
        {
            var city = await _context.Cities.Where(c => c.Name.Contains(name)).FirstOrDefaultAsync();


            return city;
        }
    }
}
