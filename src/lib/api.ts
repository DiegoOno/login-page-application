import { addDays, format } from "date-fns";

export const login = async (email: string, password: string) => {
  if (email === 'error' || password === 'error') {
    throw new Error('Credenciais inválidas');
  }

  await new Promise(resolve => setTimeout(resolve, 2000));

  const expiresIn = format(addDays(new Date(), 1).getTime(), 'yyyy-MM-dd:HH:mm:ss');

  return {
    loggedUser: email,
    expireIn: expiresIn,
  }
}
