import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleAddDialogComponent } from '@modules/schedule-setter-modules/components/schedule-add-dialog/schedule-add-dialog.component';
import { ScheduleForm } from '@modules/schedule-setter-modules/interfaces/schedule.interface';
import { filter, Subject, takeUntil } from 'rxjs';

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
