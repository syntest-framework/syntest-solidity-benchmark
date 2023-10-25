const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceaoZvlFZ = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintTyKTynx = BigInt("1382")
		const addressd1Nq5d = accounts[1]
		const uintCPAU8h = BigInt("642")
		const addressb8yOMc = accounts[5]
		const addresspkutJg = accounts[3]
		const addressFu0Mpe9 = accounts[2]
		const addressEXegspH = accounts[1]
		const uintM2DBAqu = BigInt("1656")
		const addressSNLkh0 = accounts[4]
		const boolVfggjen = await Straight_Fire_FinanceaoZvlFZ.approve.call(addressd1Nq5d, uintTyKTynx, {from: accounts[2]});
		const boolwptfZoN = await Straight_Fire_FinanceaoZvlFZ.transferFrom.call(addresspkutJg, addressb8yOMc, uintCPAU8h, {from: accounts[1]});
		const uintGraCx2q = await Straight_Fire_FinanceaoZvlFZ.allowance.call(addressEXegspH, addressFu0Mpe9, {from: "0x0000000000000000000000000000000000000001"});
		const boolhHYaLxN = await Straight_Fire_FinanceaoZvlFZ.approve.call(addressSNLkh0, uintM2DBAqu, {from: accounts[1]});

		assert.equal(boolVfggjen, true)
		assert.equal(boolhHYaLxN, true)
		assert.equal(boolwptfZoN, false)
		assert.equal(uintGraCx2q, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceorYAII = await Straight_Fire_Finance.new({from: accounts[1]});
		const address7AF7bn = accounts[5]
		const addressSwdK0Qk = accounts[3]
		const uintpgmOlD3 = BigInt("740")
		const addressQodEdrc = accounts[1]
		const addressw0qPfQz = accounts[2]
		const uintWxAh60E = BigInt("1992")
		const addresshSBMCjg = accounts[0]
		const uintP0gN5uV = BigInt("265")
		const addressW5KC5Nc = accounts[1]
		const addresst8Lc9GK = accounts[2]
		const uintTCcAKrs = await Straight_Fire_FinanceorYAII.allowance.call(addressSwdK0Qk, address7AF7bn, {from: accounts[4]});
		const boolH5nEyK = await Straight_Fire_FinanceorYAII.transferFrom.call(addressw0qPfQz, addressQodEdrc, uintpgmOlD3, {from: accounts[1]});
		const boolKRJkLJ9 = await Straight_Fire_FinanceorYAII.transfer.call(addresshSBMCjg, uintWxAh60E, {from: accounts[0]});
		const boolLfQHraf = await Straight_Fire_FinanceorYAII.transferFrom.call(addresst8Lc9GK, addressW5KC5Nc, uintP0gN5uV, {from: accounts[0]});

		assert.equal(boolH5nEyK, false)
		assert.equal(boolKRJkLJ9, false)
		assert.equal(boolLfQHraf, false)
		assert.equal(uintTCcAKrs, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceUmyiQqm = await Straight_Fire_Finance.new({from: accounts[0]});
		const addressKQvgqB = accounts[0]
		const addresskYObfxd = accounts[0]
		const addressjgivQll = accounts[2]
		const uintcO4f4zG = await Straight_Fire_FinanceUmyiQqm.allowance.call(addresskYObfxd, addressKQvgqB, {from: accounts[0]});
		const uint256p1cqApd = await Straight_Fire_FinanceUmyiQqm.totalSupply.call({from: accounts[0]});
		const uint256NsKq7b = await Straight_Fire_FinanceUmyiQqm.totalSupply.call({from: accounts[4]});
		const uint256snusqIw = await Straight_Fire_FinanceUmyiQqm.balanceOf.call(addressjgivQll, {from: accounts[0]});

		assert.equal(uint256NsKq7b, BigInt("80000000000000000000000"))
		assert.equal(uint256p1cqApd, BigInt("80000000000000000000000"))
		assert.equal(uint256snusqIw, BigInt("0"))
		assert.equal(uintcO4f4zG, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceXVwtpjF = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintn41lCWB = BigInt("1651")
		const addressiK2fEY = accounts[1]
		const addressjoHnpZ1 = accounts[2]
		const uintxzqVExI = BigInt("68")
		const addressl7UdlV = accounts[3]
		const addressoyHj2bW = accounts[3]
		const boolqdnpLJ = await Straight_Fire_FinanceXVwtpjF.transferFrom.call(addressjoHnpZ1, addressiK2fEY, uintn41lCWB, {from: accounts[5]});
		const uint256R4VyrG = await Straight_Fire_FinanceXVwtpjF.totalSupply.call({from: accounts[2]});
		const boolw1h8Vgb = await Straight_Fire_FinanceXVwtpjF.approve.call(addressl7UdlV, uintxzqVExI, {from: accounts[1]});
		const uint256P1ckUL = await Straight_Fire_FinanceXVwtpjF.balanceOf.call(addressoyHj2bW, {from: accounts[0]});
	});
})