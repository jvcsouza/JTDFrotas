using JTDFrotas.Business.Interfaces;
using JTDLib;
using JTDLib.Model;
using System.Linq;

namespace JTDFrotas.Business
{
    public class PessoaBusiness : IPersonService
    {
        JTDContext _context;

        public PessoaBusiness(JTDContext context)
        {
            _context = context;
        }

        public Person GetPerson(int id)
        {
            //return _context.Persons.FirstOrDefault(p => p.Id == id);
            return _context.Person.Where(p => p.Id == id).FirstOrDefault();
        }

        public void Register(Person person)
        {
            _context.Add(person);
        }
    }
}