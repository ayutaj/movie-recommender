# movie-recommender
A recommendation system is a filtering system whose goal is to forecast a user's rating or preference for an object, such as a film, a product, a song, and so on.
content-based movie recommendation engine
Here I have used 
MongoDb, ExpressJS, NodeJS(in backend)
JavaScript, HTML, CSS ((in frontend)
Content-based recommender recommendations can be viewed as a user-specific categorization challenge. The user's likes and dislikes are inferred from the song's characteristics using this classifier. Keyword matching is the most easy method. In a nutshell, the aim is to extract significant keywords from a user's favourite song description, search for those keywords in other song descriptions to assess similarities, and then recommend those songs to the user based on that information.
This is a Movie Recommender system which works on the basis of two algorithms which are ### Cosine Similarity algorithms  and Eucledian Geometry ###
It uses vote count and vote average to give recommendation that is , it applies the formula of sqrt((x1-x2)2 + (y1-y2)2  ). 
The cosine similarity gives result using  genres of two movie by finding cosine relation
In our case, because we are working with text and words, Term Frequency-Inverse Document Frequency (TF-IDF) can be used for this matching process.

This recommends movies on content based  
This is a content based movie recommender which recommends movie on basis on of Euclidean Distance rule and cossine simmilarity
This contains top 50 recommended movies from the web site and then user can find his/her desired movie using search bar

How to use 

Step 1
  Clone the repository
  
 Step2
  Install node js on your computer
  
 Step3
  run command npm i
  
  step 4
   run node ./index.js
   
  step 5
  If the trained data is noy present so please change TRAINDATA=true in config env then train the data to use 
  
  If anywhere passwored and user name is required please use 
  username: Global
  password: global123
