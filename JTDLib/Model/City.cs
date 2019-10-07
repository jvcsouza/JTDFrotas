using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using Microsoft.EntityFrameworkCore;

namespace JTDLib.Model
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public State State { get; set; }
        public bool Act { get; set; }
    }
}