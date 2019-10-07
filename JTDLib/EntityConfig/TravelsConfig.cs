using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class TravelsConfig : IEntityTypeConfiguration<Travel>
    {
        public void Configure(EntityTypeBuilder<Travel> builder)
        {
            builder.ToTable("VIAGEM");

            builder.Property(v => v.ID)
                .HasColumnName("ID");
            builder.Property<int>("DestinoID")
                .HasColumnName("DESTINO");
            builder.Property<int>("OrigemID")
                .HasColumnName("SAIDA");
            builder.Property(v => v.Kmtotal)
                .HasColumnName("KMTOTAL");
            builder.Property(v => v.DataRegistro)
                .HasColumnName("DATARESGISTRO");
            builder.Property(v => v.UltimaAltera)
                .HasColumnName("ULTIMAALTERA");
            builder.Property<int>("UsuarioID")
                .HasColumnName("CODUSUARIO");

            builder.HasKey("ID");
        }
    }
}
