export type PathModel = {
  id: string;
  title: string;
  description: {
    short: string;
    full: string;
  };
  favorite: boolean;
  selected: boolean;
  distance: number;
  directions: any;
}