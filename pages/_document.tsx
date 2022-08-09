import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=optional"
                    rel="stylesheet"
                    />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block"
                    rel="stylesheet"
                    />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
