import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  messages: string[] = [];

  /* add a message to the cashe */
  add(message : string) {
    this.messages.push(message);
  }

  /* clear the cache */
  clear() {
    this.messages = [];
  }

  constructor() { }
}
