import { PathModel } from "./path-model";

export type StoreModel = {
  paths: PathModel[];
  form: {
    isOpen: boolean;
  };
}