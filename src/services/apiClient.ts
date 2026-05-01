const randomDelay = (): number => {
    const min = 300
    const max = 800

    return Math.floor(Math.random() * (max - min + 1)) + min
}

const FAILURE_RATE = 0.15
const randomFailureRate = (): boolean =>  Math.random() < FAILURE_RATE

const deepClone = <T>(data: T): T => {
    if (typeof structuredClone === "function") {
        return structuredClone(data)
    }

    return JSON.parse(JSON.stringify(data))
}

export function simulateRequest<T>(data: T): Promise<T> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomFailureRate()) {
                reject(new Error("Network error"))
            } else {
                resolve(deepClone(data))
            }
        }, randomDelay())
    })
}