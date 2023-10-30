import * as React from 'react';
import type { HeadProps } from "gatsby";

export const Head:React.FC<HeadProps> = (props) => {
    console.debug(props);
    return(<>
        <html lang="en" className="scroll-smooth"/>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edger" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
            Styklr | For perfection
        </title>
        <link
            rel="shortcut icon"
            href="assets/images/favicon.png"
            type="image/x-icon"
        />
    </>)
}