const dns = require('dns');
const dnspromises = dns.promises;

// Callback-Based DNS Lookup
dns.lookup('facebook.com', (err, address, family) => {
  if (err) {
    console.error('Lookup error:', err);
    return;
  }
  console.log("Resolved Callback:");
  console.log(`IP address: ${address}`);
  console.log(`IP version: IPv${family}`);
});

// Promise-Based DNS Lookup
async function lookupDomain(domain) {
  try {
    const address = await dnspromises.lookup(domain);
    console.log(`Resolved Promise: ${address.address} (IPv${address.family})`);
  } catch (err) {
    console.error('Lookup failed:', err);
  }
}
lookupDomain('instagram.com');


// Resolve DNS IPv4 Addresses  
dns.resolve4('www.codeforces.com', (err, addresses) => {
  if (err) throw err;

  console.log('IPv4 addresses:');
  addresses.forEach(address => {
    console.log(` ${address}`);
  });
});
