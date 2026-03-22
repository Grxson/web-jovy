export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactApiResponse = {
  ok: boolean;
  message: string;
};
