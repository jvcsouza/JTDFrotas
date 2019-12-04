namespace Utils
{
    public static class String
    {
        public static string WithoutAccents(this string texto)
        {
            if (string.IsNullOrEmpty(texto))
                return string.Empty;

            byte[] bytes = System.Text.Encoding.GetEncoding("iso-8859-8").GetBytes(texto);
            return System.Text.Encoding.UTF8.GetString(bytes);
        }
    }
}
