addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    const prayers = require('./prayers.json')
    const randomPrayer = prayers[Math.floor(Math.random() * prayers.length)]
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Content-Type': 'application/json; charset=utf-8'
    }
    return new Response(JSON.stringify({ status: 200, statusText: 'OK', prayer: randomPrayer }), { status: 200, headers })

  } catch (error) {
    return new Response(JSON.stringify({ status: 500, statusText: 'Internal Server Error' }), { status: 500, headers })
  }
}
