
### Key Wins

Key-Wins is app intended to recogize the real winner, YOU!

It is a full stack application built with Node/Express/MongoDB app from the ground up, giving space for a user to quickly jot down the incremental wins and watch them stack up. Six of the seven fields are required, but only one is a narrative. There are three check box questions to measure the degree to which the winner felt **satisfied, challenged, and gratitude**, and two to gauge whether the win was goal oriented and long-term. Finally, there is an optional question where the user can add free text.

### Wireframes

**New**
![](/public/css/images/WF2.jpeg)

**Index**

![](/public/css/images/WF1.jpeg)
**Show**
![](/public/css/images/WF3.jpeg)

**Trello**
![](/public/css/images/Trello.png)

**Notes to help me**
In answer to my question about adding styling to defauly...
No you’re doing well. What you have to do is make a prop Default called something like pageClass

The use pageClass to set the className of the body in Default

```<Default pageClass=‘index’>```

In Default.jsx


```<body className={this.props.pageClass}```
This is because Default isn’t literally an HTML element so it you can’t give it a class.
You can give the html elements that it creates class names though. 
