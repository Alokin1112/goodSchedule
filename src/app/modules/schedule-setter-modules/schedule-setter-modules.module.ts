import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@shared/ui/ui.module';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { SubjectsListComponent } from '@modules/schedule-setter-modules/components/subjects-list/subjects-list.component';
import { SubjectItemComponent } from '@modules/schedule-setter-modules/components/subject-item/subject-item.component';
import { SubjectAddComponent } from '@modules/schedule-setter-modules/components/subject-add/subject-add.component';
import { SubjectAddDialogComponent } from '@modules/schedule-setter-modules/components/subject-add-dialog/subject-add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SubjetFormCreatorService } from '@modules/schedule-setter-modules/services/subjet-form-creator.service';

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
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    SubjectsListComponent,
  ],
  providers: [
    SubjetFormCreatorService
  ]
})
export class ScheduleSetterModulesModule { }
