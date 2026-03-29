import type { NonceInfo } from "@stacks-helpers/types";
export declare function getNonce(address: string, networkUrl?: string): Promise<NonceInfo>;
export declare function getBalance(address: string, networkUrl?: string): Promise<{
    total: bigint;
    available: bigint;
}>;
