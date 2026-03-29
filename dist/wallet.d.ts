import type { WalletAccount } from "@richiey1/types";
export declare function deriveAccounts(mnemonic: string, startIndex?: number, endIndex?: number): Promise<WalletAccount[]>;
export declare function deriveAccount(mnemonic: string, index?: number): Promise<WalletAccount>;
