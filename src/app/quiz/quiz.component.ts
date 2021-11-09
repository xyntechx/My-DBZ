import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  // TODO: replace quizzes with arrays named questions (for qns), [character] (for options for that character)
  quizzes = [
    ['Question 1', 'how u doin?'],
    ['Question 2', 'how u doin 2?'],
    ['Question 3', 'how u doin 3?'],
    ['Question 4', 'how u doin 4?'],
    ['Question 5', 'how u doin 5?'],
    ['Question 6', 'how u doin 6?'],
    ['Question 7', 'how u doin 7?'],
    ['Question 8', 'how u doin 8?'],
    ['Question 9', 'how u doin 9?'],
    ['Question 10', 'how u doin 10?'],
  ];

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
