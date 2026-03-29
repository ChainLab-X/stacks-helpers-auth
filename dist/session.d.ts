export interface Session {
    address: string;
    network: string;
    connectedAt: number;
}
export declare function saveSession(session: Session): void;
export declare function getSession(): Session | null;
export declare function clearSession(): void;
export declare function isConnected(): boolean;
