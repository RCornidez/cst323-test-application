const BASE_URL = '/api'

async function request<T>(
    method: string,
    path: string, 
    body?: unknown
): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: body ? { 'Content-Type': 'application/json' } : undefined,
        body: body ? JSON.stringify(body) : undefined
    })

    if (!response.ok) throw new Error(`${method} ${path} ${response.status}`)

    return response.status === 204 ? (undefined as T) : response.json()
}

export const api = {
    get: <T>(path: string) => request<T>('GET', path),
    post: <T>(path: string, body: unknown) => request<T>('POST', path, body),
    put: <T>(path: string, body: unknown) => request<T>('PUT', path, body),
    delete: (path: string) => request<void>('DELETE', path)
}