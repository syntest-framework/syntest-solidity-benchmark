const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractSXvKNgV = await IUSDT.new({from: accounts[5]});
		const spender8zEXqy = accounts[1]
		const ownerhvMC6d = "0x0000000000000000000000000000000000000001"
		const accountJw9UTRO = "0x0000000000000000000000000000000000000001"
		const nullS906PwD = await contractSXvKNgV.allowance.call(ownerhvMC6d, spender8zEXqy, {from: accounts[0]});
		const nullaA4cBHG = await contractSXvKNgV.balanceOf.call(accountJw9UTRO, {from: "0x0000000000000000000000000000000000000001"});
	});
})