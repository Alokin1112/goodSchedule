import { Subject } from '@modules/schedule-setter-modules/interfaces/subject.interface';

export interface Schedule {
  id: string;
  name: string;
  subjects: Subject[];
}