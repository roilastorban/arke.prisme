import { PaymentForm } from "@/components/features/PaymentForm";
export default function Page() {
  return <PaymentForm title="Architecture & Autonomie" amount={497000} method="card" callbackUrl="https://spicy-ears-eat.lindy.site/payment-success/p2-card" />;
}
