import type { Route } from "../+types/root";
import HomePage from "~/common/pages/home-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zip" },
    { name: "description", content: "Zip is for your home" },
  ];
}

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
