using JTDLib.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JTDBusiness
{
    public interface IPersonService
    {
        void Register(Person person);
        Person GetPerson(int id);
        Task<List<Person>> GetAll();
    }
}
