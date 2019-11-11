using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace API.models
{
    public class Route
    {
        [JsonProperty("destination_addresses")]
        public List<string> DestinationAddresses { get; set; }

        [JsonProperty("origin_addresses")]
        public List<string> OriginAddresses { get; set; }

        [JsonProperty("rows")]
        public List<Row> Rows { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonIgnore]
        public bool IsError => Rows.Any(e => e.Elements.Any(el => el.Status == "NOT_FOUND"));
    }

    public partial class Row
    {
        [JsonProperty("elements")]
        public List<Element> Elements { get; set; }
    }

    public partial class Element
    {
        [JsonProperty("distance")]
        public Distance Distance { get; set; }

        [JsonProperty("duration")]
        public Distance Duration { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }
    }

    public partial class Distance
    {
        [JsonProperty("text")]
        public string Text { get; set; }

        [JsonProperty("value")]
        public long Value { get; set; }
    }
}

