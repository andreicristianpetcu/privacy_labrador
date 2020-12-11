# Privacy Labrador

You can now use Mojeek, Qwant or DuckDuckGo as your default search engine and when it misses the results, a handy Google link is presented in the page. Check the FEATURES section bellow.

FEATURES:
- shows the tab that points to Google results in the Mojeek, Qwant or DuckDuckGo results page;
- it jump to the Google results with Shift+Alt+G if you are on one of these search engine's results page;
- If you type "g some search term" in the awesome bar it will go directly to Google's "some search term" results page.
- it can temporarily reset your current search engine and always redirect to google when you tap Shift+Alt+A. This is useful when you pair program with people that don't like your alternative search engine of choice.
- Configure the two extension shortcuts from about:addons > settings icon > Manage extension shortcuts

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