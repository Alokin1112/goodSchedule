import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@shared/ui/ui.module';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { SubjectsListComponent } from '@pages/schedule-setter/components/schedule-setter-modules/components/subjects-list/subjects-list.component';
import { SubjectItemComponent } from '@pages/schedule-setter/components/schedule-setter-modules/components/subject-item/subject-item.component';
import { SubjectAddComponent } from '@pages/schedule-setter/components/schedule-setter-modules/components/subject-add/subject-add.component';
import { SubjectAddDialogComponent } from '@pages/schedule-setter/components/schedule-setter-modules/components/subject-add-dialog/subject-add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    SubjectsListComponent,
    SubjectItemComponent,
    SubjectAddComponent,
    SubjectAddDialogComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    SubjectsListComponent
  ]
})
export class ScheduleSetterModulesModule { }
