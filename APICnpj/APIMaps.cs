using APIs.models;
using Newtonsoft.Json;

namespace APIs
{
    public class MAPS
    {
        internal static string APIBase = $"https://maps.googleapis.com/maps/api/";
        internal static string KEY = "AIzaSyD7yhJ82pacq_YAidfXTgqYhcjFfTd-E80";

        public static Routes SearchMap(string origem, string destiny)
        {
            var WCliente = Commons.coders();
            string json = WCliente.DownloadString(APIBase + $"distancematrix/json?origins={origem}&destinations={destiny}&key={KEY}");
            return JsonConvert.DeserializeObject<Routes>(json);
        }
        public static Direction GetDirection(string origin, string destiny)
        {
            var WClient = Commons.coders();
            string json = WClient.DownloadString(APIBase + $"directions/json?origin={origin}&destination={destiny}&key={KEY}");
            return JsonConvert.DeserializeObject<Direction>(json);
        }
    }
}
