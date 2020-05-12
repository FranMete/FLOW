# FLOW - Backend test con Node.js
## Apis utilizadas
### ip-api 
para detectar la ubicación actual
### openweathermap
para los datos del clima
### opencagedata
para obtener latitud y longitud de la ciudad ingresada por parámetro
## PROBAR ONLINE
La app está desplegada en Heroku 
## INSTALACION PARA CORRER EN LOCAL
### requisitos previos
tener instalada una versión de Node superior a la 8 (preferentemente la LTS actual)
### instalación
1. clonar el repo
```
git clone https://github.com/FranMete/FLOW.git 

``` 
2. Situarse en la raíz del proyecto (o sea dentro de la carpeta "FLOW" )
3. Para instalar localmente las dependencias como express, axios, body-parser, etc ejecutar el siguiente código
```
npm install
``` 
## PROBAR EN EL NAVEGADOR: LOCAL Y HEROKU
para correr en el local siga los pasos del 1 al 3
1. Situarse en la raíz del proyecto (o sea, dentro de la carpeta "FLOW" )
2. Una vez en la raíz del proyecto, ejecutar el siguiente código

```
npm start
```
3. Una vez que el servidor esté corriendo, en la consola debe aparecer el siguiente mensaje: 

```
 "servidor corriendo en puerto 8080" 
 ```    
  4. Dirigirse al browser de su preferencia (google chrome, firefox, etc) y probar las siguientes urls del challenge:

  ### /location

  _Devuelve los datos de ubicación city según ip-api_. 

   local
  ```
   http://localhost:8080/v1/location
   ```
   heroku
   ```
   https://flow-challenge-metetiero.herokuapp.com/v1/location
  ```
  ### /current[/city]
  
  _City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo actual_.

  **sin parámetro**

  local
  ```
  http://localhost:8080/v1/current
  ```
  heroku 
  ```
  https://flow-challenge-metetiero.herokuapp.com/v1/current
  ```
  **parámetro city=frankfurt**
  
  local
  ```
  http://localhost:8080/v1/current?city=frankfurt
  ```

  heroku
  ```
  https://flow-challenge-metetiero.herokuapp.com/v1/current?city=frankfurt
  ```
### /forecast[/city]
_City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días_.

**sin parámetro**

local
```
http://localhost:8080/v1/forecast

```

heroku
```
https://flow-challenge-metetiero.herokuapp.com/v1/forecast
```
**parámetro city=frankfurt**

local
```
http://localhost:8080/v1/forecast?city=frankfurt

```

heroku
```
https://flow-challenge-metetiero.herokuapp.com/v1/forecast?city=frankfurt
```

## TEST
Se usó **supertest**, como aparece en la recomendación, con el framework **mocha**. 

1. Haber instalado como aparece en el apartado INSTALACION
2. Situarse en la raíz del proyecto (o sea, dentro de la carpeta "FLOW" )
3. Ejecutar el siguiente código 
```
npm test
```
El archivo de test se encuentra en 
```
FLOW/test/apiTest.js
```