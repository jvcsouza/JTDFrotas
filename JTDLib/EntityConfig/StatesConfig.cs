using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class StatesConfig : IEntityTypeConfiguration<State>
    {
        public void Configure(EntityTypeBuilder<State> builder)
        {
            builder.ToTable("ESTADO");

            builder
                .Property(a => a.ID)
                .HasColumnName("ID");
            builder
                .Property(a => a.Ativo)
                .HasColumnName("ATIVO");
            builder
                .Property(a => a.Nome)
                .HasColumnName("NOME")
                .HasColumnType("varchar(50)")
                .IsRequired();
            builder
                .Property(a => a.Sigla)
                .HasColumnName("UF");
            /*builder
                .HasOne(e => e.Cidade)
                .WithMany(e => e.)*/

            builder.HasKey("ID");
        }
    }
}
