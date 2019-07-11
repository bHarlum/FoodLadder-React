import React from "react";
import styled from "styled-components";

// Use this to wrap any pre-existing Ant Design components in styled-components

const antStyled = (WrappedComponent, {swallowProps = []} = {}) => {
  const Wrapper = ({children, ...props}) => {
    swallowProps.forEach(propName => {
      delete props[propName];
    });
    return <WrappedComponent {...props}>{children}</WrappedComponent>;
  };
  return styled(Wrapper);
};

export default antStyled;