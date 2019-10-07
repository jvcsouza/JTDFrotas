using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JTDLib.Model
{
    public class MaintenancePart
    {
        public int Id { get; set; }
        public int Amont { get; set; }
        public decimal Price { get; set; }
        public Part Part { get; set; }
        public Maintenance Maintenance { get; set; }
    }
}
