namespace kta_api.Model
{
    public class SendResetPasswordLinkModel
    {
        public string Email { get; set; }

        public string RemotePasswordChangePath { get; set; }
    }
}
