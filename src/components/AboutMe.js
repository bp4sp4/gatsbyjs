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



  


export function AboutMe({data}) {
  return (
    <>
      <GlobalStyles/>
      <Wrapper>
        <div>AboutMe</div>
      </Wrapper>
      <Wrapper>
      <img src="images/firefox2.png" />
        <ul>
          <li>
            이름 : 박상훈<br></br>
            나이 : 26살 <br></br>
            학력 : 대림대 컴퓨터정보학부 졸업
          </li>
        </ul>
      </Wrapper>
    </>
  )
}
