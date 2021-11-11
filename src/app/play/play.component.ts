import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  @Input() characters = {};
  @Input() index = 0;

  @Output() newIndex = new EventEmitter<number>();

  updateIndex() {
    this.newIndex.emit();
  }

  answers: string[] = [];
  character: string = '';

  appendAnswer(newAnswer: string) {
    this.answers.push(newAnswer);
    this.character = findMaxCount(this.answers);
  }

  constructor() {}

  ngOnInit(): void {}
}

const findMaxCount = (array: string[]) => {
  const maxValue = array.reduce((previous, current, i, arr) => {
    if (
      arr.filter((item) => item === previous).length >
      arr.filter((item) => item === current).length
    ) {
      return previous;
    } else {
      return current;
    }
  });

  console.log(maxValue);

  return maxValue;
};
