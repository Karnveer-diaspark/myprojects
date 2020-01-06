using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.DbModels

{
    public class CustomerContext : DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options) : base(options)
        {
        }

        public DbSet<Customer> Customer { get; set; }
    }
}
