import { handlerContext } from "generated";

const endpoint = "https://backend-dev.werk.pro/space/get-addresses";
let spaceAddresses: Array<string> = [];

// Adds a new Space address to the cached list of addresses
export async function addSpaceAddress(address: string) {
  spaceAddresses.push(address);
}

// Retrieves the cached list of Space addresses
export async function getSpaceAddresses(context: handlerContext): Promise<Array<string>> {
  // If the cached list of addresses is empty, fetch the addresses from the endpoint
  if (spaceAddresses.length === 0) {
    const addresses = await _fetchFromEndpoint(context);
    if (addresses && addresses.length > 0) {
      spaceAddresses = addresses;
    }
  }

  // Return the cached list of addresses
  return spaceAddresses;
}

// Fetches the list of Space addresses from the endpoint
async function _fetchFromEndpoint(context: handlerContext): Promise<Array<string> | null> {
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
