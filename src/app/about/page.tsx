import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Avinash Papineni - Systems architect and founder focused on AI infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="prose">
      <h1>About</h1>

      <p>
        I&apos;m a systems architect with over a decade of experience designing, developing, and operating large-scale application and infrastructure systems in enterprise environments.
      </p>

      <p>
        My professional background spans distributed systems, datacenter architecture, infrastructure automation, and platform reliability. I&apos;ve worked on systems that support high-throughput, mission-critical workloads, with a focus on reliability, security, compliance, and operational scale. Over the course of my career, I&apos;ve been recognized internally for contributions to platform modernization, network isolation, and infrastructure design.
      </p>

      <p>
        In my day-to-day role, I work on enterprise-scale systems and platform initiatives at <strong>Mastercard</strong>, contributing to the design and evolution of large, distributed environments.
      </p>

      <p>
      In parallel, I publish independent writing on AI infrastructure — focusing on cost control, reliability, and governance as large language models move into production. My writing draws on general systems engineering principles and publicly available information, and explores how established infrastructure patterns apply to modern AI platforms.
      </p>

      <h2>Contact</h2>
      <p>
        The best way to reach me is via email at{" "}
        <a href="mailto:hello@avinashpapineni.com">hello@avinashpapineni.com</a>.
      </p>
      <p>
        You can also find me on{" "}
        <a href="https://linkedin.com/in/avinashpapineni">LinkedIn</a> and{" "}
        <a href="https://github.com/apapineni">GitHub</a>.
      </p>
    </div>
  );
}
