import { RefObject } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IPublisher } from './cardsIterfaces';

export interface IInputText {
  fieldNameId: string;
  fieldTitle: string;
  fieldType: string;
  placeholder?: string;
}

export interface IRadio {
  id: string;
  value: string;
}

export interface ISelect {
  values: number[] | IPublisher[];
  id: string;
  title: string;
}

export interface IInputTextWithRef extends IInputText {
  refProp: RefObject<HTMLInputElement>;
}
export interface IIRadioWithRef extends IRadio {
  refProp: RefObject<HTMLInputElement>;
}
export interface ISelectWithRef extends ISelect {
  refProp: RefObject<HTMLSelectElement>;
}

export interface IRadioBox {
  title: string;
  name: string;
  dataArr: IRadio[];
  register: UseFormRegister<FieldValues>;
}
