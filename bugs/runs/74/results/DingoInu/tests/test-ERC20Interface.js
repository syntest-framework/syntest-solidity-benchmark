const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractEH7MwL = await ERC20Interface.new({from: accounts[4]});
		const tokensACaBPmC = BigInt("1962")
		const tog3thWgS = "0x0000000000000000000000000000000000000001"
		const fromd7StSFD = accounts[3]
		const tokensqC8Q7uY = BigInt("503")
		const toRq7jayI = "0x0000000000000000000000000000000000000001"
		const successb4bhwDU = await contractEH7MwL.transferFrom.call(fromd7StSFD, tog3thWgS, tokensACaBPmC, {from: accounts[1]});
		const successyW8TUX = await contractEH7MwL.transfer.call(toRq7jayI, tokensqC8Q7uY, {from: accounts[4]});
		const nullwnGBRKj = await contractEH7MwL.totalSupply.call({from: accounts[3]});
	});
})