using System;
using System.Collections.Generic;
using System.Linq;
using api.DbModels;
using api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace api.Controllers {

    [ApiController]
    public class CustomerController : ControllerBase {
        private readonly CustomerContext _context;
        private readonly ILogger<CustomerController> _logger;

        public CustomerController (ILogger<CustomerController> logger, CustomerContext context) {
            _context = context;
            _logger = logger;
        }

        /*Get all customer list*/
        [HttpGet ("/customer/")]
        [EnableCors ("PocCorsPolicy")]
        public IActionResult Get () {
            var result = new List<Customer> ();
            return Ok (new Response {
                customerList = _context.Customer.ToList (),
                    Message = "List found."
            });
        }

        /* Find customer by id*/
        [HttpGet ("/customer/{id}")]
        [EnableCors ("PocCorsPolicy")]
        public IActionResult Get (int id) {
            var customer = _context.Customer.FirstOrDefault (t => t.CId == id);
            if (customer == null) {
                return BadRequest (new Response {
                    Message = id + " is invalid Id",
                });
            } else {
                return Ok (customer);
            }
        }

        /* Delete customer by id */
        [HttpDelete ("/customer/{id}")]
        [EnableCors ("PocCorsPolicy")]
        public IActionResult Delete (int id) {
            if (id != 0) {
                var customerID = _context.Customer.FirstOrDefault (i => i.CId == id);
                if (customerID != null) {
                    _context.Customer.Remove (customerID);
                    _context.SaveChanges ();
                    return Ok (new Response {
                        Message = id + " Record deleted successfully.",
                    });
                } else {
                    return BadRequest (new Response {
                        Message = id + " is not found.",
                    });
                }
            } else {
                return BadRequest (new Response {
                    Message = id + " is invlid id.",
                });
            }
        }

        /*Post Customer information*/
        [HttpPost ("/customer/")]
        [EnableCors ("PocCorsPolicy")]
        [ProducesResponseType (StatusCodes.Status201Created)]
        [ProducesResponseType (StatusCodes.Status400BadRequest)]
        public IActionResult Post (Customer customer) {
            if (customer == null) {
                return BadRequest (new Response {
                    Message = "Invalid customer."
                });
            } else {
                var emailExist = _context.Customer.Any (a => a.Email == customer.Email);
                if (emailExist) {
                    return BadRequest (new Response {
                        Message = "Duplicate Email :-" + customer.Email,
                            Data = customer
                    });
                }
                _context.Customer.Add (customer);
                _context.SaveChanges ();
                return Ok (new Response {
                    Message = "Customer added successfully.",
                        Data = customer
                });
            }
        }

        /* Update customer information */
        [HttpPut ("/customer/{id}")]
        [EnableCors ("PocCorsPolicy")]
        public IActionResult Put (Customer customer) {
            //  try {
            var customerRow = _context.Customer.FirstOrDefault (i => i.CId == customer.CId);
            var emailExist = _context.Customer.Any (a => a.Email == customer.Email && a.CId != customer.CId);
            if (emailExist) {
                return BadRequest (new Response {
                    Message = customer.Email + "Email already exist",
                        Data = customer
                });
            } else {

                customerRow.Firstname = customer.Firstname;
                customerRow.Lastname = customer.Lastname;
                customerRow.Email = customer.Email;
                customerRow.Date = customer.Date;
                customerRow.MobileNo = customer.MobileNo;
                customerRow.Address = customer.Address;
                customerRow.City = customer.City;
                customerRow.State = customer.State;
                customerRow.Pin = customer.Pin;
                customerRow.Country = customer.Country;
                _context.Customer.Update (customerRow);
                _context.SaveChanges ();
                return Ok (new Response {
                    Message = "Record saved successfully.",
                        Data = customer
                });
            }
        }
    }
}