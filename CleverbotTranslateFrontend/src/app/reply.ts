export class Reply {

    public replyText: string;
    public isLocal: boolean;
    public today: number;

    constructor(replyText: string, isLocal: boolean) {
        this.replyText = replyText;
        this.isLocal = isLocal;
        this.today = Date.now();
}
