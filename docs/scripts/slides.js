import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

function introSlides() {
  return ['intro/00-TITLE.md'];
}

function unitTests() {
  return ['unit-tests/00-TITLE.md'];
}

function formation() {
  return [...introSlides(), ...unitTests()].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
