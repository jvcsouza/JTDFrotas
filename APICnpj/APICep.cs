using Newtonsoft.Json;
using System.Text.RegularExpressions;

namespace APIs
{
    public class CEP
    {
        public static models.CEP consultarCEP(string cep)
        {
            var WCliente = Commons.coders();
            cep = Regex.Replace(cep, "[^0-9]", "");
            string json = WCliente.DownloadString($"https://viacep.com.br/ws/{cep}/json/");
            return JsonConvert.DeserializeObject<models.CEP>(json);
        }
    }
}
