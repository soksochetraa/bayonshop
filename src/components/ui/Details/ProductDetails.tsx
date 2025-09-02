import FAQItem from "@/src/components/ui/Details/FAQs";

export default function ProductDetails({ details }: { details: string }) {
  return (
    <FAQItem title="Details">
      <p className="text-gray-600 text-[15px] leading-relaxed">{details}</p>
    </FAQItem>
  );
}
