// import { Injectable } from '@angular/core';
// import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

// @Injectable()
// export class WebSocketService {
//   private socket$: WebSocketSubject<any>;

//   public connect(url: string): void {
//     if (!this.socket$ || this.socket$.closed) {
//       this.socket$ = webSocket(url);
//     }
//   }

//   public send(message: any): void {
//     this.socket$.next(message);
//   }

//   public close(): void {
//     this.socket$.complete();
//   }

//   public getMessages() {
//     return this.socket$.asObservable();
//   }
// }
