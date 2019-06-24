## bluegogo [![bluegogo](https://img.shields.io/npm/v/bluegogo.svg)](https://npmjs.org/bluegogo)

> bluegogo in JavaScript

### Installation

```bash
$ npm install bluegogo
```

### Example

```js
const bluegogo = require('bluegogo');

(async () => {

    const mobile = '+8618888888888';
    const code = await bluegogo.code(mobile);
    const user = await bluegogo.login(mobile, code);
    console.log(user);

    const service = bluegogo(user);
    const bikes = await service.near('22.5526', '114.1029');
    console.log(bikes);

})();
```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### ISC

This work is licensed under the [ISC license](./LICENSE).

---