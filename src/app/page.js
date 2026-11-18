import { Suspense } from "react";
import MainComp from "./MainComp";
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainComp />
    </Suspense>
  );
}