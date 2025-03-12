import { handlerContext } from "generated";

const endpoint = `${process.env.WERK_API_ENDPOINT}/space/get-addresses`;

async function fetchFromEndpoint(context: handlerContext): Promise<Array<string> | null> {
  try {
    const response = await fetch(`${endpoint}`);
    if (response.ok) {
      const addresses: any = await response.json();
      context.log.info(addresses[0]);
      context.log.info(addresses.length);
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
  const addresses = await fetchFromEndpoint(context);
  if (addresses && addresses.length > 1) {
    return addresses;
  }
  return [];
}
