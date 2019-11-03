using JTDLib;
using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JTDBusiness
{
    public abstract class PersonBusiness : IPersonService
    {
        JTDContext _context;

        public PersonBusiness(JTDContext context)
        {
            _context = context;
        }

        public Person GetPerson(int id)
        {
            return _context.Person.Where(p => p.Id == id).FirstOrDefault();
        }

        public async Task<List<Person>> GetAll()
        {
            return await _context.Person.ToListAsync();
        }

        public void Register(Person person)
        {
            _context.Add(person);
        }
    }
}