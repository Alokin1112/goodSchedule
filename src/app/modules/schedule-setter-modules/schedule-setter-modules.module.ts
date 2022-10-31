import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@shared/ui/ui.module';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { ScheduleListComponent } from '@modules/schedule-setter-modules/components/schedule-list/schedule-list.component';
import { ScheduleItemComponent } from '@modules/schedule-setter-modules/components/schedule-item/schedule-item.component';
import { ScheduleAddComponent } from '@modules/schedule-setter-modules/components/schedule-add/schedule-add.component';
import { ScheduleAddDialogComponent } from '@modules/schedule-setter-modules/components/schedule-add-dialog/schedule-add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SubjetFormCreatorService } from '@modules/schedule-setter-modules/services/subjet-form-creator.service';

@NgModule({
  declarations: [
    ScheduleListComponent,
    ScheduleItemComponent,
    ScheduleAddComponent,
    ScheduleAddDialogComponent
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
    ScheduleListComponent,
  ],
  providers: [
    SubjetFormCreatorService
  ]
})
export class ScheduleSetterModulesModule { }
