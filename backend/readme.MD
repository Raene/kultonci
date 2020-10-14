# **KultonCI Backend**

## **Getting Started**

`npm run db-migrate up` this would set up the database tables for you, be sure to **create a database named kulton-ci first**

**Available routes**
<http://localhost:3000/auth/register>
it expects a multipart/form containing 

```json
name:string
email:string
password:string
repeat_password:string
passport:image file
nID:image file
```

