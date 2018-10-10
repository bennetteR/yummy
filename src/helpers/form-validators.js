import _ from 'lodash';

export function getValidityClass({ fieldValue }) {
  let className = '';

  if (fieldValue.touched) {
    className = fieldValue.valid ? 'valid' : 'error';
  }

  return className;
}
export function maxLength(length) {
  return value => !value || value.length <= length;
}

export function minLength(length) {
  return value => !value || value.length >= length;
}

export function noEmptyArray(value) {
  return value.length > 0;
}

export function required(value) {
  return !_.isEmpty(value);
}

export function noSpecialCharac(value) {
  return !/[^A-z\s\d][\\^]?/.test(value);
}

export function notEmptyString(value) {
  if (value && value.trim !== undefined) {
    return value.trim() !== '';
  }
  return false;
}
