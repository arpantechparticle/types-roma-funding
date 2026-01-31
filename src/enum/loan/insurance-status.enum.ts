export enum InsuranceStatus {
  Active = "active", // Policy is valid and in force
  Expired = "expired", // Policy term ended, not renewed
  Cancelled = "cancelled", // Policy cancelled mid-term
  Pending = "pending", // Proof submitted, not yet verified
  Unknown = "unknown", // No proof on file / not confirmed
}
