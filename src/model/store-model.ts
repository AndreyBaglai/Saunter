import { PathModel } from './path-model';

export type StoreModel = {
  paths: PathModel[];
  currentPath: PathModel | null;
  directions: any;
  form: {
    isOpen: boolean;
  };
};
