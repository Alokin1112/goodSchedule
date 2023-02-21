import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { Schedule, ScheduleForm } from '@pages/schedule-setter/interfaces/schedule.interface';
import { skip } from 'rxjs';

@Component({
  selector: 'ds-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent {

  schedules: Schedule[] = [];

  addNewSchedule(schedule: ScheduleForm) {
    this.schedules = [
      ...this.schedules,
      schedule
    ]
  }
  deleteSchedule(index: number) {
    this.schedules = [
      ...this.schedules.filter((item, ind) => index !== ind)
    ]
  }
  changeSchedule(schedule: ScheduleForm, index: number) {
    schedule.title != null ? this.schedules[index].title = schedule.title : this.schedules[index].title
    schedule.subtitle != null ? this.schedules[index].subtitle = schedule.subtitle : this.schedules[index].subtitle
    schedule.color != this.schedules[index].color ? this.schedules[index].color = schedule.color : this.schedules[index].color
  }
}
