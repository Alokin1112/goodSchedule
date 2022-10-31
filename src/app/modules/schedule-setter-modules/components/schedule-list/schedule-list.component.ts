import { Schedule, ScheduleForm } from '@modules/schedule-setter-modules/interfaces/schedule.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'ds-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent {

  schedules: Schedule[] = [];

  addNewSchedule(schedule: ScheduleForm) {
    this.schedules.push(schedule);
  }
  deleteSchedule(index: number) {
    this.schedules.filter((item, ind) => index !== ind);
  }
}
