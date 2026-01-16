import { PaymentPageTemplate } from "@/components/sections/PaymentPageTemplate";

export default function Page() {
  return (
    <PaymentPageTemplate 
      level="P1"
      method="momo"
      amount={147000}
      title="Diagnostic du Sage"
      successUrl="https://spicy-ears-eat.lindy.site/success/p1/momo"
    />
  );
}
