<!-- .slide: class="transition-bg-sfeir-2" -->

# Logs structurés

##==##

# Log traditionnel

```text
[INFO]2025.04.22-12:55:20 - Application started
[INFO]2025.04.22-12:55:32 - Transfered 200€ from account 01234 to account 56789
[EROR]2025.04.22-16:23:10 - Unsufficient amount in account 56789 (200€) to withdrow 500€
[WARN]2025.04.22-16:23:42 - Account 01234 has entered wrong password more than 5 times in the last 3 minutes.
```

Il est possible de:

- faire une recherche (ctrl+f)
- parcourir le fichier par datetime

##==##

Exemple de questions auxquelles il serait difficile de répondre:

- Quel est le montant moyen des transferts effectués par l'utilisateur du compte 01234 au cours des 30 derniers jours ?
- Combien de tentatives de connexion échouées ont eu lieu pour chaque compte, regroupées par plage horaire ?
- Quels sont les 5 comptes ayant le plus grand nombre de transactions rejetées pour insuffisance de fonds ?
- Quelle est la distribution des montants de transfert par heure de la journée ?
- Quel est le taux d'erreur global du système (ratio entre les événements d'erreur et le nombre total d'opérations) ?
- Combien de temps s'écoule en moyenne entre le démarrage de l'application et la première transaction ?
- Quels comptes ont des schémas d'activité suspects (comme des transferts à des heures inhabituelles) ?
- Quel est le parcours utilisateur typique avant qu'une erreur d'insuffisance de fonds ne se produise ?
- Quelle est la corrélation entre les tentatives de mot de passe erronées et les transferts d'argent ultérieurs ?
- Quels comptes ont des modèles de transaction similaires, suggérant qu'ils pourraient appartenir à la même personne ?
<!-- .element: class="list-fragment" -->

##==##

# Logs structurés

<!-- .slide: class="with-code" -->

```json
{
"timestamp": "2025-04-22T12:55:20.000Z",
"level": "INFO",
"message": "Application started"
}

{
"timestamp": "2025-04-22T12:55:32.000Z",
"level": "INFO",
"message": "Transfered 200€ from account 01234 to account 56789",
"details": {
  "operation": "transfer",
  "amount": 200,
  "currency": "EUR",
  "source_account": "01234",
  "destination_account": "56789"
}
}

{
"timestamp": "2025-04-22T16:23:10.000Z",
"level": "ERROR",
"message": "Unsufficient amount in account 56789 (200€) to withdrow 500€",
"details": {
  "operation": "withdrawal",
  "account": "56789",
  "available_balance": 200,
  "requested_amount": 500,
  "currency": "EUR"
}
}

{
"timestamp": "2025-04-22T16:23:42.000Z",
"level": "WARNING",
"message": "Account 01234 has entered wrong password more than 5 times in the last 3 minutes.",
"details": {
  "account": "01234",
  "security_event": "multiple_password_failures",
  "failure_count": 5,
  "time_window_minutes": 3
}
}{
"timestamp": "2025-04-22T12:55:20.000Z",
"level": "INFO",
"message": "Application started"
}

{
"timestamp": "2025-04-22T12:55:32.000Z",
"level": "INFO",
"message": "Transfered 200€ from account 01234 to account 56789",
"details": {
  "operation": "transfer",
  "amount": 200,
  "currency": "EUR",
  "source_account": "01234",
  "destination_account": "56789"
}
}

{
"timestamp": "2025-04-22T16:23:10.000Z",
"level": "ERROR",
"message": "Unsufficient amount in account 56789 (200€) to withdrow 500€",
"details": {
  "operation": "withdrawal",
  "account": "56789",
  "available_balance": 200,
  "requested_amount": 500,
  "currency": "EUR"
}
}

{
"timestamp": "2025-04-22T16:23:42.000Z",
"level": "WARNING",
"message": "Account 01234 has entered wrong password more than 5 times in the last 3 minutes.",
"details": {
  "account": "01234",
  "security_event": "multiple_password_failures",
  "failure_count": 5,
  "time_window_minutes": 3
}
}
```

##==##

# Utilisation de Serilog

1. Installer Serilog

```bash
dotnet add package Serilog
dotnet add package Serilog.Extensions.Logging
dotnet add package Serilog.Exceptions
```

2. Choisir un ou plusieurs 'Sink' (Console, Seq, Azure App Insight, Google Cloud Login, SqlServer, ...)

```bash
dotnet add package Serilog.Sinks.Console
dotnet add package Serilog.Sinks.Seq
```

3. Configure Serilog au démarrage

```csharp
Log.Logger = new LoggerConfiguration()
  .WriteTo.Console()
  .WriteTo.Seq("http://localhost:5341")
  .CreateLogger();


var builder = WebApplication.CreateBuilder(args);

builder.Logging.AddSerilog(Log.Logger);
//...
```
