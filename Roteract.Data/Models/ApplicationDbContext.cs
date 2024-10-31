using Microsoft.EntityFrameworkCore;

namespace Roteract.Data.Models
{
    public class ApplicationDbContext : DbContext
    {
        public string DbPath { get; }

        public ApplicationDbContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = System.IO.Path.Join(path, "blogging.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
       => options.UseSqlite($"Data Source={DbPath}");

        public DbSet<Event> Events { get; set; }
    }
}
