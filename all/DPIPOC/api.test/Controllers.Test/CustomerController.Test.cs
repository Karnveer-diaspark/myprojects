using System;
using api.Controllers;
using api.DbModels;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Xunit;

namespace api.test.Controllers.Test {

    public class CustomerControllerTest {
        private readonly ILogger<CustomerController> _logger;
        private readonly CustomerContext _dbContext;

        public CustomerControllerTest () {
            _dbContext = new CustomerContextTest ().GetCustomerDbContext ();
        }

        #region Post

        [Fact]
        public void Should_Return_BadRequest_When_Customer_Is_Null () {
            // Arrange
            var customerController = new CustomerController (_logger, _dbContext);

            //Act
            IActionResult actionResult = customerController.Post (null);

            BadRequestObjectResult result = Assert.IsType<BadRequestObjectResult> (actionResult);

            //Assert
            Assert.IsType<BadRequestObjectResult> (actionResult);
        }

        [Fact]
        public void Should_Return_OkResult_When_Customer_Is_Added_Successfully () {
            // Arrange
            var dummyCustomer =
                new Customer {
                    CId = 81,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user81@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
                };

            var customerController = new CustomerController (_logger, _dbContext);

            //Act
            IActionResult actionResult = customerController.Post (dummyCustomer);

            OkObjectResult result = Assert.IsType<OkObjectResult> (actionResult);

            //Assert
            Assert.IsType<OkObjectResult> (actionResult);

        }
        [Fact]
        public void Should_Return_BadRequset_When_Email_Is_Exist () {
            // Arrange
            var dummyCustomer =
                new Customer {
                    CId = 198,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user1@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
                };
            _dbContext.Customer.Add (dummyCustomer);
            _dbContext.SaveChanges ();
            var dummyCustomer1 =
                new Customer {
                    CId = 2,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user1@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
                };

            var customerController = new CustomerController (_logger, _dbContext);

            //Act
            IActionResult actionResult = customerController.Post (dummyCustomer1);

            BadRequestObjectResult result = Assert.IsType<BadRequestObjectResult> (actionResult);

            //Assert
            Assert.IsType<BadRequestObjectResult> (actionResult);

        }
        #endregion

        #region GetById
        [Fact]
        public void Should_Return_BadRequest_When_Customer_Is_Not_found () {
            //Arrange

            var dummyCustomer =
                new Customer {
                    CId = 21,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user+2@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
                };
            _dbContext.Customer.Add (dummyCustomer);
            _dbContext.SaveChanges ();

            var customerController = new CustomerController (_logger, _dbContext);

            // Act
            IActionResult actionResult = customerController.Get (468);

            BadRequestObjectResult result = Assert.IsType<BadRequestObjectResult> (actionResult);

            //Assert
            Assert.IsType<BadRequestObjectResult> (result);

        }

        [Fact]
        public void Should_Return_Exp_When_Customer_Is_Zero () {

            //Arrange
            var customerController = new CustomerController (_logger, _dbContext);

            // Act
            IActionResult actionResult = customerController.Get (0);

            BadRequestObjectResult result = Assert.IsType<BadRequestObjectResult> (actionResult);

            //Assert
            Assert.IsType<BadRequestObjectResult> (result);
            var msg = new Response ();
            msg = result.Value as Response;
            string actual = msg.Message.ToString ();
            Assert.Equal (actual, "0 is invalid Id");

        }

        [Fact]
        public void Should_Return_OkResult_When_Customer_Is_Found () {
            //Arrange
            var dummyCustomer =
                new Customer {
                    CId = 148,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user+2@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
                };
            _dbContext.Customer.Add (dummyCustomer);
            _dbContext.SaveChanges ();

            var customerController = new CustomerController (_logger, _dbContext);

            // Act
            IActionResult actionResult = customerController.Get (148);

            OkObjectResult result = Assert.IsType<OkObjectResult> (actionResult);

            //Assert
            Assert.IsType<OkObjectResult> (result);
            var customer = result.Value as Customer;
            Assert.Equal (dummyCustomer, customer);

        }

        #endregion

        #region Delete
        [Fact]
        public void Should_Return_OkResult_When_Customer_Deleted_Successfully () {

            //Arrange
            var dummyCustomer =
                new Customer {
                    CId = 31,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user+2@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
                };
            _dbContext.Customer.Add (dummyCustomer);
            _dbContext.SaveChanges ();

            var customerController = new CustomerController (_logger, _dbContext);

            //Act
            IActionResult actionResult = customerController.Delete (31);

            OkObjectResult result = Assert.IsType<OkObjectResult> (actionResult);

            //Assert
            Assert.IsType<OkObjectResult> (result);
            var msg = new Response ();
            msg = result.Value as Response;
            string actual = msg.Message.ToString ();
            Assert.Equal (actual, "31 Record deleted successfully.");
        }

