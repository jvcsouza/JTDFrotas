using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JTDLib.Migrations
{
    public partial class addUsernameToUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cities_States_StateId",
                table: "Cities");

            migrationBuilder.DropForeignKey(
                name: "FK_Maintenance_MaintenanceTypes_MaintenanceTypeId",
                table: "Maintenance");

            migrationBuilder.DropForeignKey(
                name: "FK_Maintenance_Users_UserId",
                table: "Maintenance");

            migrationBuilder.DropForeignKey(
                name: "FK_MaintenanceParts_Maintenance_MaintenanceId",
                table: "MaintenanceParts");

            migrationBuilder.DropForeignKey(
                name: "FK_MaintenanceParts_Parts_PartId",
                table: "MaintenanceParts");

            migrationBuilder.DropForeignKey(
                name: "FK_Models_Brands_BrandId",
                table: "Models");

            migrationBuilder.DropForeignKey(
                name: "FK_Person_Cities_CitiesId",
                table: "Person");

            migrationBuilder.DropForeignKey(
                name: "FK_Phones_Person_PersonId",
                table: "Phones");

            migrationBuilder.DropForeignKey(
                name: "FK_Travels_Cities_DestinyId",
                table: "Travels");

            migrationBuilder.DropForeignKey(
                name: "FK_Travels_Cities_OriginId",
                table: "Travels");

            migrationBuilder.DropForeignKey(
                name: "FK_Travels_Person_PersonId",
                table: "Travels");

            migrationBuilder.DropForeignKey(
                name: "FK_Travels_Users_UserId",
                table: "Travels");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_Models_ModelId",
                table: "Vehicles");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_Person_PersonId",
                table: "Vehicles");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_VehiclesType_TypeId",
                table: "Vehicles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Vehicles",
                table: "Vehicles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Travels",
                table: "Travels");

            migrationBuilder.DropPrimaryKey(
                name: "PK_States",
                table: "States");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Phones",
                table: "Phones");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Parts",
                table: "Parts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MaintenanceTypes",
                table: "MaintenanceTypes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MaintenanceParts",
                table: "MaintenanceParts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Licenses",
                table: "Licenses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cities",
                table: "Cities");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Brands",
                table: "Brands");

            migrationBuilder.RenameTable(
                name: "Vehicles",
                newName: "Vehicle");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "User");

            migrationBuilder.RenameTable(
                name: "Travels",
                newName: "Travel");

            migrationBuilder.RenameTable(
                name: "States",
                newName: "State");

            migrationBuilder.RenameTable(
                name: "Phones",
                newName: "Phone");

            migrationBuilder.RenameTable(
                name: "Parts",
                newName: "Part");

            migrationBuilder.RenameTable(
                name: "MaintenanceTypes",
                newName: "MaintenanceType");

            migrationBuilder.RenameTable(
                name: "MaintenanceParts",
                newName: "MaintenancePart");

            migrationBuilder.RenameTable(
                name: "Licenses",
                newName: "License");

            migrationBuilder.RenameTable(
                name: "Cities",
                newName: "Citie");

            migrationBuilder.RenameTable(
                name: "Brands",
                newName: "Brand");

            migrationBuilder.RenameIndex(
                name: "IX_Vehicles_TypeId",
                table: "Vehicle",
                newName: "IX_Vehicle_TypeId");

            migrationBuilder.RenameIndex(
                name: "IX_Vehicles_PersonId",
                table: "Vehicle",
                newName: "IX_Vehicle_PersonId");

            migrationBuilder.RenameIndex(
                name: "IX_Vehicles_ModelId",
                table: "Vehicle",
                newName: "IX_Vehicle_ModelId");

            migrationBuilder.RenameIndex(
                name: "IX_Travels_UserId",
                table: "Travel",
                newName: "IX_Travel_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Travels_PersonId",
                table: "Travel",
                newName: "IX_Travel_PersonId");

            migrationBuilder.RenameIndex(
                name: "IX_Travels_OriginId",
                table: "Travel",
                newName: "IX_Travel_OriginId");

            migrationBuilder.RenameIndex(
                name: "IX_Travels_DestinyId",
                table: "Travel",
                newName: "IX_Travel_DestinyId");

            migrationBuilder.RenameIndex(
                name: "IX_Phones_PersonId",
                table: "Phone",
                newName: "IX_Phone_PersonId");

            migrationBuilder.RenameIndex(
                name: "IX_MaintenanceParts_PartId",
                table: "MaintenancePart",
                newName: "IX_MaintenancePart_PartId");

            migrationBuilder.RenameIndex(
                name: "IX_MaintenanceParts_MaintenanceId",
                table: "MaintenancePart",
                newName: "IX_MaintenancePart_MaintenanceId");

            migrationBuilder.RenameIndex(
                name: "IX_Cities_StateId",
                table: "Citie",
                newName: "IX_Citie_StateId");

            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "User",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Vehicle",
                table: "Vehicle",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_User",
                table: "User",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Travel",
                table: "Travel",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_State",
                table: "State",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Phone",
                table: "Phone",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Part",
                table: "Part",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MaintenanceType",
                table: "MaintenanceType",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MaintenancePart",
                table: "MaintenancePart",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_License",
                table: "License",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Citie",
                table: "Citie",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Brand",
                table: "Brand",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Citie_State_StateId",
                table: "Citie",
                column: "StateId",
                principalTable: "State",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Maintenance_MaintenanceType_MaintenanceTypeId",
                table: "Maintenance",
                column: "MaintenanceTypeId",
                principalTable: "MaintenanceType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Maintenance_User_UserId",
                table: "Maintenance",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MaintenancePart_Maintenance_MaintenanceId",
                table: "MaintenancePart",
                column: "MaintenanceId",
                principalTable: "Maintenance",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MaintenancePart_Part_PartId",
                table: "MaintenancePart",
                column: "PartId",
                principalTable: "Part",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Models_Brand_BrandId",
                table: "Models",
                column: "BrandId",
                principalTable: "Brand",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Person_Citie_CitiesId",
                table: "Person",
                column: "CitiesId",
                principalTable: "Citie",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Phone_Person_PersonId",
                table: "Phone",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Travel_Citie_DestinyId",
                table: "Travel",
                column: "DestinyId",
                principalTable: "Citie",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Travel_Citie_OriginId",
                table: "Travel",
                column: "OriginId",
                principalTable: "Citie",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Travel_Person_PersonId",
                table: "Travel",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Travel_User_UserId",
                table: "Travel",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicle_Models_ModelId",
                table: "Vehicle",
                column: "ModelId",
                principalTable: "Models",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicle_Person_PersonId",
                table: "Vehicle",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicle_VehiclesType_TypeId",
                table: "Vehicle",
                column: "TypeId",
                principalTable: "VehiclesType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Citie_State_StateId",
                table: "Citie");

            migrationBuilder.DropForeignKey(
                name: "FK_Maintenance_MaintenanceType_MaintenanceTypeId",
                table: "Maintenance");

            migrationBuilder.DropForeignKey(
                name: "FK_Maintenance_User_UserId",
                table: "Maintenance");

            migrationBuilder.DropForeignKey(
                name: "FK_MaintenancePart_Maintenance_MaintenanceId",
                table: "MaintenancePart");

            migrationBuilder.DropForeignKey(
                name: "FK_MaintenancePart_Part_PartId",
                table: "MaintenancePart");

            migrationBuilder.DropForeignKey(
                name: "FK_Models_Brand_BrandId",
                table: "Models");

            migrationBuilder.DropForeignKey(
                name: "FK_Person_Citie_CitiesId",
                table: "Person");

            migrationBuilder.DropForeignKey(
                name: "FK_Phone_Person_PersonId",
                table: "Phone");

            migrationBuilder.DropForeignKey(
                name: "FK_Travel_Citie_DestinyId",
                table: "Travel");

            migrationBuilder.DropForeignKey(
                name: "FK_Travel_Citie_OriginId",
                table: "Travel");

            migrationBuilder.DropForeignKey(
                name: "FK_Travel_Person_PersonId",
                table: "Travel");

            migrationBuilder.DropForeignKey(
                name: "FK_Travel_User_UserId",
                table: "Travel");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicle_Models_ModelId",
                table: "Vehicle");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicle_Person_PersonId",
                table: "Vehicle");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicle_VehiclesType_TypeId",
                table: "Vehicle");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Vehicle",
                table: "Vehicle");

            migrationBuilder.DropPrimaryKey(
                name: "PK_User",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Travel",
                table: "Travel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_State",
                table: "State");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Phone",
                table: "Phone");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Part",
                table: "Part");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MaintenanceType",
                table: "MaintenanceType");

            migrationBuilder.DropPrimaryKey(
                name: "PK_MaintenancePart",
                table: "MaintenancePart");

            migrationBuilder.DropPrimaryKey(
                name: "PK_License",
                table: "License");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Citie",
                table: "Citie");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Brand",
                table: "Brand");

            migrationBuilder.DropColumn(
                name: "Username",
                table: "User");

            migrationBuilder.RenameTable(
                name: "Vehicle",
                newName: "Vehicles");

            migrationBuilder.RenameTable(
                name: "User",
                newName: "Users");

            migrationBuilder.RenameTable(
                name: "Travel",
                newName: "Travels");

            migrationBuilder.RenameTable(
                name: "State",
                newName: "States");

            migrationBuilder.RenameTable(
                name: "Phone",
                newName: "Phones");

            migrationBuilder.RenameTable(
                name: "Part",
                newName: "Parts");

            migrationBuilder.RenameTable(
                name: "MaintenanceType",
                newName: "MaintenanceTypes");

            migrationBuilder.RenameTable(
                name: "MaintenancePart",
                newName: "MaintenanceParts");

            migrationBuilder.RenameTable(
                name: "License",
                newName: "Licenses");

            migrationBuilder.RenameTable(
                name: "Citie",
                newName: "Cities");

            migrationBuilder.RenameTable(
                name: "Brand",
                newName: "Brands");

            migrationBuilder.RenameIndex(
                name: "IX_Vehicle_TypeId",
                table: "Vehicles",
                newName: "IX_Vehicles_TypeId");

            migrationBuilder.RenameIndex(
                name: "IX_Vehicle_PersonId",
                table: "Vehicles",
                newName: "IX_Vehicles_PersonId");

            migrationBuilder.RenameIndex(
                name: "IX_Vehicle_ModelId",
                table: "Vehicles",
                newName: "IX_Vehicles_ModelId");

            migrationBuilder.RenameIndex(
                name: "IX_Travel_UserId",
                table: "Travels",
                newName: "IX_Travels_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Travel_PersonId",
                table: "Travels",
                newName: "IX_Travels_PersonId");

            migrationBuilder.RenameIndex(
                name: "IX_Travel_OriginId",
                table: "Travels",
                newName: "IX_Travels_OriginId");

            migrationBuilder.RenameIndex(
                name: "IX_Travel_DestinyId",
                table: "Travels",
                newName: "IX_Travels_DestinyId");

            migrationBuilder.RenameIndex(
                name: "IX_Phone_PersonId",
                table: "Phones",
                newName: "IX_Phones_PersonId");

            migrationBuilder.RenameIndex(
                name: "IX_MaintenancePart_PartId",
                table: "MaintenanceParts",
                newName: "IX_MaintenanceParts_PartId");

            migrationBuilder.RenameIndex(
                name: "IX_MaintenancePart_MaintenanceId",
                table: "MaintenanceParts",
                newName: "IX_MaintenanceParts_MaintenanceId");

            migrationBuilder.RenameIndex(
                name: "IX_Citie_StateId",
                table: "Cities",
                newName: "IX_Cities_StateId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Vehicles",
                table: "Vehicles",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Travels",
                table: "Travels",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_States",
                table: "States",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Phones",
                table: "Phones",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Parts",
                table: "Parts",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MaintenanceTypes",
                table: "MaintenanceTypes",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_MaintenanceParts",
                table: "MaintenanceParts",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Licenses",
                table: "Licenses",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cities",
                table: "Cities",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Brands",
                table: "Brands",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Cities_States_StateId",
                table: "Cities",
                column: "StateId",
                principalTable: "States",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Maintenance_MaintenanceTypes_MaintenanceTypeId",
                table: "Maintenance",
                column: "MaintenanceTypeId",
                principalTable: "MaintenanceTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Maintenance_Users_UserId",
                table: "Maintenance",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MaintenanceParts_Maintenance_MaintenanceId",
                table: "MaintenanceParts",
                column: "MaintenanceId",
                principalTable: "Maintenance",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MaintenanceParts_Parts_PartId",
                table: "MaintenanceParts",
                column: "PartId",
                principalTable: "Parts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Models_Brands_BrandId",
                table: "Models",
                column: "BrandId",
                principalTable: "Brands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Person_Cities_CitiesId",
                table: "Person",
                column: "CitiesId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Phones_Person_PersonId",
                table: "Phones",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Travels_Cities_DestinyId",
                table: "Travels",
                column: "DestinyId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Travels_Cities_OriginId",
                table: "Travels",
                column: "OriginId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Travels_Person_PersonId",
                table: "Travels",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Travels_Users_UserId",
                table: "Travels",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_Models_ModelId",
                table: "Vehicles",
                column: "ModelId",
                principalTable: "Models",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_Person_PersonId",
                table: "Vehicles",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_VehiclesType_TypeId",
                table: "Vehicles",
                column: "TypeId",
                principalTable: "VehiclesType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
