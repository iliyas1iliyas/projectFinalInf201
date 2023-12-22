export default class Observer {
  private observers: Function[] = [];

  addObserver(observer: Function) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach((observer) => observer());
  }
}
