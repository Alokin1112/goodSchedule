import { Subject } from "@pages/schedule-setter/interfaces/subject.interface";

export interface LessonsGrid {
  days: Day[],
}

export interface Day {
  hours: Hour[],
}
export interface Hour {
  subjects: Subject[],
}