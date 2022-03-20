import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyles = styled.div`
  padding: 2rem;
  background: #c0c0c0;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: black;
    background-color: #f8f8f8;
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5 rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "I need text ",
}) {
  return (
    <ItemStyles>
      <div className='icon'>{icon}</div>
      <div className='info'>
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
