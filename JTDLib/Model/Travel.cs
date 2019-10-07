namespace JTDLib.Model
{
    public class Travel
    {
        public int Id { get; set; }
        public Person Person { get; set; }
        public City Origin { get; set; }
        public City Destiny { get; set; }
        public decimal TotalKm { get; set; }
        public string RegistrationDate { get; set; }
        public string LastChange { get; set; }
        public User User { get; set; }
    }
}
