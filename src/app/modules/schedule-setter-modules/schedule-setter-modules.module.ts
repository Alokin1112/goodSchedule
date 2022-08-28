import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsCategoriesWrapperComponent } from '@modules/schedule-setter-modules/components/subjects-categories-wrapper/subjects-categories-wrapper.component';
import { UiModule } from '@shared/ui/ui.module';

@NgModule({
  declarations: [
    SubjectsCategoriesWrapperComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
  ],
  exports: [
    SubjectsCategoriesWrapperComponent,
  ]
})
export class ScheduleSetterModulesModule { }
