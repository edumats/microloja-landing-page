import { Metadata } from "next";
import { MainBody } from "@/components/main-body";

export const metadata: Metadata = {
  title: "MicroLoja",
  description: "MicroLoja",
};

export default function Home() {
  return (
      <MainBody />
  );
}
