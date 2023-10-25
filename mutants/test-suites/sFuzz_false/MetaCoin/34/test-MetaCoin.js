const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinNNeDp4D = await MetaCoin.new({from: accounts[3]});
		const uintfOGKDo6 = BigInt("1225")
		const addressQDxqth = accounts[2]
		const uintutRCri = BigInt("150")
		const addressxFTg4Z1 = accounts[0]
		const uintofzhDLV = BigInt("1198")
		const addressyG9eNx = accounts[1]
		const uintsph2mWs = BigInt("1311")
		const addressmqouRSz = accounts[0]
		const uintveFCMtZ = BigInt("598")
		const addressQ9ydU9m = accounts[1]
		const booloIZgdn = await MetaCoinNNeDp4D.sendCoin.call(addressQDxqth, uintfOGKDo6, {from: accounts[3]});
		const boolGAmb3Ah = await MetaCoinNNeDp4D.sendCoin.call(addressxFTg4Z1, uintutRCri, {from: accounts[4]});
		const boolpoYa6Fn = await MetaCoinNNeDp4D.sendCoin.call(addressyG9eNx, uintofzhDLV, {from: "0x0000000000000000000000000000000000000001"});
		const boolZtVqKWn = await MetaCoinNNeDp4D.sendCoin.call(addressmqouRSz, uintsph2mWs, {from: accounts[4]});
		const boolOa4H6NS = await MetaCoinNNeDp4D.sendCoin.call(addressQ9ydU9m, uintveFCMtZ, {from: accounts[3]});

		assert.equal(boolGAmb3Ah, false)
		assert.equal(boolOa4H6NS, true)
		assert.equal(boolZtVqKWn, false)
		assert.equal(booloIZgdn, true)
		assert.equal(boolpoYa6Fn, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoineoTL1Ov = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttbnRMAc = BigInt("758")
		const addressWhu8voq = accounts[0]
		const uintjybZH5o = BigInt("2039")
		const addressjRXhV5b = "0x0000000000000000000000000000000000000001"
		const uintGMhHuQ = BigInt("393")
		const addresszMYToSw = accounts[0]
		const uintfYLOFPP = BigInt("849")
		const addressdQfjVei = accounts[2]
		const boolHAdRcvm = await MetaCoineoTL1Ov.sendCoin.call(addressWhu8voq, uinttbnRMAc, {from: accounts[2]});
		const boolONKdKFt = await MetaCoineoTL1Ov.sendCoin.call(addressjRXhV5b, uintjybZH5o, {from: accounts[2]});
		const boolvs4UXhp = await MetaCoineoTL1Ov.sendCoin.call(addresszMYToSw, uintGMhHuQ, {from: accounts[4]});
		const boolTgDbkXh = await MetaCoineoTL1Ov.sendCoin.call(addressdQfjVei, uintfYLOFPP, {from: accounts[1]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinPQHdRXp = await MetaCoin.new({from: accounts[2]});
		const uintSVNJ4wf = BigInt("0")
		const address7mdggm = accounts[0]
		const uintHE9tn34 = BigInt("2114")
		const addressih3L3pQ = accounts[5]
		const boolYWBmqtM = await MetaCoinPQHdRXp.sendCoin.call(address7mdggm, uintSVNJ4wf, {from: accounts[0]});
		const boolxLPBcUf = await MetaCoinPQHdRXp.sendCoin.call(addressih3L3pQ, uintHE9tn34, {from: accounts[2]});

		assert.equal(boolYWBmqtM, true)
		assert.equal(boolxLPBcUf, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinPQHdRXp = await MetaCoin.new({from: accounts[2]});
		const uintfYsZWBi = BigInt("1631")
		const addressNuuj4ZK = accounts[0]
		const uintwxMRHuu = BigInt("1542")
		const addressK7qT8j6 = accounts[2]
		const uintNzqkFTa = BigInt("2377")
		const addressFRBXd0Y = accounts[7]
		const uintwBdAW25 = BigInt("1311")
		const addressDBL2Oj = accounts[2]
		const uintcZr1zI = BigInt("1769")
		const addressYCuul0A = "0x0000000000000000000000000000000000000001"
		const uintWHRL8Sr = BigInt("1754")
		const addressluDiKjJ = "0x00000000000000000000000000000000000000-1"
		const boolrpCMbF8 = await MetaCoinPQHdRXp.sendCoin.call(addressNuuj4ZK, uintfYsZWBi, {from: accounts[4]});
		const boolHHXIE1Y = await MetaCoinPQHdRXp.sendCoin.call(addressK7qT8j6, uintwxMRHuu, {from: accounts[4]});
		const boolxLPBcUf = await MetaCoinPQHdRXp.sendCoin.call(addressFRBXd0Y, uintNzqkFTa, {from: accounts[2]});
		const boolWNorig0 = await MetaCoinPQHdRXp.sendCoin.call(addressDBL2Oj, uintwBdAW25, {from: accounts[1]});
		const boolg1VKAPY = await MetaCoinPQHdRXp.sendCoin.call(addressYCuul0A, uintcZr1zI, {from: accounts[2]});
//		const boolkKFyEIL = await MetaCoinPQHdRXp.sendCoin.call(addressluDiKjJ, uintWHRL8Sr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHHXIE1Y, false)
		assert.equal(boolWNorig0, false)
		assert.equal(boolg1VKAPY, true)
		assert.equal(boolrpCMbF8, false)
		assert.equal(boolxLPBcUf, true)
		await expect(MetaCoinPQHdRXp.sendCoin.call(addressluDiKjJ, uintWHRL8Sr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MetaCoin', async () => {
		const MetaCoinPQHdRXp = await MetaCoin.new({from: accounts[2]});
		const uintPK74wC = BigInt("1004")
		const addressSxLl4m9 = accounts[2]
		const uintPN5rPa = BigInt("2640")
		const addressENBtCGx = accounts[10]
		const boolfI8IWoR = await MetaCoinPQHdRXp.sendCoin.call(addressSxLl4m9, uintPK74wC, {from: accounts[0]});
//		const boolxLPBcUf = await MetaCoinPQHdRXp.sendCoin.call(addressENBtCGx, uintPN5rPa, {from: accounts[2]});

		assert.equal(boolfI8IWoR, false)
		await expect(MetaCoinPQHdRXp.sendCoin.call(addressENBtCGx, uintPN5rPa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})