import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  is_quizpage = true;

  changePage() {
    this.is_quizpage = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
