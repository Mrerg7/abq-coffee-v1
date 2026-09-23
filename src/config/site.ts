export const SITE = {
  url: 'https://abq.coffee',
  name: 'ABQ.Coffee',
  domain: 'ABQ.Coffee',
  seller: 'Desert Rich',
  email: 'sales@desertrich.com',
  price: '100000',
  priceDisplay: '$100,000',
  priceCurrency: 'USD',
  priceValidUntil: '2027-12-31',
  googleSiteVerification: 'h8Hy8oJWdGVkDzwxG6XMaJqp77Hj9xlEz791AWoR5bQ',
  ogImage:
    'https://customer-wa9cpywo3l4jte5c.cloudflarestream.com/9eb81fa273d4c381dee9ad1b27f30526/thumbnails/thumbnail.jpg?time=&height=600',
  ogImageAlt: 'ABQ.Coffee — premium Albuquerque coffee domain for sale',
  escrow: 'https://www.escrow.com',
  streamId: '9eb81fa273d4c381dee9ad1b27f30526',
  streamHost: 'customer-wa9cpywo3l4jte5c.cloudflarestream.com',
} as const;

export const ACQUISITION_MAILTO = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const qs = params.toString();
  return `mailto:${SITE.email}${qs ? `?${qs}` : ''}`;
};
