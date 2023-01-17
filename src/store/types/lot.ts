export interface ILot {
    id: string,
    dealType: string,
    beginDate: Date,
    endDate: Date,
    isResourceAvailable: boolean,
    number: string,
    vatIncluded: boolean,
    participants: {
        count: number
    },
    item: {
        id: string,
        totalPrice: number,
        price: number,
        measurementUnit: string,
        category: string,
        group: string,
        mark: null | string,
        quantity: number,
        description: string
    },
    location: null | string,
    distance: number
}
