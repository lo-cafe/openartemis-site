import Image from "next/image";

import planet from "~/assets/planet.svg";

import s from "./styles.module.scss";

export default function Home() {
  return (
    <div className={s.wrapper}>
      <Image priority src={planet} width={720} height={720} />
    </div>
  );
}
