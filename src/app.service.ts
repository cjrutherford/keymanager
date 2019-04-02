import { Injectable } from '@nestjs/common';
import ensureKeys from './keygen/keygen';
import { Key } from 'readline';

export interface Keys {
  private: String;
  public: String;
}

@Injectable()
export class AppService {
  privKey: String;
  pubKey: String;
  keyPair: Keys;
  constructor() {
    ensureKeys().then((keys: Keys) => {
      this.privKey = keys.private;
      this.pubKey = keys.public;
      this.keyPair = keys;
    });
  }
  getKeys(): Keys {
    return this.keyPair;
  }
  getPublic(): String {
    return this.pubKey;
  }
  getPrivate(): String {
    return this.privKey;
  }
}
