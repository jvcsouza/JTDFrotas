﻿namespace JTDLib.Model
{
    public class LegalPerson
    {
        public int Id { get; set; }
        public Person Person { get; set; }
        public string Cnpj { get; set; }
        public string Activity { get; set; }
        public string FantasyName { get; set; }
    }
}
