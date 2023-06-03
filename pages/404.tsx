import { useRouter } from "next/router";
import NotFound from "components/NotFound";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div>
      <NotFound path={router.pathname} />
    </div>
  );
}

