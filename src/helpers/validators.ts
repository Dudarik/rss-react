import { RefObject } from 'react';

export const validateNotNull = <T extends HTMLInputElement>(
  refProp: RefObject<T>,
  fieldName: string,
  minSymbols: number
): string => {
  if (refProp.current && refProp.current.value.length < minSymbols)
    return `Please input ${fieldName}, min ${minSymbols} symbols.`;
  return '';
};

export const validateFirstCapitalize = <T extends HTMLInputElement>(
  refProp: RefObject<T>
): string => {
  if (
    refProp.current &&
    refProp.current.value &&
    refProp.current.value[0] !== refProp.current.value[0].toLocaleUpperCase()
  )
    return `The first letter must be a capital letter.`;
  return '';
};

export const validateByPattern = <T extends HTMLInputElement>(
  refProp: RefObject<T>,
  patternMessage: string,
  pattern: RegExp
): string => {
  if (refProp.current && !refProp.current.value) return ` Must match template: ${patternMessage}`;

  if (refProp.current && refProp.current.value && !pattern.test(refProp.current.value))
    return `Must match template: ${patternMessage}`;
  return '';
};

export const validateNumberBeetwinMinMax = <T extends HTMLInputElement>(
  refProp: RefObject<T>,
  min: number,
  max: number
): string => {
  if (refProp.current && !refProp.current.value) return `Please input value from ${min} to ${max}`;

  if (refProp.current && refProp.current.value) {
    const floatNumber = parseFloat(refProp.current.value);

    if (floatNumber < min || floatNumber > max) return `Must be from ${min} to ${max}`;
  }
  return '';
};

export const validateSelectNotNull = <T extends HTMLSelectElement>(
  refProp: RefObject<T>,
  selectTitle: string
): string => {
  if (refProp.current && parseInt(refProp.current.value) === -1)
    return `Please select value for ${selectTitle}`;
  return '';
};
