using Microsoft.EntityFrameworkCore.Migrations;

namespace JTDLib.Migrations
{
    public partial class addFieldType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LicenseId",
                table: "Guests",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Guests",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Guests_LicenseId",
                table: "Guests",
                column: "LicenseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Guests_Licenses_LicenseId",
                table: "Guests",
                column: "LicenseId",
                principalTable: "Licenses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Guests_Licenses_LicenseId",
                table: "Guests");

            migrationBuilder.DropIndex(
                name: "IX_Guests_LicenseId",
                table: "Guests");

            migrationBuilder.DropColumn(
                name: "LicenseId",
                table: "Guests");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Guests");
        }
    }
}
