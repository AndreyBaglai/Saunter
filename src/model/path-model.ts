export type PathModel = {
  id: string;
  title: string;
  description: {
    short: string;
    full: string;
  };
  distance: string;
  map: any;
}