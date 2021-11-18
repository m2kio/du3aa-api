<h1 align="center">Du3aaAPI</h1>
<p align="center">Du3aaAPI is a free API service that provides a random Islamic prayers</p>
<p align="center"><img src="https://img.shields.io/github/package-json/v/mymk95/du3aa-api" /> <img src="https://img.shields.io/github/v/release/mymk95/du3aa-api" /></p>

---

## Usage

```http
GET https://api.du3aa.rest
GET https://api.du3aa.rest?format=json
GET https://api.du3aa.rest?format=text
```

---

## Development
- Sign up for **Workers** account [here](https://dash.cloudflare.com/sign-up/workers)
- Install [Wrangler](https://github.com/cloudflare/wrangler), the **Workers** CLI
- Clone the project
- Initialize a **Workers** project 
  - `$ wrangler init`
- Develop 
  - `$ wrangler preview --watch`

Further documentation for **Wrangler** can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

## License
MIT
