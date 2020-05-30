const CognitiveServicesCredentials = require('ms-rest-azure')
  .CognitiveServicesCredentials
const WebSearchAPIClient = require('azure-cognitiveservices-websearch')

let credentials = new CognitiveServicesCredentials(
  process.env.REACT_APP_BING_KEY
)
let webSearchApiClient = new WebSearchAPIClient(credentials)

const wikipediaSearch = ({ search }) =>
  fetch(
    `https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&limit=1&namespace=0&format=json&origin=*`,
    {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }
  )

const bingSearch = async ({ query }) =>
  (await webSearchApiClient.web.search(query)).webPages.value[0]

const googleSearch = ({ query }) =>
  fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_KEY}&cx=000318872564304505748:gnukry7hq49&q=${query}`
  )

export const combinedSearch = async ({ query }) => {
  const wikipedia = await wikipediaSearch({
    search: query,
  }).then((response) => response.json())

  const google = await googleSearch({ query }).then((response) =>
    response.json()
  )

  const bing = await bingSearch({ query })

  return {
    wikipedia: {
      text: wikipedia[1],
      url: wikipedia[3][0],
    },
    google: {
      url: google.items[0].link,
      text: google.items[0].title,
    },
    bing: {
      url: bing.displayUrl,
      text: bing.name,
    },
  }
}
