export async function fetcher<TResponse>(
    url: string,
    config: RequestInit = {},
): Promise<TResponse> {
    try {
        const response = await fetch(url, config);
        return await response.json();
    } catch {
        throw new Error("fetch failed");
    }
}
