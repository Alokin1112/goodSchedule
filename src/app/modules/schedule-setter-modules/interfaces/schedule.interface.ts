import { Subject } from '@modules/schedule-setter-modules/interfaces/subject.interface';

export interface Schedule {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  subjects?: Subject[];
}

export type ScheduleForm = Omit<Schedule, "subjects">
