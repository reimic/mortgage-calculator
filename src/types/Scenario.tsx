
interface Name {
    name: string,
}

interface Id {
    id: string,
}

interface Display {
    active: boolean,
    activeOrder: number,
    list: boolean,
    listOrder: number,
}

interface Scenario {
    name: Name,
    id: Id,
    display: Display,
    items?: number[],
}

export type { Name, Id, Display, Scenario }