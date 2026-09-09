import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create account | Workflow.ai",
  description: "Create your Workflow.ai account and start comparing AI agents.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
