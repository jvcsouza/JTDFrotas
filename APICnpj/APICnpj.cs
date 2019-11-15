using APICnpj.models;
using Newtonsoft.Json;
using System.Text.RegularExpressions;

namespace APIs
{
    public class CNPJ
    {
        public static Company SearchCNPJ(string cnpj)
        {
            var WCliente = Commons.coders();
            cnpj = Regex.Replace(cnpj, "[^0-9]", "");
            string json = WCliente.DownloadString($"https://www.receitaws.com.br/v1/cnpj/{cnpj}");
            return JsonConvert.DeserializeObject<Company>(json);
        }
    }
}
