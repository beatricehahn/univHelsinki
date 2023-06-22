```mermaid
spaDiagram;
    participant browser;
    participant server;

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->>browser: xhr request
    deactivate server

```