import { redirect } from "next/navigation";

export default function RootPage() {
  // Middleware will normally redirect based on cookie / Accept-Language.
  // This is only a fallback for environments where middleware is disabled.
  redirect("/ja");
}
