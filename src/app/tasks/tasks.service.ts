import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn Angular and become a pro!',
      dueDate: '2021-12-31',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master Css',
      summary: 'Learn Css and become a pro!',
      dueDate: '2021-12-31',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Master Ts',
      summary: 'Learn Ts and become a pro!',
      dueDate: '2021-12-31',
    },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(userId: string, newTaskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.dueDate,
    });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

}
