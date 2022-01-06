# Challenge documentation

## Initial decisions

Repo - Github
Hosting - Vercel  [https://fe-challenge-iota.vercel.app/](https://fe-challenge-iota.vercel.app/)


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
- 

## Non-functional requirements assumed:
- Mobile friendly
- Secure forms (validation of valid and appropriate input)

## src layout
```
├── components              # Shared and reusable visual components
├── pages                   # Maps directly to a webpage
├── utils                   # Shared logic files (alternatively `lib`)
└── README.md
```