using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using JTDLib;

namespace JTDLib.Migrations
{
    [DbContext(typeof(JTDContext))]
    [Migration("20191023161731_addUsernameToUsers")]
    partial class addUsernameToUsers
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("JTDLib.Model.Brand", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Act");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Brand");
                });

            modelBuilder.Entity("JTDLib.Model.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Act");

                    b.Property<string>("Name");

                    b.Property<int?>("StateId");

                    b.HasKey("Id");

                    b.HasIndex("StateId");

                    b.ToTable("Citie");
                });

            modelBuilder.Entity("JTDLib.Model.LegalPerson", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Activity");

                    b.Property<string>("Cnpj");

                    b.Property<string>("FantasyName");

                    b.Property<int?>("PersonId");

                    b.HasKey("Id");

                    b.HasIndex("PersonId");

                    b.ToTable("LegalPerson");
                });

            modelBuilder.Entity("JTDLib.Model.License", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.ToTable("License");
                });

            modelBuilder.Entity("JTDLib.Model.Maintenance", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("MaintenanceTypeId");

                    b.Property<decimal>("TotalCust");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("MaintenanceTypeId");

                    b.HasIndex("UserId");

                    b.ToTable("Maintenance");
                });

            modelBuilder.Entity("JTDLib.Model.MaintenancePart", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Amont");

                    b.Property<int?>("MaintenanceId");

                    b.Property<int?>("PartId");

                    b.Property<decimal>("Price");

                    b.HasKey("Id");

                    b.HasIndex("MaintenanceId");

                    b.HasIndex("PartId");

                    b.ToTable("MaintenancePart");
                });

            modelBuilder.Entity("JTDLib.Model.MaintenanceType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("MaintenanceType");
                });

            modelBuilder.Entity("JTDLib.Model.Model", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Act");

                    b.Property<int?>("BrandId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("BrandId");

                    b.ToTable("Models");
                });

            modelBuilder.Entity("JTDLib.Model.NaturalPerson", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Cpf");

                    b.Property<int?>("PersonId");

                    b.HasKey("Id");

                    b.HasIndex("PersonId");

                    b.ToTable("NaturalPerson");
                });

            modelBuilder.Entity("JTDLib.Model.Part", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<decimal>("Price");

                    b.Property<float>("Stock");

                    b.HasKey("Id");

                    b.ToTable("Part");
                });

            modelBuilder.Entity("JTDLib.Model.Person", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Act");

                    b.Property<string>("Address");

                    b.Property<int?>("CitiesId");

                    b.Property<string>("Name");

                    b.Property<string>("Number");

                    b.HasKey("Id");

                    b.HasIndex("CitiesId");

                    b.ToTable("Person");
                });

            modelBuilder.Entity("JTDLib.Model.Phone", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Contact");

                    b.Property<int?>("PersonId");

                    b.Property<string>("PhoneNumber");

                    b.HasKey("Id");

                    b.HasIndex("PersonId");

                    b.ToTable("Phone");
                });

            modelBuilder.Entity("JTDLib.Model.State", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Act");

                    b.Property<string>("Initials");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("State");
                });

            modelBuilder.Entity("JTDLib.Model.Travel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("DestinyId");

                    b.Property<string>("LastChange");

                    b.Property<int?>("OriginId");

                    b.Property<int?>("PersonId");

                    b.Property<string>("RegistrationDate");

                    b.Property<decimal>("TotalKm");

                    b.Property<int?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("DestinyId");

                    b.HasIndex("OriginId");

                    b.HasIndex("PersonId");

                    b.HasIndex("UserId");

                    b.ToTable("Travel");
                });

            modelBuilder.Entity("JTDLib.Model.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("JTDLib.Model.Vehicle", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Available");

                    b.Property<decimal>("AverageCostPerKm");

                    b.Property<string>("Board");

                    b.Property<bool>("InMaintenance");

                    b.Property<string>("LastChange");

                    b.Property<string>("LastMaintenance");

                    b.Property<string>("MaintenanceEndDate");

                    b.Property<int?>("ModelId");

                    b.Property<int?>("PersonId");

                    b.Property<string>("RegistrationDate");

                    b.Property<int?>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("ModelId");

                    b.HasIndex("PersonId");

                    b.HasIndex("TypeId");

                    b.ToTable("Vehicle");
                });

            modelBuilder.Entity("JTDLib.Model.VehiclesType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Act");

                    b.Property<string>("Name");

                    b.Property<int?>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("TypeId");

                    b.ToTable("VehiclesType");
                });

            modelBuilder.Entity("JTDLib.Model.City", b =>
                {
                    b.HasOne("JTDLib.Model.State", "State")
                        .WithMany()
                        .HasForeignKey("StateId");
                });

            modelBuilder.Entity("JTDLib.Model.LegalPerson", b =>
                {
                    b.HasOne("JTDLib.Model.Person", "Person")
                        .WithMany()
                        .HasForeignKey("PersonId");
                });

            modelBuilder.Entity("JTDLib.Model.Maintenance", b =>
                {
                    b.HasOne("JTDLib.Model.MaintenanceType", "MaintenanceType")
                        .WithMany()
                        .HasForeignKey("MaintenanceTypeId");

                    b.HasOne("JTDLib.Model.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("JTDLib.Model.MaintenancePart", b =>
                {
                    b.HasOne("JTDLib.Model.Maintenance", "Maintenance")
                        .WithMany("Parts")
                        .HasForeignKey("MaintenanceId");

                    b.HasOne("JTDLib.Model.Part", "Part")
                        .WithMany("MaintenanceParts")
                        .HasForeignKey("PartId");
                });

            modelBuilder.Entity("JTDLib.Model.Model", b =>
                {
                    b.HasOne("JTDLib.Model.Brand", "Brand")
                        .WithMany()
                        .HasForeignKey("BrandId");
                });

            modelBuilder.Entity("JTDLib.Model.NaturalPerson", b =>
                {
                    b.HasOne("JTDLib.Model.Person", "Person")
                        .WithMany()
                        .HasForeignKey("PersonId");
                });

            modelBuilder.Entity("JTDLib.Model.Person", b =>
                {
                    b.HasOne("JTDLib.Model.City", "Cities")
                        .WithMany()
                        .HasForeignKey("CitiesId");
                });

            modelBuilder.Entity("JTDLib.Model.Phone", b =>
                {
                    b.HasOne("JTDLib.Model.Person", "Person")
                        .WithMany()
                        .HasForeignKey("PersonId");
                });

            modelBuilder.Entity("JTDLib.Model.Travel", b =>
                {
                    b.HasOne("JTDLib.Model.City", "Destiny")
                        .WithMany()
                        .HasForeignKey("DestinyId");

                    b.HasOne("JTDLib.Model.City", "Origin")
                        .WithMany()
                        .HasForeignKey("OriginId");

                    b.HasOne("JTDLib.Model.Person", "Person")
                        .WithMany()
                        .HasForeignKey("PersonId");

                    b.HasOne("JTDLib.Model.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("JTDLib.Model.Vehicle", b =>
                {
                    b.HasOne("JTDLib.Model.Model", "Model")
                        .WithMany()
                        .HasForeignKey("ModelId");

                    b.HasOne("JTDLib.Model.Person", "Person")
                        .WithMany()
                        .HasForeignKey("PersonId");

                    b.HasOne("JTDLib.Model.VehiclesType", "Type")
                        .WithMany()
                        .HasForeignKey("TypeId");
                });

            modelBuilder.Entity("JTDLib.Model.VehiclesType", b =>
                {
                    b.HasOne("JTDLib.Model.VehiclesType", "Type")
                        .WithMany()
                        .HasForeignKey("TypeId");
                });
        }
    }
}
