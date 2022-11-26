import { Component, OnInit } from '@angular/core';
import { LessonsGridService } from '@pages/schedule-setter/services/lessons-grid.service';

@Component({
  selector: 'ds-lessons-grid',
  templateUrl: './lessons-grid.component.html',
  styleUrls: ['./lessons-grid.component.scss']
})
export class LessonsGridComponent implements OnInit {

  constructor(
    private lessonsGridService: LessonsGridService,
  ) { }

  ngOnInit(): void {
    this.lessonsGridService.getLessonsGrid().subscribe(res => console.log(res))
  }

}
