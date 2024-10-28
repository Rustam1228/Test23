using System.ComponentModel.DataAnnotations;

namespace backend.Dto
{
    public class VideoDto
    {
        [Required]        
        public string Title { get; set; }
    }
}
