using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JTDLib;
using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using JTDBusiness.Model;
using JTDWebApp.Models;

namespace JTDBusiness.Interfaces
{
    public class CompanyBusiness : ICompanyService
    {
        private readonly JTDContext _context;
        private readonly ICityService _cityService;

        public CompanyBusiness(JTDContext context, ICityService cityService)
        {
            _context = context;
            _cityService = cityService;
        }

        public async Task<List<CompanyDto>> GetCompanies()
        {
            return await _context.Companies.Select(c => new CompanyDto()
            {
                Act = c.Person.Act,
                City = c.Person.City.Name,
                Cnpj = c.Cnpj,
                Name = c.Person.Name,
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
                         Name = c.Person.Name,
                         Id = c.Id,
                         Phone = c.Person.Phones.Where(p => p.IsMain)
                                                .Select(p => p.PhoneNumber)
                                                .FirstOrDefault()
                     })
                     .FirstOrDefaultAsync();
        }

        public async Task<CompanyDto> SaveCompany(Company model)
        {
            if (!model.Cnpj.IsValid())
                throw new Exception("CNPJ é um campo obrigatorio!");

            model.Cnpj = model.Cnpj.FormatCNPJ();

            var exists = _context.Companies.Any(c => c.Cnpj == model.Cnpj);

            if (exists)
                throw new Exception("Ja existe uma empresa com CNPJ informado.");

            if (!model.Person.Name.IsValid())
                throw new Exception("Nome e um campo obrigatorio");

            var city = await _cityService.GetByName(model.Person.City.Name);

            if (city != null)
                model.Person.City = city;

            await _context.Companies.AddAsync(model);

            return model;
        }
    }
}
