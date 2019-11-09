using System;
using System.Collections.Generic;
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

        public async Task<List<CompanyDto>> GetCompanies()
        {
            return await _context.Companies.Select(c => new CompanyDto()
            {
                Act = c.Person.Act,
                City = c.Person.City.Name,
                Cnpj = c.Cnpj,
                FantasyName = c.FantasyName,
                Id = c.Id,
                Phone = c.Person.Phones.Where(p => p.IsMain).Select(p => p.PhoneNumber).FirstOrDefault()
            })
            .ToListAsync();
        }

        public async Task<CompanyDto> GetCompany(int id)
        {
            return await _context.Companies.Where(c => c.Person.Id == id)
                     .Select(c => new CompanyDto()
                     {
                         Act = c.Person.Act,
                         Cnpj = c.Person.Address,
                         City = c.Person.City.Name,
                         FantasyName = c.FantasyName,
                         Id = c.Id,
                         Phone = c.Person.Phones.Where(p => p.IsMain)
                                                .Select(p => p.PhoneNumber)
                                                .FirstOrDefault()
                     })
                     .FirstOrDefaultAsync();
        }
    }
}
