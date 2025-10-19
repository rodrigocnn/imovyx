export interface Session {
  summary?: string;
  behavioralObservations?: string;
  interventions?: string;
  patientReactions?: string;
  referrals?: string;
  therapeuticPlans?: string;
  diagnosticHypotheses?: string;
  techniqueUsed?: string;
  patientId?: string;
}

export interface FormSession {
  summary?: string;
  patientId?: string;
  behavioralObservations?: string;
  interventions?: string;
  patientReactions?: string;
  referrals?: string;
  therapeuticPlans?: string;
  diagnosticHypotheses?: string;
  techniqueUsed?: string;
  status?: string;
  sessionDate?: string;
}
