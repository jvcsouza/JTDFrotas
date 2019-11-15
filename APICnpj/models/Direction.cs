using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace APIs.models
{
    public class Locatization
    {
        public double Lat { get; set; }
        public double Long { get; set; }
    }

    public class Direction
    {
        [JsonIgnore]
        public string Distance => Routes.FirstOrDefault().Legs.FirstOrDefault().Distance.Text;
        [JsonIgnore]
        public string Duration => Routes.FirstOrDefault().Legs.FirstOrDefault().Duration.Text;
        [JsonIgnore]
        public string Destiny => Routes.FirstOrDefault().Legs.FirstOrDefault().EndAddress;
        [JsonIgnore]
        public string Origin => Routes.FirstOrDefault().Legs.FirstOrDefault().StartAddress;
        [JsonIgnore]
        public Locatization Start => new Locatization()
        {
            Lat = Routes.FirstOrDefault().Legs.FirstOrDefault().StartLocation.Lat,
            Long = Routes.FirstOrDefault().Legs.FirstOrDefault().StartLocation.Lng,
        };
        [JsonIgnore]
        public Locatization End => new Locatization()
        {
            Lat = Routes.FirstOrDefault().Legs.FirstOrDefault().EndLocation.Lat,
            Long = Routes.FirstOrDefault().Legs.FirstOrDefault().EndLocation.Lng,
        };
        [JsonIgnore]
        public bool StatusOk => Status == "OK";
        [JsonIgnore]
        public string Copyrights => Routes.FirstOrDefault().Copyrights;

        
        [JsonProperty("geocoded_waypoints")]
        internal List<GeocodedWaypoint> GeocodedWaypoints { get; set; }

        [JsonProperty("routes")]
        internal List<Route> Routes { get; set; }

        [JsonProperty("status")]
        internal string Status { get; set; }
    }

    internal partial class GeocodedWaypoint
    {
        [JsonProperty("geocoder_status")]
        internal string GeocoderStatus { get; set; }

        [JsonProperty("place_id")]
        internal string PlaceId { get; set; }

        [JsonProperty("types")]
        internal List<string> Types { get; set; }
    }

    internal class Route
    {
        [JsonProperty("bounds")]
        internal Bounds Bounds { get; set; }

        [JsonProperty("copyrights")]
        internal string Copyrights { get; set; }

        [JsonProperty("legs")]
        internal List<Leg> Legs { get; set; }
    }

    internal partial class Bounds
    {
        [JsonProperty("northeast")]
        internal Northeast Northeast { get; set; }

        [JsonProperty("southwest")]
        internal Northeast Southwest { get; set; }
    }

    internal partial class Northeast
    {
        [JsonProperty("lat")]
        internal double Lat { get; set; }

        [JsonProperty("lng")]
        internal double Lng { get; set; }
    }

    internal partial class Leg
    {
        [JsonProperty("distance")]
        internal Distance Distance { get; set; }

        [JsonProperty("duration")]
        internal Distance Duration { get; set; }

        [JsonProperty("end_address")]
        internal string EndAddress { get; set; }

        [JsonProperty("end_location")]
        internal Northeast EndLocation { get; set; }

        [JsonProperty("start_address")]
        internal string StartAddress { get; set; }

        [JsonProperty("start_location")]
        internal Northeast StartLocation { get; set; }
    }
}
