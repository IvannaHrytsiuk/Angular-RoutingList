import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    arr:Array<Task> = [
        new Task('HTML5', true),
        new Task('CSS3', true),
        new Task('SCSS', false),
        new Task('JavaScript', false),
        new Task('jQuery', false),
        new Task('Angular', false),
        ];
        newTask:string;
        redagTask:string;
        display:string = 'none';
        saveIndex:number;

  constructor() { }

  ngOnInit() {
  }
  addNewTask():void {
    this.arr.push(
      new Task(this.newTask, false)
    );
    this.newTask = '';
  }
  deleteTask(index:number): void {
    this.arr.splice(index,1);
  }
  editTask(index:number):void{
    this.display = 'flex';
    this.redagTask = this.arr[index].name;
    this.saveIndex = index;
  }
  saveEditTask():void{
    this.arr[this.saveIndex].name = this.redagTask;
    this.display = 'none';
  }
}

class Task {
    name: string;
    isDone:boolean;
    color:string;
    constructor(name:string, isDone:boolean) {
      this.name = name;
      this.setDone(isDone);
    }
    setDone(isDone:boolean):void{
      this.isDone = isDone;
      this.color = isDone ? 'Green' : 'Red';
    }
    invert():void{
      this.setDone(!this.isDone);
    }
  }