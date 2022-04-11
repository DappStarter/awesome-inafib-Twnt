require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note pizza slow grid enrich metal gasp'; 
let testAccounts = [
"0xfb7d06fdab40f4e69025a0a093bc618dfb15dd77940df524f4ac24d5535d4a17",
"0xcd3a4993b1066644818b97f1554ce328f18e95cae5772091b164c955bf5ce970",
"0x18c410fa414c56609f39d1c89767c2ad8a62d1779bf36726686a70fb36688e57",
"0x73d244b674f1debda2194580dd13fd017231c89e682206f6ce996f3064ec50b9",
"0xe19320feb30e66752437b3fd3ceaf0e234be141f5959e75d6f17d3dfdbb8006b",
"0x5ed3cafafa182908c7dd1ef52adb4f09f7cf3b9fe4015b2516430320893c8836",
"0x729951515f81d8639f53e74ef4827b158c093675f934a51079de4efcbee1ea73",
"0xf9d48b9a02f9d2f7d54f17420c7901e1243f997a3f2f94c990eae33612d3e361",
"0xf696bec040c3e7564ded314b5dcb55cc8f3e32c4b2e5537ecdd221a776bcfcd9",
"0x51d4ad27807a84b9f9e1bcc4a6804b7aa8ddae4bd5289a62a2d7fcf86410a2b5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

