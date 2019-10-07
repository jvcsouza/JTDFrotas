using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class PersonConfig : IEntityTypeConfiguration<Person>
    {
        public void Configure(EntityTypeBuilder<Person> builder)
        {
            builder.ToTable("PESSOA");

            builder.Property(p => p.ID)
                .HasColumnName("ID");
            builder.Property(p => p.Nome)
                .HasColumnName("NOME");
            builder.Property<int>("CidadeID")
                .HasColumnName("CODCIDADE");
            builder.Property(p => p.Endereco)
                .HasColumnName("LOGRADOURO");
            builder.Property(p => p.Ativo)
                .HasColumnName("ATIVO");
            builder.Property(p => p.Numero)
                .HasColumnName("NUM");

            builder.HasKey("ID");
        }
    }
}
