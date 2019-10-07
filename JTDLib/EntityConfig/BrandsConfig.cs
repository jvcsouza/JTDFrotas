using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class BrandsConfig : IEntityTypeConfiguration<Brand>
    {
        public void Configure(EntityTypeBuilder<Brand> builder)
        {
            builder.ToTable("Brands");

            builder.Property(mv => mv.Id)
               .HasColumnName("Id");
            builder.Property(mv => mv.Name)
                .HasColumnName("Name");
            builder.Property(mv => mv.Act)
                .HasColumnName("Act");

            builder.HasKey("ID");
        }
    }
}
