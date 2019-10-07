using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class LicensesConfig : IEntityTypeConfiguration<License>
    {
        public void Configure(EntityTypeBuilder<License> builder)
        {
            builder.ToTable("TIPOCARTA");

            builder.Property(tc => tc.ID)
                .HasColumnName("ID");
            builder.Property(tc => tc.Tipo)
                .HasColumnName("TIPO");
            builder.Property(tc => tc.Descricao)
                .HasColumnName("DESCRICAO");

            builder.HasKey("ID");
        }
    }
}
