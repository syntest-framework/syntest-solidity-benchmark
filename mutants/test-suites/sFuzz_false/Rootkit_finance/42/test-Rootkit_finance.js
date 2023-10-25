const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_finance3TqMAV = await Rootkit_finance.new({from: accounts[3]});
		const addressZMDlaQk = accounts[0]
		const addressXcr3zE = accounts[2]
		const uintvPOE06r = BigInt("1807")
		const addressMLZuwhi = accounts[3]
		const uintolvxEsS = BigInt("1447")
		const addressKxq8ClP = accounts[5]
		const uint256jjl1NyM = await Rootkit_finance3TqMAV.totalSupply.call({from: accounts[0]});
		const uintCFDA3zC = await Rootkit_finance3TqMAV.allowance.call(addressXcr3zE, addressZMDlaQk, {from: accounts[4]});
		const boolwdCLX16 = await Rootkit_finance3TqMAV.transfer.call(addressMLZuwhi, uintvPOE06r, {from: accounts[4]});
		const boolE6LcK43 = await Rootkit_finance3TqMAV.transfer.call(addressKxq8ClP, uintolvxEsS, {from: accounts[2]});

		assert.equal(boolE6LcK43, false)
		assert.equal(boolwdCLX16, false)
		assert.equal(uint256jjl1NyM, BigInt("10000000000000000000000"))
		assert.equal(uintCFDA3zC, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financexS7Xuel = await Rootkit_finance.new({from: accounts[3]});
		const addressCf7ro8w = accounts[1]
		const uintHs0bh3x = BigInt("1532")
		const addressiyIWIQI = accounts[2]
		const uintgxdqJc9 = BigInt("320")
		const addressec5ROSM = accounts[4]
		const uintQx59RLg = BigInt("1280")
		const addressmuimQtP = "0x0000000000000000000000000000000000000001"
		const addressUYePk1v = "0x0000000000000000000000000000000000000001"
		const uint256hgtmiJX = await Rootkit_financexS7Xuel.balanceOf.call(addressCf7ro8w, {from: accounts[2]});
		const uint256dIWWOnB = await Rootkit_financexS7Xuel.totalSupply.call({from: accounts[2]});
		const boolIaDT6Dd = await Rootkit_financexS7Xuel.transfer.call(addressiyIWIQI, uintHs0bh3x, {from: "0x0000000000000000000000000000000000000001"});
		const boolPW7IAnG = await Rootkit_financexS7Xuel.transfer.call(addressec5ROSM, uintgxdqJc9, {from: "0x0000000000000000000000000000000000000001"});
		const boolbZFYFws = await Rootkit_financexS7Xuel.transferFrom.call(addressUYePk1v, addressmuimQtP, uintQx59RLg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIaDT6Dd, false)
		assert.equal(boolPW7IAnG, false)
		assert.equal(boolbZFYFws, false)
		assert.equal(uint256dIWWOnB, BigInt("10000000000000000000000"))
		assert.equal(uint256hgtmiJX, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financetSPKzrs = await Rootkit_finance.new({from: accounts[2]});
		const addressv49a4Ux = accounts[2]
		const addressUc5aLrs = accounts[2]
		const addressssD7CUU = accounts[4]
		const uinty378W4O = BigInt("228")
		const addressBmcugcd = accounts[3]
		const addressQo3T4jP = accounts[5]
		const uintIBzqSL = BigInt("927")
		const addressXrLuCyJ = accounts[2]
		const uint256NcxBJ6f = await Rootkit_financetSPKzrs.balanceOf.call(addressv49a4Ux, {from: accounts[5]});
		const uintlEV1sad = await Rootkit_financetSPKzrs.allowance.call(addressssD7CUU, addressUc5aLrs, {from: accounts[1]});
		const boolhUs7r2 = await Rootkit_financetSPKzrs.transferFrom.call(addressQo3T4jP, addressBmcugcd, uinty378W4O, {from: accounts[1]});
		const boolKqZhUpi = await Rootkit_financetSPKzrs.approve.call(addressXrLuCyJ, uintIBzqSL, {from: accounts[3]});

		assert.equal(boolKqZhUpi, true)
		assert.equal(boolhUs7r2, false)
		assert.equal(uint256NcxBJ6f, BigInt("10000000000000000000000"))
		assert.equal(uintlEV1sad, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financen0IFEcR = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbvVikqb = BigInt("60")
		const addressRZULQT7 = accounts[4]
		const uint256UFRMlhR = await Rootkit_financen0IFEcR.totalSupply.call({from: accounts[1]});
		const booluWQqvbj = await Rootkit_financen0IFEcR.transfer.call(addressRZULQT7, uintbvVikqb, {from: accounts[5]});
	});
})