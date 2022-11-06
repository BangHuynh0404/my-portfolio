export const toRem = (px: number) => {
   return `${px / 16}rem`;
};

import styled from "@emotion/styled";
import { css } from "@emotion/react";

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
export const mediaQuery = (breakpoints: ScreenSizesTypes, inner: {}) => {
   switch (breakpoints) {
      case "smallMobileUp":
         return css`
         @media (max-width: ${screenSizes.xs}) {
           ${inner};
         };`;
      case "mobileUp":
         return css`
         @media (max-width: ${screenSizes.sm}) {
           ${inner};
         };`;
      case "tabletUp":
         return css`
         @media (max-width: ${screenSizes.md}) {
           ${inner};
         };`;
      case "wideDesktop":
         return css`
         @media (max-width: ${screenSizes.lg}) {
           ${inner};
         };`;

      default:
         return "";
   }
};

export const textLineLimit = (lineAlow: number) =>
   css`
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: (${lineAlow});
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const transform = (value: string) =>
   css`
    -o-transform: ${value};
    -moz-transform: ${value};
    -ms-transform: ${value};
    -webkit-transform: ${value};
    transform: ${value};
`;

export const scrollBars = (
   size: number,
   thumbColor: string,
   trackColor: string,
   borderRadiusThumb: number,
   borderThumb?: number,
) =>
   css`// For Internet Explorer

   scrollbar-face-color: ${thumbColor};
   scrollbar-track-color: ${trackColor};

// For Google Chrome
&::-webkit-scrollbar {
    height: ${toRem(size)};
    margin-right: ${toRem(10)};
    width: ${toRem(size)};
}

&::-webkit-scrollbar-thumb {
    background: ${thumbColor};
    // border: rem($border-thumb) solid $track-color;
    border-radius: ${toRem(borderRadiusThumb)}px;
}

&::-webkit-scrollbar-track {
    background: ${trackColor};
}`;
