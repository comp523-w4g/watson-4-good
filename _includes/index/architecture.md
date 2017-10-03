# # <a name="architecture"></a>Design Doc
## <a name="architecture"></a>Architecture
## Backend Diagram
![diagram](https://image.ibb.co/i4eidw/w4g_backend_architecture.png "architecture")

## Client-side Diagram
![client-side architecture](https://image.ibb.co/cCCDyw/client_architecture.png)

## Design Details
**End to end pipeline overview:**

-   Client sends hashtags using socket.io in an 'filter' event

-   Server will get that hashtag, instantiates a twitter stream using Twit

-   when new tweets come in per stream, emits a 'tweet' event

-   Client's stream.js returns a StreamService() object

-   StreamService will send/receive messages using socket.io

-   whenever it does, it will call the worker to do shit

-   workers will process the new tweet, update the counts for each hashtag, update the data

-   The bus then notifies all components that the worker has processed a new tweet with new data

-   stream.js's onBroadcast is what connects Bus and StreamService

-   Components that are subscribe to tweets will just need to import Bus and StreamService

-   initiates connection to the twitter data using StreamService.tag

-   must have an onUpdate method that is called whenever Bus.$on('update')

-   onUpdate will update the chart appropriately

**Server:**

-   twitter.js => sets up twitter streams using Twit, returns a stream

-   socket.js => defines how to handle and send events. Uses twitter.js

-   will receive 'filter' event from client that contains hashtags to create streams for

-   will emit 'tweet' event to client whenever a new tweet comes in

-   receives/emits connection/disconnect/error

-   index.js => sets up the node app. uses socket.js to create the socket.io that clients will connect to

**Client - Services/interface with server**

-   index.js => exports Bus, Socket, StreamService to components, components will import these to subscribe to events

-   bus.js => creates the event Bus (the subscription interface that components import)

-   socket.js => sets up socket.io for client using 'socket.io-client', the go-to client module for socket.io

-   stream.js (most important!) => returns a StreamService() class, which is the master manager for the streams, intercepts socket.io events and doles out work for the workers

-   the onTweet() handler is  whenever a new tweet comes in

-   stream.worker.js => workers that are instantiated by stream.js to handle specific socket events.

-   Actually does the work of processing tweets, handling the counts for tweets with specific hashtags

-   takes a new tweet's fields and adds the new information to data

**Client - Vue Components**

-   Controls.vue =>

-   imports the StreamService, passes the hashtags that user enters into it to start streaming

-   also starts the subscription event bus, so the client app can handle any new/incoming events properly

-   the term chip = hashtag

-   App.vue =>

-   creates the socket connections, handles closing all connections/reconnecting when necessary

-   charts/... => all the individual charts in each panel

-   Each charts import:

-   Bus (for resetting and updating)

-   StreamService - to get incoming tweets, separated by tag (StreamService.tag)

-   Each chart also has an onUpdate(data) handler which dynamically updates the chart to reflect current data

-   this is how new data is handled by each chart, grabbing the specific fields of each new tweet (we insert sentiment here!)