using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JTDLib.Model
{
    public class State
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Initials { get; set; }
        public bool Act { get; set; }
    }
}
