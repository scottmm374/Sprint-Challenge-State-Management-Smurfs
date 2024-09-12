1. What problem does the context API help solve?
   _Answer_- Its a way to send props down to children without prop drilling, and
   without using redux (which is generally for much larger applications)

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   _Answer_ - Store is where your state is held. Actions are an object that contain information about how we want to change state. Reducers are a function that take an action and some existing data from state, and changes that data according to the type and payload of an action, and then sends the updated data to state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   _Answer_- Application state is stored globally while component state is local. You should use application state when you need several, or nested components to access state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   _Answer_- Thunk is a middleware that allows us to handle async actions in redux.

1) What is your favorite state management system you've learned and this sprint? Please explain why!
   _Answer_- I can definitley see the uses for Redux, and I think once I understand it more throughly I will enjoy using it. Context API, is simple and great for smaller apps. I don't know that I could say there was a favorite yet, with limited experience with both.
