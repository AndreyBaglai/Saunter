export type PathModel = {
  id: string;
  title: string;
  description: {
    short: string;
    full: string;
  };
  selected: boolean;
  distance: number;
  directions: any;
}