import { handlerContext } from "generated";

const endpoint = "https://backend-dev.werk.pro/space/get-addresses";
const enableCaching = false;
let cachedAddresses: Array<string> = [];

async function fetchFromEndpoint(context: handlerContext): Promise<Array<string> | null> {
  try {
    const response = await fetch(`${endpoint}`);
    if (response.ok) {
      const addresses: any = await response.json();
      return addresses;
    } else {
      throw new Error("Unable to fetch from endpoint");
    }
  } catch (e) {
    context.log.warn(`Unable to fetch from ${endpoint}`);
  }
  return null;
}

export async function tryFetchFromEndpoint(context: handlerContext): Promise<Array<string>> {
  if (enableCaching && cachedAddresses.length > 0) {
    return cachedAddresses;
  }

  const addresses = await fetchFromEndpoint(context);
  if (addresses && addresses.length > 1) {
    cachedAddresses = addresses;
    return addresses;
  }

  return [];
}
