import { PaymentForm } from "@/components/features/PaymentForm";
export default function Page() {
  return <PaymentForm title="Diagnostic du Sage" amount={147000} method="momo" callbackUrl="https://spicy-ears-eat.lindy.site/payment-success/p1-momo" />;
}
