import Kafka from 'node-rdkafka';
import { faker } from '@faker-js/faker';


const producerStream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9093',
  }, {}, {
    topic: 'cardnumbers'
  });

  var count = 0; 
  setInterval(()  => {

   count = count + 1
   
    const message =  {
    cardNumber:faker.finance.creditCardNumber('visa'),
    fullName: faker.name.fullName(),
    accountType: faker.finance.accountName()
}   
    const result = producerStream.write(Buffer.from( JSON.stringify(message) ));
   
    console.log(`Message #${count} sent to broker!`)

  }, 5000)






