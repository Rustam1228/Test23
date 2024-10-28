using backend.Entites;
using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions options):base(options) 
        {
            
        }

        public DbSet<Video> Videos { get; set; }



    }
}
