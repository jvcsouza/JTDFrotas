using System.Collections.Generic;

namespace JTDLib.Model
{
    public class Maintenance
    {
        public int Id { get; set; }
        public decimal TotalCust { get; set; }
        public int UserId { get; set; }
        public MaintenanceType MaintenanceType { get; set; }
        public User User { get; set; }
        public IList<MaintenancePart> Parts { get; set; }
    }
}
