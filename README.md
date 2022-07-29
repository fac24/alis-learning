# Alis Learning

- A dyslexic learning app aimed at children aged 5 - 12 to help them improve their reading in a fun engaging way.
- A parent/Teacher set up learner section.
- Child/learner setup for onboarding profile application.
- This includes a phoneme game - click the button to go, speak the word to gain a shining star point ⭐.
- Designed to be used on a desktop / tablet.

# Designed and Developed by:

- [Peter](https://github.com/PJSalter): Scrum Facilitator
- [Hallie](https://github.com/vasystus): Quality Assurance
- [Maria](https://github.com/mariaalouisaa): DevOps
- [Joe](https://github.com/joe-dev-public): UX/UI Lead

### Tech stack:
* Deployment host: Netlify.
* Free Web Speech API from examples of MDN.
* LocalStorage was implemented.
* NextJS and React.
* Styled Components for styling and animations.
* Icons from [React Icons](https://react-icons.github.io/react-icons/)
* Wireframes on [Figma](https://www.figma.com/file/d6fNK8z3n8F6EpGVItXJzV/FAC24-TFB-Kaher?node-id=0%3A1)


### How to run the application as a developer:

Clone the repo onto your local device:
- `git clone https://github.com/fac24/alis-learning.git`
- `cd alis-learning`
- `npm install`

To then view the application in your browser:
- `npm run build`
- `npm run start`
- visit http://localhost:3000/ in Google Chrome

To run tests:
- make sure you are in the project folder, if not `cd alis-learning`
- `npm run cypress`
- the cypress GUI should open and run the tests
- To add tests edit the `/cypress/e2e/spec.cy.js` file

### Known issues:

- The speech recognition API (and our implementation) is far from perfect!
  - It might struggle with background noise, quiet microphones, different accents, etc.
  - It might sometimes hang. Refreshing the page is a quick workaround.
  - A commercial API might do a better job.
- The learner onboarding progress bar has a couple of issues:
  - It renders the right-facing arrows in their own ``<li>`` elements. This is bad semantic practice and should be changed.
  - Each list item is missing a unique ``key`` prop.

### Bug or feature? :slightly_smiling_face: 

- Watch out for the user being able to cheat the game and earn more stars than levels. In its current state, the child is accredited a star on completion of a word. If they leave the page before clicking 'next' and return back to the page they will have earned a star but still be on the same level.
  - This bug could be reframed as an "easter egg". If a child is able to find and exploit it, their learning supervisor should take note -- they might have a future in coding! :wink: 

### Extra things to consider:

- The speech recognition API this application uses ONLY works on Google Chrome. These features will not work in any other browser.
- The avatars and decorational images used in the prototype are SVG's that we have sourced from [this organistion found on Icon Finder](https://www.iconfinder.com/search/icons?family=flat-424&price=free) which hold a *Attribution 3.0 Unported (CC BY 3.0) Licence* which requires attribution if used for comercial use. Please see: https://creativecommons.org/licenses/by/3.0/
- The colours we have implemented for the background choices are colours that have been proven to be good for people with dyslexia, information taken from [Semantic Scholar Org](https://www.semanticscholar.org/) and [TES](https://www.tes.com/teaching-resource/dyselxia-colours-12691056)
See image below:
![](https://i.imgur.com/gUZILyJ.png)
- Here is some interesting userbility [feedback](https://docs.google.com/document/d/16NtS9KIRMKK9U6RWEzksoLLfP_iUX6i67gLgT3kzE8U/edit) we got during the design week:
- The [Open Dyslexic](https://opendyslexic.org/) is not available on Google Fonts and needs to be downloaded and imported.

### Some parts are the dummy links/buttons:

![](https://i.imgur.com/7jEBWDJ.png)
And 
![](https://i.imgur.com/Jtz9gVp.png)

### ScreenShot:

![](https://i.imgur.com/kiWIBsS.png)

