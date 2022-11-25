import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScheduleForm } from '@pages/schedule-setter/interfaces/schedule.interface';
import { SubjetFormCreatorService } from '@pages/schedule-setter/services/subjet-form-creator.service';


@Component({
  selector: 'ds-schedule-add-dialog',
  templateUrl: './schedule-add-dialog.component.html',
  styleUrls: ['./schedule-add-dialog.component.scss']
})
export class ScheduleAddDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ScheduleAddDialogComponent>,
    private subjetFormCreatorService: SubjetFormCreatorService,
    @Inject(MAT_DIALOG_DATA) private dataForm: ScheduleForm,
  ) { }

  ngOnInit(): void {
    this.form = this.subjetFormCreatorService.getSubjectForm();
    this.form.patchValue(this.dataForm);
  }

  onAddClose() {
    const formResult = this.form.value;
    this.form.reset();
    this.dialogRef.close(formResult);
  }

  onCancelClose() {
    this.dialogRef.close(null);
  }

}
