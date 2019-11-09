using System.Collections.Generic;
using System.Threading.Tasks;

namespace JTDBusiness.Interfaces
{
    public interface ICompanyService
    {
        Task<CompanyDto> GetCompany(int id);
        Task<List<CompanyDto>> GetCompanies();
    }
}
