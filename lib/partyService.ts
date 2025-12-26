import { PartyFormData } from "@/types/party";

export async function saveParty(data: PartyFormData) {
  const params = new URLSearchParams();

  Object.entries(data).forEach(([key, value]) => {
    params.append(key, String(value));
  });

  const res = await fetch(
    `http://103.174.103.147/desktopAPI/API/Party/PartySaveUpdate?${params.toString()}`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to save party");
  }

  return res.json();
}
