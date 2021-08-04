import { css } from 'astroturf';

export const disableLinkDecoration = css`
    a {
        text-decoration: none;
    }

    a:visited {
        color: inherit;
    }
`