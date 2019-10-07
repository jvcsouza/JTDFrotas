using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class CitiesConfig : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {
            builder.ToTable("Cities");
            builder
                .Property(c => c.Nome)
                .HasColumnName("Name");
            builder
                .Property(c => c.ID)
                .HasColumnName("Id");
            builder
                .Property(c => c.Ativo)
                .HasColumnName("Act");
            builder
                .Property<int>("StateId")
                .HasColumnName("IdState");
        }
    }
}
