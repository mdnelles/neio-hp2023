---
layout: Post
title: React NPM 3D Animation Component
description: React NPM 3D Animation Component
date: '2023-03-21'
tags:
  - React
  - NPM
  - WebGL
  - Material UI
logo:
  src: /icons/react-2.svg
  alt: App
images:
  - src: /projects/project-4.png
    alt: app
    overlay:
      src: /projects/project-4-mobile.png
      alt: overlay image
  - src: /projects/project-4.png
    alt: image alt text
attributes:
  - label: Features
    value: 3D Animation
  - label: Role
    value: Accessibility
---


### About this project

- Live version of the site here: [3D Playground](https://mdnelles.github.io/a3o-playground/)
- [Github Source Code](https://github.com/mdnelles/anim-3d-obj-npm-publisher)

---
# React Typescript Cuboid Builder

This project allows a user to create Cuboids of any size simply by entering a set of parameters.  
The program does the leg work with regard to calculating translationZ depth and config on the fly.


## Config
### Animations:

Animations are optional. Either or both of `anim1` or `anim2` can be applied to the component. Animations are applied to 2 wrapping divs respectively.

```typescript
const anim1 = {
   border: "", // while testing reveal the animation wrapper
   degreesHi: -45, // degrees if spin
   degreesLow: 45, // degrees if spin
   delay: 0, // start delay in seconds
   direction: "normal", //normal alternating reverse
   duration: 8, // seconds
   fillMode: "forwards", // none forwards backwards both
   iterationCount: "infinite", // number or infinte
   name: "Y360", // ** ANIMATIONS (above)
   timing: "ease-in-out", // linear ease ease-in-out
};
```

### Faces:
This is an array of objects containing the face used for a given component
```javascript
   export interface FaceType {
      name?: string; // front,back,left,right,top,top_rear,top_front,bottom,bottom_rear,bottom_front
      css?: string | undefined;
      body?: any; // can be JSX Component | string | number
   }

   const faces: FaceType[] = [
      {
         name: "back",
         body: "BACK",
         css: `background:rgba(22,22,22,.5)`,
      },
      {
         name: "right",
         body: "RIGHT",
         css: `background:rgba(220,220,220,.5); 
               border:1px solid #ddd`,
      },
   ];
```

### Global (face):
If the name parameter in the faces array is indicated (ie: "front") but `css` and / or `body` are not.  The `global default`(below) will satisfy those parameters.
```javascript
   interface GlobalType {
      css?: string;
      body?: string;
   }
   const global: GlobalType = {
      body: "BODY FOR FACE WHICH DOES NOT CONTAIN BODY",
      css: 'color:red'
   };
```
---

### Tech Stack

 - [React](https://reactjs.org/)
 - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
 - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
 - [TypeScript](https://www.typescriptlang.org/)



---

### Code-Block

An example of the NextJS API Route:
[Github Repo Source Code](https://github.com/mdnelles/AI_nextjs/)



  ```js  {21-36} showLineNumbers
  import React from "react";
import { ObjWrapper } from "./styles/Global";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";
import Face from "./Face";
import { FaceType, ObjProps } from "./types";

export default function (props: ObjProps): JSX.Element {
  let {
    anim1,
    anim2,
    width = 5,
    height = 5,
    depth = 5,
    global = {},
    faces,
    perspective,
    perspectiveOrigin,
    zIndex,
  } = props;

  // process config
  const buildFace = (face: FaceType): any => {
    const details = {
      width,
      height,
      depth,
      face,
      global,
    };
    return <Face {...details} key={face.name} />;
  };

  return (
    <SceneStyle
      width={width}
      height={height}
      perspective={perspective}
      perspectiveOrigin={perspectiveOrigin}
      zIndex={zIndex}
    >
      <AnimWrap animSpecs={anim1}>
        <AnimWrap animSpecs={anim2}>
          <ObjWrapper>
            {faces && faces[0]
              ? faces.map((face) => (face.name ? buildFace(face) : null))
              : null}
          </ObjWrapper>
        </AnimWrap>
      </AnimWrap>
    </SceneStyle>
  );
}
  ```