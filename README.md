# Postedin Frontend Test

This is the test used by Postedin to technically evaluate the candidates for their Frontend vacancies. I am participating in a selective process for their team, but if you would like to apply, feel invited to develop their test, this repo is a fork of their test with all the instructions.

## The Challenge

Create "The Marketing Blog", a blog using their content from a public Wordpress API.

## Scope
  - Follow the [Guide Lines](GUIDELINES.md)
  - Mobile first design and development
  - Use Ember
  - Do Unit Tests
  - Create a clear methodology to organize CSS code
  - Use BEM naming and Sass as a preprocessor
  - Use animations that enhance the UX
  - Show articles on the Homepage
  - Show details for each article
  - Allow social media sharing of the content

## How to Use the Repo
  - Clone repo
  - Run `npm install` on the console to install dependancies
  - Run `ember serve` to run the local server
  - Run `ember test` to run the tests

## How the Test was Solved

I used the Ember CLI to create a new Ember app along with Sass.

I used `ember-ajax` to fetch the posts from the given endpoint and set it as the model for the Homepage route, which contains the posts list. Sadly, my API-foo is lacking and even though I was planning on creating a very detailed blog, using title, featured media, tags, excerpts, etc. for the post preview and opening the single post as a sliding overlay that came from the side, I was not able to do so in time.

For the CSS, I used `scss` with an Atomic Design approach and BEM + namespaces, creating a scalable and easy to maintain CSS codebase.

For the Questionnaire I used CodePen for the code questions.

You can see the final product [running on Heroku](https://postedin-frontend-test.herokuapp.com/questionnaire)
