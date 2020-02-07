---
layout: post
title: Do They Have An App For That?
---

How many applications is currently installed in your phone right now? With technology today, applications are becoming more popular because
of its convenience and easy accessibility. There are applications available to everyone with its diversed Genre, so you are not limited 
to any options. This gave me the idea of using Predictive Modeling to figure out what can possibly be the next popular application. What
effects the consumer's decision to install the app even if its not free. I pulled a data from Kaggle.com with all of the data from the 
Google's play store and used its features to get my predictions. 

As you can see here, I split the Category column to show what category has the most app in Google's Play store.

<p align="center">
  <img src="https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/genre1.png">
</p>

The Tools and Entertainment genre are the most popular at the moment. Now, I want to see how these
apps are rated. 

<p align="center">
 <img src="https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/genre2.png">
</p>

Even though the number of genre popularity is very different, their ratings are all very close to each other. Are these ratings affecting 
the number of installs these apps have? I decided to only focus on the genres that have a rating of 4.0 or higher since ratings of an app usually affects the decicion making of the consumer. 

I used Installs as my main target to do my predictions on the most popular category to be installed.
I fit my first model in a LogisticRegression and received an accuracy score of 70%. 

<p align="center">
 <img src="https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/model%202.png">
</p>

My predictions is really low so I decided to fit it again using RandomForestClassifier and that gave me a train score of 99%, but my
validation score was only 37%.

<p align="center">
<img src="https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/randomscore.png">
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/valscore2.png">
</p>

Finally I decided to use a DecisionTreeClassifier and with adjustments to my parameters, I ran a final test score to get an 83%.

<p align="center">
<img src="https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/finalscore.png">
</p>

In the end, if you look at the table below, it shows that an app with a Content Rating for 'Everyone'and a high review of 4.0+, there is an 83% chance that app will be on the top list of being the most popular application installed. With so many apps being generated and 
depending on who the consumer is, its hard to predict what influences them to take their time and try a new application. 

<p align="center">
<img src="https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/predictiontable.png">
</p>

Usually I would look at ratings & reviews before deciding if the app is worth being installed or not. I thought it would've had an impact on the data I've used to predict my model. In the end they had no influences on each other at all. 


<p align="center">
<img src="https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/InR.png">
</p>

I looked at feature importances and it showed that the Size of the app was the main factore. Which it made sense because depending on the devices, memory space is usually not available equally among each other. 






<p align="center">
<img src="https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/123.jpg">
</p>
