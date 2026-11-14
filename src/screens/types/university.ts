// src/types/university.ts

export interface Course {
  id: string;
  code: string;
  title: string;
  teacher: string;
  credits: number;
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  deadline: string;
  completed: boolean;
}

export interface Exam {
  id: string;
  subject: string;
  date: string;
  time: string;
  room: string;
}