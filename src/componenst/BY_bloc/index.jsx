import { Mini_box } from "../Mini_bloc";
import * as S from "./style";

export function BY_bloc() {
  return (
    <S.Box>
      <S.Mini_box>
        <Mini_box background="#90BCE8" text="Интроекция" />
        <Mini_box background="#FEBF26" text="Наши сотрудники" />
      </S.Mini_box>
    </S.Box>
  );
}
