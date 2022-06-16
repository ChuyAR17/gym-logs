import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface ILogin {
  email: string;
  password: string;
};

export interface IButton {
  text: string;
}

export interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  text: string;
}
