# Challenge documentation

## Initial decisions

Repo - Github
Hosting - Vercel [https://fe-challenge-iota.vercel.app/](https://fe-challenge-iota.vercel.app/)

Approach - Mobile first to ensure all users are able to experience a functional website.
Tablet/Desktop adaptations will come later if time.

### Extra `npm` packages:

#### Basic admin

These packages have been added to ensure committed code is correctly formatted and type checked.

- Eslint
- Prettier
- Husky
- Lint Staged

#### Functionality

- SWR: Vercel's state management library to perform basic FE optimisation
- Jest, React Testing Library: Unit testing

## Non-functional requirements assumed:

- Mobile friendly
- Accessible and semantic markup required

## Comments on code:

- I would have like to have wider test coverage on components and cypress tests for more functional e2e test. However, time was limited.
- UI could be improved! But kept it simple.
- Some repeated code and opportunities to refactor e.g. the skeleton product card, however again, I didn't due to time restrictions.
- Observability and error handling is limited. I would like to spend more time on this, but setting up a full system can take a while, so I commented in one place I would want it.
- Ideally state would be persisted across refreshes and visits, either through client side session storage or an account.
- If the cart was any more complex I would refactor to use `useReducer` instead of `useState` to allow for easier data management.
- Code is deployed on Vercel (link at the top of this MD file.)

## src layout

```
├── components              # Shared and reusable visual components
├── pages                   # Maps directly to a webpage
├── utils                   # Shared logic files (alternatively `lib`)
└── README.md
```
