import { Mini_box } from "../Mini_bloc";
import * as S from "./style";

export function White_bloc() {
  return (
    <S.Box>
      <S.Mini_box>
        <Mini_box background="#e8ebed" text="Наши сотрудники" />
        <Mini_box background="#e8ebed" text="Просветляет понимающий тест" />
      </S.Mini_box>
      <S.MiniWhite>
        <S.MiniGray_text>Конформизм</S.MiniGray_text>
      </S.MiniWhite>
    </S.Box>
  );
}
