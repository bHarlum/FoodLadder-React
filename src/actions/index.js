import types from "./types";
import styled from "styled-components";

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
      ...styles
    }
  }
}

export const setAuthToken = (token) => {
  localStorage.setItem("token", token);
  return {
    type: types.AUTH_TOKEN,
    payload: token
  }
}

export const clearAuthToken = () => {
  localStorage.clear();
  return {
    type: types.AUTH_TOKEN,
    payload: null
  }
}

export const setCurrentUser = (user) => {
  return {
    type: types.CURRENT_USER,
    payload: user
  }
}

export const clearCurrentUser = () => {
  return {
    type: types.CURRENT_USER,
    payload: {}
  }
}