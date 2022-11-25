import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleForm } from '@pages/schedule-setter/interfaces/schedule.interface';
import { filter, Subject, takeUntil } from 'rxjs';
import { ScheduleAddDialogComponent } from '@pages/schedule-setter/components/schedule-add-dialog/schedule-add-dialog.component';

@Component({
  selector: 'ds-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.scss']
})
export class ScheduleAddComponent implements OnDestroy {

  @Output() dsAddSchedule = new EventEmitter<ScheduleForm>();

  onDestroy$ = new Subject<void>();

  constructor(public dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ScheduleAddDialogComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().pipe(
      filter((res) => !!res),
      takeUntil(this.onDestroy$),
    ).subscribe((res) => this.dsAddSchedule.emit(res as ScheduleForm));
  }
}
