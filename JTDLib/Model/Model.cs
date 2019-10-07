using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace JTDLib.Model
{
    public class Model
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Brand Brand { get; set; }
        public bool Act { get; set; }
    }
}
