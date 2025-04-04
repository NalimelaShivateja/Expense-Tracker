export enum PaymentType{
    DEBIT,
    CREDIT
}

export const PaymentTypeDisplayNames: Record<PaymentType, string> = {
    [PaymentType.DEBIT]: "Debit",
    [PaymentType.CREDIT]: "Credit"
}
