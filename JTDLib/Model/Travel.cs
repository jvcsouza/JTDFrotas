using System;

namespace JTDLib.Model
{
    public class Travel
    {
        public int Id { get; set; }
        public int PersonId { get; set; }
        public Person Person { get; set; }
        public int OriginId { get; set; }
        public City Origin { get; set; }
        public int DestinyId { get; set; }
        public City Destiny { get; set; }
        public decimal TotalKm { get; set; }
        public string TotalKmStr { get; set; }
        public string RegistrationDate { get; set; }
        public string LastChange { get; set; }
        public DateTime Duration { get; set; }
        public string DurationStr { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
