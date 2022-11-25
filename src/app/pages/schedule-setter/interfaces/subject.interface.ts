export interface Subject {
  id: string;
  name: string;
  color: string;
  isVisible?: boolean;
  lessons: Lesson[];
}

export interface Lesson {
  name: string;
  dayIndex: number;
  hourIndex: number;
}