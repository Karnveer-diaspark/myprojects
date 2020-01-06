using System.Collections.Generic;

namespace api.Models
{
    public class Response
    {
        public string Message { get; set;}

        public Customer Data { get ; set;}
        
        public ICollection<Customer> customerList { get; set; }
 
    }
}
