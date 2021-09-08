import { PathModel } from 'model/path-model';

const COLLECTION_PATHS = 'paths';

export const setPathsToLS = (paths: PathModel[]) => {
  localStorage.removeItem(COLLECTION_PATHS);
  localStorage.setItem(COLLECTION_PATHS, JSON.stringify(paths));
};

export const getPathsFromLS = (): PathModel[] | [] => {
  const paths = localStorage.getItem(COLLECTION_PATHS);
  if (paths) return JSON.parse(paths);
  return [];
};

export const removePathFromLS = (id: string) => {
  const paths = getPathsFromLS();
  if (paths.length) {
    const updatePaths = paths.filter((paths: PathModel) => paths.id !== id);
    setPathsToLS(updatePaths);
  }
};

export const updateFavoritePathByLS = (id: string) => {
  const paths = getPathsFromLS();
  if (paths.length) {
    const updatePaths = paths
      .map((path: PathModel) => {
        if (path.id === id) path.favorite = !path.favorite;
        return path;
      })
      .sort((a: PathModel, b: PathModel) => (a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1));
    setPathsToLS(updatePaths);
  }
};
