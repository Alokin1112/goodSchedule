export interface Subject {
  id: string;
  name: string;
  color: string;
  isVisible?: boolean;
  lessons: Lesson[];
}

export interface Lesson {
  dayIndex: number;
  hourIndex: number;
}