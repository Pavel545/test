import * as S from "./style";

export function Sms(params) {
  const none = () => {};
  return (
    <div>
      {params.sender === "1" ? (
        <S.Message_left>
          <S.Photo />
          <S.Smail>{params.text}</S.Smail>
        </S.Message_left>
      ) : (
        none
      )}
      {params.sender === "2" ? (
        <S.Message_right>
          <S.Smail>{params.text}</S.Smail>
          <S.Photo />
        </S.Message_right>
      ) : (
        none
      )}
    </div>
  );
}
