import {Pipe} from 'angular2/angular2';

export class PositifPipe extends Pipe {
  supports(): boolean {
    return true;
  }

  transform(value): number {
    let change = Math.abs(value);
    return change;
  }

  create(): Pipe {
    return this;
  }
}