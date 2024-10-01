
# vCard App with REACT NATIVE (EXPO)

vCard App Project make with REACT NATIVE (EXPO)
using JavaScript

## Required Environment

[Node.js](https://nodejs.org)

## Run Locally

Clone the project

```bash
  git clone https://github.com/meen2161/vCard-App.git
```

Go to the project directory

```bash
  cd vCard-App
```

Install dependencies

```bash
  npm install
```

Install expo package

```bash
  npm add expo
```

Start the server

```bash
  npx expo start
```


## vCard format used in this app

| Name |  Description                | Example     |
| :--- |  :------------------------- | :-----------|
| `ORG` | The name of the organization | ORG:PSU Team;ComSci |
| `Team` | The unit(s) of the organization | ⬆️ |
| `TITLE` | Specifies the job title | TITLE:Hacker |
| `N` | A structured representation of the name of the person | N:Body;Some; |
| `TEL` | The canonical number string for a telephone number | TEL;TYPE=cell:+66 555555555 |
| `EMAIL` | The address for electronic mail | EMAIL:1234@somemail.com |
| `URL` | A URL pointing to a website that represents the person in some way | URL:https://www.google.com |

#### Example
```
    BEGIN:VCARD
    VERSION:4.0
    ORG:PSU Team;ComSci
    TITLE:Hacker
    N:Body;Some;
    TEL;TYPE=CELL:+66 555555555
    EMAIL:somebody@somemail.com
    URL:https://www.google.com
    END:VCARD
 ```

