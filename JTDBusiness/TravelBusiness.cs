using JTDBusiness.Interfaces;
using JTDLib;

namespace JTDBusiness
{
    public class TravelBusiness : ITravelService
    {
        private readonly JTDContext _context;

        public TravelBusiness(JTDContext context)
        {
            _context = context;
        }
    }
}
