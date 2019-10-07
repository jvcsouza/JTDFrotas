using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class VeiculoConfig : IEntityTypeConfiguration<Vehicle>
    {
        public void Configure(EntityTypeBuilder<Vehicle> builder)
        {
            builder.ToTable("VEICULO");

            builder.Property(v => v.ID)
                .HasColumnName("ID");
            builder.Property<int>("PessoaID")
                .HasColumnName("CODCLIENTE");
            builder.Property<int>("ModeloVeiculoID")
                .HasColumnName("CODMODELOVEICULO");
            builder.Property<int>("TipoVeiculoID")
                .HasColumnName("TIPOVEICULO");
            builder.Property(v => v.Placa)
                .HasColumnName("PLACA");
            builder.Property(v => v.UltimaManutencao)
                .HasColumnName("ULTIMAMANUTENCAO");
            builder.Property(v => v.DataRegistro)
                .HasColumnName("DATARESGISTRO");
            builder.Property(v => v.EmManutencao)
                .HasColumnName("EMMANUTENCAO");
            builder.Property(v => v.DataFinalManutencao)
                .HasColumnName("DATAFINALMANUTENCAO");
            builder.Property(v => v.UltimaAltera)
                .HasColumnName("ULTIMAALTERA");
            builder.Property(v => v.Disponivel)
                .HasColumnName("DISPONIVEL");
            builder.Property(v => v.CustoMedio)
                .HasColumnName("CUSTOMEDIOPKM");

            builder.HasKey("ID");
        }
    }
}
