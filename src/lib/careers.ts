export const careerPositions = [
  { id: "qa", title: "เจ้าหน้าที่ QA", subtitle: "ประกันคุณภาพ", openings: 1 },
  { id: "maintenance", title: "ช่างซ่อมบำรุง", subtitle: "งานซ่อมบำรุง", openings: 1 },
  { id: "administration", title: "เจ้าหน้าที่ธุรการ", subtitle: "งานธุรการ", openings: 1 },
] as const;

export const MAX_RESUME_BYTES = 5 * 1024 * 1024;
export const MAX_APPLICATION_BYTES = 6 * 1024 * 1024;
