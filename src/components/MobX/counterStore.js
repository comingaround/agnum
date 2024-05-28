import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  setText(newText) {
    this.text = newText;
  }
}

const counterStore = new CounterStore();
export default counterStore;
