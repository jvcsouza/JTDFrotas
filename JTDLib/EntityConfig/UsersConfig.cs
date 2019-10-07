using JTDLib.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace JTDLib.EntityConfig
{
    public class UsersConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("USUARIO");
            builder
                .Property(u => u.ID)
                .HasColumnName("ID");
            builder
                .Property(u => u.Nome)
                .HasColumnName("NOME");
            builder
                .Property(u => u.Senha)
                .HasColumnName("SENHA");
        }
    }
}
