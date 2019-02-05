import * as PinApiUtil from '../util/pin_api_util';
export const RECEIVE_PIN = 'RECEIVE_PIN';

export const addPin = (x, y) => dispatch => {
  return PostsApiUtil.addPin(x, y).then(
    (pin) => dispatch(receivePin(pin))
  )
};

export const receivePin = (payload) => {
  return {
    type: RECEIVE_PIN,
    payload
  }
};

