
const bluegogo = user => {
    return {
        near(){
            return [

            ];
        }
    };
};

bluegogo.code = mobile => {
    return 8888;
};

bluegogo.login = (mobile, code) => {
    return {
        token: ''
    };
};

module.exports = bluegogo;