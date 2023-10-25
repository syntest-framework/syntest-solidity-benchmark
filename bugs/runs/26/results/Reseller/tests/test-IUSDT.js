const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractsao1Rg8 = await IUSDT.new({from: accounts[1]});
		const amountQ3rQncf = BigInt("1313")
		const recipientyf2dkhF = accounts[3]
		const senderabmRIeO = accounts[1]
		const accountiOv1Ni = accounts[0]
		const nullU0pokEQ = await contractsao1Rg8.decimals.call({from: accounts[2]});
		await contractsao1Rg8.transferFrom.call(senderabmRIeO, recipientyf2dkhF, amountQ3rQncf, {from: accounts[3]});
		const null8lOUdZ = await contractsao1Rg8.balanceOf.call(accountiOv1Ni, {from: accounts[1]});
	});
})