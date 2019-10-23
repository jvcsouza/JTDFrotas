using JTDLib.Model;
using System.Collections.Generic;

namespace JTDFrotas.Business.Interfaces
{
    public interface IPersonService
    {
        void Register(Person person);
        Person GetPerson(int id);
        List<Person> GetAll();
    }
}
