# Fantasy Wordbook

**AUTHORS** Padmapriya Ganapathi, Manish KC, Renee Messick, Nicholas Paro

**VERSION** 1.1.0

## About Fantasy Wordbook
Our site gives you the path to learning new words. You are able to select from either The Lord of the Rings or Bhagavad Gita and view quotes/verses. As you view the quotes/verses you can click on any words you find unfamiliar (or want to know more about) and see the quote you pulled the word from, the translation (if applicable), the transliteration (if applicable), the definitions, synonyms, and examples of its uses.

After viewing multiple quotes and choosing new words to learn you can go back and view your previously chosen words and see all the information associated with them! Please enjoy.

## Live URL: http://www.fantasy-wordbook.com

## Resources Used

- Languages/Frameworks:
  - JavaScript
  - React
  - PostgreSQL
  - HTML
  - CSS
- APIS:
  - The Lord of the Rings - https://the-one-api.herokuapp.com/
  - Words API - https://www.wordsapi.com/
  - Bhagavad Gita - https://bhagavadgita.io/api/
- Organizational:
  - GitHub - https://github.com/cinnamonizers/fantasy-wordbook
  - Trello - https://trello.com/b/T60Mx9ml/cinnamonizers
- IDE
  - VSCode
  - codesandbox.io

## About Us

#### Padmapriya Ganapathi

Originally from India, I have been a Pacific Northwest native for almost 13 years now. I have held support and project management roles before and currently transitioning into a software developer role. When I am not working, I am usually spending some quality time with my family or volunteering in one of my kid's classes.

#### Manish KC

An army vet and aspiring PNW, I call Washington my home. I completed my Masters in Computer Science from University of Washington and currently pursuing my career as an SDE at Amazon. If I am not doing anything, I get found either lost on the woods or watching some fantasy sci-fi on netflix.

#### Renee Messick

Though born and raised in the Bay Area, I've found my home in Seattle. I'm a software developer in training, interested in creating a user-centric approach to design and development. When not coding I'm spending time with my tiny monster dog and binge watching tv shows.

#### Nicholas Paro

I was born and raised in Vermont, received a Bachelor of Fine Arts in Music Theory and Composition from Carnegie Mellon Unversity, an Army Veteran, a Computer Science undergrad at Southern New Hampshire University, and now a software developer. I am interested in creating customer centric applications which help change someone's life for the better. When not working, I spend my time with my family and continuing to learn to concepts and technologies.

## Credits and Collaborations

#### Assets

- LinkedIn Logo: https://brand.linkedin.com/downloads
- GitHub Logo: https://github.com/logos
- Full Screen Layout: https://coderchronicles.org/2016/04/12/create-a-full-screen-layout-for-mobile-web-apps/
- Styling a Select: https://css-tricks.com/styling-a-select-like-its-2019/
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## User Stories

#### End User

- As a user, I want an easy to understand site which I can easily navigate and want to return to after the first use.
- As a user, I want an app which lets me look up my favorite quotes and store them to look at them later.
- As a user, I want to look up unknown words and find their definitions and synonyms and store them for later use.
- As a user, I want to be able to translate the words I look up into different languages to help teach me something new.
- As a user, I want to have my voice heard on a complaint or issue so that I feel my input is valued.

#### Developer

- As a developer, I want DRY and readable code.
- As a developer, I want modular code which can be easily reused and scaled as the project increases in size and scope.
- As a developer, I want to have a normalized Database.
- As a developer, I want all of the API calls to follow the same stack.
- As a developer, I want a constructor so that I know what to return to the front end.
- As a developer, I want the ability to make a request from the front-end to the back-end based on the information provided by the user.
- As a developer, I want to define routes.
- As a developer, I want to have an appropriately designed and titled front-end.
- As a developer, I want to perform data validation to ensure that the user propmts for appropriate data.

## Conflict Resolution Plan

- What will our group do when it encounters conflict?

  - As a group we will put any conflicting idea to a vote.
    - One person will be randomly selected each dat (changes every day) to have a double vote. This will ensure all ties are broken.
    - If the vote is unable to solve the issue, we will move into a Conflict Resolution Circle.

- How will you raise concerns to members who are not adiquately contributing?

  - We will address our concerns in our end-of-day standup. This will ensure all concerns are voiced without instructor involvement.
  - Concerns will be raised in the beginning-of-dat standup if the same issue becomes necessary to express to the instructor team.
  - We will start all conflict problems from a place of support and we will express our intentions with a whole message - this will help to reduce unnessecary friction if a conflict arises.
  - We will attempt to only use "I" statements when approaching a conflict.

- What is your process to resolve conflicts?

  - We will ensure all members are fed and sufficiently watered.
  - We will allow members to take reasonably timed breaks.
  - We will create a safe space where everyone is able to be heard, valued, and respected.

- How and when will you escalate the conflict resolution?
  - If we are unable to solve our through a vote we will escalete to a Conflict Resolution Circle. If a circle is called we will all:
    - close our laptops.
    - use a "talking stick" to ensure all concerns are aired and expressed.
    - continue to follow all rules layed down previously to ensure ONLY appropriate and constructive comments are made.
    - when circle ends, the issue is CLOSED and the resolution is complete.
  - If the Conflict Resolution Circle is unable to solve the issue, or the issue persists passed a Conflict Resolution Circle, we will bring the issue to Nicholas.

## Minimum Viable Product

