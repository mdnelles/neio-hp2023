---
layout: Post
title: React Node MongoDB App
description: React Hooks Application accessing API Endpoints to perform CRUD operations on a Mongo Database
date: '2023-09-09'
tags:
    - React
    - NodeJS
    - MongoDB
    - Material UI
    - Redux
    - TypeScript
logo:
  src: /icons/react-2.svg
  alt: React Node MongoDB App
images:
  - src: /projects/project-6.png
    alt: React MongoDB App
    overlay:
      src: /projects/project-6-mobile.png
      alt: overlay image
  - src: /projects/project-6.png
    alt: React MongoDB App
attributes:
  - label: Features
    value: Language Translation, Conversation History
  - label: Role
    value: Developer, Tester, Production
---



### About this project

- Live version of the site here: [Contractor App](https://contractor.nelles.io/)
- [Github Source Code (FE)](https://github.com/mdnelles/contractor_fe)

### Technology Stack (extended):

- **React, TypeScript, NodeJS**
- **MongoDB:** A NoSQL database used to store and manage the conversation history and AI-generated responses.

### Features (with MongoDB integration):

- **Conversation History Storage:**
    - Users and contracts are stored in MongoDB.
    - Redux is used to manage the state of the application.
    - NodeJS is used to create the API endpoints.

### Workflow (with MongoDB integration):

- **User Interaction:**
    - Users interact with the cenrtalized interface as described earlier.


- **Storing Conversations in MongoDB:**
    - CRUD operations saves the user input as a document in MongoDB.
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

 - [React](https://reactjs.org/)
 - [Redux](https://redux.js.org/)
 - [NodeJS](https://nodejs.org/en/)
 - [Material UI](https://material-ui.com/)
 - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
 - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
 - [TypeScript](https://www.typescriptlang.org/)
 - [MongoDB](https://www.mongodb.com/)




---

### Code-Block

An example of the NextJS API Route:
[Github Repo Source Code React/FE](https://github.com/mdnelles/contractor_fe)
[Github Repo Source Code Node/BE](https://github.com/mdnelles/contractor_be)


  ```js  {5-15} showLineNumbers
  import { db } from "../database/db";

import { ObjectId } from "mongodb";

// build and endpoint to addDoc to mongo
export const addDoc = async (req: any, res: any): Promise<any> => {
   try {
      const { collection, doc } = req.body;
      const arr: any = await db.collection(collection).insertOne(doc);
      res.json({ status: 200, err: false, msg: "doc added", arr });
   } catch (error: any) {
      res.json({ status: 200, err: true, error });
      console.log(error);
   }
};

// build endpoint to get all docs from mongo db collection
export const getAllDocs = async (req: any, res: any): Promise<any> => {
   const { collection } = req.body;
   try {
      const arr: any = await db.collection(collection).find({}).toArray();
      res.json({ status: 200, err: false, msg: "docs found", arr });
   } catch (error: any) {
      res.json({ status: 200, err: true, error });
      console.log(error);
   }
};

// build endpoint to get docs from mongo db where attribute matches value
export const getDocsByAttribute = async (req: any, res: any): Promise<any> => {
   const { collection, attribute, value } = req.body;
   console.log(collection, attribute, value);
   try {
      const arr: any = await db
         .collection(collection)
         .find({ [attribute]: value })
         .toArray();

      res.json({
         status: 200,
         err: false,
         msg: "doc(s) found",
         arr,
      });
   } catch (error: any) {
      res.json({ status: 200, err: true, error });
      console.log(error);
   }
};

export const getDocsByObjMatch = async (req: any, res: any): Promise<any> => {
   const { collection, obj } = req.body;
   try {
      // ie db.customers.find({"VIP": true,"Country": "Germany"});
      const arr: any = await db.collection(collection).find(obj).toArray();
      res.json({
         status: 200,
         err: false,
         msg: "doc(s) found",
         arr,
      });
   } catch (error: any) {
      res.json({ status: 200, err: true, error });
      console.log(error);
   }
};

export const updateDocObject = async (req: any, res: any): Promise<any> => {
   const { collection, doc } = req.body;
   try {
      const arr: any = await db
         .collection(collection)
         .updateOne(doc, { $set: doc });
      res.json({ status: 200, err: false, msg: "doc edited", arr });
   } catch (error: any) {
      res.json({ status: 200, err: true, error });
      console.log(error);
   }
};

export const updateDocById = async (req: any, res: any): Promise<any> => {
   const { collection, changeObj, _id } = req.body;
   try {
      const arr: any = await db.collection(collection).updateOne(
         { _id: new ObjectId(_id) }, // Filter
         { $set: changeObj }, // changeObj = {name: "John", address: "Highway 71"}
         { upsert: true } // add document with req.body._id if not exists);
      );
      res.json({ status: 200, err: false, msg: "doc edited", arr });
   } catch (error: any) {
      res.json({ status: 200, err: true, error });
      console.log(error);
   }
};

export const updateManyDocs = async (req: any, res: any): Promise<any> => {
   try {
      const {
         collection,
         compareFieldName,
         compareFieldValue,
         fieldToUpdate,
         updatedValue,
      } = req.body;
      const query = { [compareFieldName]: compareFieldValue };
      const update = { $set: { [fieldToUpdate]: updatedValue } };

      const result = await db.collection(collection).updateMany(query, update);
      res.json({ status: 200, err: false, msg: "Docs updated", result });
   } catch (error: any) {
      res.json({ status: 500, err: true, error: error.message });
      console.log(error);
   }
};

// build and endpoint to deleteDoc from mongo
export const deleteDoc = async (req: any, res: any): Promise<any> => {
   const { collection, doc } = req.body;
   try {
      const arr: any = await db.collection(collection).deleteOne(doc);
      res.json({ status: 200, err: false, msg: "doc deleted", arr });
   } catch (error: any) {
      res.json({ status: 200, err: true, error });
      console.log(error);
   }
};
  ```



