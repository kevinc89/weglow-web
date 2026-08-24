const WEBMAIL_INBOX_URLS: Record<string, string> = {
  "gmail.com": "https://mail.google.com/mail/u/0/#inbox",
  "googlemail.com": "https://mail.google.com/mail/u/0/#inbox",
  "outlook.com": "https://outlook.live.com/mail/0/inbox",
  "hotmail.com": "https://outlook.live.com/mail/0/inbox",
  "live.com": "https://outlook.live.com/mail/0/inbox",
  "msn.com": "https://outlook.live.com/mail/0/inbox",
  "yahoo.com": "https://mail.yahoo.com",
  "ymail.com": "https://mail.yahoo.com",
  "icloud.com": "https://www.icloud.com/mail",
  "me.com": "https://www.icloud.com/mail",
  "mac.com": "https://www.icloud.com/mail",
};

export function getInboxUrl(email: string | null | undefined): string {
  const domain = email?.split("@")[1]?.toLowerCase();
  if (domain && domain in WEBMAIL_INBOX_URLS) {
    return WEBMAIL_INBOX_URLS[domain];
  }
  return `mailto:${email ?? ""}`;
}
