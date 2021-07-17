require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note shift pudding hope knock forward turkey'; 
let testAccounts = [
"0xb09a9f2270468a55760b03193697d1442e882c08ac58f93bae88b1962503667c",
"0x502257fdf5211fa547ca1780a7ab35fae8f49aeb95cdd52ee85628a69a5ca473",
"0x7facac70ad7e01294e3c8292a78b5a6d3141a5fa61c99f05a5df5833034e99cc",
"0x9b5b9c0aba4faf15f9c0af6a304af1f34e7fd08708439e9bd925278693a9bfc0",
"0x2d06f29397a66af4af4a9c04d6f49cb4a7e6572de35d3001c2ccd6ee46fb2333",
"0x221c78305e517ed67e9b18b25de4f5eaaa5a16821035ed35d01f449cbf954309",
"0xc5eedc95e53270905a453c511620619f70b7a25edf4d1e2c3be7fadc2e578507",
"0xb8b447416e270f95f733739e3c2c818f450fddff5de9a493b85c2608c2548739",
"0xb1547304c7a5b63e4bff4b850ae816aac07a49b7228a93f9d2c0602a50ed9dfd",
"0x2d822721df45683a0fcb83676f2372d7fb2570671ee0bf51a9694edb20fce818"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

