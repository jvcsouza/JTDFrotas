using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class MaintenanceConfig : IEntityTypeConfiguration<Maintenance>
    {
        public void Configure(EntityTypeBuilder<Maintenance> builder)
        {
            builder.ToTable("Maintenance");
            builder
                .Property(m => m.ID)
                .HasColumnName("Id");
            builder
                .Property(m => m.UsuarioID)
                .HasColumnName("CODUSUARIO");
            builder
                .Property(m => m.PrecoTotal)
                .HasColumnName("PRECOTOTAL");
            builder
                .Property<int>("CODTIPOMANUTENCAO");
        }
    }
}
