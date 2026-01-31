export interface LoanChecklist {
    underwriting: {
        completedFundingPacket: boolean;
        keyOnFile: boolean;
        qbSyncCompleted: boolean;
        gpsInstalled: boolean;
        verifiedResidence: boolean;
        verifiedReferences: boolean;
        verifiedIncome: boolean;
        insuranceListedAsLienholder: boolean;
    };
    operations: {
        modificationMade: boolean;
        repairsTruckInRepair: boolean;
        advancementGiven: boolean;
        profileUpdated: boolean;
        welcomePhoneCall: boolean;
        welcomePacket: boolean;
        titleReceived: boolean;
    };
    paidOff: {
        accountClosure: boolean;
        lienRelease: boolean;
        gpsUninstalled: boolean;
    };
    repossession: {
        salesTaxRefundApplied: boolean;
        vehicleSold: boolean;
        warrantyCancellation: boolean;
        gapCancellation: boolean;
        repossessionStatement: boolean;
    };
    specialAccountStatus: {
        accidentIndicator: boolean;
        paymentPlanAccepted: boolean;
        insuranceClaimPending: boolean;
    };
    audits: {
        titleELT: boolean;
        finalAudit: boolean;
    };
    custody: {
        keyInRomaPossession: boolean;
    };
}
