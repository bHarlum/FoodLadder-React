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