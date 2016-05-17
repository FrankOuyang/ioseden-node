/**
 * Created by daniel on 16/5/16.
 */
"use strict";

import Session from '../model/Session';
import redisCache from '../libs/cache/redisCache';

let Controller = {
    create( { uid, expire=6*30*24*3600 } = {} ) {
        return new Promise((resolve, reject) => {
            if (uid) {
                let session = new Session({uid, expire});
                redisCache.set(session.token, JSON.stringify(session), expire).then(resolve).catch(reject);
            }
            else {
                reject('用户不存在');
            }
        });
    },

    delete(token) {
        return redisCache.del(token);
    },

    find(token) {
        return redisCache.get(token).then(data => {JSON.parse(data)});
    }
};

export default Controller;