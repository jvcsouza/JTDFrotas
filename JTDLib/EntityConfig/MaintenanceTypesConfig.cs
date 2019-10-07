using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class MaintenanceTypesConfig : IEntityTypeConfiguration<MaintenanceType>
    {
        public void Configure(EntityTypeBuilder<MaintenanceType> builder)
        {
            builder.ToTable("MaintenanceTypes");
            builder
                .Property(tm => tm.ID)
                .HasColumnName("Id");
            builder
                .Property(tm => tm.Nome)
                .HasColumnName("Name");

            builder.HasOne(e => e.Manutencao)
                    .WithOne(e => e.TipoManutencao)
                    .HasForeignKey<MaintenanceType>("CODTIPOMANUTENCAO");
        }
    }
}
