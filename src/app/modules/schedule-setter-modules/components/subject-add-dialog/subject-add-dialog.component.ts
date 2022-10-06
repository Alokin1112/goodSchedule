import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScheduleForm } from '@modules/schedule-setter-modules/interfaces/schedule.interface';
import { SubjetFormCreatorService } from '@modules/schedule-setter-modules/services/subjet-form-creator.service';

@Component({
  selector: 'ds-subject-add-dialog',
  templateUrl: './subject-add-dialog.component.html',
  styleUrls: ['./subject-add-dialog.component.scss']
})
export class SubjectAddDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SubjectAddDialogComponent>,
    private subjetFormCreatorService: SubjetFormCreatorService,
    @Inject(MAT_DIALOG_DATA) private dataForm: ScheduleForm,
  ) { }

  ngOnInit(): void {
    this.form = this.subjetFormCreatorService.getSubjectForm();
    this.form.patchValue(this.dataForm);
  }

  onAddClose() {
    this.dialogRef.close(true);
  }
  onCancelClose() {
    this.dialogRef.close();
  }

}
