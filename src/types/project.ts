// ============================================================
// Project Types — Tip güvenli operasyonel proje verisi
// ============================================================

export type ProjectStatus = 'live' | 'development' | 'deprecated'

export interface ProjectFeature {
  icon: string
  label: string
  description?: string
}

export interface ProjectWorkflowStep {
  step: string
  title: string
  desc: string
}

export interface Project {
  slug: string
  name: string
  subname?: string
  stepNumber: string
  stepLabel: string
  orderJourneyState: string
  tagline: string
  targetAudience: string
  problemSolved: string
  descriptionShort: string
  descriptionLong: string
  features: ProjectFeature[]
  workflowSteps: ProjectWorkflowStep[]
  heroSlotNo: number
  detailSlotNos: number[]
  status: ProjectStatus
  accentColor: string
  coverImagePath: string
  sortOrder: number
  isStar?: boolean
}

export interface PortalTenant {
  id: string
  name: string
  slug: string
  email: string | null
}
