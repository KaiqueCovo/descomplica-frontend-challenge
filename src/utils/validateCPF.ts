/* eslint-disable */
export const validateCPF = (cpf: string): boolean => {
  if (!cpf) return false;

  const strCPF = cpf.replace(/[\s.-]*/gim, '');

  if (strCPF.length !== 11) return false;

  let sum = 0;
  let remainder = 0;

  // Check numbers sequence EX: 000..., 111..
  if (/^([0-9])\1{10}$/.test(strCPF)) return false;

  for (let i = 1; i <= 9; i++) sum += parseInt(strCPF.substring(i - 1, i)) * (11 - i);

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(strCPF.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(strCPF.substring(i - 1, i)) * (12 - i);

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  return !(remainder !== parseInt(strCPF.substring(10, 11)));
};
