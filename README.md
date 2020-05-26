# Overview

We've created this project to see how well you can implement an Autocomplete Input just like [Google's](https://developers.google.com/maps/documentation/javascript/places-autocomplete).

The task is pretty simple, just create a good React component backed by [a server API endpoint](https://github.com/toptive/autocomplete-sandbox-backend) to make the suggestions.

While this may look simple, Google's Autocomplete API only includes `address` and `place_id`, but you need to append data to each suggestion so that each item in the results array come back like this:

```
{
  'place': 'placeID',
  'street': 'Sobremonte Norte 110',
  'city': 'Rio Cuarto',
  'state': 'Córdoba',
  'zipcode': 5800,
  'location': {
    'type': 'Point',
    'coordinates': [-64.3521165, -33.1279082]
  }
}
```

<img src="https://shoptimized-smartsuite.s3.us-west-1.amazonaws.com/autocomplete-google.png" alt="Demo" />

## Purpose

The idea is not to make everything from scratch since we know that might take a while to sort everything out, that's why this repository contains most of the building blocks to get you started quickly.

There's already a component `<AutocompleteInput />` with the desired `props`, you just need to fill that in to make it work.

You should aim for using the less amount of code as possible, also CSS is not required, we've already added a tiny CSS library just to make it look nice enough.

The content for the `li`'s should be the street field of each result.

On the backend side, there's as well [some building blocks](https://github.com/toptive/autocomplete-sandbox-backend/blob/master/src/services/google.js), you need to implement the `google#findAddress` in the most efficient way.

Beat 600ms execution time as logged on the server, is a plus.

## Author

- [Karim](https://github.com/Vercryger)
