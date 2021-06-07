# Np_NewsPortal



Author ArunSankars001@gmail.com

Firebase -> 
Github -> 

News Portal App
Task: Create a News Portal app using the New York Times API (API details, keys,
etc will be at the end of this Doc).
1. You can use any framework you are familiar with (Frontend only; there is no need to
implement any backend part).
2. You can use any toolkit for designing & styling.
3. Login Page / User Registration (You can use localstorage for data storage)
a. There should be a User Registration page, just email, password & display name
i. Email should be validated and also validate for existing user.
ii. Password should be max 20 characters, no Special characters
iii. Display name should not contain any Special characters.
b. Users can delete an account(individual), so there should be a profile page.
i. Profile page
1. Allow changing Password
2. Allow changing Display Name
3. Cannot change email address
4. Can delete account
4. Home page should be a listing of News Articles.
a. Listing should be divided into two sections
i. Section Listing
1. This should be a side menu.
2. Clicking a section item will filter the articles based on the section
selected (Article data will contain a field section, you can
utilize that)
ii. News Articles with Title & Abstract
1. Clicking on an article should open a new tab/window with the
article url
2. If any multimedia is available for an article, it should be shown as
a small thumbnail.
5. Pagination should be implemented (API supports pagination; there is no need to
implement data pagination on the frontend). Do not use any third party plugin; you have
to implement it yourself (both logic & UI)
6. Implement Read Later section
a. User can add any number of articles to Read Later
b. There should be a separate page where users can browse a list of all the Read
Later articles added.
i. Listing can be similar to Home Page listing, but without any thumbnail.
ii. A maximum of 10 items should be displayed at a time, i.e. you have to
implement pagination also. (Pagination logic should be handled on the
frontend)
c. User should be able to remove an article from the list
API Details
API Key: uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7
Article Listing
API Endpoint:
https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=api_key
For pagination you can use page and limit params along with the url. Page starts with 0.
Section Listing
API Endpoint:
https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=api_key
Important
● Please don’t distribute or misuse the API key provided.
● Please don’t spam request the API URLs. You should restrict API requests to 5/minute