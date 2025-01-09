import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Message } from '../../models/message.type';
import { ChatService } from '../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  newMessageContent: string = '';
  currentUser: string = '';
  messages$: Observable<Message[]>; // obs per messaggi in tempo reale

  constructor(private chatService: ChatService) {
    this.messages$ = this.chatService.messages$;
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUser = user;
    }
  }

  sendMessage(): void {
    if (this.newMessageContent.trim()) {
      this.chatService.addMessage(this.currentUser, this.newMessageContent);
      this.newMessageContent = '';

      // focus dopo invio del messaggio
      setTimeout(() => {
        const inputElement = document.getElementById('messageInput') as HTMLInputElement;
        if (inputElement) {
          inputElement.focus();
        }
      }, 0); //focus subito dopo l'aggior della vista
    }
  }
}

