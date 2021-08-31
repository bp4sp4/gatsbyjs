import React from "react"
import styled from "styled-components"
import { GlobalStyles} from "../components"
import {BREAKPOINT} from "../utils/constants"
import './Components.css';

const Wrapper = styled.div`
  display : flex;
  justify-content : left;
  font-size : 65px;
  margin: 0 auto;
  max-width: 1900px;
  padding: 0 var(--sides-padding-desktop);
  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 var(--sides-padding-mobile);
  }
`



  


export function Skills({data}) {
  return (
    <>
      <GlobalStyles/>
      <Wrapper>
        <div>Skills</div>
      </Wrapper>
    </>
  )
}
