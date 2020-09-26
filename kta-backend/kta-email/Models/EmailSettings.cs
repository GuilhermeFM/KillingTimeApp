namespace kta.email.Models
{
    public class EmailSettings
    {
        public string PrimaryDomain { get; set; }
        public int PrimaryPort { get; set; }

        public string From { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
