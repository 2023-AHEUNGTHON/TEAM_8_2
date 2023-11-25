import React from "react";
import * as S from "./style";
import Logo from "../../assets/logo-shadow.png";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accessTokenAtom } from "../../store/jotaiAtoms";

export default function Main() {
  
  const [ , setAccessToken] = useAtom(accessTokenAtom);
  const router = useNavigate();
  
  const logout = () => {
		if (confirm("정말 로그아웃 하시겠습니까?")) {
			localStorage.removeItem("accessToken");
			setAccessToken("");
      router("/");
		}
  }

  return (
    <S.Root>
      <S.Body>
        <S.Header>
          <p>마음을 전하는 우체통</p>
          <S.LogoImage src={Logo} alt="logo" onClick={() => logout()} />
          <p>마인드레터</p>
        </S.Header>
        <S.LetterBox>
          <p>지금까지 주고받은 엽서</p>
          <p>55,406개</p>
        </S.LetterBox>
        <S.ButtonWrapper>
          <Link to="/login">
            <S.StartButton>
              시작하기
            </S.StartButton>
          </Link>
          <p>
            계속 진행하면 나의 우체통 서비스 이용약관에 동의하고
            <br /> 개인정보 처리 방침을 읽었음을 인정하는 것으로 간주됩니다.
          </p>
        </S.ButtonWrapper>
      </S.Body>
      <S.Footer>
        Copyright @ 멋쟁이사자처럼. All rights reserved
        <br /> 문의 mindletter@gmail.com
      </S.Footer>
    </S.Root>
  )
}
