using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace JTDWebApp.Models
{
    public static class Utils
    {
        public static bool IsValid(this string value) => !string.IsNullOrWhiteSpace(value.Trim());
        public static string FormatCNPJ(this string cnpj) => Regex.Replace(cnpj, @"/[\.\-//]?/g", "");
    }
}