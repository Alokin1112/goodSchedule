import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ds-subject-add-dialog',
  templateUrl: './subject-add-dialog.component.html',
  styleUrls: ['./subject-add-dialog.component.scss']
})
export class SubjectAddDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SubjectAddDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onAddClose() {
    this.dialogRef.close(true);
  }
  onCancelClose() {
    this.dialogRef.close();
  }

}
