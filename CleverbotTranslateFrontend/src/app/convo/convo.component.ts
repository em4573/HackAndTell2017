import { Component, OnInit } from '@angular/core';
import {ConvocontrollerService} from '../convocontroller.service';

@Component({
  selector: 'app-convo',
  templateUrl: './convo.component.html',
  styleUrls: ['./convo.component.css']
})
export class ConvoComponent implements OnInit {

  constructor(private convocontroller: ConvocontrollerService) { }

  ngOnInit() {
  }

}
