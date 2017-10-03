<a name = "requirements"></a>
# Requirements Deliverables
* [Users and Use Cases](#uses)
* [Functional Spec](#func_spec)
* [Architecture](#architecture)
* [Live App](#live_app)

## <a name="uses"></a>General User Types
### We anticipate having two types of general users
* **Users who wish to use the platform**
  - users who require only basic functionality, i.e. a simple visual representation of aggregated sentiment around a single given hashtag
  - some other users in this category may want to customize what colors are represented in the sentiment analysis, or run the analysis on multiple hashtags surrounding an issue
  - examples of this user include students and politicians/business owners
* **Users who wish to build upon the platform**
  - users who wish to develop and expand upon our platform. This type of user will probably want access to technical documentation and help guides involving our platform. 
  - this type of user could be charachterized as a 'developer'
 * **Personas**
  - John: I'm covering a story on how students feel about DACA for the Daily Tar Heel. I'll look at W4G's monitor which displays the overall sentiment. I'll include this sentiment, and a photo of the monitor in my story.
  - Mary: I like W4G's idea, but I want to expand upon it and add my own features. I will read the technical documentation to understand how it works, then try to tweak it for my own needs.

## Specific User Types
1. Basic Visualization User
* A user who goes to our app and just wants to see a sentiment visualization
Requires no technical knowledge- user just has to navigate to our page and input their desired tags
2. Student User
* Students who can easily use our platform for artivism
This is more of an “educational” use case. Young students can use the platform to research sentiment about topics and conduct further research. They may want a downloadable summary of their query as well.
3. Political/Business User
* A user who uses our platform for analysis on certain issues pertaining to their campaign/constituents/business/etc. They may want the option to save hashtag settings, export sentiment as a .csv file, or run sentiment on past tweets instead of a live stream.
4. Developer User
* Someone with technical knowledge 
This user might want to add more features/expand more heavily than what our basic platform provides.  

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

* <span style="color:black">Persist the graphs on the app page once stream has ended</span>
* <span style="color:black">Add option for running analysis on tweets in a certain time range</span>
* <span style="color:black">Generate CSV file or another exportable file containing tweet data and sentiment analysis</span>
* <span style="color:black">Have a way to store frequently analyzed hashtags ("favorites")</span>
* <span style="color:black">Auto-generate a fax to politicians/local officials once a certain threshold of tweets/sentiment is reached</span>
* <span style="color:black">Time out service if no tweets have come in after three minutes</span>
	* <span style="color:black">Show a timer that counts down until timeout if this happens</span>
