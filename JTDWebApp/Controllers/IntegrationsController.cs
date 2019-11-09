using API;
using JTDLib.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace JTDWebApp.Controllers
{
    [RoutePrefix("api/integrations")]
    public class IntegrationsController : ApiController
    {
        [HttpGet]
        [Route("cnpj/{cnpj}")]
        public async Task<IHttpActionResult> getCompany([FromUri]string cnpj)
        {
            var company = await API.APICnpj.consultaCNPJ(cnpj);

            if (company != null)
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
                        Phones = new List<Phone>() {
                            new Phone()
                        {
                            PhoneNumber = company.Telefone
                        }
                        }
                    }
                });
            return BadRequest("CNPJ: " + cnpj + " não encontrado.");
        }
    }
}