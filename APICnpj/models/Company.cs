using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace APICnpj.models
{
    public class Company
    {
        [JsonProperty("atividade_principal")]
        public List<Atividade> AtividadePrincipal { get; set; }

        [JsonProperty("data_situacao")]
        public string DataSituacao { get; set; }

        [JsonProperty("complemento")]
        public string Complemento { get; set; }

        [JsonProperty("nome")]
        public string Nome { get; set; }

        [JsonProperty("uf")]
        public string Uf { get; set; }

        [JsonProperty("telefone")]
        public string Telefone { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("atividades_secundarias")]
        public List<Atividade> AtividadesSecundarias { get; set; }

        [JsonProperty("qsa")]
        public List<Qsa> Qsa { get; set; }

        [JsonProperty("situacao")]
        public string Situacao { get; set; }

        [JsonProperty("bairro")]
        public string Bairro { get; set; }

        [JsonProperty("logradouro")]
        public string Logradouro { get; set; }

        [JsonProperty("numero")]
        //[JsonConverter(typeof(ParseStringConverter))]
        public String Numero { get; set; }

        [JsonProperty("cep")]
        public string Cep { get; set; }

        [JsonProperty("municipio")]
        public string Municipio { get; set; }

        [JsonProperty("porte")]
        public string Porte { get; set; }

        [JsonProperty("abertura")]
        public string Abertura { get; set; }

        [JsonProperty("natureza_juridica")]
        public string NaturezaJuridica { get; set; }

        [JsonProperty("fantasia")]
        public string Fantasia { get; set; }

        [JsonProperty("cnpj")]
        public string Cnpj { get; set; }

        [JsonProperty("ultima_atualizacao")]
        public DateTimeOffset UltimaAtualizacao { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("tipo")]
        public string Tipo { get; set; }

        [JsonProperty("efr")]
        public string Efr { get; set; }

        [JsonProperty("motivo_situacao")]
        public string MotivoSituacao { get; set; }

        [JsonProperty("situacao_especial")]
        public string SituacaoEspecial { get; set; }

        [JsonProperty("data_situacao_especial")]
        public string DataSituacaoEspecial { get; set; }

        [JsonProperty("capital_social")]
        public string CapitalSocial { get; set; }

        [JsonProperty("extra")]
        public Extra Extra { get; set; }

        [JsonProperty("billing")]
        public Billing Billing { get; set; }
    }

    public partial class Atividade
    {
        [JsonProperty("text")]
        public string Text { get; set; }

        [JsonProperty("code")]
        public string Code { get; set; }
    }

    public partial class Billing
    {
        [JsonProperty("free")]
        public bool Free { get; set; }

        [JsonProperty("database")]
        public bool Database { get; set; }
    }

    public partial class Extra
    {
    }

    public partial class Qsa
    {
        [JsonProperty("qual")]
        public string Qual { get; set; }

        [JsonProperty("nome")]
        public string Nome { get; set; }
    }
}

