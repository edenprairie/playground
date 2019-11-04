using System;

namespace cs80 {
    public class TuplePatterns {
        public static void Demo() {
            Console.WriteLine(RockPaperScissors("rock", "paper"));
            Console.WriteLine(RockPaperScissors("scissors", "rock"));
            Console.WriteLine(RockPaperScissors("rock", "scissors"));
        }
        public static string RockPaperScissors(string first, string second) => (first, second) switch
        {
            ("rock", "paper") => "rock is covered by paper. Paper wins.",
            ("rock", "scissors") => "rock breaks scissors. Rock wins.",
            ("paper", "rock") => "paper covers rock. Paper wins.",
            ("paper", "scissors") => "paper is cut by scissors. Scissors wins.",
            ("scissors", "rock") => "scissors is broken by rock. Rock wins.",
            ("scissors", "paper") => "scissors cuts paper. Scissors wins.",
            (_, _) => "tie"
        };
    }
}