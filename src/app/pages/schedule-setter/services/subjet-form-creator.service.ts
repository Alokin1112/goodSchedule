import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COLORS } from '@shared/constants/colors.const';

@Injectable()
export class SubjetFormCreatorService {

  constructor(
    private fb: FormBuilder,
  ) { }

  getSubjectForm(change: boolean, color2 ?: string | null): FormGroup {
    if (change){
      return this.fb.group({
        title: [null, Validators.required],
        subtitle: [null, Validators.required],
        color: [COLORS.GREEN, Validators.required],
      })
    }
    return this.fb.group({
      title: [null],
      subtitle: [null],
      color: [color2],
    })
  }
}
