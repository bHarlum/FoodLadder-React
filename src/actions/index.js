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
  console.log(styles);
  return {
    type: types.HEADER_STYLES,
    payload: {
      position: styles.position,
      logoFill: styles.logoFill,
    }
  }
}

export const setAuthToken = (token) => {
  console.log(token);
  sessionStorage.setItem("token", token);
  return {
    type: types.AUTH_TOKEN,
    payload: token
  }
}

// export const createThread = (formValues) => {
//   console.log(formValues);
//   return {
//     type: types.CREATE_THREAD,
//     payload: {
//       formValues
//     }
//   }
// }