import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Reset password | Workflow.ai",
  description: "Reset your Workflow.ai account password.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
