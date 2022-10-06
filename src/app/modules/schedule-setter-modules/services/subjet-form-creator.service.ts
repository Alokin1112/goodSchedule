import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COLORS } from '@shared/constants/colors.const';

@Injectable()
export class SubjetFormCreatorService {

  constructor(
    private fb: FormBuilder,
  ) { }

  getSubjectForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      color: [COLORS.GREEN, Validators.required],
    })
  }
}
