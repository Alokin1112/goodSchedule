import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@shared/ui/ui.module';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { SubjectsListComponent } from '@modules/schedule-setter-modules/components/subjects-list/subjects-list.component';
import { SubjectItemComponent } from '@modules/schedule-setter-modules/components/subject-item/subject-item.component';

@NgModule({
  declarations: [
    SubjectsListComponent,
    SubjectItemComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    SubjectsListComponent
  ]
})
export class ScheduleSetterModulesModule { }
