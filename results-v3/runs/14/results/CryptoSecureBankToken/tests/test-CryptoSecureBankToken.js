const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwTrxNHM = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintYwmwiWe = BigInt("1343")
		const addressAE5ZIR = "0x0000000000000000000000000000000000000001"
		const addressMissEJ4 = accounts[5]
		const uintagnCCKu = BigInt("1395")
		const addressOfCvDd3 = accounts[1]
		const boolCepb0e7 = await CryptoSecureBankTokenwTrxNHM.approve.call(addressAE5ZIR, uintYwmwiWe, {from: accounts[2]});
		const uintv3hHPa5 = await CryptoSecureBankTokenwTrxNHM.balanceOf.call(addressMissEJ4, {from: accounts[5]});
		const boolZLsvdY3 = await CryptoSecureBankTokenwTrxNHM.transfer.call(addressOfCvDd3, uintagnCCKu, {from: accounts[3]});

		assert.equal(boolCepb0e7, true)
		assert.equal(uintv3hHPa5, BigInt("0"))
		await expect(CryptoSecureBankTokenwTrxNHM.transfer.call(addressOfCvDd3, uintagnCCKu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenesTgCQZ = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressQq1RGl6 = accounts[2]
		const addressqr1rjUU = accounts[4]
		await CryptoSecureBankTokenesTgCQZ.unpause.call({from: accounts[0]});
		const addressfs0syXs = await CryptoSecureBankTokenesTgCQZ.setOwner2.call(addressQq1RGl6, {from: accounts[2]});
		const addressLm5IgzA = await CryptoSecureBankTokenesTgCQZ.removeBlackList.call(addressqr1rjUU, {from: accounts[2]});

		await expect(CryptoSecureBankTokenesTgCQZ.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZWftucG = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintEcO7jvT = BigInt("1450")
		const uintvvYkrs2 = BigInt("1112")
		const addressX7xxvtK = accounts[1]
		const addressUDZdT3u = accounts[0]
		const addressbliOsoa = accounts[1]
		const uintrAqAzWH = await CryptoSecureBankTokenZWftucG.onlyPayloadSize.call(uintEcO7jvT, {from: accounts[4]});
		const uintwa8OMev = await CryptoSecureBankTokenZWftucG.onlyPayloadSize.call(uintvvYkrs2, {from: accounts[3]});
		const uintUCIDGCe = await CryptoSecureBankTokenZWftucG.allowance.call(addressUDZdT3u, addressX7xxvtK, {from: accounts[3]});
		const addressZyWu1j = await CryptoSecureBankTokenZWftucG.transferOwnership.call(addressbliOsoa, {from: accounts[0]});

		await expect(CryptoSecureBankTokenZWftucG.onlyPayloadSize.call(uintEcO7jvT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEXQKYc4 = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintDbO2gWi = BigInt("305")
		const addressScwL9qO = accounts[2]
		const address59Y0QW = accounts[0]
		const addresskP8RPg9 = accounts[3]
		const uintRH75J3J = BigInt("729")
		const address6JUy11 = accounts[4]
		const addressgcZbsC9 = accounts[0]
		const addressd9T5CTO = accounts[1]
		const addressEFBupE = accounts[2]
		const boolCIKdB0B = await CryptoSecureBankTokenEXQKYc4.approve.call(addressScwL9qO, uintDbO2gWi, {from: "0x0000000000000000000000000000000000000001"});
		const uintccfOr1Q = await CryptoSecureBankTokenEXQKYc4.allowance.call(addresskP8RPg9, address59Y0QW, {from: accounts[0]});
		const boolrHMGsEv = await CryptoSecureBankTokenEXQKYc4.transfer.call(address6JUy11, uintRH75J3J, {from: accounts[3]});
		const addressZDrKxeQ = await CryptoSecureBankTokenEXQKYc4.addBlackList.call(addressgcZbsC9, {from: accounts[4]});
		const addressCmzUz7 = await CryptoSecureBankTokenEXQKYc4.setOwner2.call(addressd9T5CTO, {from: accounts[2]});
		const uintlmLdWlx = await CryptoSecureBankTokenEXQKYc4.balanceOf.call(addressEFBupE, {from: accounts[5]});

		assert.equal(boolCIKdB0B, true)
		assert.equal(uintccfOr1Q, BigInt("0"))
		await expect(CryptoSecureBankTokenEXQKYc4.transfer.call(address6JUy11, uintRH75J3J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenc9Jppb = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspRoXNda = accounts[1]
		const addressDfOy5A8 = "0x0000000000000000000000000000000000000001"
		const addressSM7nPmr = accounts[5]
		const addressTftzUmm = accounts[5]
		const addressWeHdvT5 = await CryptoSecureBankTokenc9Jppb.addBlackList.call(addresspRoXNda, {from: accounts[1]});
		const addressJzGC1vv = await CryptoSecureBankTokenc9Jppb.destroyBlackFunds.call(addressDfOy5A8, {from: accounts[2]});
		const uintw9zVZjp = await CryptoSecureBankTokenc9Jppb.balanceOf.call(addressSM7nPmr, {from: "0x0000000000000000000000000000000000000001"});
		const uintFVqDa4D = await CryptoSecureBankTokenc9Jppb.balanceOf.call(addressTftzUmm, {from: accounts[4]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenQub7xLR = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintdIu8RoK = BigInt("837")
		const addressSDDRu6m = accounts[3]
		const addressinJinp2 = accounts[3]
		const uintHI8aOMG = BigInt("1857")
		const addressBSfS6EL = accounts[0]
		const addressaUXnRhj = accounts[3]
		const boolcvlsvQc = await CryptoSecureBankTokenQub7xLR.approve.call(addressSDDRu6m, uintdIu8RoK, {from: accounts[2]});
		const uintMhYng9A = await CryptoSecureBankTokenQub7xLR.balanceOf.call(addressinJinp2, {from: "0x0000000000000000000000000000000000000001"});
		const boolD5c6DTx = await CryptoSecureBankTokenQub7xLR.approve.call(addressBSfS6EL, uintHI8aOMG, {from: accounts[3]});
		const addressMsR5M3 = await CryptoSecureBankTokenQub7xLR.destroyBlackFunds.call(addressaUXnRhj, {from: accounts[1]});

		assert.equal(boolD5c6DTx, true)
		assert.equal(boolcvlsvQc, true)
		assert.equal(uintMhYng9A, BigInt("0"))
		await expect(CryptoSecureBankTokenQub7xLR.destroyBlackFunds.call(addressaUXnRhj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwTrxNHM = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintfF0F76h = BigInt("1343")
		const addressNsl3bKC = "0x0000000000000000000000000000000000000001"
		const addressLat5bf9 = accounts[5]
		const addressUtRViXv = accounts[4]
		const uintZb7pNPd = BigInt("516")
		const addressgxePdB = accounts[1]
		const addressj6ewwUl = accounts[1]
		const boolCepb0e7 = await CryptoSecureBankTokenwTrxNHM.approve.call(addressNsl3bKC, uintfF0F76h, {from: accounts[2]});
		const uintv3hHPa5 = await CryptoSecureBankTokenwTrxNHM.balanceOf.call(addressLat5bf9, {from: accounts[5]});
		const addressWlVWrnf = await CryptoSecureBankTokenwTrxNHM.transferOwnership.call(addressUtRViXv, {from: accounts[1]});
		const boolZLsvdY3 = await CryptoSecureBankTokenwTrxNHM.transfer.call(addressgxePdB, uintZb7pNPd, {from: accounts[3]});
		const addressBQ4w93x = await CryptoSecureBankTokenwTrxNHM.addBlackList.call(addressj6ewwUl, {from: accounts[4]});

		assert.equal(boolCepb0e7, true)
		assert.equal(uintv3hHPa5, BigInt("0"))
		await expect(CryptoSecureBankTokenwTrxNHM.transferOwnership.call(addressUtRViXv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenM9wbHD = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressbUyPc3e = accounts[5]
		const address9BImd2 = accounts[0]
		const addressucElk5g = accounts[3]
		const addressTt8OOSy = accounts[0]
		const addressdTOfyTA = await CryptoSecureBankTokenM9wbHD.getOwner.call({from: accounts[2]});
		const uint7cp7lb = await CryptoSecureBankTokenM9wbHD.allowance.call(address9BImd2, addressbUyPc3e, {from: accounts[2]});
		const uintLIX7ZbT = await CryptoSecureBankTokenM9wbHD.balanceOf.call(addressucElk5g, {from: accounts[0]});
		const boolgEt1jvb = await CryptoSecureBankTokenM9wbHD.getBlackListStatus.call(addressTt8OOSy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressdTOfyTA, 0x227A90cA886E13cf45767C91E5833b84d5b96b5b)
		assert.equal(boolgEt1jvb, false)
		assert.equal(uint7cp7lb, BigInt("0"))
		assert.equal(uintLIX7ZbT, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbDXqnNF = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressSpQwhkG = accounts[5]
		const addressAx5bA36 = "0x0000000000000000000000000000000000000001"
		const uintsqWAXl0 = BigInt("1394")
		const addressaQjOqOs = accounts[3]
		const uintdYeDJTD = BigInt("315")
		const uintP9JhXNm = BigInt("1398")
		const addressF9ioDvz = await CryptoSecureBankTokenbDXqnNF.getOwner.call({from: accounts[0]});
		const uintXIyntwd = await CryptoSecureBankTokenbDXqnNF.allowance.call(addressAx5bA36, addressSpQwhkG, {from: accounts[2]});
		const boolACfBIWi = await CryptoSecureBankTokenbDXqnNF.transfer.call(addressaQjOqOs, uintsqWAXl0, {from: accounts[3]});
		const uintU1Sx2j4 = await CryptoSecureBankTokenbDXqnNF.setParams.call(uintP9JhXNm, uintdYeDJTD, {from: accounts[1]});

		assert.equal(addressF9ioDvz, 0x681Db1Eb3858fB2ED53F7F89995933bf73EdbAbF)
		assert.equal(boolACfBIWi, true)
		assert.equal(uintXIyntwd, BigInt("0"))
		await expect(CryptoSecureBankTokenbDXqnNF.setParams.call(uintP9JhXNm, uintdYeDJTD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwTrxNHM = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintif7PG0a = BigInt("1343")
		const addressMzCgE7h = "0x0000000000000000000000000000000000000001"
		const addressqNJibG7 = accounts[5]
		const uintOgYjkc6 = BigInt("1395")
		const addresssyraWl = accounts[1]
		const boolCepb0e7 = await CryptoSecureBankTokenwTrxNHM.approve.call(addressMzCgE7h, uintif7PG0a, {from: accounts[2]});
		const uintv3hHPa5 = await CryptoSecureBankTokenwTrxNHM.balanceOf.call(addressqNJibG7, {from: accounts[5]});
		const uintbmGYQuQ = await CryptoSecureBankTokenwTrxNHM.totalSupply.call({from: accounts[4]});
		const boolZLsvdY3 = await CryptoSecureBankTokenwTrxNHM.transfer.call(addresssyraWl, uintOgYjkc6, {from: accounts[3]});

		assert.equal(boolCepb0e7, true)
		assert.equal(uintbmGYQuQ, BigInt("100000000000000000000000000"))
		assert.equal(uintv3hHPa5, BigInt("0"))
		await expect(CryptoSecureBankTokenwTrxNHM.transfer.call(addresssyraWl, uintOgYjkc6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenSHh8fcD = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresslYpPu1l = accounts[2]
		const uintCyPAzcw = BigInt("1668")
		const addressFmk4nnY = accounts[4]
		const uintxlICEa7 = BigInt("354")
		const addressOBNfHYS = await CryptoSecureBankTokenSHh8fcD.addBlackList.call(addresslYpPu1l, {from: accounts[4]});
		const boolPlXexhU = await CryptoSecureBankTokenSHh8fcD.approve.call(addressFmk4nnY, uintCyPAzcw, {from: accounts[1]});
		const uintuqJQHg = await CryptoSecureBankTokenSHh8fcD.onlyPayloadSize.call(uintxlICEa7, {from: accounts[4]});
		await CryptoSecureBankTokenSHh8fcD.unpause.call({from: accounts[2]});

		assert.equal(boolPlXexhU, true)
		await expect(CryptoSecureBankTokenSHh8fcD.onlyPayloadSize.call(uintxlICEa7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwTrxNHM = await CryptoSecureBankToken.new({from: accounts[0]});
		const uinty9Ydy9h = BigInt("1343")
		const addressAXDZhOv = "0x0000000000000000000000000000000000000000"
		const uintJUZBvje = BigInt("1178")
		const boolCepb0e7 = await CryptoSecureBankTokenwTrxNHM.approve.call(addressAXDZhOv, uinty9Ydy9h, {from: accounts[2]});
		const boolasfKgVL = await CryptoSecureBankTokenwTrxNHM.redeem.call(uintJUZBvje, {from: accounts[0]});

		assert.equal(boolCepb0e7, true)
		assert.equal(boolasfKgVL, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwTrxNHM = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresswHichTn = accounts[2]
		const uintZvwi6IS = BigInt("1343")
		const addressXgnRB2D = "0x0000000000000000000000000000000000000000"
		await CryptoSecureBankTokenwTrxNHM.pause.call({from: accounts[0]});
		const addressPOu5bji = await CryptoSecureBankTokenwTrxNHM.destroyBlackFunds.call(addresswHichTn, {from: accounts[2]});
		const boolCepb0e7 = await CryptoSecureBankTokenwTrxNHM.approve.call(addressXgnRB2D, uintZvwi6IS, {from: accounts[2]});

		await expect(CryptoSecureBankTokenwTrxNHM.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwTrxNHM = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressopRFjat = accounts[6]
		const addressLZ6FA2i = "0x0000000000000000000000000000000000000001"
		const uintMX6kcZ6 = BigInt("2003")
		const addressRqoXB6y = accounts[4]
		const uintv3hHPa5 = await CryptoSecureBankTokenwTrxNHM.balanceOf.call(addressopRFjat, {from: accounts[5]});
		const addressa1cTyd = await CryptoSecureBankTokenwTrxNHM.transferOwnership.call(addressLZ6FA2i, {from: accounts[0]});
		const boolnM57mGl = await CryptoSecureBankTokenwTrxNHM.approve.call(addressRqoXB6y, uintMX6kcZ6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolnM57mGl, true)
		assert.equal(uintv3hHPa5, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenbDXqnNF = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintdSe88yY = BigInt("860")
		const addressRYVUBv9 = accounts[1]
		const addressBnt9iBz = accounts[4]
		const addressIck2d4x = accounts[2]
		const addressTpDJKRc = accounts[5]
		const addresskYpRvdu = "0x0000000000000000000000000000000000000001"
		const uintQy1WxH9 = BigInt("1394")
		const addressZorIoJs = accounts[3]
		const uintLD9EmhD = BigInt("315")
		const uintm56S3b9 = BigInt("1398")
		const boolTdi8pbN = await CryptoSecureBankTokenbDXqnNF.transferFrom.call(addressBnt9iBz, addressRYVUBv9, uintdSe88yY, {from: accounts[1]});
		const addressDe68xoc = await CryptoSecureBankTokenbDXqnNF.transferOwnership.call(addressIck2d4x, {from: accounts[4]});
		const uintT4KVwH = await CryptoSecureBankTokenbDXqnNF.totalSupply.call({from: accounts[4]});
		const uintXIyntwd = await CryptoSecureBankTokenbDXqnNF.allowance.call(addresskYpRvdu, addressTpDJKRc, {from: accounts[2]});
		const boolACfBIWi = await CryptoSecureBankTokenbDXqnNF.transfer.call(addressZorIoJs, uintQy1WxH9, {from: accounts[3]});
		const uintU1Sx2j4 = await CryptoSecureBankTokenbDXqnNF.setParams.call(uintm56S3b9, uintLD9EmhD, {from: accounts[1]});

		await expect(CryptoSecureBankTokenbDXqnNF.transferFrom.call(addressBnt9iBz, addressRYVUBv9, uintdSe88yY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwTrxNHM = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintFSwgofG = BigInt("1343")
		const addressVCbNkhF = "0x0000000000000000000000000000000000000002"
		const addressHxOoEHV = accounts[4]
		const boolCepb0e7 = await CryptoSecureBankTokenwTrxNHM.approve.call(addressVCbNkhF, uintFSwgofG, {from: accounts[2]});
		const boolbHwq2hA = await CryptoSecureBankTokenwTrxNHM.deprecate.call(addressHxOoEHV, {from: accounts[0]});

		assert.equal(boolCepb0e7, true)
		assert.equal(boolbHwq2hA, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwTrxNHM = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressKYhQkAa = accounts[3]
		const uintxf3eAcY = BigInt("1769")
		const addressw91UJDc = accounts[0]
		const addressMtBuGGL = "0x0000000000000000000000000000000000000001"
		const addressRUQmyQN = await CryptoSecureBankTokenwTrxNHM.removeBlackList.call(addressKYhQkAa, {from: accounts[0]});
		const boolZ2eXqiQ = await CryptoSecureBankTokenwTrxNHM.transferFrom.call(addressMtBuGGL, addressw91UJDc, uintxf3eAcY, {from: accounts[1]});

		await expect(CryptoSecureBankTokenwTrxNHM.transferFrom.call(addressMtBuGGL, addressw91UJDc, uintxf3eAcY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenK2NSAQU = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintaAMhNCV = BigInt("366")
		const uintQywnHqs = BigInt("1525")
		const addressS9eianM = accounts[3]
		const uintYrmULPb = await CryptoSecureBankTokenK2NSAQU.setParams.call(uintQywnHqs, uintaAMhNCV, {from: accounts[2]});
		await CryptoSecureBankTokenK2NSAQU.whenNotPaused.call({from: accounts[2]});
		const addressxkea2Pz = await CryptoSecureBankTokenK2NSAQU.destroyBlackFunds.call(addressS9eianM, {from: accounts[3]});

		await expect(CryptoSecureBankTokenK2NSAQU.setParams.call(uintQywnHqs, uintaAMhNCV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwTrxNHM = await CryptoSecureBankToken.new({from: accounts[0]});
		const addresswK1HU8j = accounts[5]
		const addressn9hyXkl = accounts[3]
		const uintv3hHPa5 = await CryptoSecureBankTokenwTrxNHM.balanceOf.call(addresswK1HU8j, {from: accounts[5]});
		const addressWwoUulQ = await CryptoSecureBankTokenwTrxNHM.setOwner2.call(addressn9hyXkl, {from: accounts[0]});

		assert.equal(uintv3hHPa5, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwTrxNHM = await CryptoSecureBankToken.new({from: accounts[0]});
		const uint3jwIYZ = BigInt("0")
		const addressPgen4jU = accounts[2]
		const addressrIfElMM = accounts[1]
		const boolydpUrEp = await CryptoSecureBankTokenwTrxNHM.transferFrom.call(addressrIfElMM, addressPgen4jU, uint3jwIYZ, {from: accounts[3]});

		assert.equal(boolydpUrEp, true)
	});
})