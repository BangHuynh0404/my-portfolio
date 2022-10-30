export const toRem = (px: number) => {
   return `${px / 16}rem`
}

import { css } from "styled-components";

// VARIBLES

export const screenSizes = {
   xs: "480px",
   sm: "768px",
   md: "992px",
   lg: "1200px",
};

export const baseShadow = (ratio: string) => {
   if (ratio === "12x12") {
      return css`
      color: ${ratio};
    `;
   }

   return "";
};

type ScreenSizesTypes =
   | "smallMobileUp"
   | "mobileUp"
   | "tabletUp"
   | "desktopUp"
   | "wideDesktop";
export const mediaQuery = (breakpoints: ScreenSizesTypes) => {
   switch (breakpoints) {
      case "smallMobileUp":
         return `@media (max-width: ${screenSizes.xs})`;
      case "mobileUp":
         return `@media (max-width: ${screenSizes.sm})`;
      case "tabletUp":
         return `@media (max-width: ${screenSizes.md})`;
      case "wideDesktop":
         return `@media (max-width: ${screenSizes.lg})`;

      default:
         return "";
   }
};


export const textLineLimit = (lineAlow: string) => css`
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: (${lineAlow});
    overflow: hidden;
    text-overflow: ellipsis;
`;


export const transform = (value: string) => css`
    -o-transform: ${value};
    -moz-transform: ${value};
    -ms-transform: ${value};
    -webkit-transform: ${value};
    transform: ${value};
`;
export const scrollBars = (
   size: 12,
   thumbColor: string,
   trackColor: string,
   borderRadiusThumb: 5,
   borderThumb: 2
) => css`// For Internet Explorer

scrollbar-face-color: $thumb-color;
scrollbar-track-color: $track-color;

// For Google Chrome
&::-webkit-scrollbar {
    height: ${toRem(size)};
    margin-right: ${toRem(10)};
    width: ${toRem(size)};
}

&::-webkit-scrollbar-thumb {
    background: ${thumbColor};
    // border: rem($border-thumb) solid $track-color;
    border-radius: ${toRem(borderRadiusThumb)};
}

&::-webkit-scrollbar-track {
    background: ${trackColor};
}`;



