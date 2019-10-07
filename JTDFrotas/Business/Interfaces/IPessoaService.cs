using JTDLib.Model;

namespace JTDFrotas.Business.Interfaces
{
    public interface IPersonService
    {
        void Register(Person person);
        Person GetPerson(int id);
    }
}
