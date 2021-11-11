import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
