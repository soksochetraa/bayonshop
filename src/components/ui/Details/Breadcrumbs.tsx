import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function Breadcrumbs({ title }: { title: string }) {
  return (
    <div className="page-locations w-[1320px] flex items-center gap-2 py-4">
      <span className="font-normal text-md text-[#212121]">Home</span>
      <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
      <span className="font-normal text-md text-[#212121]">{title}</span>
    </div>
  );
}
