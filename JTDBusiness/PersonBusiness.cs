using JTDLib;
using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JTDBusiness
{
    public class PersonBusiness : IPersonService
    {
        JTDContext _context;

        public PersonBusiness(JTDContext context)
        {
            _context = context;
        }

        public Person GetPerson(int id)
        {
            return _context.Persons.Where(p => p.Id == id).FirstOrDefault();
        }

        public async Task<List<Person>> GetAll()
        {
            var con = _context;
            var person = _context.Persons;
            var l = await person.ToListAsync();
            return l;
        }

        public void Register(Person person)
        {
            _context.Add(person);
        }
    }
}