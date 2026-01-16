import { PaymentPageTemplate } from "@/components/sections/PaymentPageTemplate";

export default function Page() {
  return (
    <PaymentPageTemplate 
      level="P2"
      method="card"
      amount={497000}
      title="Architecture & Autonomie"
      successUrl="https://spicy-ears-eat.lindy.site/success/p2/card"
    />
  );
}