        [Fact]
        public void Should_Return_BadRequest_When_Customer_Is_Not_Found () {

            //Arrange
            var dummyCustomer =
                new Customer {
                    CId = 122,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user+2@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
                };
            _dbContext.Customer.Add (dummyCustomer);
            _dbContext.SaveChanges ();

            var customerController = new CustomerController (_logger, _dbContext);

            //Act
            IActionResult actionResult = customerController.Delete (794);

            BadRequestObjectResult result = Assert.IsType<BadRequestObjectResult> (actionResult);

            //Assert
            Assert.IsType<BadRequestObjectResult> (result);

            var msg = new Response ();
            msg = result.Value as Response;
            string actual = msg.Message.ToString ();
            Assert.Equal (actual, "794 is not found.");
        }

        [Fact]
        public void Should_Return_BadRequest_When_Customer_Is_Zero () {

            //Arrange
            var customerController = new CustomerController (_logger, _dbContext);

            //Act
            IActionResult actionResult = customerController.Delete (0);

            BadRequestObjectResult result = Assert.IsType<BadRequestObjectResult> (actionResult);

            //Assert
            Assert.IsType<BadRequestObjectResult> (result);

            var msg = new Response ();
            msg = result.Value as Response;
            string actual = msg.Message.ToString ();
            Assert.Equal (actual, "0 is invlid id.");
        }

        #endregion

        #region Update Customer 
        [Fact]
        public void Should_Retun_OkResult_When_Customer_Updated_Successfully () {
            //Arrange  
            var dummyCustomer =
                new Customer {
                    CId = 51,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user+51@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
                };
            _dbContext.Customer.Add (dummyCustomer);
            _dbContext.SaveChanges ();
            var customerToUpdate = new Customer {
                CId = 51,
                Firstname = "robert1",
                Lastname = "Carter1",
                Date = DateTime.Now,
                Email = "user+51@diaspark.com",
                MobileNo = "7189895678",
                Address = "Bhopal1",
                City = "Bhopal1",
                State = "MP",
                Pin = "461223",
                Country = "India"
            };
            var customerController = new CustomerController (_logger, _dbContext);

            //Act
            IActionResult actionResult = customerController.Put (customerToUpdate);

            //Assert  
            Assert.IsType<OkObjectResult> (actionResult);

        }

        [Fact]
        public void Should_Retun_Exp_When_Customer_Email_Already_Exist () {
            //Arrange  
            var dummyCustomer =
                new Customer {
                    CId = 61,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user+61@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
                };
            _dbContext.Customer.Add (dummyCustomer);
            _dbContext.SaveChanges ();
            var customerToUpdate = new Customer {
                CId = 62,
                Firstname = "robert1",
                Lastname = "Carter1",
                Date = DateTime.Now,
                Email = "user+61@diaspark.com",
                MobileNo = "7189895678",
                Address = "Bhopal1",
                City = "Bhopal1",
                State = "MP",
                Pin = "461223",
                Country = "India"
            };
            var customerController = new CustomerController (_logger, _dbContext);

            //Act
            IActionResult actionResult = customerController.Put (customerToUpdate);

            //Assert  
            Assert.IsType<BadRequestObjectResult> (actionResult);

        }
        #endregion

        #region Get
        [Fact]
        public void Should_Return_OkResult_When_Customer_List_Is_Found () {

            //Arrange
            var dummyCustomer =
                new Customer {
                    CId = 102,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user+61@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
                };
            var customerToUpdate = new Customer {
                CId = 103,
                Firstname = "robert1",
                Lastname = "Carter1",
                Date = DateTime.Now,
                Email = "user+621@diaspark.com",
                MobileNo = "7189895678",
                Address = "Bhopal1",
                City = "Bhopal1",
                State = "MP",
                Pin = "461223",
                Country = "India"
            };
            _dbContext.Customer.Add (dummyCustomer);
            _dbContext.Customer.Add (customerToUpdate);
            _dbContext.SaveChanges ();

            var customerController = new CustomerController (_logger, _dbContext);

            //Act
            IActionResult actionResult = customerController.Get ();

            OkObjectResult result = Assert.IsType<OkObjectResult> (actionResult);

            //Assert
            Assert.IsType<OkObjectResult> (result);
            var msg = new Response ();
            msg = result.Value as Response;
            string actual = msg.Message.ToString ();
            Assert.Equal (actual, "List found.");
        }
        #endregion

    }

}