using JTDLib.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace JTDBusiness
{
    public class CompanyDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Cnpj { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public bool Act { get; set; }

        public static implicit operator CompanyDto(Company c)
        {
            return new CompanyDto()
            {
                Act = c.Person.Act,
                City = c.Person.City.Name,
                Cnpj = c.Cnpj,
                Name = c.Person.Name,
                Phone = c.Person.Phones.Where(f => f.IsMain).FirstOrDefault().PhoneNumber,
                Id = c.Id
            };
        }
    }
}
