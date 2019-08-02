import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
//this line is to get data from parent component (we have to use decorator called @input() to the reference variable)
  @Input()public ParentData;
@Output()  public Childevent=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  eventfired()
  {
    this.Childevent.emit("data coming from child");
  }

}
