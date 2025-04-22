<!-- .slide: class="transition-bg-sfeir-2" -->

# Premiers pas

##==##

<!-- .slide: class="with-code " -->

# Mise en place - Configuration du .csproj

La configuration d'un projet utilisant la nouvelle `Microsoft.Testing.Platform`

```xml
<!-- Dans le .csproj -->
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <!-- 1. REMARK: Comme une app console au lieu d'une classlib-->
    <OutputType>Exe</OutputType>

    <!-- 2. TODO: Meilleur affichage console lorsqu'on fait un `dotnet run`-->
    <UseMicrosoftTestingPlatformRunner>true</UseMicrosoftTestingPlatformRunner>

    <!-- 3. TODO: Permet l'utilisation de la commande `dotnet test`-->
    <TestingPlatformDotnetTestSupport>true</TestingPlatformDotnetTestSupport>
  </PropertyGroup>

  <ItemGroup>
    <!-- 4. REMARK: Plus besoin de références supplémentaires du Test.SDK ou d'un runner -->
    <PackageReference Include="xunit.v3" Version="x.x.x" />
    <!-- ou pour TUnit à la place de xUnit -->
    <PackageReference Include="TUnit" Version="x.x.x"/>

  </ItemGroup>

</Project>
```

Remarque: il est possible que la version de Visual Studio utilisée nécessite une mise à jour (ou l'activation dans les options) pour utiliser correctement la `Microsoft.Testing.Platform`

##==##

# Mise en place - Premier test

```csharp
// xUnit
[Fact]
public void Test1()
{
    Assert.True(true);
}
```

```csharp
// TUnit
[Test]
public async Task IsTrue()
{
    await Assert.That(x).IsTrue();
}
```

Exercice: lancer ce test de 4 manières différentes:

- "Flèche" run dans Visual Studio
- Test Explorer dans Visual Studio
- `dotnet run` dans une console
- `dotnet test` dans une console
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="transition-bg-sfeir-3" -->

# Mise en pratique
