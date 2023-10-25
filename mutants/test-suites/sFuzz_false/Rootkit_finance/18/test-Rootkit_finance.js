const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeKT2VXd8 = await Rootkit_finance.new({from: accounts[1]});
		const uintw26VCXh = BigInt("1582")
		const addressNCtaRY5 = accounts[0]
		const addressljZnlhT = accounts[2]
		const addresst7t4qGc = accounts[3]
		const uint256ELMUfgG = await Rootkit_financeKT2VXd8.totalSupply.call({from: accounts[0]});
		const boolILAeOv = await Rootkit_financeKT2VXd8.approve.call(addressNCtaRY5, uintw26VCXh, {from: accounts[3]});
		const uintyIOdzhM = await Rootkit_financeKT2VXd8.allowance.call(addresst7t4qGc, addressljZnlhT, {from: accounts[4]});

		assert.equal(boolILAeOv, true)
		assert.equal(uint256ELMUfgG, BigInt("10000000000000000000000"))
		assert.equal(uintyIOdzhM, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeimHandC = await Rootkit_finance.new({from: accounts[0]});
		const uintY67Uf0z = BigInt("715")
		const addressCXbrjRv = "0x0000000000000000000000000000000000000001"
		const addressntg6Voa = accounts[5]
		const addressxZISgg = accounts[2]
		const addressaUG8hTk = "0x0000000000000000000000000000000000000001"
		const uintFA8qarN = BigInt("473")
		const addressiTpTe0 = accounts[1]
		const addressqN60nJ0 = "0x0000000000000000000000000000000000000001"
		const boolLPjBgpQ = await Rootkit_financeimHandC.transfer.call(addressCXbrjRv, uintY67Uf0z, {from: accounts[3]});
		const uint256lnjp2Tk = await Rootkit_financeimHandC.totalSupply.call({from: accounts[3]});
		const uint256ArGgaYg = await Rootkit_financeimHandC.balanceOf.call(addressntg6Voa, {from: accounts[1]});
		const uintKahvMaL = await Rootkit_financeimHandC.allowance.call(addressaUG8hTk, addressxZISgg, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Xk8sPM9 = await Rootkit_financeimHandC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolAC306BX = await Rootkit_financeimHandC.transferFrom.call(addressqN60nJ0, addressiTpTe0, uintFA8qarN, {from: accounts[2]});

		assert.equal(boolAC306BX, false)
		assert.equal(boolLPjBgpQ, false)
		assert.equal(uint256ArGgaYg, BigInt("0"))
		assert.equal(uint256Xk8sPM9, BigInt("10000000000000000000000"))
		assert.equal(uint256lnjp2Tk, BigInt("10000000000000000000000"))
		assert.equal(uintKahvMaL, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financebNEJHhb = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintN5PUTfh = BigInt("1311")
		const addressLtPR49L = accounts[5]
		const addressKO4XITa = accounts[3]
		const boolMZFIr12 = await Rootkit_financebNEJHhb.transferFrom.call(addressKO4XITa, addressLtPR49L, uintN5PUTfh, {from: accounts[3]});
		const uint256abZEexM = await Rootkit_financebNEJHhb.totalSupply.call({from: accounts[0]});
		const uint256xZ2iQ7D = await Rootkit_financebNEJHhb.totalSupply.call({from: accounts[3]});
	});
})