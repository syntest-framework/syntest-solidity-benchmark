const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenlYehM8 = await MIMOToken.new({from: accounts[2]});
		const uinto4zUjZx = BigInt("1764")
		const addressj1U285D = accounts[3]
		const addresszNbAlVI = accounts[2]
		const uint1qiX1p = BigInt("144")
		const addressXBRxQFE = accounts[5]
//		const boolu50IDj = await MIMOTokenlYehM8.transfer.call(addressj1U285D, uinto4zUjZx, {from: accounts[3]});
//		const uintElQ3qxf = await MIMOTokenlYehM8.balanceOf.call(addresszNbAlVI, {from: accounts[2]});
//		const boolstfmHvn = await MIMOTokenlYehM8.approve.call(addressXBRxQFE, uint1qiX1p, {from: accounts[3]});

		await expect(MIMOTokenlYehM8.transfer.call(addressj1U285D, uinto4zUjZx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenm0m8vuc = await MIMOToken.new({from: accounts[2]});
		const uinted1A3Nx = BigInt("1407")
		const addressK8zs6Xt = accounts[0]
		const addressuZKc1UY = accounts[1]
		const addressxJXLnTy = accounts[4]
		const addressDTUSRm = accounts[1]
		const uintBXL1oGP = BigInt("1626")
		const addressgw8NWN = accounts[2]
		const uintqUTQG00 = BigInt("1738")
		const addressSxkScmo = accounts[1]
		const addressjYlKaO = accounts[0]
		const uintEboqRUg = BigInt("616")
		const addressNtCPAH4 = accounts[1]
		const boolhbqloyZ = await MIMOTokenm0m8vuc.approve.call(addressK8zs6Xt, uinted1A3Nx, {from: accounts[1]});
		const uintGbNBXn3 = await MIMOTokenm0m8vuc.allowance.call(addressxJXLnTy, addressuZKc1UY, {from: accounts[2]});
		const uintWJbpiY = await MIMOTokenm0m8vuc.balanceOf.call(addressDTUSRm, {from: accounts[0]});
//		const boolajnVnRK = await MIMOTokenm0m8vuc.transfer.call(addressgw8NWN, uintBXL1oGP, {from: accounts[5]});
//		const boolLrFjaMy = await MIMOTokenm0m8vuc.transferFrom.call(addressjYlKaO, addressSxkScmo, uintqUTQG00, {from: accounts[5]});
//		const boolrQEdgUe = await MIMOTokenm0m8vuc.transfer.call(addressNtCPAH4, uintEboqRUg, {from: accounts[2]});

		assert.equal(boolhbqloyZ, true)
		assert.equal(uintGbNBXn3, BigInt("0"))
		assert.equal(uintWJbpiY, BigInt("0"))
		await expect(MIMOTokenm0m8vuc.transfer.call(addressgw8NWN, uintBXL1oGP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenTUEjmGw = await MIMOToken.new({from: accounts[4]});
		const addresshjN0VAm = accounts[2]
		const uintgOkPtuS = BigInt("1724")
		const addressLhpznyV = "0x0000000000000000000000000000000000000001"
		const addressMVLD6JZ = accounts[0]
		const uintX0cIoF1 = BigInt("959")
		const uintZIlH00w = BigInt("1693")
		const addresss2pyXIi = accounts[0]
		const addressb58bH1c = accounts[0]
		const uintc34KB8M = BigInt("408")
		const uintgueXWqf = await MIMOTokenTUEjmGw.balanceOf.call(addresshjN0VAm, {from: accounts[2]});
		const boolgiOgoOa = await MIMOTokenTUEjmGw.approve.call(addressLhpznyV, uintgOkPtuS, {from: accounts[0]});
		const uintNpqjpoA = await MIMOTokenTUEjmGw.balanceOf.call(addressMVLD6JZ, {from: accounts[2]});
		const uint256wxGMyS = await MIMOTokenTUEjmGw.getFee.call(uintX0cIoF1, {from: accounts[3]});
//		const boolwC0idtE = await MIMOTokenTUEjmGw.transferFrom.call(addressb58bH1c, addresss2pyXIi, uintZIlH00w, {from: accounts[1]});
//		const uint256OMalYqS = await MIMOTokenTUEjmGw.setMinFee.call(uintc34KB8M, {from: accounts[2]});

		assert.equal(boolgiOgoOa, true)
		assert.equal(uint256wxGMyS, BigInt("50000000000000000"))
		assert.equal(uintNpqjpoA, BigInt("0"))
		assert.equal(uintgueXWqf, BigInt("0"))
		await expect(MIMOTokenTUEjmGw.transferFrom.call(addressb58bH1c, addresss2pyXIi, uintZIlH00w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokensIbf2B = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstrv0RhF = accounts[3]
		const addressEB3yhS4 = accounts[0]
		const uintAmbUHyh = BigInt("1098")
		const uintjrqPxmd = BigInt("967")
		const addressjnXakLA = accounts[2]
		const uintaCMvZFv = await MIMOTokensIbf2B.allowance.call(addressEB3yhS4, addresstrv0RhF, {from: accounts[1]});
		const uint256wgEFv88 = await MIMOTokensIbf2B.getFee.call(uintAmbUHyh, {from: accounts[5]});
		const booloIazcL = await MIMOTokensIbf2B.approve.call(addressjnXakLA, uintjrqPxmd, {from: accounts[0]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenNa6jmj = await MIMOToken.new({from: accounts[3]});
		const uintZoOk1C4 = BigInt("128")
		const addressUEhMsTc = accounts[4]
		const uintAs9dIAQ = BigInt("1049")
		const addressO7DQGte = accounts[2]
		const addressIYGb06Z = accounts[1]
		const uintGFoLd4S = await MIMOTokenNa6jmj.totalSupply.call({from: accounts[1]});
//		const boolOm3tGGD = await MIMOTokenNa6jmj.transfer.call(addressUEhMsTc, uintZoOk1C4, {from: accounts[2]});
//		const boolX86odl = await MIMOTokenNa6jmj.transferFrom.call(addressIYGb06Z, addressO7DQGte, uintAs9dIAQ, {from: accounts[1]});

		assert.equal(uintGFoLd4S, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenNa6jmj.transfer.call(addressUEhMsTc, uintZoOk1C4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenbbsfcg1 = await MIMOToken.new({from: accounts[3]});
		const uintdBB18xe = BigInt("579")
		const uintWyQ0PVe = BigInt("1718")
		const uintwWIJkgX = BigInt("1847")
		const addressFlymCPf = "0x0000000000000000000000000000000000000001"
		const addressokIWjpt = accounts[4]
		const uint2561MxxGR = await MIMOTokenbbsfcg1.setFeeRate.call(uintdBB18xe, {from: accounts[0]});
		const uint256VLqRtLt = await MIMOTokenbbsfcg1.setFeeRate.call(uintWyQ0PVe, {from: accounts[1]});
		const boolTGN490 = await MIMOTokenbbsfcg1.approve.call(addressFlymCPf, uintwWIJkgX, {from: accounts[1]});
		const uintCIGG407 = await MIMOTokenbbsfcg1.balanceOf.call(addressokIWjpt, {from: accounts[2]});

		assert.equal(boolTGN490, true)
		assert.equal(uintCIGG407, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenTUEjmGw = await MIMOToken.new({from: accounts[4]});
		const addressmnIObor = accounts[2]
		const uintLjeVKCx = BigInt("1724")
		const addresspRaMmXf = "0x0000000000000000000000000000000000000001"
		const addressFVO3saM = accounts[1]
		const uintxrjTqke = BigInt("959")
		const uintja8X7YI = BigInt("408")
		const uintRxojeL7 = BigInt("1274")
		const uintgueXWqf = await MIMOTokenTUEjmGw.balanceOf.call(addressmnIObor, {from: accounts[2]});
		const boolgiOgoOa = await MIMOTokenTUEjmGw.approve.call(addresspRaMmXf, uintLjeVKCx, {from: accounts[0]});
		const uintNpqjpoA = await MIMOTokenTUEjmGw.balanceOf.call(addressFVO3saM, {from: accounts[2]});
		const uint256wxGMyS = await MIMOTokenTUEjmGw.getFee.call(uintxrjTqke, {from: accounts[3]});
		const uint256OMalYqS = await MIMOTokenTUEjmGw.setMinFee.call(uintja8X7YI, {from: accounts[2]});
		const uint2562ruDEO = await MIMOTokenTUEjmGw.getFee.call(uintRxojeL7, {from: accounts[5]});

		assert.equal(boolgiOgoOa, true)
		assert.equal(uint2562ruDEO, BigInt("50000000000000000"))
		assert.equal(uint256wxGMyS, BigInt("50000000000000000"))
		assert.equal(uintNpqjpoA, BigInt("0"))
		assert.equal(uintgueXWqf, BigInt("0"))
	});
})