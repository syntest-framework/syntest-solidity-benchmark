const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOToken87aNKR = await MIMOToken.new({from: accounts[4]});
		const uintZuxLs6u = BigInt("1350")
		const addresspR12e5A = accounts[1]
		const addressRxgtXPQ = "0x0000000000000000000000000000000000000001"
		const uintyIpj30X = BigInt("304")
		const addressiLjRpTu = accounts[3]
		const addressSBGafzn = accounts[0]
		const uinteBEMnPM = BigInt("981")
//		const boolXhObadK = await MIMOToken87aNKR.transferFrom.call(addressRxgtXPQ, addresspR12e5A, uintZuxLs6u, {from: accounts[3]});
//		const uint256zCWWygc = await MIMOToken87aNKR.setFeeRate.call(uintyIpj30X, {from: accounts[0]});
//		const uinthCpwPkz = await MIMOToken87aNKR.allowance.call(addressSBGafzn, addressiLjRpTu, {from: accounts[4]});
//		const uint256BWlyIH2 = await MIMOToken87aNKR.setFeeRate.call(uinteBEMnPM, {from: accounts[2]});

		await expect(MIMOToken87aNKR.transferFrom.call(addressRxgtXPQ, addresspR12e5A, uintZuxLs6u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenRPfRgJ = await MIMOToken.new({from: accounts[2]});
		const address4OCk4p = accounts[0]
		const addressDOw3kX = accounts[1]
		const addressnNLvL1I = accounts[4]
		const uintoiI6AZf = await MIMOTokenRPfRgJ.totalSupply.call({from: accounts[1]});
		const uintEgqbTlY = await MIMOTokenRPfRgJ.balanceOf.call(address4OCk4p, {from: accounts[1]});
		const uintunVYsMY = await MIMOTokenRPfRgJ.allowance.call(addressnNLvL1I, addressDOw3kX, {from: accounts[0]});

		assert.equal(uintEgqbTlY, BigInt("0"))
		assert.equal(uintoiI6AZf, BigInt("16000000000000000000000000"))
		assert.equal(uintunVYsMY, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenH8lcJFO = await MIMOToken.new({from: accounts[2]});
		const uintlKMxkve = BigInt("653")
		const addresshpCehhQ = accounts[3]
		const uintUUE5eoF = BigInt("441")
		const addressVQq5Zwn = accounts[4]
		const addressmemoJcJ = accounts[4]
		const uintQQL9poy = BigInt("9")
		const addressJk8EjWy = accounts[1]
		const addressbMeBaf0 = accounts[4]
		const booljrjRQZ9 = await MIMOTokenH8lcJFO.approve.call(addresshpCehhQ, uintlKMxkve, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OVXf2pl = await MIMOTokenH8lcJFO.setFeeRate.call(uintUUE5eoF, {from: accounts[5]});
		const uintHlS8V6z = await MIMOTokenH8lcJFO.allowance.call(addressmemoJcJ, addressVQq5Zwn, {from: accounts[2]});
//		const boolnp0CrIb = await MIMOTokenH8lcJFO.transferFrom.call(addressbMeBaf0, addressJk8EjWy, uintQQL9poy, {from: "0x0000000000000000000000000000000000000001"});
//		const uintcFPOiLZ = await MIMOTokenH8lcJFO.totalSupply.call({from: accounts[5]});

		assert.equal(booljrjRQZ9, true)
		assert.equal(uintHlS8V6z, BigInt("0"))
		await expect(MIMOTokenH8lcJFO.transferFrom.call(addressbMeBaf0, addressJk8EjWy, uintQQL9poy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenP4KbvoT = await MIMOToken.new({from: accounts[5]});
		const uintolos0TF = BigInt("1161")
		const uintaAKQcnC = BigInt("413")
		const addressiVCqWnY = accounts[3]
		const uintk1SWkMF = BigInt("71")
		const addressXEsFZat = accounts[0]
		const uinthHOWSTK = await MIMOTokenP4KbvoT.totalSupply.call({from: accounts[4]});
		const uint256V53A5kM = await MIMOTokenP4KbvoT.getFee.call(uintolos0TF, {from: accounts[4]});
//		const boollt2qxKY = await MIMOTokenP4KbvoT.transfer.call(addressiVCqWnY, uintaAKQcnC, {from: accounts[2]});
//		const boolIAcWCt = await MIMOTokenP4KbvoT.transfer.call(addressXEsFZat, uintk1SWkMF, {from: accounts[0]});

		assert.equal(uint256V53A5kM, BigInt("50000000000000000"))
		assert.equal(uinthHOWSTK, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenP4KbvoT.transfer.call(addressiVCqWnY, uintaAKQcnC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenFpIds8t = await MIMOToken.new({from: accounts[3]});
		const uintWEoh2CR = BigInt("15")
		const uintPFVNvWM = BigInt("161")
		const uintGsBNrhu = BigInt("1155")
		const uintY22dU6 = BigInt("485")
		const addresseyeiVCn = accounts[3]
		const uint256cqsIWEN = await MIMOTokenFpIds8t.setFeeRate.call(uintWEoh2CR, {from: accounts[1]});
		const uint256iLq8pC = await MIMOTokenFpIds8t.setMinFee.call(uintPFVNvWM, {from: accounts[4]});
		const uint256ZDkARbk = await MIMOTokenFpIds8t.getFee.call(uintGsBNrhu, {from: accounts[4]});
//		const boolZLZOHT = await MIMOTokenFpIds8t.transfer.call(addresseyeiVCn, uintY22dU6, {from: accounts[2]});

		assert.equal(uint256ZDkARbk, BigInt("50000000000000000"))
		await expect(MIMOTokenFpIds8t.transfer.call(addresseyeiVCn, uintY22dU6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenFpIds8t = await MIMOToken.new({from: accounts[3]});
		const uintLohoyaw = BigInt("1717")
		const addressFryJYGV = "0x0000000000000000000000000000000000000000"
		const addressgd2jK2L = accounts[3]
		const addresshslHrgJ = accounts[1]
		const uintyddtLvU = await MIMOTokenFpIds8t.totalSupply.call({from: accounts[4]});
//		const boolzCxwFJH = await MIMOTokenFpIds8t.transfer.call(addressFryJYGV, uintLohoyaw, {from: accounts[0]});
//		const uintuZtgehH = await MIMOTokenFpIds8t.allowance.call(addresshslHrgJ, addressgd2jK2L, {from: accounts[4]});

		assert.equal(uintyddtLvU, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenFpIds8t.transfer.call(addressFryJYGV, uintLohoyaw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenR5nzD0o = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWpGXQqm = BigInt("1268")
		const addresscVmnsIc = accounts[1]
		const addressMbDVC4B = accounts[1]
		const uintUqaUP6C = BigInt("1059")
		const uintuFwQvHV = BigInt("47")
		const boolmdbd50R = await MIMOTokenR5nzD0o.transfer.call(addresscVmnsIc, uintWpGXQqm, {from: accounts[5]});
		const uintbNYPg4p = await MIMOTokenR5nzD0o.balanceOf.call(addressMbDVC4B, {from: accounts[2]});
		const uint256yGVi1EA = await MIMOTokenR5nzD0o.setMinFee.call(uintUqaUP6C, {from: accounts[0]});
		const uint256G5ObcEJ = await MIMOTokenR5nzD0o.setFeeRate.call(uintuFwQvHV, {from: accounts[5]});
	});
})