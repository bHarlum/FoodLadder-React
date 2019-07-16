import types from "./types";

export const testAction = () => {
  return {
    type: types.REDUX_TEST,
    payload: "Redux test payload"
  };
}

export const validateInvitationCode = () => {
  return {
    type: types.VALIDATE_INVITATION_CODE,
    payload: "Validating invitation code."
  };
}

export const setHeader = (styles) => {
  return {
    type: types.HEADER_STYLES,
    payload: {
      position: styles.position,
      logoFill: styles.logoFill,
    }
  }
}

export const setAuthToken = (token) => {
  sessionStorage.setItem("token", token);
  return {
    type: types.AUTH_TOKEN,
    payload: token
  }
}
