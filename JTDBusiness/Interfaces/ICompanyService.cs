using System.Threading.Tasks;

namespace JTDBusiness.Interfaces
{
    public interface ICompanyService
    {
        Task<CompanyDto> GetCompany(int id);
    }
}
