using System;
using System.IO;
using System.Linq;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var inserts = Enumerable.Range(102, 999)
            .Select(i => $"INSERT INTO Orders (UserName, OrderDate) VALUES ('user{i}@example.com', '{DateTime.Now.AddDays(i-1000).ToString("yyyy-MM-dd")}' );\r\n");
            File.WriteAllLines("inserts.sql", inserts);

            Console.WriteLine("Hello World!");
        }

        
    }
}
