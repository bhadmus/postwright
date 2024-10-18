![image](shot/banners.jpg)

## Convert your postman collections to playwright scripts.
---

This is the pilot release of this plugin. It basically converts your large postman collections into playwright scripts

### Installation
- Run npm install -g postwright

### Usage

- Create a folder and navigate into it then run `postwright -c <location-of-saved-postman-collection>` or `postwright --convert <location-of-saved-postman-collection>` or `postwright convert <location-of-saved-postman-collection>`

- You can alternatively run `postwright -c <location-of-saved-postman-collection> -o <preferred-location-to-save-the-converted-script` or `postwright -c <location-of-saved-postman-collection> --output <preferred-location-to-save-the-converted-script`

### What does it do presently?
---
- [ ] The current release converts your collections into playwright version.

- [ ] Creates a `variables.js` and `variables.json` files leaving you to decide how you want to parse in saved variables

- [ ] Offers basic post-response assertions which are status code and response time. It extracts the title of other tests so that you can write them manually.

> [!NOTE]
> This is a first release, the plugin shall be improved upon to better handle post-response tests and pre-request scripts.
