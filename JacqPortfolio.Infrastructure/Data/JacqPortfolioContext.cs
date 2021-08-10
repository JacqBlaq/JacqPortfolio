using JacqPortfolio.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JacqPortfolio.Infrastructure.Data
{
    public class JacqPortfolioContext : DbContext
    {
        public JacqPortfolioContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<UserProfile> UserProfiles { get; set; }
    }
}
