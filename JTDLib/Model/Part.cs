using System.Collections.Generic;
namespace JTDLib.Model
{
    public class Part
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Stock { get; set; }
        public decimal Price { get; set; }
        public IList<MaintenancePart> MaintenanceParts { get; set; }

        public override string ToString()
        {
            return $"Peça: {Name}.";
        }
    }
}
