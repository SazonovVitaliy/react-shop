export interface IType {
  id: number;
  type: string;
  url: string;
}

export interface IBrand {
  id: number;
  brand: string;
}
export interface IDevice {
  id: number;
  brand: string;
  type: string;
  model: string;
  image: string;
  price: number;
  description: string;
  rating?: number;
  count: number;
}

export interface IUser {
  email: string;
  id: string;
  token: string;
  isAuth: any;
}

export interface IFilter {
  type: string;
  query: string;
}
