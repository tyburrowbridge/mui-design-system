import localFont from "next/font/local"

export const SourceSans = localFont({
  src: [
    {
      path: "./SourceSansProBlack.woff",
      weight: "900",
      style: "black",
    },
    {
      path: "./SourceSansProBold.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "./SourceSansProRegular.woff",
      weight: "400",
      style: "normal",
    },
  ],
})
