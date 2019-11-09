using System.Collections.Generic;

namespace JTDLib.Model
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public City City { get; set; }
        public List<Phone> Phones { get; set; }
        public string Address { get; set; }
        public string Number { get; set; }
        public bool Act { get; set; }
    }
}
