import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Schedule } from '@pages/schedule-setter/interfaces/schedule.interface';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleForm } from '@pages/schedule-setter/interfaces/schedule.interface';
import { filter, Subject, takeUntil } from 'rxjs';
import { ScheduleDeleteDialogComponent } from '@pages/schedule-setter/components/schedule-delete-dialog/schedule-delete-dialog.component';
import { ScheduleAddDialogComponent } from '@pages/schedule-setter/components/schedule-add-dialog/schedule-add-dialog.component';

@Component({
  selector: 'ds-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnDestroy {

  @Input() dsSchedule: Schedule;
  @Output() dsDeleteSchedule = new EventEmitter<ScheduleForm>();
  @Output() dsChangeSchedule = new EventEmitter<ScheduleForm>();

  OnDestroy$ = new Subject<void>();

  constructor(public dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.OnDestroy$.next();
    this.OnDestroy$.complete();
  }

  deleteSchedule() {
    const dialogRef = this.dialog.open(ScheduleDeleteDialogComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().pipe(
      filter((res) => !!res),
      takeUntil(this.OnDestroy$),
    ).subscribe(() => this.dsDeleteSchedule.emit(this.dsSchedule));
  }

  changeSchedule() {
    const dialogRef = this.dialog.open(ScheduleAddDialogComponent, {
      minWidth: '400px',
      data: {
        ...this.dsSchedule,
        isEdit: true,
      }
    });

    dialogRef.afterClosed().pipe(
      filter((res) => !!res),
      takeUntil(this.OnDestroy$),
    ).subscribe((res) => this.dsChangeSchedule.emit(res as ScheduleForm));
  }
}
