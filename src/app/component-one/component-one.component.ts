import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  createMessage(message) {
    this.data.changeMessage(message);
  }

}
