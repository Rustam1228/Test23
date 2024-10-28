using System.ComponentModel.DataAnnotations;

namespace backend.Entites
{
    public class Video
    {
        [Key]
        public long Id { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public DateTime CreatedAt {  get; set; }= DateTime.UtcNow;
    }
}
