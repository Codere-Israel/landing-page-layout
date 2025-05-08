import { observable, action, makeObservable } from "mobx";

class MyStore {
  component = null;

  constructor() {
    makeObservable(this, {
      component: observable,
      updateComponent: action,
    });
  }
  updateComponent(newVal) {
    this.component = { ...newVal };
  }
}

const myStore = new MyStore();
export default myStore;
