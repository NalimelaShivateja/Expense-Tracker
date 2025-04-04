export enum PaymentMethod {
    CREDIT_CARD = 1,
    INTERNET_BANKING,
    CASH,
    SALARY,
    MONEY_LENDING,
    GOOGLE_PAY,
    PHONEPE,
    PAYTM,
    OTHERS
}

export const PaymentMethodDisplayNames: Record<PaymentMethod, string> = {
    [PaymentMethod.CREDIT_CARD]: "Credit Card",
    [PaymentMethod.INTERNET_BANKING]: "Internet Banking",
    [PaymentMethod.CASH]: "Cash",
    [PaymentMethod.SALARY]: "Salary",
    [PaymentMethod.MONEY_LENDING]: "Money Lending",
    [PaymentMethod.GOOGLE_PAY]: "Google Pay",
    [PaymentMethod.PHONEPE]: "PhonePe",
    [PaymentMethod.PAYTM]: "Paytm",
    [PaymentMethod.OTHERS]: "Others"
};
