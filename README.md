Githunt is a small application that allows users to look up github users and reveals their contact information (if it is publicly available!). It is built upon React/Redux and connects to github's V3 REST API to collect data. A number of additional libraries such as redux-forms and superagent were used. 

A live demo of the website can be found at: http://obscure-cliffs-74080.herokuapp.com/

You can also download it locally and initialize it with 'yarn start'. 

Primary search queries are made by fetching data from Github's search api. Please keep in mind that Github's public api has relatively strict rate limits.

More user details are fetched again from Githubs /users endpoint once a selection has been made. Links to the user's gists, repository and profile are also generated at this point. 

This project was made for Zaaksysteem.nl as part of their application process.

Thanks for checking it out!


