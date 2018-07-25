# Elasticsearch Proxy: A Lightweight API Layer for Basic Elasticsearch Security

This application forwards a search request from an allowed origin to Elasticsearch and returns the response.

Your Elasticsearch access policy can then be set to allow access only from the specific IP address where this application is hosted. This prevents others from modifying or deleting your Elasticsearch indices.

*Note: this is only a basic security layer, e.g. it does not protect against denial-of-service attacks. For more information see: https://www.elastic.co/blog/found-elasticsearch-security.*

# Instructions

1. Install dependencies with `npm install`.
2. Modify `app/routes/es_routes.js` with your own Elasticsearch domain (`esDomain`) and the site that you want to access it from (`allowedOrigin`).
3. Run the application in development mode with `npm run dev` or on the server with `node server.js`.
4. Send your search query as a POST request to `https://[localhost:3201 OR your-host-domain]/[name-of-elasticsearch-index]/_search` in exactly the same format as if you were sending it direct to Elasticsearch, e.g.

```
fetch(proxyUrl, {
  method: 'POST',  
  body: JSON.stringify(query), 
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    // Do something with the response
  }
```