# <a name="func_spec"></a>Functional Spec
## Watson-4-good
* The primary function of our app is to provide: A sentiment visualization of a desired tag

## Requirements (prioritized)
1. Needs to use a service of IBM Watson in some way (NLU engine and Tone Analyzer)
2. Easily re-usable platform
3. Automatically generated visualizations of sentiment
4. Visualizations are clear, concise, and easily understandable
5. Needs to be hosted in the cloud (IBM Bluemix)
6. Easily understood by non-technical people
7. Simple, intuitive interface
8. Query times out after 2 minutes
9. Protect our API keys


## User Types
1. Elementary, and Middle-school students 
* Students who can easily use our platform for artivism
This is more of an “educational” use case. Young students can use the platform to research sentiment about topics and conduct further research
2. Basic Visualization User
* A user who goes to our app and just wants to see a sentiment visualization
Requires no technical knowledge- user just has to navigate to our page and input their desired tags
3. Developer
* Someone with technical knowledge 
This user might want to add more features/expand more heavily than what our basic platform provides

## Interfaces
* Basic 
1. Running sentiment on one or more hashtag(s)
2. Enter hashtag into the input bar
3. Hit button which will query the back-end API
4. Visualize results
