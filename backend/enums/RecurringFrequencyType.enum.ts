export enum RecurringFrequency {
    DAILY,
    WEEKLY,
    MONTHLY,
    QUARTERLY,
    YEARLY
}

export const RecurringFrequencyDisplayNames: Record<RecurringFrequency, string> = {
    [RecurringFrequency.DAILY]: "Daily",
    [RecurringFrequency.WEEKLY]: "Weekly",
    [RecurringFrequency.MONTHLY]: "Monthly",
    [RecurringFrequency.QUARTERLY]: "Quarterly",
    [RecurringFrequency.YEARLY]: "Yearly"
}
