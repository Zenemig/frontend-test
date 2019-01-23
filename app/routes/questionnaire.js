import Route from '@ember/routing/route'

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        question: 'Given a string, reverse each word in the sentence.',
        example: '"Welcome to this Javascript Test!" should be become "emocleW ot siht tpircsavaJ !tseT"',
        link: 'https://codepen.io/Zenemig/pen/zexEEO?editors=0010'
      },
      {
        id: 2,
        question: 'Check if a given string is a palindrome. Case sensitivity should be taken into account.',
        example: 'String "racecar" should be true. String "race car" should also be true.',
        link: 'https://codepen.io/Zenemig/pen/qgEVVp?editors=0012'
      },
      {
        id: 3,
        question: 'Implement enqueue and dequeue using only two stacks.',
        link: 'https://codepen.io/Zenemig/pen/exmyJe?editors=0011'
      },
      {
        id: 4,
        question: 'Given an integer, determine if it is a power of 2. If so, return that number, else return -1.',
        link: 'https://codepen.io/Zenemig/pen/KJwZey?editors=0012'
      },
      {
        id: 5,
        question: 'Describe the functionality of the use strict directive.',
        answer: 'It helps make fewer errors by detecting more things that could lead to breakages.'
      },
      {
        id: 6,
        question: 'What is the difference between == and === in JS?',
        answer: 'The difference is == makes type correction === expects the types to match. For example, 0 == "0" will be true while 0 === "0" will be false.'
      },
      {
        id: 7,
        question: 'What is the difference between null and undefined.',
        answer: 'An undefined variable is one that has been declared but has not been assigned value, while null is a value assigned to a declared variable to represent no value.'
      }
    ]
  }
})
