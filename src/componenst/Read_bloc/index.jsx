import { Mini_box } from "../Mini_bloc";
import * as S from "./style";

export function Read_bloc() {
  return (
    <S.Box>
      <S.Mini_box>
        <Mini_box background="#FFAA87" text="Лидерство" />
        <Mini_box background="#F55E62" text="Невероятный гений" />
      </S.Mini_box>
      <S.Red_r>
        <S.MiniRead>
          <S.MiniRead_text>Однако</S.MiniRead_text>
        </S.MiniRead>
        <S.Mini_bot>
          <Mini_box background="#FFAA87" text="Точка перегиба" />
          <Mini_box background="#C7ABD4" text="Длина вектора" />
        </S.Mini_bot>
      </S.Red_r>
    </S.Box>
  );
}
