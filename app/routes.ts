import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("common/pages/home-page.tsx"),
    route(
        "/houses",
        "features/houses/pages/houses-page.tsx"
      ),
] satisfies RouteConfig;
