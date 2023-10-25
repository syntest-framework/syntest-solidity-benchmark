const IUniswapV2 = artifacts.require("IUniswapV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUniswapV2', (accounts) => {
	it('test for IUniswapV2', async () => {
		const contractBU69CDs = await IUniswapV2.new({from: accounts[2]});
		const [amount0dZ5uwjh, amount1NFWgrdC] = await contractBU69CDs.burn.call({from: accounts[5]});
		const nullD69U4zD = await contractBU69CDs.factory.call({from: accounts[3]});
		const nullLKepb9 = await contractBU69CDs.reserve1.call({from: accounts[1]});
		await contractBU69CDs.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const nullx4RWF7 = await contractBU69CDs.price0CumulativeLast.call({from: accounts[1]});
	});
})