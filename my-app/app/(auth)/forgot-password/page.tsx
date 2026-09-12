import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Reset password | Workflow AI",
  description: "Reset your Workflow AI account password.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
