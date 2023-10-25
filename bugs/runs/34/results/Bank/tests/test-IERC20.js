const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractN8NUeAN = await IERC20.new({from: accounts[3]});
		const valuerN8SjQl = BigInt("1668")
		const toj3NWche = accounts[2]
		const valueCp0Ird = BigInt("2044")
		const togqspGh = accounts[1]
		const valuecyTRyHo = BigInt("607")
		const spendere2bzhxT = accounts[3]
		const valueNunkI2K = BigInt("2025")
		const toKCWeTdP = accounts[3]
		const from0XSeWf = accounts[1]
		const nullXkHvf5L = await contractN8NUeAN.transfer.call(toj3NWche, valuerN8SjQl, {from: accounts[0]});
		const nullG9RG1bc = await contractN8NUeAN.transfer.call(togqspGh, valueCp0Ird, {from: accounts[4]});
		const nullAkl4ob3 = await contractN8NUeAN.approve.call(spendere2bzhxT, valuecyTRyHo, {from: accounts[1]});
		const nullfE5EZNT = await contractN8NUeAN.transferFrom.call(from0XSeWf, toKCWeTdP, valueNunkI2K, {from: accounts[5]});
	});
})