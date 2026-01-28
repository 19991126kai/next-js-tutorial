import { Suspense } from "react";
import SlowComponent from "./SlowComponent";

export default async function Home() {
  return (
    <div>
      <h1>メインコンテンツ(すぐに表示)</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
