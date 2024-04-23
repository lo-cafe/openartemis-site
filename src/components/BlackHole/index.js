import Image from "next/image";

import blackHole from "~/assets/blackHole.svg";

import s from "./styles.module.scss";

export default function BlackHole() {
  return (
    <div className={s.wrapper}>
      <Image priority src={blackHole} width={1844} />
    </div>
  );
}
