class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];

      function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
      }

      console.log(getRandomInt(3));
        // expected output: 0, 1 or 2
    return ;
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
    determineWinner(userSelection, cpuSelection)
    {
        function playFunction() {

            var cpuSelection = Math.random();
            if (cpuSelection < 0.34) {
                cpuSelection = "rock";
            } else if (cpuSelection <= 0.67) {
                cpuSelection = "paper";
            } else {
                cpuSelection = "scissors";
            }

            var compare = function (choice1, choice2) {
                if (choice1 === choice2) {
                    alert("The result is a tie!");
                }
                if (choice1 === "rock") {
                    if (choice2 === "scissors") {
                        alert("rock wins");
                    } else {
                        alert("paper wins");
                    }
                }
                if (choice1 === "paper") {
                    if (choice2 === "rock") {
                        alert("paper wins");
                    } else {
                        if (choice2 === "scissors") {
                            alert("scissors wins");
                        }
                    }
                    if (choice1 === "scissors") {
                        if (choice2 === "rock") {
                            alert("rock wins");
                        } else {
                            if (choice2 === "paper") {
                                alert("scissors wins");
                            }
                        }
                    }
                }
            };

            compare(userSelection, cpuSelection)
    }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
     play(userSelection)
    {
      this.score =
      {
       user: NEW_SCORE,
       cpu: NEW_SCORE
       }
      this.gameHistoryLog.push(`You selected Scissors, CPU selected Paper: You wins wins`);

    }

}