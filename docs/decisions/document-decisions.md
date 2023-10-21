---
title: Document Decisions in a Software Project
status: accepted
hide:
  - toc
---

# :white_check_mark: Document Decisions in a Software Project

## Context

During the evolution of a software project, developers frequently face decisions regarding the project's direction. For instance:

* Which library to utilize?
* Which class hierarchy to adopt?
* How to structure the database schema?
* What coding standards or conventions to follow?

Some of these decisions can be costly to amend later; these are often referred to as _architecture decisions_.

> Software architecture is those decisions which are both important and hard to change.
> <div markdown style="text-align:right">© Martin Fowler :simple-youtube: [Making Architecture Matter](https://www.youtube.com/watch?v=DngAZyWMGR0)</a>

Documenting such decisions within code isn't common practice: it's rare for someone to write an extensive comment in a Python file explaining why they opted for, say, the :simple-django: Django framework over :simple-flask: Flask for a web application project. The choice of Django has already been made, and Flask will likely be forgotten unless an issue arises with Django.

Issues _do_ arise:

* A library proves to be buggy, lacks necessary features, or becomes unsupported;
* The application structure turns out to be over-engineered or overly rigid;
* Performance issues surface due to a chosen framework or technology stack.

At such junctures, revisiting past decisions, reviewing previously dismissed alternatives, or recalling the rationale and circumstances leading to those decisions can be invaluable.

## Decision

!!! success "Document Decisions"
    Incorporate decision logs into the project documentation, articulating the context, rationale, reviewed alternatives, and pros and cons for each decision.

## Consequences

!!! failure inline "Extra Effort"
    Documenting each decision demands additional time from developers. Documentation writing isn't generally a favored task.

!!! success inline "Enhanced Thought Process"
    Articulating a decision on paper facilitates a more thorough thought process, aiding in making more informed decisions.

!!! success inline "Smoother Knowledge Transfer"
    New team members can refer to the decision log to understand the rationale behind certain decisions, accelerating their onboarding.
