export enum EngineType {
  Gasoline = "gasoline",        // Petrol (most US cars)
  Diesel = "diesel",            // Trucks, some SUVs
  Hybrid = "hybrid",            // Gas + electric (non-plug-in)
  PlugInHybrid = "plug_in_hybrid", // PHEV
  Electric = "electric",        // BEV
  CNG = "cng",                  // Compressed Natural Gas
  LPG = "lpg",                  // Propane (less common)
  Hydrogen = "hydrogen",        // Fuel cell (rare but real)
  Other = "other",              // Edge cases
}
