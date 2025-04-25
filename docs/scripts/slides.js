import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

function introSlides() {
  return ['intro/00-TITLE.md'];
}

function unitTests() {
  return [
    'unit-tests/00-TITLE.md',
    'unit-tests/01-definitions.md',
    'unit-tests/02-autres-tests.md',
    'unit-tests/03-cycle-vie-logiciel.md',
    'unit-tests/04-frameworks.md',
    'unit-tests/05-mise-en-place.md',
    'unit-tests/06-organisations.md',
    'unit-tests/07-test-params.md',
    'unit-tests/08-test-types.md',
    'unit-tests/09-test-advanced.md',
    'unit-tests/10-cas-particuliers.md',
    'unit-tests/11-philosophie.md',
    'unit-tests/12-continuous-testing.md',
    'unit-tests/13-other-tests.md',
  ];
}

function logs() {
  return ['logs/00-logs.md'];
}
function formation() {
  return [...introSlides(), ...unitTests(), ...logs()].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
