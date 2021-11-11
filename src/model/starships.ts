import { makeObservable, observable, action } from "mobx";
import { Starship } from "../interfaces/starship";

class Starships {
  abortController = new AbortController();
  isAbort = false;

  @observable
  list: Starship[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  set = (payload: Starship[]) => {
    this.list = payload;
  };

  @action
  load = async () => {
    try {
      if (this.isAbort) {
        this.abortController.abort();
        this.abortController = new AbortController();
      }

      const request: Response = await fetch("https://swapi.dev/api/starships/", {
        signal: this.abortController.signal,
      });
      const { results }: { results: Starship[] } = await request.json();

      this.isAbort = true;
      this.set(results);
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

const starship = new Starships();

export { starship };
