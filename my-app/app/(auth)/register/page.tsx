import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create account | Workflow AI",
  description: "Create your Workflow AI account and start comparing AI agents.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
