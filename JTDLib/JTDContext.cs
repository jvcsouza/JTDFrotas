using JTDLib.Model;
using Microsoft.EntityFrameworkCore;

namespace JTDLib
{
    public class JTDContext : DbContext
    {
        public DbSet<State> State { get; set; }
        public DbSet<City> Citie { get; set; }
        public DbSet<Part> Part { get; set; }
        public DbSet<Maintenance> Maintenance { get; set; }
        public DbSet<MaintenancePart> MaintenancePart { get; set; }
        public DbSet<MaintenanceType> MaintenanceType { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Brand> Brand { get; set; }
        public DbSet<Model.Model> Models { get; set; }
        public DbSet<Phone> Phone { get; set; }
        public DbSet<NaturalPerson> NaturalPerson { get; set; }
        public DbSet<LegalPerson> LegalPerson { get; set; }
        public DbSet<Person> Person { get; set; }
        public DbSet<Vehicle> Vehicle { get; set; }
        public DbSet<License> License { get; set; }
        public DbSet<VehiclesType> VehiclesType { get; set; }
        public DbSet<Travel> Travel { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(local)\\sqlexpress;Database=JTDFROTAS;Trusted_Connection=true");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
