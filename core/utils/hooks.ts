import { useSession as useNextAuthSession } from "next-auth/react";
import { isDev } from "core/utils/constants";
import * as path from "path";


export function useFavicon() {
  const faviconLink = () => {
    const rand = Math.floor(Math.random() * 10);
    switch (rand) {
      case 1:
      case 2:
      case 3:
        return path.resolve("favicon", "favicon-64x64.nj.ico");
      case 4:
        return path.resolve("favicon", "favicon-100x100.ss.ico");
      case 5:
      case 6:
        return path.resolve("favicon", "favicon-48x48.sp.png");
      case 7:
        return path.resolve("favicon", "favicon-100x100.me.2.ico");
      case 8:
        return path.resolve("favicon", "favicon-100x100.me.3.ico");
      case 9:
        return path.resolve("favicon", "favicon-100x100.av.ico");
      case 0:
        return path.resolve("favicon", "favicon-96x96.me.png");
      default:
        return path.resolve("favicon", "favicon-96x96.me.png");
    }
  };
  return { faviconLink };
}

export function useSession() {
  const { data, status } = useNextAuthSession();

  if (isDev) {
    return {
      data: {
        user: {
          name: "Awatansa Vishwakarma",
          email: "ravi.awatansa@gmail.com",
          image: "https://lh3.googleusercontent.com/a-/AOh14GgDgf1QQ5yjRXhI4xWu7Y6dx7HxPSbYrCVTI1D8RgU=s96-c"
        },
        expires: "2022-01-09T17:19:38.745Z"
      },
      status: "authenticated"
    };
  }

  return { data, status };
}
