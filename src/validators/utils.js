import sha256 from 'crypto-js/sha256.js'

export const validateHash = () => {}
//定义一个参数接收block
export const calcNonce = (block) => {
  console.log(`calc nonce of block ${block.height} `)
  //获取时间戳
  const start = new Date().getTime()
  //计算hash的次数
  let calcTimes = 0
   //先看block是否符合难度要求，不符合就calcTime加1
  while (!block.isValid()) {
    block.setNonce(sha256(new Date().getTime().toString()).toString())
    calcTimes++
  }
  const end = new Date().getTime()
  // 计算每个区块的挖矿时间
  console.log(
    `calc nonce cost ${(end - start) / 1000}s, try ${calcTimes} times`,
  )
  return block
}