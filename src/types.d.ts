export type Positions = PositionsLevels[]

export interface PositionsLevel {
  level: string
  average_salary: string
  key_knowledge_and_skills: KeyKnowledgeAndSkills
}

export interface KeyKnowledgeAndSkills {
  html_css?: string[]
  javascript?: string[]
  version_control?: string[]
  tooling?: string[]
  frameworks_libraries?: string[]
  debugging?: string[]
  basic_accessibility?: string[]
  advanced_html_css?: string[]
  testing?: string[]
  performance_optimization?: string[]
  api_integration?: string[]
  advanced_javascript?: string[]
  architecture?: string[]
  advanced_frameworks_libraries?: string[]
  devops?: string[]
  mentorship?: string[]
  project_management?: string[]
  team_leadership?: string[]
  system_design?: string[]
  advanced_devops?: string[]
  security?: string[]
  stakeholder_communication?: string[]
  vision_and_strategy?: string[]
  cross_functional_collaboration?: string[]
  advanced_system_design?: string[]
  thought_leadership?: string[]
  research_and_development?: string[]
  governance?: string[]
}
