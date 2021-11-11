import { configure } from "mobx";

export { persons } from "./persons";
export { planets } from "./planets";
export { starship } from "./starships";

configure({ enforceActions: "observed" });
