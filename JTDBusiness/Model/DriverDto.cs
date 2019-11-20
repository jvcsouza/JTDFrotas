using JTDLib.Model;
using System.Linq;

namespace JTDBusiness.Model
{
    public class DriverDto : GuestDto
    {
        public int? LicenseId { get; set; }
        public string LicenseType { get; set; }

        public static implicit operator DriverDto(Guest model)
        {
            return new DriverDto()
            {
                Phone = model.Person.Phones.Where(p => p.IsMain).Select(p => p.PhoneNumber).FirstOrDefault(),
                ContactName = model.Person.Phones.Where(p => p.IsMain).Select(p => p.Contact).FirstOrDefault(),
                City = model.Person.City.Name,
                Name = model.Person.Name,
                Cpf = model.Cpf,
                Id = model.Id,
                LicenseId = model.LicenseId,
                LicenseType = model.License.Type
            };
        }
    }
}
