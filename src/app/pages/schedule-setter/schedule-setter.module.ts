import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleSetterRoutingModule } from '@pages/schedule-setter/schedule-setter-routing.module';
import { ScheduleSetterComponent } from '@pages/schedule-setter/schedule-setter.component';
import { UiModule } from '@shared/ui/ui.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ScheduleListComponent } from '@pages/schedule-setter/components/schedule-list/schedule-list.component';
import { ScheduleItemComponent } from '@pages/schedule-setter/components/schedule-item/schedule-item.component';
import { ScheduleAddComponent } from '@pages/schedule-setter/components/schedule-add/schedule-add.component';
import { ScheduleAddDialogComponent } from '@pages/schedule-setter/components/schedule-add-dialog/schedule-add-dialog.component';
import { SubjetFormCreatorService } from '@pages/schedule-setter/services/subjet-form-creator.service';
import { ScheduleDeleteDialogComponent } from '@pages/schedule-setter/components/schedule-delete-dialog/schedule-delete-dialog.component';
import { ScheduleChangeDialogComponent } from '@pages/schedule-setter/components/schedule-change-dialog/schedule-change-dialog.component';

@NgModule({
  declarations: [
    ScheduleSetterComponent,
    ScheduleListComponent,
    ScheduleItemComponent,
    ScheduleAddComponent,
    ScheduleAddDialogComponent,
    ScheduleDeleteDialogComponent,
    ScheduleChangeDialogComponent
  ],
  imports: [
    CommonModule,
    ScheduleSetterRoutingModule,
    UiModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    SubjetFormCreatorService,
  ]
})
export class ScheduleSetterModule { }
