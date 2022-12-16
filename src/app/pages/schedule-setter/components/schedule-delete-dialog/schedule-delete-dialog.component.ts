import { Component, Inject, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Schedule } from '@pages/schedule-setter/interfaces/schedule.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScheduleForm } from '@pages/schedule-setter/interfaces/schedule.interface';
import { SubjetFormCreatorService } from '@pages/schedule-setter/services/subjet-form-creator.service';


@Component({
  selector: 'ds-schedule-delete-dialog',
  templateUrl: './schedule-delete-dialog.component.html',
  styleUrls: ['./schedule-delete-dialog.component.scss']
})
export class ScheduleDeleteDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ScheduleDeleteDialogComponent>,
    private subjetFormCreatorService: SubjetFormCreatorService,
    @Inject(MAT_DIALOG_DATA) private dataForm: ScheduleForm,
  ) {  }


  ngOnInit(): void {
    this.form = this.subjetFormCreatorService.getSubjectForm();
    this.form.patchValue(this.dataForm);
  }

  onDeleteClose() {
    const formResult = this.form.value;
    this.form.reset();
    this.dialogRef.close(formResult);
  }

  onCancelClose() {
    this.dialogRef.close(null);
  }

}
