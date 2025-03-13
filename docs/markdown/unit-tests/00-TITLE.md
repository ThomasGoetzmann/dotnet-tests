# Unit-Tests

1. Définition des tests unitaires

- FIRST (Fast, Isolated, Repeatable, Self-validating, Timely)
- Différence avec tests d'intégration et test fonctionnels

2. Développement logiciel

- Cycle de vie logiciel
- Pyramide de tests
- Coûts des bugs selon le stade de détection

3. Dotnet

- Choisir son framework (MSTest, NUnit, xUnit)
- Outils d'analyse de converture de code (dotnet-coverage)

4. Mise en place

- NuGet packages nécessaires
  TODO (différence entre Test Plateform)e
- Structure d'un projet de test et mots clés de base
- Premier unit test
- Lancer les tests (cli, visual studio, new dotnet test plateform run)

5. Organisation

- Convention de nommage
- Traits & Category
- Par classe

6. Tests paramétrés

- Theory et InlineData
- MemberData et ClassData

7. Tests avancés

- Type de Unit-tests: Return / State / Interaction
- Importance des interfaces, du couplage faible et de l'injection de dépendances
- Fakes (Stubs et Mocks)
- Framework de Moq (NSubstitute, FakeItEasy, Moq)

8. Architecture

- Mettre une interface devant les dépendances externes + tester
- Tester la couche d'accès aux données (Entity Framework Core - InMemory)

9. Autres types de tests

- Snapshot testing
- Mutation testing

10. Continuous Testing

- Live Testing
- Running tests in docker
- Setup pipeline
