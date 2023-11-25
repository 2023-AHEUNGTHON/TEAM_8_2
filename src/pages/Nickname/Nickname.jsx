import React from "react";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accessTokenAtom } from "../../store/jotaiAtoms";

export default function Nickname() {
  const router = useNavigate();
  const [nickname, setNickname] = useAtom(nicknameAtom);

  const handleInput = (event) => {
    setNickname(event.target.value);
  };

  const startDeco = () => {
    updateNickname(nickname);
    router("/deco");
  };

  return (
    <S.Root>
      <S.Header>
        <p>우체통의 주인은 누구인가요?</p>
        <S.InputWrapper>
          <S.NickName>
            <S.Input
              onChange={handleInput}
              type="nickname"
              required
              placeholder="닉네임"
            ></S.Input>
            <hr />
          </S.NickName>
          <span>님</span>
        </S.InputWrapper>
      </S.Header>
      <S.LetterBox>
        <S.ButtonWrapper>
        <S.Button onClick={startDeco}>
          내 우체통 꾸미기
        </S.Button>
        {/* <S.Button $white="true">
          완성하기
        </S.Button> */}
      </S.ButtonWrapper>
    </S.LetterBox>
    </S.Root>
  )
}
