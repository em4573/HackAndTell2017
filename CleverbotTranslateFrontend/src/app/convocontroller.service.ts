import { Injectable } from '@angular/core';
import { Reply } from './reply';
import { ReplyObserver } from './reply-observer';

@Injectable()
export class ConvocontrollerService {
 private ReplyList: Reply[];
 private Observer:ReplyObserver;
 
  constructor() {
    this.ReplyList = [];
  }

  private notifyReplyListChanged() {
    this.Observer.onReplyAdded(this.ReplyList);
  }

  public subscribeToReplies(ObservedReply) {
    this.Observer=ObservedReply;
  }

  public sendReplyText(replyText: string, isLocal: boolean) {
    let reply = new Reply(replyText, isLocal);
    this.ReplyList.push(reply);
    this.notifyReplyListChanged();
  }


}
