using JTDLib.Model;
using Microsoft.EntityFrameworkCore;

namespace JTDLib
{
    public class JTDContext : DbContext
    {
        public DbSet<State> States { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Part> Parts { get; set; }
        public DbSet<Maintenance> Maintenances { get; set; }
        public DbSet<MaintenancePart> MaintenanceParts { get; set; }
        public DbSet<MaintenanceType> MaintenanceTypes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Model.Model> Models { get; set; }
        public DbSet<Phone> Phones { get; set; }
        public DbSet<Guest> Guests { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<License> Licenses { get; set; }
        public DbSet<VehiclesType> VehiclesTypes { get; set; }
        public DbSet<Travel> Travels { get; set; }

        public JTDContext()
        {

        }

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
