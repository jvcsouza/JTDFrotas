namespace JTDLib.Model
{
    public class Vehicle
    {
        public int Id { get; set; }
        public Person Person { get; set; }
        public Model Model { get; set; }
        public VehiclesType Type { get; set; }
        public string Board { get; set; }
        public string LastMaintenance { get; set; }
        public string RegistrationDate { get; set; }
        public bool InMaintenance { get; set; }
        public string MaintenanceEndDate { get; set; }
        public string LastChange { get; set; }
        public bool Available { get; set; }
        public decimal AverageCostPerKm { get; set; }
    }
}
