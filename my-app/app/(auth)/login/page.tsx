import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign in | Workflow AI",
  description: "Sign in to your Workflow AI account.",
};

export default function LoginPage() {
  return <LoginForm />;
}
