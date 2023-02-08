import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScheduleForm } from '@pages/schedule-setter/interfaces/schedule.interface';
import { SubjetFormCreatorService } from '@pages/schedule-setter/services/subjet-form-creator.service';


@Component({
  selector: 'ds-schedule-change-dialog',
  templateUrl: './schedule-change-dialog.component.html',
  styleUrls: ['./schedule-change-dialog.component.scss']
})
export class ScheduleChangeDialogComponent implements OnInit {

  @Input() color: string;

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ScheduleChangeDialogComponent>,
    private subjetFormCreatorService: SubjetFormCreatorService,
    @Inject(MAT_DIALOG_DATA) private dataForm: ScheduleForm,
  ) { }

  ngOnInit(): void {
    this.form = this.subjetFormCreatorService.getSubjectForm(false, null);
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
