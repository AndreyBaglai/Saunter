import { PathModel } from "./path-model";

export type StoreModel = {
  paths: PathModel[];
  selectPath: PathModel | null;
  form: {
    isOpen: boolean;
  };
}