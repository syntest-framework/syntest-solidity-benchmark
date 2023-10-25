const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractndjo61Z = await ERC20Interface.new({from: accounts[3]});
		const tokensKAgsmMM = BigInt("41")
		const toTMqfyuC = accounts[0]
		const tokensphDYlSc = BigInt("1353")
		const toc7sM00 = accounts[2]
		const tokenseiGAbXs = BigInt("227")
		const tore3r4pO = accounts[2]
		const fromF0FxgD1 = accounts[1]
		const successDZ0a1FZ = await contractndjo61Z.transfer.call(toTMqfyuC, tokensKAgsmMM, {from: accounts[2]});
		const successWrFMQTi = await contractndjo61Z.transfer.call(toc7sM00, tokensphDYlSc, {from: accounts[1]});
		const nullQ9U4Guh = await contractndjo61Z.totalSupply.call({from: accounts[0]});
		const successTKZbirx = await contractndjo61Z.transferFrom.call(fromF0FxgD1, tore3r4pO, tokenseiGAbXs, {from: accounts[3]});
	});
})