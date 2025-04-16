import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

function introSlides() {
  return ['intro/00-TITLE.md'];
}

function unitTests() {
  return ['unit-tests/00-TITLE.md',
    'unit-tests/01-definitions.md',
    'unit-tests/02-autres-tests.md',
    'unit-tests/03-cycle-vie-logiciel.md',
    'unit-tests/04-frameworks.md',
    'unit-tests/05-mise-en-place.md',
    'unit-tests/06-organisations.md',
  ];

}

function formation() {
  return [...introSlides(), ...unitTests()].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
