401 JS --  Lab 28 Todo
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
 
## Feature Tasks 
Create the following components and structure them according to the following diagram.  
``` 
App
  Landing
  Dashboard
    NoteForm
    NoteList
      Noteitem
```
#### App
<!-- * The app component should manage the frontend routes and have a navbar
* the `/` route should display the `Landing` component
* the `/dashboard` route should display the `Dashboard` component -->

#### Landing
* The landing component should display a brief description of the to do app

#### Dashboard Component 
* The dashboard component should manage the entire **application state**. 
<!-- * The state should contain a notes array
* It should have a bound `addNote(note)` method that adds a note to `state.notes`
  * each note that is added should have the following data
    * `id`: always should contain the result of `uuid.v1()`
    * `content`: user provided content
    * `title`: user provided title -->
* It should have a bound `removeNote(note)` method that removes a note from `state.notes` based on its `id`

#### NoteForm Component
* `onComplete` the NoteForm should add a note to the application state

#### NoteList Component 
* should display an unordered list of NoteItem components

#### NoteItem
* should display the notes content and title
* should display a delete button
  * `onClick` the note should be removed from the application state

## Test
* Test Dashboard
  * Test the initial state
* Test NoteForm
  * Test the initial state

##  Documentation  
Write a description of the project in your README.md
