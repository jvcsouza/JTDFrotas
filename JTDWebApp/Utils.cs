using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JTDWebApp
{
    public static class Utils
    {
        public static string WithoutAccents(this string texto)
        {
            if (string.IsNullOrEmpty(texto))
                return String.Empty;

            byte[] bytes = System.Text.Encoding.GetEncoding("iso-8859-8").GetBytes(texto);
            return System.Text.Encoding.UTF8.GetString(bytes);
        }
    }
}