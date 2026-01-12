export const projectSlugs: Record<number, string> = {
  1: 'multi-agent-fortran-modernizer',
  2: 'advanced-rag-system',
  3: 'steam-reviews-nlp',
  4: 'horse-racing-prediction',
  5: 'fraud-detection-autoencoders',
  6: 'iot-smart-beehive',
};

export function getProjectSlug(id: number): string {
  return projectSlugs[id] || 'project';
}

export function getProjectIdFromSlug(slug: string): number | undefined {
  const entry = Object.entries(projectSlugs).find(([_, s]) => s === slug);
  return entry ? parseInt(entry[0]) : undefined;
}
