import { apiUri } from './apiUri';

export const chainId = process.env.REACT_APP_LEDGER_CHAIN_ID;
export const isBridgeEnabled = process.env.REACT_APP_BRIDGE === 'true';

const uriBase = `${apiUri}/`;

// Simple proxy endpoint for REST requests.
export const ledgerRESTUri = `${uriBase}ledger-rest`;

export const ledgerRPCUri = `${uriBase}ledger`;
export const onChainClassRegExp = /[A-Z]{1,3}[0-9]{2,}/;
