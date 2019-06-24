const bluegogo = require('..');

(async () => {

    const mobile = '+8618888888888';
    const code = await bluegogo.code(mobile);
    const user = await bluegogo.login(mobile, code);
    console.log(user);

    const service = bluegogo(user);
    const bikes = await service.near('22.5526', '114.1029');
    console.log(bikes);

})();