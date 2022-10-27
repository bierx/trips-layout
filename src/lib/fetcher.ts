export async function fetcher<TResponse>(
    url: string,
    config: RequestInit = {},
): Promise<TResponse> {
    try {
        const response = await fetch(url, config).then((res) => res.json());
        return JSON.parse(response) as TResponse;
    } catch {
        throw new Error("fetch failed");
    }
}
