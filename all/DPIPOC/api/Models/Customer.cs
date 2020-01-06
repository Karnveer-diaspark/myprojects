using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models {
    public class Customer {

        [DatabaseGenerated (DatabaseGeneratedOption.Identity)]
        [Key]
        public int CId { get; set; }

        [Required]
        [StringLength (50)]
        public string Firstname { get; set; }

        [StringLength (50)]
        [Required]
        public string Lastname { get; set; }

        [DataType (DataType.Date)]
        [DisplayFormat (DataFormatString = "{0:dd/MM/yyyy}")]
        [Required]
        public DateTime Date { get; set; }

        [StringLength (100)]
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [StringLength (10)]
        [Required]
        public String MobileNo { get; set; }

        [StringLength (100)]
        [Required]
        public string Address { get; set; }

        [StringLength (50)]
        [Required]
        public string City { get; set; }

        [StringLength (50)]
        [Required]
        public string State { get; set; }

        [Required]
        public string Pin { get; set; }

        [StringLength (100)]
        [Required]
        public string Country { get; set; }
    }
}