import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Counter {
  counter = signal(10);

  constructor() {
    // setInterval(() => {
    //   this.counter.update(value => value + 1);
    // }, 1000);
  }

  increment() {
    this.counter.update(value => value + 1);
  }

  decrement() {
    this.counter.update(value => value - 1);
  }

  reset() {
    this.counter.set(10);
  }
}
