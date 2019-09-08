# Privacy Labrador

You can now use DuckDuckGo as your default search engine and when DDG misses the results, a handy google link is presented in the page.

FEATURES:
- shows the tab that points to Google results in the Duck Duck Go results page;
- it jump to the Google results with Shift+Alt+G if you are on Duck Duck Go results page;
- If you type "g some search term" in the awesome bar it will go directly to Google's "some search term" results page.
- it can temporarily reset your current search engine and always redirect to google when you tap Shift+Alt+A. This is useful when you pair program with people that don't like DDG or QWant.

I'm currently working on rudimentary qwant.com support. It's still buggy in Qwant.

## Install

	$ npm install

## Development

    npm run dev chrome
    npm run dev firefox
    npm run dev opera
    npm run dev edge

## Build

    npm run build chrome
    npm run build firefox
    npm run build opera
    npm run build edge

## Environment

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts. 

## Docs

* [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)

The license is under CC-BY [Labrador by Shirley Hernández Ticona, DO](https://thenounproject.com/search/?q=labrador&i=516389)