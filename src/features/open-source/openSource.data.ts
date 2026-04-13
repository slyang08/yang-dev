// src/features/open-source/openSource.data.ts

export enum ContributionType {
  FEATURE = "FEATURE",
  ENHANCEMENT = "ENHANCEMENT",
  BUG_FIX = "BUG_FIX",
  DOCS = "DOCS",
}

export type OpenSource = {
  id: string;
  // identity
  project: string;
  title: string; // PR title
  // what YOU did (MOST IMPORTANT)
  contribution: string;
  // why it matters (impact)
  impact?: string;
  type: ContributionType;
  tags?: string[];
  links: {
    github?: string;
    demo?: string;
    prLink?: string;
    blog?: string;
  };
};

export function generateContributionSentence(item: OpenSource): string {
  // [Verb] + [Technique/Method] + [What was done] + [Where] (+ [Impact])
  // [Strong verb] + [what you did], improving / enabling / ensuring [impact]
  const base = item.contribution.replace(/\.$/, ""); // remove white space
  const impact = item.impact ? `, ${item.impact}` : "";

  return `${capitalize(base)}${impact}.`;
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const openSources: OpenSource[] = [
  {
    id: "bifrost",
    project: "bifrost",
    type: ContributionType.FEATURE,
    title: "Option to disable a key without deleting it.",
    contribution: `designed and implemented a non-destructive key state management mechanism to support
                  disabling keys without deletion`,
    impact: `improving API key lifecycle safety and enabling reversible operations without data loss`,
    tags: ["Go", "Backend", "Next.js", "Transports (HTTP)"],
    links: {
      github: "https://github.com/maximhq/bifrost",
      prLink: "https://github.com/maximhq/bifrost/pull/992",
      blog: "https://dev.to/slyang08/release-my-pr-for-the-project-bifrost-3pj8",
    },
  },
  {
    id: "pyscn",
    project: "pyscn",
    type: ContributionType.FEATURE,
    title: "Add circular dependency detection to check command.",
    contribution: `implemented text-based static analysis to detect circular dependencies in Python modules`,
    impact: `helping developers identify architectural flaws early and prevent tightly coupled code structures`,
    tags: ["Go", "CLI", "Command Line Interface"],
    links: {
      github: "https://github.com/ludo-technologies/pyscn",
      prLink: "https://github.com/ludo-technologies/pyscn/pull/213",
      blog: "https://dev.to/slyang08/circular-dependency-check-in-python-58p2",
    },
  },
  {
    id: "commit-msg",
    project: "commit-msg",
    type: ContributionType.BUG_FIX,
    title: "Potential Race Condition in Concurrent API Calls.",
    contribution: `identified and resolved a race condition in concurrent API calls using
                  synchronization control`,
    impact: `ensuring deterministic and reliable commit message generation under concurrent execution`,
    tags: ["Go", "CLI", "Command Line Interface"],
    links: {
      github: "https://github.com/DFanso/commit-msg",
      prLink: "https://github.com/DFanso/commit-msg/pull/126",
      blog: "https://dev.to/slyang08/open-source-contribution-cli-project-with-llm-4p3c",
    },
  },
];
