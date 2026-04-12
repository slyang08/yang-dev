// src/features/open-source/openSource.data.ts

export type OpenSource = {
  id: string;
  project: string;
  repo: string;
  prTitle: string;
  prLink: string;
  description?: string;
  blog: string;
  type: "PR" | "Issue" | "Feature" | "Docs" | "BugFix";
  tags?: string[];
};

export const openSources: OpenSource[] = [
  {
    id: "maximhq/bifrost",
    project: "bifrost",
    repo: "https://github.com/maximhq/bifrost",
    prTitle: "Option to disable a key without deleting it.",
    prLink: "https://github.com/maximhq/bifrost/pull/992",
    description:
      "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
    blog: "https://dev.to/slyang08/release-my-pr-for-the-project-bifrost-3pj8",
    type: "PR",
    tags: ["Go", "Backend", "Next.js", "Transports (HTTP)"],
  },
  {
    id: "ludo-technologies/pyscn",
    project: "pyscn",
    repo: "https://github.com/ludo-technologies/pyscn",
    prTitle: "Add circular dependency detection to check command.",
    prLink: "https://github.com/ludo-technologies/pyscn/pull/213",
    description: "An Intelligent Python Code Quality Analyzer.",
    blog: "https://dev.to/slyang08/circular-dependency-check-in-python-58p2",
    type: "PR",
    tags: ["Go", "CLI", "Command Line Interface"],
  },
  {
    id: "DFanso/commit-msg",
    project: "commit-msg",
    repo: "https://github.com/DFanso/commit-msg",
    prTitle: "Potential Race Condition in Concurrent API Calls.",
    prLink: "https://github.com/DFanso/commit-msg/pull/126",
    description: "AI-powered CLI tool that generates commit messages using LLMs.",
    blog: "https://dev.to/slyang08/open-source-contribution-cli-project-with-llm-4p3c",
    type: "BugFix",
    tags: ["Go", "CLI", "Command Line Interface"],
  },
];
