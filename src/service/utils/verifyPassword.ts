export async function verifyPassword(
  inputPassword: string,
  savedSalt: string,
  savedHash: string
): Promise<boolean> {
  const encoder = new TextEncoder();
  const data = encoder.encode(inputPassword + savedSalt);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const inputHash = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return inputHash === savedHash;
}
