Questo progetto è un'applicazione web realizzata con Angular che implementa un sistema di autenticazione e una chat tra utenti. Utilizza JSON Server per simulare un database e gestire gli utenti registrati e i messaggi della chat.

Tecnologie Utilizzate: 
* Angular 18/19 (Standalone): Framework frontend per la creazione di applicazioni web dinamiche.
* TypeScript: Linguaggio di programmazione tipizzato che si basa su JavaScript.
* Bootstrap per lo stile
* JSON Server: Un server REST fittizio che fornisce un backend simulato basato su un file JSON. Utile per lo sviluppo frontend senza la necessità di un backend completo.
* Angular Router: per la navigazione tra le pagine
* Angular Material: Libreria di componenti UI Angular che implementa il Material Design di Google, per un'interfaccia utente moderna e coerente (potrebbe essere presente per l'interfaccia del login e della chat).
* RxJS: Libreria per la programmazione reattiva con Angular, utilizzata per la gestione dei flussi di dati asincroni, delle interazioni con il server e degli eventi in tempo reale (per la chat).

Funzionalità:
* Registrazione e Login: gli utenti possono creare un account e accedere con email e password.
* Autenticazione: verifica le credenziali dell'utente tramite il backend simulato (JSON Server).
* Chat in tempo reale (simulata): gli utenti possono inviare e ricevere messaggi.
* Gestione utenti e autenticazione: i dati degli utenti sono salvati in db.json.




## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
