import { Reply } from './reply';

export interface ReplyObserver {
    onReplyAdded(replyList: Reply[]);
}
