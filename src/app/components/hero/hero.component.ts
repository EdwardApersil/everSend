import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  readonly messages = ["Receive money", "Create virtual USD cards", "Currency exchange", "Send money",];
  currentMessageIndex: number = 0;
  currentMessage: string = 'Send Money';

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.randomMessage();
  }

  async randomMessage() {
    while (true) {
      await this.delay(3000); // Wait for 2 seconds before showing the next message
      this.ngZone.run(() => {
        this.currentMessage = this.messages[this.currentMessageIndex];
        this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
      });
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
