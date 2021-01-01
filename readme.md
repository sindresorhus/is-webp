# is-webp

> Check if a Buffer/Uint8Array is a [WebP](https://en.wikipedia.org/wiki/WebP) image


## Install

```
$ npm install is-webp
```


## Usage

##### Node.js

```js
const readChunk = require('read-chunk');
const isWebp = require('is-webp');
const buffer = readChunk.sync('unicorn.webp', 0, 12);

isWebp(buffer);
//=> true
```

##### Browser

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.webp');
xhr.responseType = 'arraybuffer';

xhr.onload = () => {
	isWebp(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isWebp(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 12 bytes.


## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array
- [is-webp-extended](https://github.com/mooyoul/is-webp-extended) - Extended version of this package which supports checking for animated WebP


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
