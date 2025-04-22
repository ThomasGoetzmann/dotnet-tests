# Cas particuliers

## Dépendances externes

1. Ne pas utiliser les méthodes de la bibliothèque directement.
2. Créer une interface avec les méthodes nécessaires.
3. Créer une classe qui implémente cette interface et qui fait appel directement aux méthodes de la bibliothèque.

Cette méthode peut être utilisée avec des paquets NuGet et API externes.

##--##

Exemple:

```csharp
using UnitsNet;
using UnitsNet.Units;

// Interface minimale, à utiliser dans le code.
public interface IUnitConverter
{
    double ConvertLength(double value, LengthUnit from, LengthUnit to);
    double ConvertTemperature(double value, TemperatureUnit from, TemperatureUnit to);
}

// Implémentation avec Units.NET
public class UnitsNetConverter : IUnitConverter
{
    public double ConvertLength(double value, LengthUnit from, LengthUnit to)
    {
        return Length.From(value, from).As(to);
    }

    public double ConvertTemperature(double value, TemperatureUnit from, TemperatureUnit to)
    {
        return Temperature.From(value, from).As(to);
    }
}
```

##==##

## Entity Framework / Couche d'accès aux données

1. Eviter de tester la base de données directement.
2. Utiliser le package NuGet `Microsoft.EntityFrameworkCore.InMemory`. Mais attentions aux limitations.
3. Mettre en place un environnement de test pour réaliser des tests d'intégration.

## Les fichiers: IO

Utiliser le packet NuGet [`System.IO.Abstractions`](https://github.com/TestableIO/System.IO.Abstractions)
Cette bibliothèque fournie directement des interfaces `IFileSystem` à utiliser à la place des méthodes statiques (par exemple `File.ReadAllTest`)

##==##

## Les dates

Il existe des bibliothèques, mais vu la simplicité, il est recommandé d'avoir une propre implémentation d'une interface
`IDateTimeProvider` tel que recommandé dans les bonnes pratiques officielles de Microsoft.

```csharp
public interface IDateTimeProvider
{
    // Add all methods/properties you want to use for DateTime

    DateTime UtcNow();

    DayOfWeek DayOfWeek();
}
```

```csharp
public class ExpirationService
{
    private readonly IDateTimeProvider _dateTimeProvider;

    public ExpirationService(IDateTimeProvider dateTimeProvider)
    {
        _dateTimeProvider = dateTimeProvider;
    }

    public bool IsExpired(DateTime expirationDate)
    {
        return _dateTimeProvider.UtcNow() > expirationDate;
    }
}
```
