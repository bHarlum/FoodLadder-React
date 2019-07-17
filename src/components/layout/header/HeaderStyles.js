import styled from "styled-components";
import { Dropdown as AntDropdown } from "antd";

import antStyled from "./../../antStyled";

export const HeaderContainer = styled.div`
position: ${ props => props.position || "static" };
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;

export const Float = styled.div`
position: absolute;
right: 40px;
top: 45px;
`

export const UserBadge = styled.div`
width: 250px;
padding: 15px 30px;
`;

export const Name = styled.h3`
display: inline;
margin: 0 0 0 15px;
`;

export const Dropdown = antStyled(AntDropdown)`
cursor: pointer;
`;
