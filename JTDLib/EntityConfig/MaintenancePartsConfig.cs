using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    class MaintenancePartsConfig : IEntityTypeConfiguration<PecaManutencao>
    {
        public void Configure(EntityTypeBuilder<PecaManutencao> builder)
        {
            builder.ToTable("PECAMANUTENCAO");
            builder
                .Property(pm => pm.ID)
                .HasColumnName("ID");
            builder
                .Property<int>("CODMANUTENCAO");
            builder
                .Property<int>("CODPECA");
            builder
                .Property(pm => pm.Preco)
                .HasColumnName("PRECO");
            builder
                .Property(pm => pm.Quantidade)
                .HasColumnName("QTD");
            builder
                .HasOne(p => p.Peca)
                .WithMany(m => m.Manutencaos)
                .HasForeignKey("CODPECA");
            builder
                .HasOne(p => p.Manutencao)
                .WithMany(m => m.Pecas)
                .HasForeignKey("CODMANUTENCAO");
        }
    }
}
