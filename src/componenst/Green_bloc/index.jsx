import { Mini_box } from "../Mini_bloc";
import * as S from "./style";
import { Link } from "react-router-dom";

export function Green_bloc() {
  return (
    <S.Box>
      <S.Mini_box>
        <S.MiniGreen>
          <S.MiniGreen_text>
            Понятие модернизации понимает механизм власти
          </S.MiniGreen_text>
        </S.MiniGreen>
        <Link to="/smail">
          <S.MiniGray>
            <S.MiniGray_text> Морено</S.MiniGray_text>
          </S.MiniGray>
        </Link>
      </S.Mini_box>
      <S.BigGray>
        <S.BigGreen_text>
          <S.Text>
            <S.text__>Фамилия</S.text__>
            <S.text__>Мамай</S.text__>
          </S.Text>
          <S.Text>
            <S.text__>Имя и отчество</S.text__>
            <S.text__>Станиславаленина Владимировна</S.text__>
          </S.Text>
          <S.Text>
            <S.text__>Номер полиса выдан заведомо ложный</S.text__>
            <S.text__>01354879</S.text__>
          </S.Text>
          <S.Text>
            <S.text__>Дата рождения</S.text__>
            <S.text__>01.12.1976</S.text__>
          </S.Text>
          <S.Text>
            <S.text__>Телефон</S.text__>
            <S.text__>79254218069</S.text__>
          </S.Text>
        </S.BigGreen_text>
      </S.BigGray>
    </S.Box>
  );
}
