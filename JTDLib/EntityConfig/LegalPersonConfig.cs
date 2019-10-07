using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    class LegalPersonConfig : IEntityTypeConfiguration<LegalPerson>
    {
        public void Configure(EntityTypeBuilder<LegalPerson> builder)
        {
            builder.ToTable("JURIDICA");

            builder.Property(j => j.Atividade)
                .HasColumnName("ATIVIDADE");
            builder.Property(j => j.Cnpj)
                .HasColumnName("CNPJ");
            builder.Property(j => j.ID)
                .HasColumnName("ID");
            builder.Property<int>("PessoaID")
                .HasColumnName("CODPESSOA");
            builder.Property(j => j.Fantasia)
                .HasColumnName("FANTASIA");

            builder.HasKey("ID");
        }
    }
}
