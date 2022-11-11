import { BY_bloc } from "../../componenst/BY_bloc";
import { Footer } from "../../componenst/footer";
import { Grey_bloc } from "../../componenst/Gray_bloc";
import { Green_bloc } from "../../componenst/Green_bloc";
import { Header } from "../../componenst/hedear";
import { Read_bloc } from "../../componenst/Read_bloc";
import { White_bloc } from "../../componenst/White_bloc";
import * as S from "./style";

export function Main() {
  return (
    <S.Main>
      <Header />
      <S.Half>
        <Grey_bloc />
        <S.Middle>
          <White_bloc />
          <BY_bloc />
        </S.Middle>
      </S.Half>
      <Green_bloc />
      <Read_bloc />
      <Footer />
    </S.Main>
  );
}
