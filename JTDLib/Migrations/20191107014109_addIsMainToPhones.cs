using Microsoft.EntityFrameworkCore.Migrations;

namespace JTDLib.Migrations
{
    public partial class addIsMainToPhones : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Persons_Cities_CitiesId",
                table: "Persons");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Phones",
                newName: "PhoneId");

            migrationBuilder.RenameColumn(
                name: "CitiesId",
                table: "Persons",
                newName: "CityId");

            migrationBuilder.RenameIndex(
                name: "IX_Persons_CitiesId",
                table: "Persons",
                newName: "IX_Persons_CityId");

            migrationBuilder.AddColumn<bool>(
                name: "IsMain",
                table: "Phones",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_Cities_CityId",
                table: "Persons",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Persons_Cities_CityId",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "IsMain",
                table: "Phones");

            migrationBuilder.RenameColumn(
                name: "PhoneId",
                table: "Phones",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "CityId",
                table: "Persons",
                newName: "CitiesId");

            migrationBuilder.RenameIndex(
                name: "IX_Persons_CityId",
                table: "Persons",
                newName: "IX_Persons_CitiesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_Cities_CitiesId",
                table: "Persons",
                column: "CitiesId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
