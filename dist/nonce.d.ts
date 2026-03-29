import type { NonceInfo } from "@richiey1/types";
export declare function getNonce(address: string, networkUrl?: string): Promise<NonceInfo>;
export declare function getBalance(address: string, networkUrl?: string): Promise<{
    total: bigint;
    available: bigint;
}>;
