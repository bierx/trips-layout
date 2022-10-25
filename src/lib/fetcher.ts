export const fetcher = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url).then((res) => res.json());
        return JSON.parse(response);
    } catch {
        throw new Error("fetch failed");
    }
};
