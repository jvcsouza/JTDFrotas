namespace JTDBusiness.Model
{
    public class TravelDto
    {
        public int Id { get; set; }
        public int PersonId { get; set; }
        public int OriginId { get; set; }
        public int DestinyId { get; set; }
        public string TotalKm { get; set; }
        public string DurationStr { get; set; }
        public double DurationValue { get; set; }
    }
}