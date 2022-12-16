import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Schedule } from '@pages/schedule-setter/interfaces/schedule.interface';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleForm } from '@pages/schedule-setter/interfaces/schedule.interface';
import { filter } from 'rxjs';
import { ScheduleDeleteDialogComponent } from '@pages/schedule-setter/components/schedule-delete-dialog/schedule-delete-dialog.component';

@Component({
  selector: 'ds-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent {

  @Input() dsSchedule: Schedule;
  @Output() dsDeleteSchedule = new EventEmitter<ScheduleForm>();

  constructor(public dialog: MatDialog) { }

  deleteSchedule() {

    const dialogRef = this.dialog.open(ScheduleDeleteDialogComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().pipe(
      filter((res) => !!res),
    ).subscribe((res) => this.dsDeleteSchedule.emit(res as ScheduleForm));
  }
}
