using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JTDLib.Model
{
    public class NaturalPerson
    {
        public int Id { get; set; }
        public string Cpf { get; set; }
        public Person Person { get; set; }
    }
}
