// Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
      constructor(name) {
        this.name = name;
        this.genesis = null;
        this.blocks = {};
      }

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
    longestChain() {
      let longestChain = []
      let nextBlocks = Object.values(this.blocks)
      let temp = this.genesis//创世区块
      nextBlocks.forEach(function(block) {
        if(temp.height < block.height){
          temp = block
        }
      })
  
      while(temp.previousHash != "root"){
        longestChain.push(temp)
        temp = this.blocks[temp.previousHash]
      }
      longestChain.push(temp)
      longestChain.reverse()
      return longestChain;
    }
}

export default Blockchain
