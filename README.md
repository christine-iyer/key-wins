
### Key Wins

Key-Wins is app intended to recogize the real winner, YOU!

It is a full stack application built with Node/Express/MongoDB app from the ground up, giving space for a user to quickly jot down the incremental wins and watch them stack up. Six of the seven fields are required, but only one is a narrative. There are three check box questions to measure the degree to which the winner felt **satisfied, challenged, and gratitude**, and two to gauge whether the win was **goal- oriented and/or long-term.** Finally, there is an optional question where the user can add free text.

The app has the following functionality.

The user arrives at the index page, which is an accumulation of each of the user's past entries. You will see that each task has been transformed into a journal entry. When clicking on any given journal entry, the user will be directed to the item's show page, which should resemble a certificate of completion. 

New entries are completed by navigating to the New page. There the user completes a form. Once the user submits the form, the app runs a function in the background which creates a narrative, using randomly generated phrases which are saved in an object. 

The finished product is a journal that's generated with minimal effort. And hopefully a confidence builder. 


### Wireframes

**New**
![](/public/css/images/WF2.jpeg)

**Index**

![](/public/css/images/WF1.jpeg)
**Show**
![](/public/css/images/WF3.jpeg)

**Trello**
![](/public/css/images/Trello.png)

### Key-Wins

I am particularly pleased I was able to incorporate a bit of object oriented programming in there. I really struggled with it, syntactically, in the past. Especially because I was able to make the simple function work. I would like to expand on data tidying functionality. 

I am also happy that I was able to piece together many of the components I want for my own professional development. 

### Ongoing Challenges

I'd really like to explore the form functionalities and customization properties. 

I'd also really like to improve my templataing.

### Restful Routes
Restful Routes

| #  |Action   | URL |  HTTP Verb |  JSX file name |  mongoose |
|---|---|---|---|---|---|
|  1 | Index  |  /wins/ |  GET |  Index.jsx | Win.find  |
|   2|  Show | /wins/:id  |  GET | Show.jsx   |  Win.findById|
|  3 |  New |  /wins/new | GET  |  New.jsx |  none |
|   4|  Create | /wins  |  POST |   none| Win.create(req.body)  |
|   5| Edit  | /wins/:id/edit  | GET  | Edit.jsx  |  Win.findById |
|   6|  Update | /wins/:id   |  PUT|  none |  Win.findByIdAndUpdate |
|   7|  Destroy | /wins/:id   |  DELETE|  none |  Win.findByIdAndDelete |


**Notes to help me**
In answer to my question about adding styling to defauly...
No you’re doing well. What you have to do is make a prop Default called something like pageClass

The use pageClass to set the className of the body in Default

```<Default pageClass=‘index’>```

In Default.jsx


```<body className={this.props.pageClass}```
This is because Default isn’t literally an HTML element so it you can’t give it a class.
You can give the html elements that it creates class names though. 
