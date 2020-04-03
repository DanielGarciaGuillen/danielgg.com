---
title: 'React Tips for Newbies: Redux'
date: '2018-10-28'
featuredImage: './images/Copy-of-REACT-TIPS-e1538793434382.png'
---

![React Tips for Newbies: Redux](images/Copy-of-REACT-TIPS-e1538793434382.png)

Hey!

How is your day going? I mean, really, how it is going?

As I mentioned on the [last post](https://danielgg.com/i-am-working-as-a-remote-junior-front-end-developer/), it's been now 4 months that I am working as a remote front end developer for [Rewatt Power](https://www.rewattpower.com/).

In this time, I have learnt more than the entire last year learning by myself, and even tho I am still struggling, I am feeling much more confident now that when I started.

One of the things I learned at work is [Redux](https://redux.js.org/).

I am not going to lie, in the beginning, I couldn't grasp Redux, but now that I got a better idea about how it works, I want to share it with you.

But first, let me present you something I have been cooking...

## 🔥 React Tips for Newbies 🔥

To show you how Redux works, or any other topic I'll learn as a front-end developer, I decided to create a short format that I found work best for me when learning a new topic.

I called them **React Tips for Newbies.**

These React Tips are going to consist of two parts:

First, a [CodeSandbox](https://codesandbox.io/s/x3l71q4wro).

codewhat 🤔??

With CodeSandBox you are going to be able to see/explore a working code example on how Redux works, modifying, copying or forking the code in any way you want.

The second is a post where I explained the concepts that we are going to use on the Codesandbox, this way you can make sense of the code and you already have a working example for your use.

Let's get started with the first React Tip for Newbies

![React Tips for Newbies: Redux](images/Copy-of-REACT-TIPS-e1538793434382.png)

## React Tips for Newbies: Redux!

So what is Redux?

> Redux is a predictable state container for JavaScript apps.
>
> [Docs](https://redux.js.org)

What does this statement really means?

It means that Redux helps you manage the state of your application, making easier to do things like passing props from one component to another.

In our example, we are going to see how does it work, with the simplest example possible. We first need to explain three basic concepts that we will be working on Redux.

### The three elements of Redux:

- Actions

> **Actions** are payloads of information that send data from your application to your store. They are the _only_ source of information for the store.
>
> [Docs](https://redux.js.org/basics/actions)

- Reducers

> **Reducers** specify how the application's state changes in response to [actions](https://redux.js.org/basics/actions) sent to the store. Remember that actions only describe _what happened_, but don't describe how the application's state changes.
>
> [Docs](https://redux.js.org/basics/reducers)

- Store

> The **Store** is the object that brings them together.
>
> [Docs](https://redux.js.org/basics/store)

You remember how I mentioned before that each React Tip for Newbies is going to have a post and a code example that you are going to be able to play with?

## Time to check the code example!

Don't panic, we are going to go slow so you can understand how everything fits together.

If you have never seen a [CodeSandbox](https://codesandbox.io/s/x3l71q4wro)[,](https://codesandbox.io/s/x3l71q4wro)  spend some time to get familiar with the UI, it's pretty awesome!

<iframe src="https://codesandbox.io/embed/x3l71q4wro" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

The first thing I want you to do is find the _reducer.js_ file inside the _Counter_ folder.

In there you are going to see two of the main components of Redux, our **actions and reducer**.

In most of the tutorials, you are going to see that they separate actions and reducers in two different files. I personally find much easier to keep them on a single file, we can do this by using the [Redux Actions package.](http://)

If you don't remember the purpose of the reducer and the actions,  I suggest you to read again the official descriptions of this components.

The third component of Redux is the **store**, you can check how to implement the store by checking the _index.js_ in the _src_ folder.  
The more important thing about the store is that we need to import the _reducer.js_ file to pass it to the store.

The store will 'store' and change the state depending on the actions of the reducer.

Those are the three Redux components that you need to be familiar with to understand Redux.

If you are curious, you probably have clicked in one of the buttons to change the score. We are going to use these buttons to show how Redux works.

We now have set up the actions, reducer and the store.

## How do I make Redux work?

This is the way I usually do it.

First, I create the reducer (remember our reducer is inside the _Counter_ folder, the _reducer.js_ file).

In our example, you can see that there is one reducer with a switch statement where we either decrease or add an unit to the state, we have also set up an initial state where number = 2.

Then I have created actions matching this switch statements, and export them. This actions are going to be used by the component to change the state.

Here is another important thing you should know.

If you are going to use actions on a component, is a good practice to **split the component into two parts**. You can see them inside the \_Counte_r folder, there are a component and a container file.

The main difference between component vs container.

The container passes the state and the actions that we want the component to use. In fact, if you check _container.js_, you will see that we pass two things:

First using **mapStateToProps** we pass the **state**, this is coming from the store (we set this up on the _index.js_ inside the _src_ folder remember).

Secondly, we import the **actions **from the reducer and pass them to the component with **mapDispatchToProps.**

We also import the _component.jsx_.

Think about _container.js_ like a smart component, it has passed the state and the actions to _component.jsx_. That's why usually the component is called a dummy component, it has no idea of what the state/actions if the container doesn't provide them.

The _container.js_ file (smart component) imports the _component.jsx_ (dummy component), then we will use the _container.js_ to render, as you can see on the _index.js_ inside the _src_ folder.

## The last past, the fun part!

We have the ability to use the state and the actions that we passed in our component, check the _component.js_ file inside the _Counter_ folder, we can grab the actions and the state from the props!!

As you can see, on the two buttons we have set up the actions that we passed, this results on the buttons modifying the state of the application thanks to Redux.

Since the component is aware of the changes on the state (we passed the state on the _container.js_ file), when we click the button, the action is fired and the state is modified, resulting in the change on the number displayed on the screen.

## Conclusion

Do you get it now?

Do you find this format useful?

If you still find it hard to understand, please give some feedback on Twitter or send me an email to daniel@danielgg.com.

I know it is a little tricky to get it at first glance, but hey, now you have a reference so it's a matter reference this example anytime you got any question.
