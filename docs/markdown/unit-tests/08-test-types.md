# Types de tests

## Return

```csharp
public class Car 
{
    public string Start() { return "Vroum!"; }
}

public class CarUnitTests
{
    [Fact]
    public void ValueBased_Test() 
    {
        //Arrange
        var myCar = new Car();

        //Act
        var result = myCar.Start();

        //Assert
        Assert.Equal("Vroum!", result);
    }
}
```

##==##

## State

```csharp
public class Car 
{
    public bool IsRunning { get; private set; }
    
    public void Start() { IsRunning = true; }
}

public class CarUnitTests
{
    [Fact]
    public void StateBased_Test() 
    {
        //Arrange
        var myCar = new Car();
    
        //Act
        myCar.Start();
    
        //Assert
        Assert.True(myCar.IsRunning);
    }
}
```

##==##

## Interaction

```csharp
public interface IEngine
{
    void StartEngine();
}

public class Car 
{
    private IEngine _engine;

    public Car (IEngine engine) { _engine = engine; }

    public void Start() { _engine.StartEngine(); }
}
```

```csharp
public class CarUnitTests
{
    class FakeEngine : IEngine
    {
        public bool StartEngineIsCalled { get; private set; } = false;
        public void StartEngine() { StartEngineIsCalled = true; }
    }

    [Fact]
    public void InteractionBased_Test() 
    {
        //Arrange
        var fakeEngine = new FakeEngine();
        var myCar = new Car(fakeEngine);
    
        //Act
        myCar.Start();
    
        //Assert
        Assert.True(fakeEngine.StartEngineIsCalled);
    }
}
```

##==##

# Triple A

Arrange / Act / Assert

## Assert

- Ce que l'ont veut tester, vérifier
- **1 seul assert** par test unitaire
- des valeurs **simples**
- des valeurs **fixes**

## Act

- La méthode invoquée

## Arrange

- Préparation du système:
  - des valeurs d'input **simples**
  - initialisation de la classe à tester
  - substitution (=fake) des dépendances

- Mettre le système dans l'état voulu:
  - Appel d'une méthode d'initialisation par exemple

##==##

# Exemple du triple A

```csharp
[Fact]
public void ValueBased_Test() 
{
    //Arrange
    var myCar = new Car();

    //Act
    var result = myCar.Start();

    //Assert
    Assert.Equal("Vroum!", result);
}
```

