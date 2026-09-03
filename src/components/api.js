const API_URL = import.meta.env.VITE_API_URL;

export async function getProfile() {
  const response = await fetch(`${API_URL}/api/home/profile/`);

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return response.json();
}




export async function getProjects() {
  const response = await fetch(`${API_URL}/api/projects/`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}




export async function getSkills() {
  const response = await fetch(`${API_URL}/api/skills/`);

  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }

  return response.json();
}




export async function getExperiences() {
  const response = await fetch(`${API_URL}/api/experience/`);

  if (!response.ok) {
    throw new Error("Failed to fetch experiences");
  }

  return response.json();
}





export async function sendContactMessage(data) {
  const response = await fetch(`${API_URL}/api/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send contact message");
  }

  return response.json();
}




export async function getSocialLinks() {
  const response = await fetch(`${API_URL}/api/social/`);

  if (!response.ok) {
    throw new Error("Failed to fetch social links");
  }

  return response.json();
}