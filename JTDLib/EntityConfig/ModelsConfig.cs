using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class ModelsConfig : IEntityTypeConfiguration<Model.Model>
    {
        public void Configure(EntityTypeBuilder<Model.Model> builder)
        {
            builder.ToTable("ModeloVeiculo");

            builder.Property(mv => mv.ID)
                .HasColumnName("ID");
            builder.Property(mv => mv.Nome)
                .HasColumnName("NOME");
            builder.Property(mv => mv.Ativo)
                .HasColumnName("ATIVO");
            builder
                .Property<int>("MarcaID")
                .HasColumnName("CODMARCAVEICULO");

            builder.HasKey("ID");
        }
    }
}
