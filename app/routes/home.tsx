import type { Route } from "../+types/root";
import HomePage from "~/common/pages/home-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home Sweet Home" },
    { name: "description", content: "We will find you the perfect home" },
  ];
}

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
