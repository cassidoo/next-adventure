export function generatePersonal(type) {
  switch (type) {
    case 'masc': {
      return 'He';
    }
    case 'fem': {
      return 'She';
    }
    case 'nb': {
      return 'They';
    }
    default: {
      return 'They';
    }
  }
}

export function generatePossessive(type) {
  switch (type) {
    case 'masc': {
      return 'his';
    }
    case 'fem': {
      return 'her';
    }
    case 'nb': {
      return 'their';
    }
    default: {
      return 'their';
    }
  }
}

export function generateReflexive(type) {
  switch (type) {
    case 'masc': {
      return 'himself';
    }
    case 'fem': {
      return 'herself';
    }
    case 'nb': {
      return 'themselves';
    }
    default: {
      return 'themselves';
    }
  }
}

export function generateThirdPerson(type) {
  switch (type) {
    case 'masc': {
      return 'him';
    }
    case 'fem': {
      return 'her';
    }
    case 'nb': {
      return 'them';
    }
    default: {
      return 'them';
    }
  }
}
