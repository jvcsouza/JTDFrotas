using System.Net;
using System.Text;

namespace APIs
{
    internal class Commons
    {
        private static WebClient WCliente = new WebClient();
        internal static WebClient coders()
        {
            WCliente.Encoding = Encoding.UTF8;
            WCliente.Headers.Add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36");
            WCliente.Headers.Add("accept-language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
            return WCliente;
        }
    }
}
