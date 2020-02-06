---
layout: post
title: Do They Have An App For That?
---


How many applications is currently installed in your phone right now? With technology today, applications are becoming more populard because
of its convenience and easy accessibility. There are applications available to the everyone with its diversed Genre, so you are not limited 
to any options. This gave me the idea of using Predictive Modeling to figure out what can possibly be the next popular application. What
affects the consumer's decision to install the app even if its not free. I pulled a data from Kaggle.com with all of the data from the 
Google's play store and used its features to get my predictions. 

As you can see here, I split the Category column to show what category has the most app in Google's Play store.

<p align="center">
  https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/genre1.png
</p>

The Tools and Entertainment genre are the most popular at the moment. Now, I want to see how these
apps are rated. 

<p align="center">
 https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/rating%20bar.png
</p>

Even though the number of genre popularity is very different, their ratings are all very close to each other. Are these ratings affecting 
the number of installs these apps have? I decided to only focus on the genres that have a rating of 4.0 or higher since ratings of an app
usually affects the decicion making of the consumer. 

I used Installs as my main target to do my predictions on the most popular category to be installed.
I fit my first model in a LogisticRegression and received an accuracy score of 61%. 

<p align="center">
 https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/modelscore.png
</p>

My predictions is really low so I decided to fit it again using RandomForestClassifier and that gave me a train score of 99%, but my
validation score was only 34%.

<p align="center">
https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/randomscore.png
</p>

<p align="center">
https://raw.githubusercontent.com/hyamynl619/hyamynl619.github.io/master/img/valscore.png
</p>

Finally I decided to use XGBClassifier to try and boost my pipeline to give me a better accuracy score. 
