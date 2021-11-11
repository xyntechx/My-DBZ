import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  // array of questions
  questions = [
    'What would you do if somebody picks a fight with you?',
    'How would you celebrate a victory?',
    'How would you behave in a party?',
    'Say you are actually in the Dragon World. What would you wish to Shenron?',
    'You are exhausted but your enemy is still standing. What would you do?',
    'What would you say to someone more skilled than you in your most loved hobby?',
    'Which is your favourite attack?',
    'If you had a choice, would you hone your skills under a mentor? Why or why not?',
    'Someone takes your family hostage. How would you react?',
    'Which is your favourite quote?',
  ];

  // character to options (ordered to match the respective questions)
  answers = {
    bulma: [
      'Pull up a loaded gun and point it at them',
      'Host an expensive party at some cruise ship',
      'I am the host',
      'To be 5 years younger',
      'Ask someone else to kill them',
      "Oh wow I've never met someone like you before",
      'Dragon Radar #NotAMoveButOk',
      "I'm an expert at my field sooooo",
      'Call the police',
      '"I\'m too young and pretty to die"',
    ],
    buu: [
      'Continue to eat',
      'Eat more food',
      'Raid the buffet section',
      '🍭🍮🍫🍬🍰',
      'Wish they are food so that you can kill two birds with one stone: satiate your hunger and defeat your enemy',
      'HOW DARE YOUUUUUUUUU',
      'Chocolate Beam',
      'NO MENTOR JUST BECAUSE',
      'Eat them',
      '"ME NO LIKE YOU! ME EAT FOOD!"',
    ],
    cell: [
      'Laugh and gloat about how you are absolutely stronger than them',
      'Enter more competitions to win more and flex',
      'Tell everyone how perfect I am',
      'To be PERFECTER',
      'Take them down with you',
      'Impossible! I am the ultimate being!',
      'Absorption',
      "A mentor? Bah! Don't make me laugh! I AM the mentor",
      'Kill them',
      '"Perfection"',
    ],
    frieza: [
      'Laugh and say "very well... I will grant you your death wish"',
      'Make sure that your victory is indisputable by finishing off everyone and anyone',
      'Am alone because everyone is intimidated by me',
      'To be 5cm taller',
      'Negotiate with them but kill them when they lower their guard',
      'You are very peculiar indeed...',
      'Death Beam',
      "I'd die over and over again before I am enslaved by such a notion",
      'Kill them and their family',
      '"You monkey!"',
    ],
    gohan: [
      'Tremble and not fight until necessary',
      'Bow',
      "Answer random questions by family members because I'm the smart one",
      'To end world hunger, global warming, and all other challenges of humanity',
      'Explode in anger and kill them',
      'Wow! Can you teach me?',
      'Masenko',
      'Yes please! I want to learn so much more from them!',
      'Get angry and kill them',
      '"I... I feel it slipping..."',
    ],
    goku: [
      'Feel excited and start right away',
      'Go to a restaurant and spend all the prize money',
      'Show up late but am greeted with joy',
      'A rival',
      'Unlock a power never seen before',
      "WOW! Let's [insert hobby] together!",
      'Kamehameha',
      'Wowee! Of course! Do I need a reason?',
      'Befriend them and make them release my family',
      '"I am the hope of the universe"',
    ],
    krillin: [
      'Ask if they really want to do this',
      '👁👄👁',
      'Am awkward',
      'A nose',
      'Plea for help',
      "Oh... you're another one, huh?",
      'Destructo Disc',
      'Sure, I guess (not that it would make a difference)',
      'Try to destroy them',
      '"Guess I\'ll have to give it my all too!"',
    ],
    trunks: [
      'Only fight if the person has wronged you or those you care about',
      '"Finally, my mission is complete"',
      'Am awkward because people keep on hitting on me',
      'The destruction of AI',
      'Bring the whole gang to fight them',
      'Please help me!',
      'Burning Attack',
      "The last time I had a mentor, it didn't turn out so well with them... but sure, I need to improve with their help!",
      'Have a panic attack but destroy them without a second thought afterwards',
      '"I\'ll save the future!"',
    ],
    vegeta: [
      'Make fun of and toy with them',
      '"I told you I would beat you, weakling!"',
      'Am alone because #AntiSocialSocialGang',
      'To be Number One',
      'Never give up and persevere to inflict as much damage as possible',
      'Outrageous!',
      'Final Flash',
      'I walk alone.',
      "Torture them and kill them when they're already half-dead",
      '"Let me ask you, does a machine like yourself ever experience fear?"',
    ],
  };

  is_quizpage = true;
  changePage() {
    this.is_quizpage = false;
  }

  index = 0;
  updateIndex() {
    this.index++; // allows reusable Quiz component
  }

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
