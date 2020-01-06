using System;
using api.Data;
using api.DbModels;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Diagnostics.CodeAnalysis;

namespace api {
    [ExcludeFromCodeCoverage]
    public class Startup {
      
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }
        public readonly string PocCorsPolicy = "PocCorsPolicy";
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
       
        public void ConfigureServices (IServiceCollection services) {
            services.AddSwaggerDocument ();
            services.AddCors (options => {
                options.AddPolicy (PocCorsPolicy, builder => {
                    builder.WithOrigins ("*")
                        .AllowAnyHeader ()
                        .AllowAnyMethod ();
                });
            });
            services.AddMvc ();
            services.AddControllers ();
            services.AddDbContext<CustomerContext> (options => options.UseInMemoryDatabase ("api"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider service, ILoggerFactory loggerFactory) {
            var context = service.GetService<CustomerContext> ();
            SampleData.AddCustomerData (context);
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            }
            app.UseOpenApi ();
            app.UseSwaggerUi3 ();
            app.UseRouting ();
            app.UseCors (PocCorsPolicy);
            app.UseEndpoints (endpoints => {
                endpoints.MapControllers ().RequireCors ("PocCorsPolicy");
            });

        }
    }
}