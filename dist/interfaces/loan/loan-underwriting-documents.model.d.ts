export interface LoanAdditionalDocument {
    id: string;
    label: string;
    file: string | null;
}
export interface LoanUnderwritingDocuments {
    governmentId: string | null;
    bankStatement: string | null;
    specificationSheet: string | null;
    socialSecurityCard: string | null;
    /** Optional files added by an admin. They do not affect underwritingDocsComplete. */
    additionalDocuments?: LoanAdditionalDocument[];
}
