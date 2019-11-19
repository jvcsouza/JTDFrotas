using JTDLib.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace JTDBusiness.Interfaces
{
    public interface IPartService
    {
        Task<Part> Save(Part model);
        Task<Part> Get(int id);
        Task<Part> Get(string id);
    }
}
