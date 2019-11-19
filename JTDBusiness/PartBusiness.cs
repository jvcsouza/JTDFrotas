using System;
using System.Linq;
using System.Threading.Tasks;
using JTDBusiness.Interfaces;
using JTDLib;
using JTDLib.Model;
using Microsoft.EntityFrameworkCore;

namespace JTDBusiness
{
    public class PartBusiness : IPartService
    {
        private readonly JTDContext _context;

        public PartBusiness(JTDContext context)
        {
            _context = context;
        }

        public async Task<Part> Get(int id)
        {
            var part = await _context.Parts.Where(p => p.Id == id).FirstOrDefaultAsync();

            if (part == null)
                throw new Exception("Peça solicitada não foi encontrada no ID: " + id);

            return part;
        }

        public Task<Part> Get(string id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<Part> Save(Part model)
        {
            //Validações Necessarias;
            
            return await Task.FromResult(model);
        }
    }
}
