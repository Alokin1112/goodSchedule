import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScheduleDialogData, ScheduleForm } from '@pages/schedule-setter/interfaces/schedule.interface';
import { SubjetFormCreatorService } from '@pages/schedule-setter/services/subjet-form-creator.service';
import { isEqual } from 'lodash';
import { Observable, map, merge, of, tap } from 'rxjs';


@Component({
  selector: 'ds-schedule-add-dialog',
  templateUrl: './schedule-add-dialog.component.html',
  styleUrls: ['./schedule-add-dialog.component.scss']
})
export class ScheduleAddDialogComponent implements OnInit {

  isSame$: Observable<boolean>;
  form: FormGroup;
  isEdit: boolean;

  constructor(
    public dialogRef: MatDialogRef<ScheduleAddDialogComponent>,
    private subjetFormCreatorService: SubjetFormCreatorService,
    @Inject(MAT_DIALOG_DATA) private dataForm: ScheduleDialogData,
  ) { }

  ngOnInit(): void {
    this.form = this.subjetFormCreatorService.getSubjectForm();
    this.form.patchValue(this.dataForm);
    this.isEdit = this.dataForm?.isEdit;
    if (this.isEdit) {
      const { isEdit, id, ...response } = this.dataForm
      this.isSame$ = merge(
        of(true), this.form.valueChanges.pipe(
          map(() => isEqual(response, this.form.value)),
        ))
    } else {
      this.isSame$ = of(false);
    }
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
