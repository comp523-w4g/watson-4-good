# <a name="sprint"></a>Sprint Deliverables

# <a name="func_spec"></a>Functional Spec
## Watson-4-Good Concept
* The primary function of our app is inspire activism through art using sentiment visualization of twitter hashtags.

## Requirements (prioritized)
1. Utilizes IBM Watson (i.e, NLU Engine and Tone Analyzer)
2. Re-usable platform
3. Automatically generated visualizations of sentiment
4. Visualizations are clear and easily understandable
5. Hosted in the cloud via IBM Bluemix
6. Simple, intuitive interface that can be understood by non-technical users
7. Query times out after 2 minutes
8. Protect API keys

## Interfaces
* Basic Users
	-  Running sentiment on one or more hashtag(s)

* Advanced Users
	-  Running sentiment on hisrotical tweets
		- Import from a database
		- Analyze tweets from a date range specified by user
	- Exports sentiment results and tweets from an imported file
	- Running sentiment on past "saved/favorited" hashtags


## Specific User Types
1. Basic Visualization User
* A user who goes to our app and just wants to see a sentiment visualization. Requires no technical knowledge - user just has to navigate to our page and input their desired tags
2. Student User
* Students who can easily use our platform for artivism. This is more of an “educational” use case. Young students can use the platform to research sentiment about topics and conduct further research. They may want a downloadable summary of their query as well.
3. Political/Business User
* A user who uses our platform for analysis on certain issues pertaining to their campaign/constituents/business/etc. They may want the option to save hashtag settings, export sentiment as a .csv file, or run sentiment on past tweets instead of a live stream.
4. Developer User
* Someone with technical knowledge. This user might want to add more features / extend our basic platform.

## Use Cases 
- <span style="color:green"> Green = Completed</span>
- <span style="color:orange">Orange = In Progress</span>
- <span style="color:black"> Black = To Do</span> 

* <span style="color:green"> User inputs up to three tags he/she wants to analyze into search bar </span> 
* <span style="color:green"> User hits Enter and live-stream starts</span> 
* <span style="color:green"> Stream stops once user hits "X" button</span> 
* <span style="color:green">Highcharts are generated to visualize data</span> 
	* <span style="color:green">Have a meter that shows tweets per second</span> 
	* <span style="color:green">Have a bar chart that shows current count of tweets by hashtag</span> 
	* <span style="color:green">Have a Sentiment Analysis Chart that updates with the average sentiment score for each hashtag as tweets come in</span> 
* <span style="color:green">Make graphs support multiple hashtag input</span> 

* <span style="color:orange">Utilize a county map to display sentiment for tweets by county</span>
* <span style="color:orange">Display a live tweet "feed" that shows texts and usernames of incoming tweets</span>

* <span style="color:black">Add mouse-over support for features as part of user manual plan</span>
* <span style="color:black">Add FAQ pop-up near info button on nav bar as part of user manual plan</span>
  * <span style="color:black">Include a FAQ for basic user and advanced user</span>
* <span style="color:black">Persist the graphs on the app page once stream has ended</span>
* <span style="color:black">Add option for running analysis on tweets in a certain time range</span>
* <span style="color:black">Generate CSV file or another exportable file containing tweet data and sentiment analysis</span>
* <span style="color:black">Have a way to store frequently analyzed hashtags ("favorites")</span>
* <span style="color:black">Auto-generate a fax to politicians/local officials once a certain threshold of tweets/sentiment is reached</span>
* <span style="color:black">Time out service if no tweets have come in after three minutes</span>
	* <span style="color:black">Show a timer that counts down until timeout if this happens</span>
