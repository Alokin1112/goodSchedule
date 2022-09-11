import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubjectAddDialogComponent } from '@modules/schedule-setter-modules/components/subject-add-dialog/subject-add-dialog.component';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ds-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.scss']
})
export class SubjectAddComponent implements OnDestroy {

  onDestroy$ = new Subject<void>();

  constructor(public dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  openDialog() {
    const dialogRef = this.dialog.open(SubjectAddDialogComponent);

    dialogRef.afterClosed().pipe(
      filter((res) => !!res),
      takeUntil(this.onDestroy$),
    ).subscribe(res => console.log(res));
  }
}
