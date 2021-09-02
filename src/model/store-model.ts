import { PathModel } from './path-model';

export type StoreModel = {
  paths: PathModel[];
  currentPath: PathModel | null;
  form: {
    isOpen: boolean;
  };
};
