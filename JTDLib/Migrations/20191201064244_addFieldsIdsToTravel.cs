using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JTDLib.Migrations
{
    public partial class addFieldsIdsToTravel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Travels_Cities_DestinyId",
                table: "Travels");

            migrationBuilder.DropForeignKey(
                name: "FK_Travels_Cities_OriginId",
                table: "Travels");

            migrationBuilder.DropForeignKey(
                name: "FK_Travels_Persons_PersonId",
                table: "Travels");

            migrationBuilder.AlterColumn<int>(
                name: "PersonId",
                table: "Travels",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "OriginId",
                table: "Travels",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "DestinyId",
                table: "Travels",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Duration",
                table: "Travels",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DurationStr",
                table: "Travels",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Travels_Cities_DestinyId",
                table: "Travels",
                column: "DestinyId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Travels_Cities_OriginId",
                table: "Travels",
                column: "OriginId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Travels_Persons_PersonId",
                table: "Travels",
                column: "PersonId",
                principalTable: "Persons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Travels_Cities_DestinyId",
                table: "Travels");

            migrationBuilder.DropForeignKey(
                name: "FK_Travels_Cities_OriginId",
                table: "Travels");

            migrationBuilder.DropForeignKey(
                name: "FK_Travels_Persons_PersonId",
                table: "Travels");

            migrationBuilder.DropColumn(
                name: "Duration",
                table: "Travels");

            migrationBuilder.DropColumn(
                name: "DurationStr",
                table: "Travels");

            migrationBuilder.AlterColumn<int>(
                name: "PersonId",
                table: "Travels",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "OriginId",
                table: "Travels",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "DestinyId",
                table: "Travels",
                nullable: true,
                oldClrType: typeof(int));

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
                name: "FK_Travels_Persons_PersonId",
                table: "Travels",
                column: "PersonId",
                principalTable: "Persons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
