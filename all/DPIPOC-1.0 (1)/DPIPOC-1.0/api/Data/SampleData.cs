using System;
using System.Collections.Generic;
using api.DbModels;
using api.Models;
using System.Diagnostics.CodeAnalysis;

namespace api.Data {
    public static class SampleData {
        [ExcludeFromCodeCoverage]
        public static void AddCustomerData (CustomerContext context) {
            var customerInfo = new List<Customer> ();
            customerInfo.Add (new Customer {
                CId = 47,
                    Firstname = "John",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user@diaspark.com",
                    MobileNo = "7966542368",
                    Address = "near mahatma gandhi road",
                    City = "Indore",
                    State = "MP",
                    Pin = "978568",
                    Country = "India"
            });
            customerInfo.Add (new Customer {
                CId = 48,
                    Firstname = "robert",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "email@diaspark.com",
                    MobileNo = "7189895678",
                    Address = "Bhopal",
                    City = "Bhopal",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"

            });
            customerInfo.Add (new Customer {
                CId = 49,
                    Firstname = "sherlock",
                    Lastname = "rodrigaz",
                    Date = DateTime.Now,
                    Email = "user+1@webdunia.com",
                    MobileNo = "9556789564",
                    Address = "flat no 3 jati colony",
                    City = "allahabad",
                    State = "MP",
                    Pin = "786425",
                    Country = "India"
            });

            customerInfo.Add (new Customer {
                CId = 50,
                    Firstname = "abhishak",
                    Lastname = "YAdav",
                    Date = DateTime.Now,
                    Email = "admin_seesion@diaspark.com",
                    MobileNo = "8976549873",
                    Address = "albert hall down town",
                    City = "Indore",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
            });

            customerInfo.Add (new Customer {
                CId = 51,
                    Firstname = "nicholas",
                    Lastname = "shane",
                    Date = DateTime.Now,
                    Email = "client@diaspark.com",
                    MobileNo = "7968345896",
                    Address = "bunglow - 34-D shellby street",
                    City = "amsterdam",
                    State = "MP",
                    Pin = "795686",
                    Country = "India"
            });
            customerInfo.Add (new Customer {
                CId = 52,
                    Firstname = "nikola",
                    Lastname = "tesla",
                    Date = DateTime.Now,
                    Email = "leader@diaspark.com",
                    MobileNo = "7697534978",
                    Address = "57th Avenue forutne street",
                    City = "ney york",
                    State = "MP",
                    Pin = "759868",
                    Country = "India"
            });
            customerInfo.Add (new Customer {
                CId = 53,
                    Firstname = "ellina",
                    Lastname = "khan",
                    Date = DateTime.Now,
                    Email = "developer@diaspark.com",
                    MobileNo = "8796683489",
                    Address = "MIG-5 ayodha nagar",
                    City = "Indore",
                    State = "MP",
                    Pin = "9864864",
                    Country = "India"
            });
            customerInfo.Add (new Customer {
                CId = 54,
                    Firstname = "shelly",
                    Lastname = "ibraham",
                    Date = DateTime.Now,
                    Email = "manager@diaspark.com",
                    MobileNo = "7968346985",
                    Address = "fountain valley south delhi",
                    City = "Indore",
                    State = "MP",
                    Pin = "796485",
                    Country = "India"
            });
            customerInfo.Add (new Customer {
                CId = 55,
                    Firstname = "alberto",
                    Lastname = "Carter",
                    Date = DateTime.Now,
                    Email = "user+1@diaspark.com",
                    MobileNo = "7935984635",
                    Address = "MIG-5 ayodha nagar",
                    City = "Indore",
                    State = "MP",
                    Pin = "461223",
                    Country = "India"
            });
            context.Customer.AddRange (customerInfo);
            context.SaveChanges ();
        }
    }
}