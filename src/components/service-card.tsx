import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <article className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-blue-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-blue-900/70">{description}</p>
    </article>
  );
}
