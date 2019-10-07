using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JTDLib.Model
{
    public class VehiclesType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public VehiclesType Type { get; set; }
        public bool Act { get; set; }
    }
}
