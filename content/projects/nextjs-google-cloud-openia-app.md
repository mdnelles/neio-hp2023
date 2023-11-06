---
layout: Post
title: ChaGPT OpenAI Google Cloud NextJS App
description: NextJS App for ChaptFPT openIA
date: '2023-06-06'
tags:
  - next-js
  - ChatGPT
  - React
  - Google Cloud
  - OpenAI
logo:
  src: /icons/react-2.svg
  alt: App for ChaptFPT openIA
images:
  - src: /projects/project-2.png
    alt: image alt text
    overlay:
      src: /projects/project-2-mobile.png
      alt: overlay image
  - src: /projects/project-2-2.png
    alt: image alt text
attributes:
  - label: Features
    value: NextJS, TypeScript, Google Cloud, ChatGPT API
  - label: Role
    value: Developer, Tester, Production
---



### About this project

- Live version of the site here: [AI NextJS](https://nextai.nelles.io/)
- [Github Source Code](https://github.com/mdnelles/AI_nextjs)

### Technology Stack (extended):

- **Next.js, TypeScript, Google Cloud, ChatGPT API:** As previously mentioned.
- **MongoDB:** A NoSQL database used to store and manage the conversation history and AI-generated responses.

### Features (with MongoDB integration):

- **Conversation History Storage:**
    - Each user's conversation history is stored in MongoDB.
    - Conversations are organized as documents, containing user inputs and AI-generated responses in chronological order.

### Workflow (with MongoDB integration):

- **User Interaction:**
    - Users interact with the conversational interface as described earlier.

- **Conversational AI Processing:**
    - The frontend and backend processes remain the same.

- **Storing Conversations in MongoDB:**
    - After receiving the AI-generated response from the ChatGPT API, the backend saves the user input and AI response as a document in MongoDB.
    - The document includes metadata such as timestamp, user ID, and conversation context.

- **Retrieving and Displaying Conversations:**
    - Users can request their conversation history.
    - The backend queries MongoDB to retrieve the user's conversation documents.
    - The frontend displays the retrieved conversations, allowing users to review their interactions.

### Use Cases (with MongoDB integration):

- MongoDB allows users to revisit past interactions, making it useful for reference, analysis, or record-keeping purposes.
- Users can track the progression of a conversation and review AI-generated responses.

### Benefits (with MongoDB integration):

- Conversation history is persisted, enabling users to access past interactions.
- MongoDB offers flexibility in managing unstructured or semi-structured data like chat conversations.
- Historical data can be used for analysis or improvement of the AI model.

### Future Enhancements (with MongoDB integration):

- Implementing search and filtering options for users to easily find specific conversations.
- Adding user preferences to customize conversation storage, retrieval, or privacy settings.
- Incorporating analytics to gain insights from the stored conversation data.

By integrating MongoDB into the app, I have adding a valuable layer of data storage that enables users to revisit their past conversations with the AI chatbot. This enhances the user experience and provides a historical context for interactions.

---

### Tech Stack

 - [NextJS](https://nextjs.org/)
 - [React](https://reactjs.org/)
 - [ChatGPT](https://openai.com/blog/openai-api/)
 - [Google Cloud](https://cloud.google.com/)
 - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
 - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
 - [TypeScript](https://www.typescriptlang.org/)
 - [MongoDB](https://www.mongodb.com/)




---

### Code-Block

An example of the NextJS API Route:
[Github Repo Source Code](https://github.com/mdnelles/AI_nextjs/)



  ```js  {21-36} showLineNumbers
  "use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";
import { Session } from "next-auth";

const CreatePrompt = () => {
   const router = useRouter();
   const { data: session }: { data: Session | null } = useSession();

   const [submitting, setIsSubmitting] = useState(false);
   const [post, setPost] = useState({ prompt: "", tag: "" });

   const createPrompt = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
         const response = await fetch("/api/prompt/new", {
            method: "POST",
            body: JSON.stringify({
               prompt: post.prompt,
               userId:
                  session && session.user && session.user.id
                     ? session.user.id
                     : null,
               tag: post.tag,
            }),
         });

         if (response.ok) {
            router.push("/");
         }
      } catch (error) {
         console.log(error);
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <Form
         type='Create'
         post={post}
         setPost={setPost}
         submitting={submitting}
         handleSubmit={createPrompt}
      />
   );
};

export default CreatePrompt;
  ```



