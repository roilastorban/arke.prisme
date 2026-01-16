import { PaymentPageTemplate } from "@/components/sections/PaymentPageTemplate";

export default function Page() {
  return (
    <PaymentPageTemplate 
      level="P3"
      method="card"
      amount={747000}
      title="Éclosion Majeure"
      successUrl="https://spicy-ears-eat.lindy.site/success/p3/card"
    />
  );
}
