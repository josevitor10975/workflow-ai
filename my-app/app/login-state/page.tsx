import type { Metadata } from "next";
import { LoginState } from "@/components/auth/LoginState";

export const metadata: Metadata = {
  title: "Setting up | Workflow AI",
  description: "Preparing your Workflow AI workspace.",
};

export default function LoginStatePage() {
  return <LoginState />;
}
