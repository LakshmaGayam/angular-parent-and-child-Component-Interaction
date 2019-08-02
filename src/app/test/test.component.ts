import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
//this line is to get data from parent component (we have to use decorator called @input() to the reference variable)
  @Input()public ParentData;
  // at line no 12 if we want send data from child to parent we have to create an object for EventEmitter() through that object refernce 
  //we can call the data to the parent.In parent component we have to bind the property

@Output()  public Childevent=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  eventfired()
  {
    this.Childevent.emit("data coming from child");
  }

}
