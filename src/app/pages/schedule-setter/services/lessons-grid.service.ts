import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LessonsGrid } from '@pages/schedule-setter/interfaces/lessons-grid.interface';
import { Subject } from '../interfaces/subject.interface';

@Injectable()
export class LessonsGridService {

  numOfDays = 5;
  numOfHours = 8;
  private lessonsGrid$ = new BehaviorSubject<LessonsGrid>(this.initLessonsGrid());

  getLessonsGrid(): Observable<LessonsGrid> {
    return this.lessonsGrid$.asObservable();
  }

  addSubject(subject: Subject): void {
    let { days } = this.lessonsGrid$.value;
    subject.lessons.forEach(({ dayIndex, hourIndex }) => {
      days[dayIndex].hours[hourIndex].subjects = [
        ...days[dayIndex].hours[hourIndex].subjects.filter((s) => s.id != subject.id),
        subject,
      ]
    });

    this.lessonsGrid$.next({
      days,
    })
  }

  removeSubject(subject: Subject): void {
    let { days } = this.lessonsGrid$.value;
    this.lessonsGrid$.next({
      days: days.map(({ hours }) => ({
        hours: hours.map(({ subjects }) => ({
          subjects: subjects.filter(({ id }) => id != subject.id),
        }))
      }))
    })
  }
  resetLessonGrid(): void {
    this.lessonsGrid$.next(this.initLessonsGrid());
  }

  completeLessonGrid(): void {
    this.lessonsGrid$.complete();
  }

  private initLessonsGrid(): LessonsGrid {
    return ({
      days: Array(this.numOfDays).fill({
        hours: Array(this.numOfHours).fill({
          subjects: [],
        })
      })
    })
  }
}
