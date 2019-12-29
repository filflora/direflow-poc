This component was bootstrapped with [Direflow](https://direflow.io).


# The goal:
I'd like to find a solution to reuse (separately developed) components in multiple microApps.
In a scenario where multiple micro applications have the same header component which can be maintained separately.

# How far I have come:
 - I was able to generate a component bundle which can be injected into any HTML page and the webcomponent is showing up perfectly.
 - The web component can dispatch a custom event and the parent component is able to receive it
 - The initial properties can be set but no other attribute change is working for the given component.
    - When `shadow: true` is set it throws an error
    - If `shadow: false` is set it is not doing anything
    
# How to reproduce:
 - Checkout this repository
 - `npm i` and `cd direflow-poc`
 - `npm start`
 - Open up `http://localhost:3000` in Chrome and open devtools
 - Click "Change attributes" button
 - See err message: `Uncaught DOMException: Failed to execute 'attachShadow' on 'Element': Shadow root cannot be created on a host which already hosts a shadow tree.`


What am I missing?