- 2 APIs used
- Functioning and normalized database
- A styled and clean user interface which allows for user input and data output.
- Have a home page with routing
- Have an about us page

## Stretch Goals
### Added
- Additional APIs
  - Bhagavad Gita API: https://bhagavadgita.io/api/
- Single paging the data - showing only what user requests to see
- Words page with local storage persistence to allow users to see all of the previously searched words, their definitions, their synonyms, examples, Sanskrit (if applicable), and transliteration (if applicable).

### Future Updates
- Additional APIs
  - Systran API: https://platform.systran.net/index
  - Thesaurus API: http://thesaurus.altervista.org/
  - Food 2 Fork: https://www.food2fork.com/about/api
  - Google Trends: https://www.npmjs.com/package/google-trends-api#api-methods
- Personalize the site for each user (ask for a name and store in DB or LocalStorage)

## Components and Functions List

### Components

- Index
- App
  - worldTitlesSet() : pulls the name of The Lord of the Rings movies or chapter names from the Bhagavad Gita from the API or DB and sets the values to state.
  - quoteSet() : pulls The Lord of the Rings quotes or Bhagavad Gita verses from the API or DB and sets the values to state.
  - definitionSet() : builds the word objects which contains all the information presented to the user - word chosen, quote pulled from, definitions, synonyms, examples, sanskrit, and transliteration.
  - quoteDisplay() : selects five random quotes from The Lord of the Rings API/DB or the Bhagavad Gita API/DB and calls the quotes() to apply the spanning function.
  - homeView(), wordView(), and aboutView() : sets the state of the view to allow the page to display the correct components.
  - headerSet() : returns the Header component with passed props for the nav bar.
  - landingPage() : sets the display view to render the correct components and display only the necessary information. This function calls multiple other components and is the main rendering function for the page.
  - render() : calls the landingPage().

#### Header

- Header
  - render() : builds the title and calls the nav() to build the nav bar.

#### Main

- Main Builder
  - quoteDisplay() : builds and displays the quote boxes.
  - render() : calls quoteDisplay().
- About Us
  - render() : pulls from state and sends team members' names, GitHub, and LinkedIn urls to the aboutUsBuilder().
- Words
  - setter() : pulls the word objects from local storage, pulls out the stored information, and calls the wordObjBuilder() to create the word sections for the words-searched route.
  - render() : calls the setter().

### Functions

#### Header

- nav() : builds the nav bar, assigns the click event, and sets the links for the routes.

#### Main

- aboutUsBuilder() : pulls the information from the about us render() and creates the HTML objects to display on the about us route.
- listBuilder() : builds the list elements for the definitions, synoynms, and examples.
- definitions() : takes in the chosen word, current quote, and items for the definition and pulls their values to be display them to the user. Calss the worObjSlicer() to pull the definition items out of an array and then calls the wordObjBuilder() to build the word objects.
- dropDown() : takes in the dropdown menu item and builds the options for the dropdown menus.
- Local Storage
  - setLocalStorage() : takes in a key and value to set an item to the local storage.
  - getLocalStorage() : pulls the item from local storage and parses it out of a stringified JSON item.
- quotes() : takes in the quote, sanskrit, and transliteration which the word was chosen from. Runs the quote through the spanner() and assigns the values to HTML p tags. If the sanskrit or transliteration is not needed, it will hide the values.
- randomInclusiveNumGen() : takes in the min and max range and produces a randomly generated number within that range.
- spanner() : takes in a quote and puts an HTML span around each word within the quote. This allows for each word to be clicked on.
- wordObjBuilder() : taskes in the word, quote, definition, synonyms, examples, necessary classes, index number, sanskrit, and transliteration and assigns them to the correct HTML list item. This allows for a modularized code without repeating function builds.
- wordObjSlicer() : takes in an array of words for the definitions, synonyms, and examples and pulls out the first five to display to the user. This elminates a long list of synoynms and examples from being displayed.

### CSS

- Reset
- Base

#### Layouts

- Desktop Layout
- Tablet Layout

#### Modules

- Buttons
- Dropdown Menu
- Scroll Bars
- Words Searched
- Definition Style
- About Us

## Change Log

### Day 1

- Scaffolded the front-end.
- Built out basic css grid structure using SMACCS guidelines.
- Built the basic JavaScript functionality for the major components and functions within the React structure.
- Initialized the integration between the front-end and back-end for The Lord of the Rings API.

### Day 2

- Mobile view complete
- Fully integrated The Lord of the Ring API to accurately display the 5 randomly generated quotes, display the chosen word and quote pulled from for the definitions display.
- Integrated the Words API and associated the definitions, synonyms, and examples with the user selected word and displayed the information within the definitions display.
- Built the About Us route.
- Added Routing for the Words Searched and About Us routes.
- Reorganized the React file structure to reflect components and functions.

### Day 3

- Rebuilt css with flexbox in SMACCS guidelines
- Fully responsive views available for mobile, tablet, and desktop
- Added error handling and null checks to verify application state management.
- Refactored the code into further functionalized segments to modularize the code.
- Added local storage setting and getting functions to allow previously searched words to be storred and viewed on the words route.
- Built the Words Searched route.
- Added random number generator validation to ensure the same quote/verse is not chosen twice in a single display.
- Deploted the front-end to Heroku.

### Day 4
- Styled and made responsive the Word Searched and About Me routes.
- Integrated the Bhagavad Gita API/DB.
- Added additional display for the Bhagavad Gita definitions display to include the Sanskrit and Transliteration to the quotes.
