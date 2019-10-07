using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class NaturalPersonConfig : IEntityTypeConfiguration<NaturalPerson>
    {
        public void Configure(EntityTypeBuilder<NaturalPerson> builder)
        {
            builder.ToTable("FISICA");

            builder.Property(f => f.ID)
                .HasColumnName("ID");
            builder.Property(f => f.Cpf)
                .HasColumnName("CPF");
            builder.Property<int>("PessoaID")
                .HasColumnName("CÒDPESSOA");

            builder.HasKey("ID");
        }
    }
}
