using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class PhonesConfig : IEntityTypeConfiguration<Phone>
    {
        public void Configure(EntityTypeBuilder<Phone> builder)
        {
            builder.ToTable("TELEFONE");

            builder.Property(t => t.Contato)
                .HasColumnName("CONTATO");
            builder.Property(t => t.Fone)
                .HasColumnName("TELEFONE");
            builder.Property<int>("PessoaID")
                .HasColumnName("CODPESSOA");
            builder.Property(t => t.ID)
                .HasColumnName("ID");

            builder.HasKey("ID");
        }
    }
}
