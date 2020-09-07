using kta.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace kta
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public IWebHostEnvironment WebHostEnvironment { get; }

        public Startup(IWebHostEnvironment webHostEnvironment, IConfiguration configuration)
        {
            WebHostEnvironment = webHostEnvironment;
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
            });

            services.AddDbContext<KTADbContext>(options =>
            {
                if (WebHostEnvironment.IsEnvironment("Container"))
                    options.UseSqlServer(Configuration.GetConnectionString("ConnStrContainer"));
                else
                    options.UseSqlServer(Configuration.GetConnectionString("ConnStr"));
            });

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<Authentication.KTADbContext>()
                .AddDefaultTokenProviders();

            var JWTValidAudience = Configuration["JWT:ValidAudience"];
            var JWTValidIssuer = Configuration["JWT:ValidIssuer"];

            var JWTSecrete = Configuration["JWT:Secret"];
            var JWTSecreteBytes = Encoding.UTF8.GetBytes(JWTSecrete);
            var JWTSymetricSecurityKey = new SymmetricSecurityKey(JWTSecreteBytes);

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidIssuer = JWTValidIssuer,
                    ValidAudience = JWTValidAudience,
                    IssuerSigningKey = JWTSymetricSecurityKey
                };
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
