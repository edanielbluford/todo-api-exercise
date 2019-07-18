using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Todos2019.Models;

namespace Todos2019
{
    public class ToDosContext : DbContext
    {
        public DbSet<ToDo> ToDos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=JEToDoDB_master;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ToDo>().HasData(
                new ToDo
                {
                    Id = 1,
                    Item = "Wake up"
                },
                new ToDo
                {
                    Id = 2,
                    Item = "Eat breakfast"
                },
                new ToDo
                {
                    Id = 3,
                    Item = "Exercise"
                }
            );
        }
    }
}
