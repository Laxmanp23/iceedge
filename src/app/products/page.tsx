import { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products & Infrastructure | IceEdge Tech",
  description: "Explore our elite industrial refrigeration matrices, heavy-duty compressors, and custom cold storage panels engineered for peak operational efficiency.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
