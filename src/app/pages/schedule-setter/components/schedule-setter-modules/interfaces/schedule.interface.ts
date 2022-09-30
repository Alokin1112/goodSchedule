import { Subject } from '@pages/schedule-setter/components/schedule-setter-modules/interfaces/subject.interface';

export interface Schedule {
  id: string;
  name: string;
  subjects: Subject[];
}