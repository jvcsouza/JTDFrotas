using System;
using System.Linq;
using System.Threading.Tasks;
using JTDLib;
using Microsoft.EntityFrameworkCore;

namespace JTDBusiness.Interfaces
{
    public class CompanyBusiness : ICompanyService
    {
        private readonly JTDContext _context;

        public CompanyBusiness(JTDContext context)
        {
            _context = context;
        }

        public async Task<CompanyDto> GetCompany(int id)
        {
            var res = await _context.Companies.Where(lp => lp.Person.Id == id)
                     .Select(lp => new CompanyDto()
                     {
                         Act = lp.Person.Act,
                         Address = lp.Person.Address,
                         City = lp.Person.Cities.Name,
                         Name = lp.Person.Name,
                         Id = lp.Person.Id,
                         Number = lp.Person.Number
                     })
                     .FirstOrDefaultAsync();
            if (res == null)
                throw new Exception("NÃO EXISTE!");
            return res;
        }
    }
}
