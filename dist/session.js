"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSession = saveSession;
exports.getSession = getSession;
exports.clearSession = clearSession;
exports.isConnected = isConnected;
const STORAGE_KEY = "stacks-helpers-session";
function saveSession(session) {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    }
}
function getSession() {
    if (typeof localStorage !== "undefined") {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data)
            return JSON.parse(data);
    }
    return null;
}
function clearSession() {
    if (typeof localStorage !== "undefined") {
        localStorage.removeItem(STORAGE_KEY);
    }
}
function isConnected() {
    return getSession() !== null;
}
