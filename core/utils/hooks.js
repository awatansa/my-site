import { useEffect } from "react";
import { useSession as useNextAuthSession } from "next-auth/react";

export function useTitle(newTitle) {
  let title;
  if (process.browser) {
    title = document.title;
  }
  useEffect(() => {
    if (newTitle instanceof String) document.title = newTitle;
    return () => {
      document.title = title;
    };
  });
}

export function useFavicon() {
  // noinspection UnnecessaryLocalVariableJS
  const favicon = () => {
    const rand = Math.floor(Math.random() * 10);
    switch (rand) {
      case 1:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-64x64.nj.ico" />;
      case 2:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-64x64.nj.ico" />;
      case 3:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-64x64.nj.ico" />;
      case 4:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-48x48.sp.png" />;
      case 5:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-48x48.sp.png" />;
      case 6:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-48x48.sp.png" />;
      case 7:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-96x96.me.png" />;
      case 8:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-96x96.me.png" />;
      case 9:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-96x96.me.png" />;
      case 0:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-96x96.me.png" />;
      default:
        // noinspection HtmlUnknownTarget
        return <link rel="icon" href="/favicon/favicon-96x96.me.png" />;
    }
  };
  return favicon;
}

export function useSession() {
  const { data, status } = useNextAuthSession();

  if (process.env.NODE_ENV === "development") {
    return {
      data: {
        user: {
          name: "Awatansa Vishwakarma",
          email: "ravi.awatansa@gmail.com",
          image: "https://lh3.googleusercontent.com/a-/AOh14GgDgf1QQ5yjRXhI4xWu7Y6dx7HxPSbYrCVTI1D8RgU=s96-c",
        },
        expires: "2022-01-09T17:19:38.745Z",
      },
      status: "authenticated",
    };
  }

  return { data, status };
  l̥;
}
