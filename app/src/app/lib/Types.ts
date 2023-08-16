export type TrackingFormType = {
    pickupAddress: string;
    destinationAddress: string;
    weight: string;
    weightUnit: string;
}

export type BookingCardType = {
    originShipment  : string,
    destinationShipment : string,
    weight : string,
    weightUnit : string,
}

export type TrackingDetailsType = {
    id ?: string|null,
    originShipment : string,
    destinationShipment : string,
    price ?: string|null,
    remarks ?: string|null,
    status ?: string|null,
    trackingId ?: string|null,
    createdAt ?: string|null,
    weight : string,
    weightUnit: string,
    contactNo?: string|null,
    specialInstructions?: string|null
}