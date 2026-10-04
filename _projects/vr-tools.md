---
title: VR Tools
engine: unreal
order: 3
media: vrt
redirect_from: /unreal-vrt.html
tags: [Unreal, Blueprint, VR, Simulator]
highlights:
  - Screw/unscrew mechanic
  - Electric/normal screwdriver
genre: VR simulation
role: Lead Developer
blurb: "VR screwdriver and power drill."
year: "2021"
status: Complete
type: Individual
duration: June – July, 2021
private: true
---

## About
Making different types of tools in VR:

1. VR hand twist screwdriver & trigger-activated power drill mechanic
2. Screwed object

## What I've learned & overcome
**Unreal**

- I learned how to attach component/actor with smooth transition
- Using component blend and find actors of class node

**Screw/Unscrew Mechanic**

- Figure out how to find the screw in the scene while holding the tools
- How to attach the tool to the screw
- How to use the hand rotation (screwdriver) or add fixed rotation (power drill) to the screw when attached
- Loosen/tighten the screw depending on a fixed min & max rotation
- Create an object that has a screw list and turn it into a condition for whether the object can interact or not

**Screwed Object**

- Figure out how to save the screw list and link conditions
- Release/lock the screwed object
