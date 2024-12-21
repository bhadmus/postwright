![image](shot/banners.jpg)

- [Installation](##installation)
- [Usage](##usage)
- [What does it do presently?](#what-does-it-do-presently)

## Convert your postman collections to playwright scripts.
---

This is the pilot release of this plugin. It basically converts your large postman collections into playwright scripts

### Installation
- Run npm install -g postwright

### Usage

- [ ] **Default Javascript**

To convert to a javascript extension, do the following:

- Create a folder and navigate into it then run any of the following:

    - `postwright -c <location-of-saved-postman-collection>` 
    - `postwright --convert <location-of-saved-postman-collection>`
    - `postwright convert <location-of-saved-postman-collection>`

- You can alternatively run any of the following from any location in your terminal.
    - `postwright -c <location-of-saved-postman-collection> -o <preferred-location-to-save-the-converted-script` 
    - `postwright --convert <location-of-saved-postman-collection> --output <preferred-location-to-save-the-converted-script`
    - `postwright -c <location-of-saved-postman-collection> -o <preferred-location-to-save-the-converted-script -f js` 
    - `postwright --convert <location-of-saved-postman-collection> --output <preferred-location-to-save-the-converted-script --format js`

> [!NOTE]
> The default extension is Javascript so it isn't mandatory to add the flag `-f` or `--format` to specify the extension if you want to convert to Javascript.


- [ ] **Convert to Typescript**

To convert to a typescript extension, do the following:

Create a folder and navigate into it then run any of the following:

    - `postwright -c <location-of-saved-postman-collection> -f ts`
    - `postwright --convert <location-of-saved-postman-collection> --format ts`
    - `postwright convert <location-of-saved-postman-collection> -f ts`

- You can alternatively run any of the following from any location in your terminal.
    - `postwright -c <location-of-saved-postman-collection> -o <preferred-location-to-save-the-converted-script -f ts` 
    - `postwright --convert <location-of-saved-postman-collection> --output <preferred-location-to-save-the-converted-script --format ts`
    - `postwright convert <location-of-saved-postman-collection> --output <preferred-location-to-save-the-converted-script --format ts`

### What does it do presently?
---
- [ ] The current release converts your collections into playwright version.

- [ ] Creates a `variables.js` or a `variable.ts` and `variables.json` files depending on which format that's specified when converting. This lets you to decide how you want to parse in saved variables

- [ ] Offers basic post-response assertions which are status code and response time. It extracts the title of other tests so that you can write them manually.

> [!NOTE]
> This is a first release, the plugin shall be improved upon to better handle post-response tests and pre-request scripts.
> If any variable is hyphenated, the `variable.js` or `variable.ts` file will be created with the hyphenated variable name and that will cause an error. Change variable names to camel case or snake case to avoid this.