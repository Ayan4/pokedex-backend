const { v4: uuidv4 } = require('uuid');

const quizData = [
  {
    id: uuidv4(),
    name: "Pokemon",
    coverImageUrl:
      "https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo.png",
    totalScore: 20,
    questions: [
      {
        id: uuidv4(),
        question:
          "What Pokemon does Pikachu evolve into?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: uuidv4(),
            content: `Jolteon`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Raichu`,
            isAnswer: true
          },
          {
            id: uuidv4(),
            content: `Electivire`,
            isAnswer: false
          }
        ]
      },
      {
        id: uuidv4(),
        question: "What's the most effective Poke Ball in the game? ",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: uuidv4(),
            content: `Timer Ball`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Great Ball`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Master Ball `,
            isAnswer: true
          }
        ]
      },
      {
        id: uuidv4(),
        question: "What's the device trainers use to keep a record of their Pokemon encounters?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id:uuidv4(),
            content: `Pokecounter`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Pokefinder`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Pokedex`,
            isAnswer: true
          }
        ]
      },
      {
        id: uuidv4(),
        question:
          "If you need to buy supplies in the Pokemon world, where do you go?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: uuidv4(),
            content: `Pokemon Mart`,
            isAnswer: true
          },
          {
            id: uuidv4(),
            content: `Gym`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Poke Dep`,
            isAnswer: false
          }
        ]
      },
      {
        id: uuidv4(),
        question:
          "If you need to revive your fainted Pokemon to full health, where do you go? ",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: uuidv4(),
            content: `Mount Fuji`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Pokemon Center`,
            isAnswer: true
          },
          {
            id: uuidv4(),
            content: `Pokemon Mansion`,
            isAnswer: false
          }
        ]
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Dragon Ball Z",
    coverImageUrl:
      "https://i.pinimg.com/originals/60/a9/61/60a96199afa8469b7c3c46810ed86816.png",
    totalScore: 20,
    questions: [
      {
        id: uuidv4(),
        question: "A wounded Z fighter would restore the full health by using which item?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: uuidv4(),
            content: `Capsule medicine`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Senzu bean`,
            isAnswer: true
          },
          {
            id: uuidv4(),
            content: `Saiyan liquid`,
            isAnswer: false
          }
        ]
      },
      {
        id: uuidv4(),
        question: "How can Goku reach the planet of King Kai?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: uuidv4(),
            content: `Walk along the Snake Way`,
            isAnswer: true
          },
          {
            id: uuidv4(),
            content: `Teleport instantly`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Call the Dragon God to make a wish`,
            isAnswer: false
          }
        ]
      },
      {
        id: uuidv4(),
        question: "What is the name of Goku’s father?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: uuidv4(),
            content: `Gohan`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Goten`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Bardock`,
            isAnswer: true
          }
        ]
      },
      {
        id: uuidv4(),
        question:
          "One minute in the Hyperbolic Time Chamber is equivalent to how much time in the real world outside?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: uuidv4(),
            content: `2 years`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `365 days`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `365 minutes`,
            isAnswer: true
          }
        ]
      },
      {
        id: uuidv4(),
        question:
          "What is the highest level of Super Saiyan that Vegeta can reach?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            id: uuidv4(),
            content: `Level 2`,
            isAnswer: true
          },
          {
            id: uuidv4(),
            content: `Level 1`,
            isAnswer: false
          },
          {
            id: uuidv4(),
            content: `Level 4`,
            isAnswer: false
          }
        ]
      }
    ]
  }
];

module.exports = quizData;