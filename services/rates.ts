export async function convertCurrency(
  base: string,
  target: string,
  amount: number
): Promise<string> {
  if (isNaN(amount)) return '0.00';

  const urls = [
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.min.json`,
    `https://latest.currency-api.pages.dev/v1/currencies/${base}.min.json`,
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`,
    `https://latest.currency-api.pages.dev/v1/currencies/${base}.json`,
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      const rate = data?.[base]?.[target];

      if (rate) {
        return (rate * amount).toFixed(2);
      }
    } catch (err) {
      console.warn(`Failed to fetch from ${url}:`, err);
    }
  }

  return '0.00';
}