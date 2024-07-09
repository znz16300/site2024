// https://slovnyk.ua/pravopys.php?prav_par=143

const FamSuffixes = [
  { in: 'бець', outM: 'бця', outF: 'бець' },
  { in: 'мідь', outM: 'медя', outF: 'мідь' },
  { in: 'нець', outM: 'нця', outF: 'нець' },
  { in: 'ала', outM: 'алого', outF: 'алої' },
  { in: 'єць', outM: 'йця', outF: 'єць' },
  { in: 'ина', outM: 'ини', outF: 'иної' },
  { in: 'іль', outM: 'іля', outF: 'іль' },
  { in: 'іна', outM: 'іни', outF: 'іни' },
  { in: 'інь', outM: 'оня', outF: 'інь' },
  { in: 'кий', outM: 'кого', outF: 'кої' },
  { in: 'лей', outM: 'лея', outF: 'лей' },
  { in: 'ліс', outM: 'ліса', outF: 'ліс' },
  { in: 'ова', outM: 'ового', outF: 'ової' },
  { in: 'оса', outM: 'осого', outF: 'осої' },
  { in: 'ька', outM: 'ька', outF: 'ької' },
  { in: 'ай', outM: 'ая', outF: 'ай' },
  { in: 'ий', outM: 'ого', outF: 'ий' },
  { in: 'ин', outM: 'ина', outF: 'ин' },
  { in: 'ич', outM: 'ича', outF: 'ич' },
  { in: 'ій', outM: 'ія', outF: 'ій' },
  { in: 'іл', outM: 'ола', outF: 'іл' },
  { in: 'іп', outM: 'іпа', outF: 'іп' },
  { in: 'іс', outM: 'оса', outF: 'іс' },
  { in: 'іш', outM: 'іша', outF: 'іш' },
  { in: 'ле', outM: 'ле', outF: 'ле' },
  { in: 'на', outM: 'ни', outF: 'ної' },
  { in: 'ні', outM: 'ні', outF: 'ні' },
  { in: 'а', outM: 'и', outF: 'и' },
  { in: 'б', outM: 'ба', outF: 'б' },
  { in: 'в', outM: 'ва', outF: 'в' },
  { in: 'г', outM: 'га', outF: 'г' },
  { in: 'д', outM: 'да', outF: 'д' },
  { in: 'е', outM: 'е', outF: 'е' },
  { in: 'є', outM: 'є', outF: 'є' },
  { in: 'ж', outM: 'жа', outF: 'ж' },
  { in: 'з', outM: 'за', outF: 'з' },
  { in: 'и', outM: 'и', outF: 'и' },
  { in: 'й', outM: 'я', outF: 'й' },
  { in: 'к', outM: 'ка', outF: 'к' },
  { in: 'л', outM: 'ла', outF: 'л' },
  { in: 'м', outM: 'ма', outF: 'м' },
  { in: 'н', outM: 'на', outF: 'н' },
  { in: 'о', outM: 'а', outF: 'о' },
  { in: 'п', outM: 'па', outF: 'п' },
  { in: 'р', outM: 'ра', outF: 'р' },
  { in: 'с', outM: 'са', outF: 'с' },
  { in: 'т', outM: 'та', outF: 'т' },
  { in: 'у', outM: 'у', outF: 'у' },
  { in: 'ф', outM: 'фа', outF: 'ф' },
  { in: 'х', outM: 'ха', outF: 'х' },
  { in: 'ц', outM: 'ца', outF: 'ц' },
  { in: 'ч', outM: 'ча', outF: 'ч' },
  { in: 'ш', outM: 'ша', outF: 'ш' },
  { in: 'щ', outM: 'ща', outF: 'щ' },
  { in: 'ь', outM: 'я', outF: 'ь' },
  { in: 'ю', outM: 'ю', outF: 'ю' },
  { in: 'я', outM: 'і', outF: 'і' },
  { in: '', outM: '', outF: '' }
];

const NameSuffixes = [
  { in: 'гор', outM: 'горя', outF: 'гор' }, // Ігор
  { in: 'гір', outM: 'гора', outF: 'гір' }, // Григір
  { in: 'ан', outM: 'ана', outF: 'ани' }, // Степан
  { in: 'ій', outM: 'ія', outF: 'ій' }, // Юрій
  { in: 'др', outM: 'дра', outF: 'др' }, // Олександр
  { in: 'ія', outM: 'ії', outF: 'ії' }, // Наталія
  { in: 'ль', outM: 'ля', outF: 'ль' }, // Василь
  { in: 'ор', outM: 'ора', outF: 'ор' }, // Сидор
  { in: 'ов', outM: 'ова', outF: 'ові' }, // Любов
  { in: 'нь', outM: 'ня', outF: 'нь' },
  { in: 'іш', outM: 'оша', outF: 'іш' }, // Тиміш
  { in: 'ін', outM: 'іна', outF: 'ін' }, // АНтін
  { in: 'ля', outM: 'лі', outF: 'ля' }, // Ілля
  { in: 'ль', outM: 'ля', outF: 'лі' }, // Ілля
  { in: 'ь', outM: 'я', outF: 'і' }, //
  { in: 'а', outM: 'и', outF: 'и' }, // Микола
  { in: 'я', outM: 'ї', outF: 'ї' }, // Наталя
  { in: 'о', outM: 'а', outF: 'о' }, // Кирило
  // { in: '', outM: '', outF: ''},
  { in: '', outM: 'а', outF: '' }
];

export function getFamilyName(name: string, gender: string) {
  for (let i = 0; i < FamSuffixes.length; i += 1) {
    if (name.endsWith(FamSuffixes[i].in)) {
      const result =
        gender === 'm'
          ? `${name.slice(0, name.length - FamSuffixes[i].in.length)}${FamSuffixes[i].outM}`
          : `${name.slice(0, name.length - FamSuffixes[i].in.length)}${FamSuffixes[i].outF}`;
      return result;
    }
  }
  return undefined;
}

export function getName(name: string, gender: string) {
  for (let i = 0; i < NameSuffixes.length; i += 1) {
    if (name.endsWith(NameSuffixes[i].in)) {
      const result =
        gender === 'm'
          ? `${name.slice(0, name.length - NameSuffixes[i].in.length)}${NameSuffixes[i].outM}`
          : `${name.slice(0, name.length - NameSuffixes[i].in.length)}${NameSuffixes[i].outF}`;
      return result;
    }
  }
  return undefined;
}

export function getPatronymicName(name: string, gender: string) {
  const result =
    gender === 'm' ? `${name.slice(0, name.length - 0)}а` : `${name.slice(0, name.length - 1)}и`;
  return result;
}

export function getGender(patronymicName: string) {
  if (patronymicName.charAt(patronymicName.length - 1) === 'ч') {
    return 'm';
  }
  return 'f';
}

export function getGenitiveAll(allName: string) {
  const nameArray = allName.split(' ');
  const patronymicName = nameArray[2];
  const familyName = nameArray[0];
  const name = nameArray[1];
  const gender = getGender(patronymicName);
  const genetiveFamilyName = getFamilyName(familyName, gender);
  const genetiveName = getName(name, gender);
  const genetivePatronymicName = getPatronymicName(patronymicName, gender);

  return `${genetiveFamilyName} ${genetiveName} ${genetivePatronymicName}`;
}
