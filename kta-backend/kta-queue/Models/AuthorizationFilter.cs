using Hangfire.Annotations;
using Hangfire.Dashboard;

namespace kta_queue.Models
{
    public class AuthorizationFilter : IDashboardAuthorizationFilter
    {
        public bool Authorize([NotNull] DashboardContext context)
        {
            return true;
        }
    }
}
