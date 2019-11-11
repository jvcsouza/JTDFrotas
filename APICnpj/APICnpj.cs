using APICnpj.models;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace APIs
{
    public class CNPJ
    {
        public static Company consultaCNPJ(string cnpj)
        {
            var WCliente = Commons.coders();
            cnpj = Regex.Replace(cnpj, "[^0-9]", "");
            string json = WCliente.DownloadString($"https://www.receitaws.com.br/v1/cnpj/{cnpj}");
            return JsonConvert.DeserializeObject<Company>(json);
        }
    }
}
