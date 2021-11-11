import { makeAutoObservable } from "mobx";
import { Person } from "../interfaces/person";
import { SWAPIService } from "../services/SWAPIService";

class Persons {
  abortController = new AbortController();
  isAbort = false;
  loading = false;
  list: Person[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (payload: boolean) => {
    this.loading = payload;
  };

  set = (payload: Person[]) => {
    this.list = payload;
  };

  load = async () => {
    try {
      if (this.isAbort) {
        this.abortController.abort();
        this.abortController = new AbortController();
      }

      this.setLoading(true);
      const result = await SWAPIService.getPersons({ signal: this.abortController.signal });
      this.setLoading(false);

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

const persons = new Persons();

export { persons };
