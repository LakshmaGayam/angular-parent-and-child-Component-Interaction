import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
@Input()public ParentData;
@Output()  public Childevent=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  eventfited()
  {
    this.Childevent.emit("data coming from child");
  }

}