<div class="container">
  <h1>Garnet KeyManager</h1>
  <div class="Body">
    <h3>What is this?</h3>
    <p>Garnet KeyManager is a service for generating and serving RSA Keys for the purpose of validating and authorizing JWT's for Express and Other Web Apps that use Authentication.</p>
    <h3>How do I use this?</h3>
    <p>The Key Manager server is intended to be run inside a docker swarm and behind the firewall. Please do not ever host this on a publicly accessible port. (i.e. do not publish this port outside the host, but the port should be open to the rest of the services that depend on it.</p>
  </div>
</div>

## Sample Docker-compose.yml

```
version: "3"

services:
  KeyManager:
    image: cjrutherford/garnet_keymanager:latest
    deploy:
      replicas: 1
    ports:
      - "3220:3220"
    networks:
      - privnet
  OtherService:
    networks:
      - web
      - privnet
networks:
  web:
    external: true
  privnet:
    internal: true
```

Setting a private network will help in keeping the keystore secure and out of the way for prying eyes.
