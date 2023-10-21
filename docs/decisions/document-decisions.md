---
title: Document decisions in a software project
hide:
  - toc
---

## Context

Over a software project evolution, it often happens that developers have to make decisions how to proceed. For instance,

* Which library to use?
* Which class hierarchy to follow?
* {TODO: add more examples}

Some of these decisions can be expensive to change later; it is customary to call them [architecture decisions]({TODO: Provide a link/source for this naming convention}).

It is not customary to document such decisions in code: it is unlikely that someone will write a lengthy comment in a Python code file where they will explain why they've chosen to use … library instead of … {TODO: invent an example for these two libraries}. The library … has already been chosen, and … will not be remembered unless there is something wrong with ….

Sometimes, there *is* something wrong:

* library appears to be buggy, lacking features, or unsupported;
* application structure is revealed to be over-engineered or overly rigid;
* {TODO: add more}

At that point, it might be useful to revisit the decision we've made in the past, check the other alternatives which were back then dismissed, or recall reasoning and circumstances which lead to it.

## Decision

!!! success "Document decisions"
    Log decisions as part of project documentation, each with its context, reasoning, reviewed alternatives, pro et contra.

## Consequences

!!! failure inline "Extra effort"
    Developers have to spend extra time documenting each decision. No one *likes* writing documentation, really.

!!! success inline "Writing helps thinking"
    Writing down a decision helps make a better decision. Writing text helps formulate one's thoughts.

!!! success inline "Knowledge transfer is easier"
    A new team member can consult decision log to find out why this or that decision was made.
