export declare enum AprIncludes {
    None = "none",// No escrow / hold included
    AprEscrow = "apr_escrow",// APR includes escrow only
    AprHold = "apr_hold",// APR includes hold only
    AprEscrowAndHold = "apr_escrow_and_hold",// APR includes escrow + hold
    ScheduleEscrow = "schedule_escrow",// Payment schedule includes escrow
    ScheduleHold = "schedule_hold",// Payment schedule includes hold
    ScheduleEscrowAndHold = "schedule_escrow_and_hold"
}
