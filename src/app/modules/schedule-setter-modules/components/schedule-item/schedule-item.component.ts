import { Schedule } from '@modules/schedule-setter-modules/interfaces/schedule.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
