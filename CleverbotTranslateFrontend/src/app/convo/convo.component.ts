import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {ConvocontrollerService} from '../convocontroller.service';
import { ReplyObserver } from '../reply-observer';
import { Reply } from '../reply';


@Component({
  selector: 'app-convo',
  templateUrl: './convo.component.html',
  styleUrls: ['./convo.component.css']
})
export class ConvoComponent implements OnInit, ReplyObserver,AfterViewChecked{
@ViewChild('scrollMe') private myScrollContainer: ElementRef;
  private replyList: Reply[];

  constructor(private convocontroller: ConvocontrollerService) { 
    convocontroller.subscribeToReplies(this);
  }
  scrollToBottom():void{
    try{
      this.myScrollContainer.nativeElement.scrollTop=this.myScrollContainer.nativeElement.scrollHeight;
    }catch(err){}
  }
  ngOnInit() {
  }
  ngAfterViewChecked(){
    this.scrollToBottom();
  }

  public onReplyAdded(replyList: Reply[]) {
    this.replyList = replyList;
    
  }

}
