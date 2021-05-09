export const handleWhatsApp = ({
  hp,
  msg,
  scenario,
}: {
  hp: string;
  msg: string;
  scenario?: string;
}) => {
  // https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat/?lang=en
  const url = `https://wa.me/65${hp}?text=${msg}`;
  window.open(url, '_blank'); //to open new page
};

export const getWhatsAppMessageTemplate = () => {
  const text = `Hello, I am interested in your service!\n\n[Who are you?]\n\n[What are you looking to dispose of?]\n\n[When do you need to the items to be disposed?]\n\nPlease attach images in the subsequent messages`;
  return encodeURI(text);
};

export const getMailTemplate = () => {
  const br = '%0D%0A';
  const email = 'helloclassics0105@gmail.com';
  const subject = 'Requesting for quotations';
  const body = `Hello, I am interested in your service!${br}${br}[Who are you?]${br}${br}[What are you looking to dispose of?]${br}${br}[When do you need to the items to be disposed?]${br}${br}Please attach images in the email`;
  return `mailto:${email}?subject=${subject}&body=${body}`;
};
