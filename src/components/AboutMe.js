import React, {useState, useEffect} from "react"
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
  const [number, setNumber] = useState(0);
  console.log(number)

  return (
    <>
      <GlobalStyles/>
      <Wrapper>
        <div>AboutMe</div>
      </Wrapper>
      <Wrapper>
      <img class="margin1" src="images/firefox2.png" />
        <ul>
          <li>
            이름 : 박상훈<br></br>
            나이 : 26살 <br></br>
            학력 : 대림대 컴퓨터정보학부 졸업
          </li>
        </ul>
      </Wrapper>
      <hr></hr>
      <Wrapper>
        <div class="margin2">Skills</div>
      </Wrapper>
      <Wrapper>
        <h2>I can do </h2>
      </Wrapper>
      <Wrapper>
        <img class="img2" src="images/캡처.PNG"/>
      </Wrapper>
      <hr></hr>
      <Wrapper>
        <div class="margin2">Portfolio</div>
      </Wrapper>
      <Wrapper>
      <ul>
        <li class="margin-3" onClick={()=>setNumber(0)}>TestWorld</li>
        <li class="margin-4" onClick={()=>setNumber(1)}>StudyPage</li>
        <li class="margin-5" onClick={()=>setNumber(2)}>TestTestt</li>
      </ul>
      { number === 0 ?<div>
        <div>
          <a href="#" class="btn">사이트 바로가기</a>
          </div>
          <div>
          <iframe class="wh-1"></iframe>
          </div>
        </div> : null}
      { number === 1 ? <div>
        <div>
          <a href="#" class="btn2">사이트 바로가기</a>
          </div>
          <div>
          <iframe class="wh-2"></iframe>
          </div>
      </div> : null}
      { number === 2 ? <div>
       <div>
          <a href="#" class="btn3">사이트 바로가기</a>
          </div>
          <div>
          <iframe class="wh-3"></iframe>
          </div>
      </div> : null  }

      { number === 3 ? <div>3</div> : null  }
      
      </Wrapper>
    </>
  )
}
