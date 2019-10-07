using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class VehiclesTypeConfig : IEntityTypeConfiguration<VehiclesType>
    {
        public void Configure(EntityTypeBuilder<VehiclesType> builder)
        {
            builder.ToTable("TIPOVEICULO");

            builder.Property(tv => tv.ID)
                .HasColumnName("ID");
            builder.Property(tv => tv.Nome)
                .HasColumnName("NOME");
            builder.Property<int>("TipoCartaID")
                .HasColumnName("CODTIPOCARTA");
            builder.Property(tv => tv.Ativo)
                .HasColumnName("ATIVO");

            builder.HasKey("ID");
        }
    }
}
