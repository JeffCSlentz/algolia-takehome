# Question 1

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
- Records
- Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking." 

Cheers,
George

# Answer 1

Hi George,

Records are the basic building blocks for Algolia's indexes. They are JSON formatted and will contain attributes like strings, integers, dates, or even objects. As an example, you would have a record for every movie in your database. Records only need to contain data that is searchable or should be returned in a search result. 

An index is a collectiong of records. When you upload records, Algolia is indexing your data, preparing it for search.

You can read more on records and indexing here:

https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/in-depth/prepare-data-in-depth/

For types of metrics to include in your custom ranking, it depends a lot on your use case. Some example metrics would be things like sales, views, ratings, etc.

You can read more on custom rankings here:

https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/

Regards,

Jeff

# Question 2

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards,
Matt

# Answer 2

Hi Matt,

I'm sorry to hear that your experience has gotten worse with the new design. I'll forward your feedback on to the design team.

In the meantime, to help speed up your iteration, I would recommend using our API to automate clearing and deleting your indices.

Clearing an index:
https://www.algolia.com/doc/api-reference/api-methods/clear-objects/

Deleting an index:
https://www.algolia.com/doc/api-reference/api-methods/delete-index/

If there's anything else I can do to help, let me know.

Regards,

Jeff

# Question 3

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards,
Leo

# Answer 3

Hi Leo,

I'm glad to hear you're interested in Algolia!

In general, Algolia provides a wide set of tools to simplify and speed up your development process. The amount of development work will depend on your use case and platform. 

You can read about them here:

https://www.algolia.com/doc/guides/getting-started/what-is-algolia/#what-can-algolia-do-for-my-developers

The high level process for implementing Algolia search is relatively straight-forward.
+ On the back-end, prepare your data for upload to Algolia.
+ In Algolia, manage your searchable data and how your results are sorted.
+ On the front-end, send your user's query and display the results.

Then, you can extend that functionality by implementing more features like our Analytics, AI, personalization, and more!

Feel free to reach out if you have more questions.

Regards,

Jeff