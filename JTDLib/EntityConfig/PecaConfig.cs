using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class PecaConfig : IEntityTypeConfiguration<Part>
    {
        public void Configure(EntityTypeBuilder<Part> builder)
        {
            builder.ToTable("PECA");
            builder
                .Property(c => c.Nome)
                .HasColumnName("NOME");
            builder
                .Property(c => c.ID)
                .HasColumnName("ID");
            builder
                .Property(c => c.Estoque)
                .HasColumnName("ESTOQUE");
            builder
                .Property(c => c.Preco)
                .HasColumnName("PRECO");
        }
    }
}
