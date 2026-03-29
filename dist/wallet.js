"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveAccounts = deriveAccounts;
exports.deriveAccount = deriveAccount;
const wallet_sdk_1 = require("@stacks/wallet-sdk");
async function deriveAccounts(mnemonic, startIndex = 0, endIndex = 10) {
    let wallet = await (0, wallet_sdk_1.generateWallet)({ secretKey: mnemonic, password: "" });
    const accounts = [];
    for (let i = 0; i <= endIndex; i++) {
        if (i > 0)
            wallet = await (0, wallet_sdk_1.generateNewAccount)(wallet);
        if (i >= startIndex) {
            const account = wallet.accounts[i];
            const address = (0, wallet_sdk_1.getStxAddress)({ account, network: "mainnet" });
            accounts.push({
                address,
                privateKey: account.stxPrivateKey,
                index: i,
            });
        }
    }
    return accounts;
}
async function deriveAccount(mnemonic, index = 0) {
    const accounts = await deriveAccounts(mnemonic, index, index);
    return accounts[0];
}
