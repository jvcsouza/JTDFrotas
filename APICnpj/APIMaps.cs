using API.models;
using Newtonsoft.Json;
using System;

namespace APIs
{
    public class MAPS
    {
        public static Route consultaMaps(string origem, string destino)
        {
            var WCliente = Commons.coders();
            string json = WCliente.DownloadString($"https://maps.googleapis.com/maps/api/distancematrix/json?origins={origem}&destinations={destino}&key=AIzaSyD7yhJ82pacq_YAidfXTgqYhcjFfTd-E80");
            return JsonConvert.DeserializeObject<Route>(json);
        }
    }
}
