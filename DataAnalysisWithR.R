#Importing a CSV 
#loading the csv file nba_2013.csv 

#Dataframes are two dimesnsional arrays(matrices) where each column can be of a different datatype

nba <- read.csv("nba_2013.csv")

#csv file has been loaded into a dataframe by now

#finding the number of rows 

dim(nba)

#[1] 481 31 

#looking at the first row of the data

#R has a separate head function
#R is more functional 

head(nba, 1)

#	player 			pos 	age 	bref_team_id
#0	Quincy	Acy		SF		23 		TOT
# [output truncated]

