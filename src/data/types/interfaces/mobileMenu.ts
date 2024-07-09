export interface IMenuItem {
  id: string;
  Title: string;
  FathMenu: string;
  show: string;
  N: string;
  link?: string;
  children?: IMenuItem[];
}
