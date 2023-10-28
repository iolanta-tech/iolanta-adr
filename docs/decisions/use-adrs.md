---
title: Use Architecture Decision Record (ADR) format
status: accepted
hide:
  - toc
decision: use-adr
$included:
  - $id: documenting-design-decisions-using-adrs-and-rfcs
    schema:url: https://brunoscheufler.com/blog/2020-07-04-documenting-design-decisions-using-rfcs-and-adrs
    rdfs:label: Documenting Design Decisions using RFCs and ADRs
    schema:author:
      $id: bruno-schleufer
      rdfs:label: Bruno Schleufer
      schema:url: https://brunoscheufler.com/
  - $id: decision-document-formats
    table:columns:
      - table:self
      - $id: rdfs:comment
        title: Name
      - $id: supports-this-page
        title: Can it express this page?
      - $id: has-standardized-templates
      - notes
    table:class:
      $reverse:
        rdf:type:
          - $id: use-adr
            rdfs:label: ADR
            rdfs:comment: Architecture Decision Record
            schema:url: https://adr.github.io/
            supports-this-page: yes
            has-standardized-templates: yes
          - $id: use-rfc
            rdfs:label: RFC
            rdfs:comment: Request for Comments
            supports-this-page: yes
            has-standardized-templates: yes
          - rdfs:label: DMN
            schema:url: https://www.omg.org/dmn/
            rdfs:comment: Decision Model and Notation
            supports-this-page: no
            notes: The tooling of Decision Tables might be helpful to us in the future as one of intellectual tools for decision making, but IMHO it is not general enough to document each possible decision over the course of evolution of a software project.
            has-standardized-templates: yes
  - $id: rfc-vs-adr
    table:columns:
      - table:self
      - small-team
      - large-team
    table:rows:
      - $id: use-adr
        small-team: yes
        large-team: ❌ People might not get a chance to take part in the discussion; valuable input might be missed
      - $id: use-rfc
        small-team: ❌ Possibly an overkill; discussions are held in chat or on a meeting
        large-team: ✔️ More formal discussion might benefit the project
  - $id: adr-pro-et-contra
    table:columns:
      - $id: pro
        rdfs:label: ➕ Pro
      - $id: contra
        rdfs:label: ➖ Contra
    table:rows:
      - pro: We will use ADR convention familiar to many developers
        contra: We will lose RFC-based large-community projects from our scope for now (and presently we are fine with that)
---

<small markdown>
[Document Decisions in a Software Project](../document-decisions/) ⇒
</small>

# :white_check_mark: Use **Architecture Decision Record** _(ADR)_ format

## Context

```mermaid
graph LR
    document-per-decision("📄 Store each decision<br>in a separate document") --> and
    many-decisions("There are many decisions to take<br>over a project life time") --> and
     manageable("We would like to keep<br>the decisions manageable") --> standard
    and("∧") --> many-documents("😲 There are going to be<br><strong>MANY</strong> decision documents") --> standard("💡 Would be nice<br>to have a standard format<br>for decision documents")
```

### Alternative formats

{{ render("decision-document-formats") }}

### ADR vs RFC

{{ render("documenting-design-decisions-using-adrs-and-rfcs") }} blog post by {{ render("bruno-schleufer") }} compares the two techniques. The most important difference between the two is the relation between documentation, on the one hand, and the discussion about the decision within the team responsible for the project.

```mermaid
graph LR
    rfc("✍️ Write an RFC") --> discuss["💬 Discuss"] --> adr("✍️ Write an ADR")
```

* **RFC** is a seed for discussion, a draft around which the team discusses the problem. Its main purpose is to facilitate and organize that discussion;
* whereas **ADR** is written to put to paper a decision that has been already made in such a way to ensure that
  * all possibilities were considered,
  * and the decision is optimal based on current knowledge.

My thought would be that preference among RFC and ADR depends on the size of the team involved in decision-making.

{{ render("rfc-vs-adr") }}

## Decision

Small teams are a best practice anyway. {{ render("use-adr") }} seems to be the optimal choice for them.

## Consequences

{{ render("adr-pro-et-contra") }}
