import { Metadata } from "next";
import IndustrialClient from "./IndustrialClient";

export const metadata: Metadata = {
  title: "Industrial Refrigeration | IceEdge Tech",
  description: "High-performance industrial refrigeration systems designed for efficiency, durability, and precision cooling at a massive scale.",
};

export default function IndustrialRefrigerationPage() {
  return <IndustrialClient />;
}
