import localFont from "next/font/local"

export const Uni = localFont({
  src: [
    {
      path: "./UniNeueLight.woff",
      weight: "100",
      style: "light",
    },
    {
      path: "./UniNeueBold.woff",
      weight: "700",
      style: "bold",
    },
  ],
})
