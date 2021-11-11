import { Person } from "../interfaces/person";
import { Planet } from "../interfaces/planet";

const getData = async <Result>(type: string, init?: RequestInit) => {
  const request = await fetch(`https://swapi.dev/api/${type}/`, init);

  const data = await request.json();

  return data as Result;
};

export class SWAPIService {
  static getPersons = async (init?: RequestInit) => {
    const { results } = await getData<{
      results: Person[];
    }>("people", init);

    return results;
  };

  static getPlanets = async (init?: RequestInit) => {
    const { results } = await getData<{
      results: Planet[];
    }>("planets", init);

    return results;
  };
}
