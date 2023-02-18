import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ds-schedule-delete-dialog',
  templateUrl: './schedule-delete-dialog.component.html',
  styleUrls: ['./schedule-delete-dialog.component.scss']
})
export class ScheduleDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ScheduleDeleteDialogComponent>,
  ) { }

  onDeleteClose() {
    this.dialogRef.close(true);
  }

  onCancelClose() {
    this.dialogRef.close(false);
  }

}
