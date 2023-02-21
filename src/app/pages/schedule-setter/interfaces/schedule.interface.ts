import { Subject } from "@pages/schedule-setter/interfaces/subject.interface";

export interface Schedule {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  subjects?: Subject[];
}

export type ScheduleForm = Omit<Schedule, "subjects">

export interface ScheduleDialogData extends Omit<Schedule, "subjects"> {
  isEdit: boolean;
}
