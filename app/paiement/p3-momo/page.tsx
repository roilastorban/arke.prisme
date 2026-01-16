import { PaymentForm } from "@/components/features/PaymentForm";
export default function Page() {
  return <PaymentForm title="Éclosion Majeure" amount={747000} method="momo" callbackUrl="https://spicy-ears-eat.lindy.site/payment-success/p3-momo" />;
}
