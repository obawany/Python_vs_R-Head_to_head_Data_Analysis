#Importing a CSV
#loading the csv file nba_2013.csv 

#importing pandas library to get access to dataframes.
#Dataframes are two dimesnsional arrays(matrices) where each column can be of a different datatype

import pandas
nba = pandas.read_csv("nba_2013.csv")

#csv file has been loaded into a dataframe by now

#finding the number of rows 

nba.shape

#(481,31)

#looking at the first row of the data

#Python is more object-oriented here, and head is a method on the dataframe object
#Python is more oo

nba.head(1)

#	player 			pos 	age 	bref_team_id
#0	Quincy	Acy		SF		23 		TOT
# [output truncated]

#Find the average of each statistic

