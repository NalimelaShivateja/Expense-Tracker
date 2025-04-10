export interface ExpenseFilter {
    amount?: Number;
    startDate?: Date;
    endDate?: Date;
    type?: Number;
    paymentMethod?: Number;
    category?: Number;
    subCategory?: Number;
    comments?: String;
}
