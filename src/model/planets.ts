import { makeObservable, observable, action } from "mobx";
import { Planet } from "../interfaces/planet";
import { SWAPIService } from "../services/SWAPIService";

class Planets {
  abortController = new AbortController();
  isAbort = false;

  @observable
  list: Planet[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  set = (payload: Planet[]) => {
    this.list = payload;
  };

  @action
  load = async () => {
    try {
      if (this.isAbort) {
        this.abortController.abort();
        this.abortController = new AbortController();
      }

      const result = await SWAPIService.getPlanets({ signal: this.abortController.signal });
      this.isAbort = true;
      this.set(result);
    } catch (error: any) {
      if ((error as DOMException).ABORT_ERR !== error.code) {
        throw error;
      }
    }
  };

  abort = () => {
    this.abortController.abort();
  };
}

const planets = new Planets();

export { planets };
