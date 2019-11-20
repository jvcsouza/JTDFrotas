namespace JTDLib.Model
{
    public class Guest
    {
        public int Id { get; set; }
        public string Cpf { get; set; }
        public Person Person { get; set; }
        public PersonType Type { get; set; }
        public int? LicenseId { get; set; }
        public License License { get; set; }
    }
}
