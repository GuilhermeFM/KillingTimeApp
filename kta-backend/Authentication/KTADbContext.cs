using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace kta.Authentication
{
    public class KTADbContext : IdentityDbContext<User>
    {
        public KTADbContext(DbContextOptions<KTADbContext> options) : base(options) {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
