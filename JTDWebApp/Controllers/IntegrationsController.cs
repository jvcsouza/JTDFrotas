using JTDLib.Model;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using APIs;
using System.Text.RegularExpressions;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/integrations")]
    public class IntegrationsController : ApiController
    {
        [HttpGet]
        [Route("cnpj/{cnpj}")]
        public async Task<IHttpActionResult> GetCompany([FromUri]string cnpj)
        {
            var company = CNPJ.consultaCNPJ(cnpj);

            if (!company.IsError)
                return Ok(new Company()
                {
                    Activity = company.AtividadePrincipal.First().Text,
                    Cnpj = company.Cnpj,
                    FantasyName = company.Fantasia,
                    Person = new Person()
                    {
                        City = new City()
                        {
                            Name = company.Municipio
                        },
                        Name = company.Nome,
                        Address = company.Logradouro,
                        Number = company.Numero,
                        Act = true,
                        Phones = company.Telefone.Split('/').Select((t, i) => new Phone()
                        {
                            Contact = company.Qsa[i]?.Nome ?? "",
                            PhoneNumber = t.Trim()
                        })
                        .ToList()
                    }
                });
            return BadRequest("CNPJ: <strong>" + cnpj + "</strong> não encontrado.");
        }

        [HttpGet]
        [Route("maps/")]
        public async Task<IHttpActionResult> GetMaps([FromUri]TravelModel dto)
        {
            var route = MAPS.consultaMaps(dto.Origin, dto.Destiny);

            if (route.IsError)
                return BadRequest("Rota não existe ou não foi encontrada");

            return Ok(new
            {
                Destiny = route.DestinationAddresses.FirstOrDefault(),
                TotalKm = route.Rows.First().Elements.First().Distance.Text,
                Duration = route.Rows.First().Elements.First().Duration.Text,
                Origin = route.OriginAddresses.FirstOrDefault(),
            });
        }

        [HttpGet]
        [Route("cep/{cep}")]
        public async Task<IHttpActionResult> GetCEP([FromUri] string cep)
        {
            cep = Regex.Replace(cep, "[^0-9]", "");
            if (string.IsNullOrEmpty(cep.Trim()))
                return BadRequest("CEP Inválido ou não encontrado");

            var dto = CEP.consultarCEP(cep);
            return Ok(new
            {
                CEP = dto.Cep,
                Locality = dto.Localidade,
                Address = dto.Logradouro,
                UF = dto.Uf,
                Neighborhood = dto.Bairro
            });
        }
    }

    public class TravelModel
    {
        public string Origin { get; set; }
        public string Destiny { get; set; }
    }
}