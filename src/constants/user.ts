export enum USER_ROLE {
  OWNER = 'owner',
  ADMIN = 'admin',
  USER = 'user',
}

export const USER_ROLE_TO_LABEL: Record<USER_ROLE, string> = {
  [USER_ROLE.OWNER]: 'Proprietário',
  [USER_ROLE.ADMIN]: 'Administrador',
  [USER_ROLE.USER]: 'Usuário',
};
