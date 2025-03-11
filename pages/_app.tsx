import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/GlobalStyle";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted ? (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    ) : null;
}
