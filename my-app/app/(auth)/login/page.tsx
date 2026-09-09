import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign in | Workflow.ai",
  description: "Sign in to your Workflow.ai account.",
};

export default function LoginPage() {
  return <LoginForm />;
}
