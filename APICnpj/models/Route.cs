using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace APIs.models
{
    public class Routes
    {
        [JsonIgnore]
        public string Destiny => DestinationAddresses.FirstOrDefault();
        [JsonIgnore]
        public string TotalKm => Rows.First().Elements.First().Distance.Text;
        [JsonIgnore]
        public string Duration => Rows.First().Elements.First().Duration.Text;
        [JsonIgnore]
        public string Origin => OriginAddresses.FirstOrDefault();
        [JsonIgnore]
        public bool IsError => Rows.Any(e => e.Elements.Any(el => el.Status == "NOT_FOUND"));

        [JsonProperty("destination_addresses")]
        internal List<string> DestinationAddresses { get; set; }

        [JsonProperty("origin_addresses")]
        internal List<string> OriginAddresses { get; set; }

        [JsonProperty("rows")]
        internal List<Row> Rows { get; set; }

        [JsonProperty("status")]
        internal string Status { get; set; }
    }

    internal partial class Row
    {
        [JsonProperty("elements")]
        internal List<Element> Elements { get; set; }
    }

    internal partial class Element
    {
        [JsonProperty("distance")]
        internal Distance Distance { get; set; }

        [JsonProperty("duration")]
        internal Distance Duration { get; set; }

        [JsonProperty("status")]
        internal string Status { get; set; }
    }

    internal partial class Distance
    {
        [JsonProperty("text")]
        internal string Text { get; set; }

        [JsonProperty("value")]
        internal long Value { get; set; }
    }
}

