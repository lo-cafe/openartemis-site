import Image from "next/image";

import ship from "~/assets/ship.svg";
import Planet from "~/components/Planet";
import BlackHole from "~/components/BlackHole";
import Navbar from "~/components/Navbar";

import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.wrapper}>
      <div className={s.infoWrapper}>
        <Image priority className={s.ship} src={ship} width={250} />
        <div className={s.textWrapper}>
          <h1>Artemis</h1>
          <p>A lightning-fast iOS/iPad Reddit reader made with SwiftUI.</p>
        </div>
      </div>
      <Planet />
      <BlackHole />
      <Navbar />
    </main>
  );
}
