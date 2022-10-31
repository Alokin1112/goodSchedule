import { Subject } from '@modules/schedule-setter-modules/interfaces/subject.interface';

export interface Schedule {
  id: string;
  name: string;
  color: string;
  subjects?: Subject[];
}

export type ScheduleForm = Omit<Schedule, "subjects">