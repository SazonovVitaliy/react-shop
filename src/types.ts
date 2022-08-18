export interface IType {
  id: number;
  type: string;
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
}

export interface IUser {
  email: string;
  id: string;
  token: string;
  isAuth: any;
}
