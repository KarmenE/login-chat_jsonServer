//prima del polling:

// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Message } from '../models/message.type';
// import { tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChatService {
//   private messagesUrl = 'http://localhost:3000/messages';
//   private messagesSubject = new BehaviorSubject<Message[]>([]);
//   messages$ = this.messagesSubject.asObservable();

//   constructor(private http: HttpClient) {
//     this.loadMessages();
//   }

//   private loadMessages(): void {
//     this.http.get<Message[]>(this.messagesUrl).subscribe(
//       messages => this.messagesSubject.next(messages),
//       error => console.error('Errore nel caricamento dei messaggi:', error)
//     );
//   }

//   addMessage(author: string, content: string): void {
//     const newMessage: Message = {
//       id: Date.now(), // Usando timestamp come id univoco
//       author,
//       content,
//       timestamp: new Date()
//     };

//     this.http.post<Message>(this.messagesUrl, newMessage).pipe(
//       tap(() => this.loadMessages())
//     ).subscribe();
//   }
// }


// CON POLLING X AGGIORNRE I MESS IN TEMPO REALE:

import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.type';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnDestroy {
  private messagesUrl = 'http://localhost:3000/messages';
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messagesSubject.asObservable();
  private pollingInterval: any;
  private pollingFrequency = 5000; // 5 secondi

  constructor(private http: HttpClient) {
    this.startPolling();
  }

  private loadMessages(): void {
    this.http.get<Message[]>(this.messagesUrl).subscribe(
      messages => this.messagesSubject.next(messages),
      error => console.error('Errore nel caricamento dei messaggi:', error)
    );
  }

  addMessage(author: string, content: string): void {
    const newMessage: Message = {
      id: Date.now(), // uso timestamp come id univoco
      author,
      content,
      timestamp: new Date()
    };

    this.http.post<Message>(this.messagesUrl, newMessage).pipe(
      tap(() => this.loadMessages()) // ricarica i mess dopo l'aggiunta
    ).subscribe();
  }

  private startPolling(): void {
    this.pollingInterval = setInterval(() => {
      this.loadMessages();
    }, this.pollingFrequency);
  }

  stopPolling(): void {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }

  ngOnDestroy(): void {
    this.stopPolling(); // interrompo polling quando il servizio si distrugge
  }
}


