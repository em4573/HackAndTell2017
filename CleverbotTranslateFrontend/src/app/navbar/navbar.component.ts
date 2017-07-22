import { Component, OnInit } from '@angular/core';
import {ConvocontrollerService} from '../convocontroller.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 // private ReplyText: string;
  constructor(private Convocontroller: ConvocontrollerService ) { }

  private OnReply(ReplyText: string){
    if (ReplyText==""){}else{
      console.log(ReplyText);
      this.Convocontroller.sendReplyText(ReplyText, true);
      ReplyText = "Type Here";
    }
  }

  ngOnInit() {
  }

}
