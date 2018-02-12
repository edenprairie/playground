import { MongoRepository } from './mongo.repository';
import { expect } from 'chai';
import 'mocha';

import * as mongo from 'mongodb'

describe('Hello function', () => {

    it('should return hello world', async () => {
        let client: mongo.MongoClient = await mongo.MongoClient.connect('mongodb://localhost:27017/');
        let db = client.db('test');

        let mongoRepository = new MongoRepository(db);
        await mongoRepository.upsertMessage(
            { topic: "111 learn typescript", progress: 10, MsgId: 1234 }    
        );
        let messages: any[] = await mongoRepository.findAllMessage();
        messages.forEach( (m) => {console.log(m)});
        await client.close();
    });

});

