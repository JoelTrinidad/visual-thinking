# visual-thinking

## Dependencies

 * Express
    
    Para crear el servidor y los endpoints

## Dev Dependencies

 * EsLint
 
    Como guía de estilo del código

 * Jest
      
    Para crear pruebas unitarias

## Components
 * **PartnerController**
   
   Al ser el controller el puente entre el server y la lógica de negocio, decidí unir el service y la información que trae el reader aquí.

   Iniciamos con la función `getPartners` que al no requerir ningun filtro o modificación extra, utiliza unicamente al reader para devolver el listado completo de los estudiantes.   
   ```js
   static getPartners(){
      return Reader.readJsonFile("visualpartners.json");
   }
   ```

   Después encontraremos la función `getPartnerMailsWithCertification`, en este caso volvemos a usar el reader pero los datos esta vez son filtrados por una funcion proveniente del `PartnerService`.
   ```js
   static getPartnerMailsWithCertification(){
      const partners = Reader.readJsonFile("visualpartners.json");
      return PartnerService.getPartnerMailsWithCertification(partners);        
   }
   ```

   Por último tenemos la función `getPartnersCreditsGreaterThan`, donde volvemos a usar al `Reader` y al `PartnerService`, agregando ademas un parametro que nos brinda una flexibilidad en cuanto al numero minimo de creditos que se necesitan para poder mostrar a los estudiantes.
   ```js
   static getPartnersCreditsGreaterThan(minimumCredits){
      const partners = Reader.readJsonFile("visualpartners.json");
      return PartnerService.getPartnersCreditsGreaterThan(partners, minimumCredits);        
   }
   ```      
 * **PartnerService**
   
   Aqui encontraremos la lógica de negocio, el como se maneja la información dentro de nuestra api.

   De inicio tenemos la función `getPartnerMailsWithCertification`, la cual se centrara en filtrar, de un array que recibe a traves de su parametro `parnets`, los datos que cumplan con la condicion de tener la propiedad `haveCertification` con un valor de `True`, después regresara un array con unicamente la propiedad `email` de dichos datos.
   ```js
   static getPartnerMailsWithCertification(partners){
      const emails = partners.filter(partner => partner.haveCertification)
         .map(partner => partner.email);
      return emails;
   }
   ```  

   La segunda y última función `getPartnersCreditsGreaterThan`, filtra el array dado en su parametro `partners` usando la propiedad del mismo llamado `credits` y comparandolo con el parametro de igual forma llamado `credits` para al final devolver un nuevo arreglo con los datos que superen el numero de creditos dados.
   ```js
   static getPartnersCreditsGreaterThan(partners, credits){
      const partnersWithEnoughCredits = partners.filter(partner => partner.credits > credits);
      return partnersWithEnoughCredits;
   }
   ```
 * **Reader**
   
   Aqui se lee el archivo json y se devuelve su información.
   ```js
   static getPartnersCreditsGreaterThan(partners, credits){
      const partnersWithEnoughCredits = partners.filter(partner => partner.credits > credits);
      return partnersWithEnoughCredits;
   }
   ```

## How to use it

Para acceder a la información solamente es necesario entrar a las respectivas urls a traves del localhost, en el puerto 3000.

 * Consultar todos los estudiantes.

   ``http://localhost:3000/partners``

 * Consultar los emails de todos los estudiantes que tengan certificación.
   
   ``http://localhost:3000/partners/emails``

 * Consultar todos los estudiantes que tengan creditos mayor a 500.
   
   ``http://localhost:3000/partners/creditsover``