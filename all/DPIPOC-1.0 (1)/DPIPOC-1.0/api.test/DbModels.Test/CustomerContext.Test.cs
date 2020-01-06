using api.DbModels;
using Microsoft.EntityFrameworkCore;

public class CustomerContextTest {
    public CustomerContext GetCustomerDbContext () {
        var options = new DbContextOptionsBuilder<CustomerContext> ()
            .UseInMemoryDatabase (databaseName: "api-test")
            .Options;
        var dbContext = new CustomerContext (options);

        return dbContext;
    }
}