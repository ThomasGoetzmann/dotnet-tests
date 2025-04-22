# Organisation des projets de tests

Structure d'un projet de test:
1. Séparer les tests unitaires des tests d'intégration et fonctionnels (par un projet différent/un dossier différent ou au minimum un attribut Category)
2. Garder une structure similaire à celle de l'application

##==##

# Convention de nommage

`Method_Scenario_ExpectedBehavior`

Exemples:

- User
  <!-- .element: class="list-fragment" -->
  - `GetUserById_ValidId_ReturnsUser`
  - `ChangeAddress_ValidAddress_ChangedAddress`
- TransferMoney
  - `TransferMoney_ValidAccount_TransferedAmount`
  - `TransferMoney_InvalidAccount_ThrowsException`
  - `TransferMoney_InsufficientFunds_ThrowsException`
  - `TransferMoney_TargetAccountNotValid_ThrowsException`

##==##

# Category (ou Traits)

```csharp
// xUnit
[Fact]
[Trait("Category", "Functional")]
[Trait("Feature", "#1911")]
public void Test1()
{
    Assert.True(true);
}

// TUnit
[Test]
[Category("Integration")]
public async Task IsTrue()
{
    await Assert.That(x).IsTrue();
}
```

Pour filtrer plus facilement.
On peut aussi utiliser une référence à un n° de ticket pour des tests fonctionnels.

A voir aussi:
[Meilleures pratiques (Microsoft)](https://learn.microsoft.com/fr-fr/dotnet/core/testing/unit-testing-best-practices)
