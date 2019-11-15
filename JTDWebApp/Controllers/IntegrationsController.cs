using JTDLib.Model;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using APIs;
using System.Text.RegularExpressions;
using System;
using APIs.models;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/integrations")]
    public class IntegrationsController : ApiController
    {
        [HttpGet]
        [Route("cnpj/{cnpj}")]
        public async Task<IHttpActionResult> GetCompany([FromUri]string cnpj)
        {
            var company = CNPJ.SearchCNPJ(cnpj);

            if (!company.IsError)
                return Ok(new Company()
                {
                    Activity = company.AtividadePrincipal.First().Text,
                    Cnpj = company.Cnpj,
                    FantasyName = !string.IsNullOrWhiteSpace(company.Fantasia)
                                    ? company.Fantasia : company.Nome,
                    Person = new Person()
                    {
                        City = new City()
                        {
                            Name = company.Municipio,
                            State = new State() { Initials = company.Uf }
                        },
                        Name = company.Nome,
                        Address = company.Logradouro,
                        Number = company.Numero,
                        Act = true,
                        Phones = company.Telefone.Split('/').Select((t, i) => new Phone()
                        {
                            IsMain = i == 0,
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
            var route = MAPS.SearchMap(dto.Origin, dto.Destiny);

            if (route.IsError)
                throw new Exception("Rota não existe ou não foi encontrada");

            return Ok(new
            {
                route.Destiny,
                route.TotalKm,
                route.Duration,
                route.Origin,
            });
        }

        [HttpGet]
        [Route("maps/direction/")]
        public async Task<IHttpActionResult> GetDirection([FromUri]TravelModel dto)
        {
            var direction = MAPS.GetDirection(dto.Origin, dto.Destiny);

            if (!direction.StatusOk)
                throw new Exception("Rota não existe ou não foi encontrada");

            return Ok(new
            {
                direction.Distance,
                direction.Duration,
                direction.Destiny,
                direction.Origin,
                StartAdress = new Locatization()
                {
                    Lat = direction.Start.Lat,
                    Long = direction.Start.Long,
                },
                EndAdress = new Locatization()
                {
                    Lat = direction.End.Lat,
                    Long = direction.End.Long,
                },
                direction.StatusOk,
                direction.Copyrights
            });
        }

        [HttpGet]
        [Route("cep/{cep}")]
        public async Task<IHttpActionResult> GetCEP([FromUri] string cep)
        {
            cep = Regex.Replace(cep, "[^0-9]", "");
            if (string.IsNullOrEmpty(cep.Trim()))
                return BadRequest("CEP Inválido ou não encontrado");

            var dto = APIs.CEP.SearchCEP(cep);
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