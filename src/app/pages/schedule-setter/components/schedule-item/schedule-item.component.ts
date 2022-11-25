import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Schedule } from '@pages/schedule-setter/interfaces/schedule.interface';

@Component({
  selector: 'ds-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent {

  @Input() dsSchedule: Schedule;
  @Output() dsDeleteSchedule = new EventEmitter<void>();

  deleteSchedule() {
    this.dsDeleteSchedule.emit();
  }
}
