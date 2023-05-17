import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 2

class Block {
  // 1. 完成构造函数及其参数

  constructor(blockchain,previousHash,height,hash,nonce){
    this.blockchain=blockchain
    this.previousHash=previousHash
    this.height=height
    this.hash=hash
    this.nonce=nonce
  }
// 验证区块是否符合挖矿难度要求

// 添加isValid函数
isValid() {
  const hash=this.calculateHash()
  return hash.substring(0,DIFFICULTY) == '0'.repeat(DIFFICULTY)
}

// 添加更新Nonce函数
  setNonce(nonce) {
    this.nonce=nonce
  }

// 添加更新Hash函数
  calculateHash(){
    return sha256(
      this.previousHash+this.height+this.nonce).toString()
  }
}

export default Block

