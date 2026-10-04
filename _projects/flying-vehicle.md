---
title: Flying Vehicle
engine: unreal
order: 4
media: fv
redirect_from: /unreal-fv.html
tags: [Unreal, Blueprint, Flying]
highlights:
  - Flying mechanics
  - Push force vs position each frame
genre: Flight prototype
role: Lead Developer
blurb: "A flying helicopter in Unreal."
year: "2021"
status: Ongoing
type: Individual
duration: June, 2021
private: true
---

## About
Making a helicopter in Unreal.

## What I've learned & overcome
**Unreal**

- Handling multiple inputs from different types of control
- Trying out Niagara particle system
- Communicate between blueprint and animation blueprint
- Possess another pawn

**Flying Mechanic**

- Experiment with different types of lift for the helicopter: add force, update location per frame and so on
- Figure out how to add rotation to components in blueprint or animation blueprint
- Find a workaround to apply lift force to a skeletal mesh
- Update collision box to match skeletal mesh animations
- Checking landing distance and limit input
- Give vehicle health, spawn particles upon colliding and destroy vehicle when crashed
