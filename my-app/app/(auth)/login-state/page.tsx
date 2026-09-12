import type { Metadata } from "next";
import { LoginState } from "@/components/auth/LoginState";

export const metadata: Metadata = {
  title: "Setting up | Workflow.ai",
  description: "Preparing your Workflow.ai workspace.",
};

export default function LoginStatePage() {
  return <LoginState />;
}
