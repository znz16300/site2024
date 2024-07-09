export function fullNameToInic(fullName: string): string {
  const [lastName, firstName, middleName] = fullName.split(' ');
  if (!lastName || !firstName || !middleName) {
    throw new Error('Invalid full name format');
  }
  return `${lastName} ${firstName[0]}.${middleName[0]}.`;
}

interface FullNameParts {
  gender: 'male' | 'female';
  firstName: string;
  middleName: string;
  lastName: string;
}

export function fullNameToParts(fullName: string): FullNameParts {
  const [lastName, firstName, middleName] = fullName.split(' ');
  if (!lastName || !firstName || !middleName) {
    throw new Error('Invalid full name format');
  }

  const gender = middleName.endsWith('ч') ? 'male' : 'female';

  return {
    gender,
    firstName,
    middleName,
    lastName
  };
}
