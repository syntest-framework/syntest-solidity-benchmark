const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringAylYjAb = "HaBazrfcTiOISFr0VZqIKAiaBqKUwC2cikrgDCbo3vINh89p7qqIF6s7NAIyTbwBugH7ajdWHsG"
		const stringUHYE1mj = "1ImiENjq6w799umXII4bM1DP6OXSCxjQ4AA41mM5Rrlns1daietIEgObg866pa4ovdCma74Sma"
		const uintxpMhVkv = BigInt("145")
		const DSPqPirNw = await DSP.new(stringAylYjAb, stringUHYE1mj, uintxpMhVkv, {from: accounts[4]});
		const addressRZMpJWe = accounts[0]
		const uintg8w21BO = BigInt("1365")
		const addressqVTiDBS = accounts[2]
		const uintg078dSr = BigInt("102")
		const addressGUAntw2 = accounts[1]
		const uintoSBaqT = BigInt("1455")
		const addressbru0tY7 = accounts[4]
		const addressJl14BxK = await DSPqPirNw.transferOwnership.call(addressRZMpJWe, {from: accounts[4]});
		await DSPqPirNw.unpause.call({from: accounts[3]});
		const boolr6kIB3K = await DSPqPirNw.decreaseAllowance.call(addressqVTiDBS, uintg8w21BO, {from: accounts[1]});
		const boolrnUIjcI = await DSPqPirNw.increaseAllowance.call(addressGUAntw2, uintg078dSr, {from: accounts[3]});
		const boolDeyrdDS = await DSPqPirNw.decreaseAllowance.call(addressbru0tY7, uintoSBaqT, {from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPoptvkuW = await DSP.new({from: accounts[0]});
		const addressI4JfUtk = accounts[4]
		const uintvY1TL5T = BigInt("1132")
		const addressknilNaS = accounts[2]
		const addressVpvQS2F = await DSPoptvkuW.removePauser.call(addressI4JfUtk, {from: accounts[3]});
		await DSPoptvkuW.whenNotPaused.call({from: accounts[3]});
		const boolKXJg8MT = await DSPoptvkuW.increaseAllowance.call(addressknilNaS, uintvY1TL5T, {from: accounts[3]});

		await expect(DSPoptvkuW.removePauser.call(addressI4JfUtk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmBJtmV = await DSP.new({from: accounts[2]});
		const addressowKruSa = accounts[5]
		const uintLJdkBRF = BigInt("119")
		const addresszgB0pn2 = "0x0000000000000000000000000000000000000001"
		const addressqbecxh = accounts[0]
		const uintGm3F0zm = BigInt("1425")
		const addressRM4us3 = accounts[0]
		await DSPmBJtmV.renouncePauser.call({from: accounts[2]});
		const boolFp3qhUF = await DSPmBJtmV.acceptOwnership.call({from: accounts[4]});
		const boolBgGLRg1 = await DSPmBJtmV.acceptOwnership.call({from: accounts[2]});
		const boolowls0Vx = await DSPmBJtmV.isPauser.call(addressowKruSa, {from: "0x0000000000000000000000000000000000000001"});
		const boolYwP54DX = await DSPmBJtmV.unlock.call(addresszgB0pn2, uintLJdkBRF, {from: accounts[3]});
		const boolYnADNxc = await DSPmBJtmV.isPauser.call(addressqbecxh, {from: accounts[4]});
		const boolFjMTPIQ = await DSPmBJtmV.unlock.call(addressRM4us3, uintGm3F0zm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPmBJtmV.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const addressaPOZvHu = accounts[3]
		const uintE6FeDef = BigInt("1227")
		const addressY9sZ04t = accounts[2]
		const addressikngwZi = accounts[4]
		const uint6tfTtD = BigInt("141")
		const addressBCH8usX = accounts[4]
		const boollgRKlVC = await DSPNxu0h3M.isOwner.call(addressaPOZvHu, {from: accounts[2]});
		const boolv7SRZNb = await DSPNxu0h3M.transferFrom.call(addressikngwZi, addressY9sZ04t, uintE6FeDef, {from: accounts[3]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(addressBCH8usX, uint6tfTtD, {from: accounts[1]});

		assert.equal(boollgRKlVC, false)
		await expect(DSPNxu0h3M.transferFrom.call(addressikngwZi, addressY9sZ04t, uintE6FeDef, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const uintyVzxjKD = BigInt("2040")
		const uintku09LJG = BigInt("735")
		const addressCWhNzu = accounts[2]
		const uintyTe4ABt = BigInt("703")
		const addressPYhH8tg = accounts[3]
		await DSPNxu0h3M.onlyPauser.call({from: accounts[0]});
		const boolZz4mKPO = await DSPNxu0h3M.transferWithLock.call(addressCWhNzu, uintku09LJG, uintyVzxjKD, {from: accounts[1]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(addressPYhH8tg, uintyTe4ABt, {from: accounts[1]});
		await DSPNxu0h3M.whenPaused.call({from: accounts[1]});

		await expect(DSPNxu0h3M.onlyPauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPE1RuNlB = await DSP.new({from: accounts[3]});
		const addressZdZWVve = accounts[2]
		const addressNIoIhOr = accounts[4]
		const addressI3Uy7WH = "0x0000000000000000000000000000000000000001"
		const uint256maIaWFN = await DSPE1RuNlB.totalSupply.call({from: accounts[2]});
		const boolhwnnvv = await DSPE1RuNlB.freezeAccount.call(addressZdZWVve, {from: accounts[2]});
		const uint256BrXqBSV = await DSPE1RuNlB.balanceOf.call(addressNIoIhOr, {from: "0x0000000000000000000000000000000000000001"});
		const booldEoFJk = await DSPE1RuNlB.isOwner.call(addressI3Uy7WH, {from: accounts[1]});

		assert.equal(uint256maIaWFN, BigInt("100000000000000000000000000000"))
		await expect(DSPE1RuNlB.freezeAccount.call(addressZdZWVve, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const addressLGgOZhW = accounts[4]
		const addressUCsAxoI = "0x0000000000000000000000000000000000000001"
		const addressentEw1h = accounts[3]
		const uintqY2rzI9 = BigInt("1227")
		const addresslA1WgIj = accounts[2]
		const addressjs5JmOv = accounts[4]
		const addresslSeyroA = accounts[4]
		const uintjVD17M3 = BigInt("141")
		const addressoMfT2Xv = accounts[4]
		const boollgRKlVC = await DSPNxu0h3M.isOwner.call(addressLGgOZhW, {from: accounts[2]});
		const addressuQjnTTG = await DSPNxu0h3M.removePauser.call(addressUCsAxoI, {from: accounts[1]});
		const addressTezc5en = await DSPNxu0h3M.transferOwnership.call(addressentEw1h, {from: accounts[3]});
		const boolv7SRZNb = await DSPNxu0h3M.transferFrom.call(addressjs5JmOv, addresslA1WgIj, uintqY2rzI9, {from: accounts[3]});
		const uint256FFsnRaw = await DSPNxu0h3M.balanceOf.call(addresslSeyroA, {from: accounts[1]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(addressoMfT2Xv, uintjVD17M3, {from: accounts[1]});

		assert.equal(boollgRKlVC, true)
		await expect(DSPNxu0h3M.removePauser.call(addressUCsAxoI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const uintOlx1SNs = BigInt("141")
		const addressGbjwgmo = accounts[3]
		const uintBQzetg8 = BigInt("93")
		const addressjwSsJm2 = accounts[1]
		const boolAVuNIcH = await DSPNxu0h3M.paused.call({from: accounts[5]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(addressGbjwgmo, uintOlx1SNs, {from: accounts[1]});
		const boolCaJTirN = await DSPNxu0h3M.increaseAllowance.call(addressjwSsJm2, uintBQzetg8, {from: accounts[3]});

		assert.equal(boolAVuNIcH, false)
		await expect(DSPNxu0h3M.mint.call(addressGbjwgmo, uintOlx1SNs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const addressTJPuZLO = accounts[3]
		const uintcrrxTKw = BigInt("1227")
		const addressp4YClPS = accounts[3]
		const addressAKgTWNP = accounts[4]
		const uintRqLVV1J = BigInt("141")
		const addressr3910bI = accounts[4]
		const stringBx5nzar = await DSPNxu0h3M.symbol.call({from: accounts[2]});
		const boollgRKlVC = await DSPNxu0h3M.isOwner.call(addressTJPuZLO, {from: accounts[2]});
		const stringvxNTV03 = await DSPNxu0h3M.symbol.call({from: accounts[0]});
		const boolv7SRZNb = await DSPNxu0h3M.transferFrom.call(addressAKgTWNP, addressp4YClPS, uintcrrxTKw, {from: accounts[3]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(addressr3910bI, uintRqLVV1J, {from: accounts[1]});

		assert.equal(boollgRKlVC, false)
		assert.equal(stringBx5nzar, "DSP")
		assert.equal(stringvxNTV03, "DSP")
		await expect(DSPNxu0h3M.transferFrom.call(addressAKgTWNP, addressp4YClPS, uintcrrxTKw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPgkJX2PA = await DSP.new({from: accounts[3]});
		const uintYInClZ6 = BigInt("164")
		const addressdKi68RI = accounts[3]
		const addresswmkkfDd = accounts[2]
		const addressHlE4FRI = accounts[2]
		const uintB0JlL8 = BigInt("951")
		const uintxzR5UsB = BigInt("1696")
		const addressDfLDm9S = accounts[1]
		const stringpYrXqDk = await DSPgkJX2PA.name.call({from: accounts[5]});
		const boolGxVoUmR = await DSPgkJX2PA.transferFrom.call(addresswmkkfDd, addressdKi68RI, uintYInClZ6, {from: accounts[4]});
		await DSPgkJX2PA.whenNotPaused.call({from: accounts[2]});
		const boolJmc5Sqq = await DSPgkJX2PA.paused.call({from: accounts[5]});
		const boolvkxhX1m = await DSPgkJX2PA.isOwner.call(addressHlE4FRI, {from: accounts[1]});
		const boolV53oNai = await DSPgkJX2PA.transferWithLock.call(addressDfLDm9S, uintxzR5UsB, uintB0JlL8, {from: accounts[4]});

		assert.equal(stringpYrXqDk, "DSP")
		await expect(DSPgkJX2PA.transferFrom.call(addresswmkkfDd, addressdKi68RI, uintYInClZ6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const uintoXPENeE = BigInt("1037")
		const addressZsQA6wN = accounts[2]
		const uintVkPTO98 = BigInt("141")
		const addressdq52k9 = accounts[4]
		const stringBx5nzar = await DSPNxu0h3M.symbol.call({from: accounts[2]});
		const boolIsYOgbi = await DSPNxu0h3M.decreaseAllowance.call(addressZsQA6wN, uintoXPENeE, {from: accounts[4]});
		const stringvxNTV03 = await DSPNxu0h3M.symbol.call({from: accounts[0]});
		await DSPNxu0h3M.f.call({from: accounts[2]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(addressdq52k9, uintVkPTO98, {from: accounts[1]});

		assert.equal(stringBx5nzar, "DSP")
		await expect(DSPNxu0h3M.decreaseAllowance.call(addressZsQA6wN, uintoXPENeE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const uintqO870EQ = BigInt("1125")
		const addresssc3ReyV = accounts[2]
		const uintLzhuMN = BigInt("141")
		const addressolBNsUt = accounts[4]
		const uintNQnEqOo = BigInt("959")
		const addressVXod9eK = accounts[2]
		const boolbAtfMjJ = await DSPNxu0h3M.approve.call(addresssc3ReyV, uintqO870EQ, {from: accounts[2]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(addressolBNsUt, uintLzhuMN, {from: accounts[1]});
		await DSPNxu0h3M.pause.call({from: accounts[1]});
		const boolIqBekO3 = await DSPNxu0h3M.transfer.call(addressVXod9eK, uintNQnEqOo, {from: accounts[3]});

		assert.equal(boolbAtfMjJ, true)
		await expect(DSPNxu0h3M.mint.call(addressolBNsUt, uintLzhuMN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const uintrwZPZqu = BigInt("1227")
		const addresstgXaH1A = accounts[3]
		const addressQE0GL62 = accounts[4]
		const uintP3DLoiZ = BigInt("141")
		const address8gwrlU = accounts[4]
		const addressqEdAOuK = accounts[1]
		await DSPNxu0h3M.f.call({from: accounts[4]});
		const stringBx5nzar = await DSPNxu0h3M.symbol.call({from: accounts[2]});
		const boolv7SRZNb = await DSPNxu0h3M.transferFrom.call(addressQE0GL62, addresstgXaH1A, uintrwZPZqu, {from: accounts[3]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(address8gwrlU, uintP3DLoiZ, {from: accounts[1]});
		const boolWtVF3J = await DSPNxu0h3M.isOwner.call(addressqEdAOuK, {from: accounts[1]});

		await expect(DSPNxu0h3M.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const uintazI582P = BigInt("1027")
		const addressvxT8cMt = accounts[1]
		const addressAMgzw7 = accounts[3]
		const uintn86bSGL = BigInt("1227")
		const addressj7roUs9 = accounts[3]
		const addressRTeR1j0 = accounts[4]
		const uintl3RAvDo = BigInt("141")
		const addressGZQrA3U = accounts[4]
		const booldKosr7g = await DSPNxu0h3M.transfer.call(addressvxT8cMt, uintazI582P, {from: accounts[1]});
		const boollgRKlVC = await DSPNxu0h3M.isOwner.call(addressAMgzw7, {from: accounts[2]});
		const boolv7SRZNb = await DSPNxu0h3M.transferFrom.call(addressRTeR1j0, addressj7roUs9, uintn86bSGL, {from: accounts[3]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(addressGZQrA3U, uintl3RAvDo, {from: accounts[1]});

		await expect(DSPNxu0h3M.transfer.call(addressvxT8cMt, uintazI582P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPddtS3ae = await DSP.new({from: accounts[2]});
		const addressWerbv21 = "0x0000000000000000000000000000000000000001"
		const addressfJlQ3Yr = accounts[1]
		const addressKd5vRro = accounts[5]
		const uint256nQoobGY = await DSPddtS3ae.balanceOf.call(addressWerbv21, {from: accounts[0]});
		const addressiavEhN4 = await DSPddtS3ae.transferOwnership.call(addressfJlQ3Yr, {from: accounts[3]});
		await DSPddtS3ae.whenPaused.call({from: accounts[2]});
		await DSPddtS3ae.whenPaused.call({from: accounts[1]});
		const boolArmS2t5 = await DSPddtS3ae.freezeAccount.call(addressKd5vRro, {from: accounts[2]});
		await DSPddtS3ae.pause.call({from: accounts[1]});

		assert.equal(uint256nQoobGY, BigInt("0"))
		await expect(DSPddtS3ae.transferOwnership.call(addressfJlQ3Yr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const uintyFc7cML = BigInt("1227")
		const addressJrZtYN3 = accounts[2]
		const addressWuC7l2 = accounts[4]
		const uintyJP0P1 = BigInt("141")
		const addressMFjwYLs = accounts[5]
		const uint8AGTngkC = await DSPNxu0h3M.decimals.call({from: accounts[2]});
		const boolv7SRZNb = await DSPNxu0h3M.transferFrom.call(addressWuC7l2, addressJrZtYN3, uintyFc7cML, {from: accounts[3]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(addressMFjwYLs, uintyJP0P1, {from: accounts[1]});

		assert.equal(uint8AGTngkC, BigInt("18"))
		await expect(DSPNxu0h3M.transferFrom.call(addressWuC7l2, addressJrZtYN3, uintyFc7cML, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbwTCjSC = await DSP.new({from: accounts[0]});
		const addressk9CzCTI = accounts[1]
		const uintnHll8x0 = BigInt("426")
		const addressq8sWWHa = accounts[1]
		const addressbXOb5Da = accounts[4]
		const uint256btKVaA = await DSPbwTCjSC.balanceOf.call(addressk9CzCTI, {from: accounts[3]});
		const boolcangzcr = await DSPbwTCjSC.increaseAllowance.call(addressq8sWWHa, uintnHll8x0, {from: accounts[0]});
		const booliNJCOFi = await DSPbwTCjSC.unfreezeAccount.call(addressbXOb5Da, {from: accounts[1]});

		assert.equal(boolcangzcr, true)
		assert.equal(uint256btKVaA, BigInt("0"))
		await expect(DSPbwTCjSC.unfreezeAccount.call(addressbXOb5Da, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const addressFLMzAfv = accounts[2]
		const uintGGZAHP9 = BigInt("163")
		const addressS2LQmxR = accounts[3]
		const addressiHzRV5Z = accounts[1]
		const addresshDZdr9r = await DSPNxu0h3M.addPauser.call(addressFLMzAfv, {from: accounts[4]});
		const boolOsADTv0 = await DSPNxu0h3M.mint.call(addressS2LQmxR, uintGGZAHP9, {from: accounts[1]});
		const addressy80Pdus = await DSPNxu0h3M.removePauser.call(addressiHzRV5Z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPNxu0h3M.mint.call(addressS2LQmxR, uintGGZAHP9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const addressCtUbRJi = accounts[5]
		const addressHICD7pg = accounts[2]
		const uintCzh8XCd = BigInt("1355")
		const addresszregxCC = accounts[2]
		const uintHR3qO5M = BigInt("1776")
		const addressgNmP4N0 = accounts[2]
		const addressZZJjN4F = accounts[5]
		const uint256zObpac5 = await DSPNxu0h3M.allowance.call(addressHICD7pg, addressCtUbRJi, {from: accounts[1]});
		const boolnf7hOqB = await DSPNxu0h3M.burnFrombyOwner.call(addresszregxCC, uintCzh8XCd, {from: accounts[5]});
		const boolv7SRZNb = await DSPNxu0h3M.transferFrom.call(addressZZJjN4F, addressgNmP4N0, uintHR3qO5M, {from: accounts[3]});

		assert.equal(uint256zObpac5, BigInt("0"))
		await expect(DSPNxu0h3M.burnFrombyOwner.call(addresszregxCC, uintCzh8XCd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const addressMykAaYV = accounts[4]
		const uintTXSAKbB = BigInt("25")
		const addressBnOMrPf = accounts[4]
		const booluMnMHq0 = await DSPNxu0h3M.freezeAccount.call(addressMykAaYV, {from: accounts[4]});
		const boolT8Bu1S = await DSPNxu0h3M.transfer.call(addressBnOMrPf, uintTXSAKbB, {from: accounts[4]});

		assert.equal(boolT8Bu1S, true)
		assert.equal(booluMnMHq0, true)
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const addressRLnx4K9 = accounts[2]
		const uintAkNsq8c = BigInt("1776")
		const addressaeorXIV = accounts[3]
		const addressBF87EX4 = accounts[4]
		const addressiEEW9LI = await DSPNxu0h3M.upgradeTo.call(addressRLnx4K9, {from: accounts[4]});
		const boolv7SRZNb = await DSPNxu0h3M.transferFrom.call(addressBF87EX4, addressaeorXIV, uintAkNsq8c, {from: accounts[3]});

		await expect(DSPNxu0h3M.transferFrom.call(addressBF87EX4, addressaeorXIV, uintAkNsq8c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDOuYNjW = await DSP.new({from: accounts[0]});
		const addressBzMOta = accounts[5]
		const addressIycGuR = accounts[5]
		const boolXSUPy8Y = await DSPDOuYNjW.unfreezeAccount.call(addressBzMOta, {from: accounts[0]});
		const uint256ER3aifS = await DSPDOuYNjW.balanceOf.call(addressIycGuR, {from: accounts[4]});
		await DSPDOuYNjW.onlyPauser.call({from: accounts[5]});

		await expect(DSPDOuYNjW.unfreezeAccount.call(addressBzMOta, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const uintC57cD1q = BigInt("502")
		const addressjoVjqlR = accounts[4]
		const uintOZzQ4oy = BigInt("690")
		const addresst2v4Eak = accounts[2]
		const addressFWpgfkR = accounts[4]
		const addressystRREG = accounts[1]
		const boolqzSX88i = await DSPNxu0h3M.mint.call(addressjoVjqlR, uintC57cD1q, {from: accounts[4]});
		const boolv7SRZNb = await DSPNxu0h3M.transferFrom.call(addressFWpgfkR, addresst2v4Eak, uintOZzQ4oy, {from: accounts[3]});
		const booljVvmrSl = await DSPNxu0h3M.unfreezeAccount.call(addressystRREG, {from: accounts[2]});

		assert.equal(boolqzSX88i, true)
		await expect(DSPNxu0h3M.transferFrom.call(addressFWpgfkR, addresst2v4Eak, uintOZzQ4oy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPK4FXZsi = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressv88tbAf = accounts[0]
		const addressfr6XnE6 = await DSPK4FXZsi.transferOwnership.call(addressv88tbAf, {from: "0x0000000000000000000000000000000000000001"});
		const boolOlTEiOR = await DSPK4FXZsi.acceptOwnership.call({from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPNxu0h3M = await DSP.new({from: accounts[4]});
		const uintbsUJAI7 = BigInt("25")
		const addressZszW6xE = accounts[4]
		const addressF1c3Iri = accounts[1]
		const uintHlp2hhC = BigInt("778")
		const addresszMhfdy = accounts[3]
		const addressvj8tIKo = accounts[3]
		const boolT8Bu1S = await DSPNxu0h3M.transfer.call(addressZszW6xE, uintbsUJAI7, {from: accounts[4]});
		const addresssZTsyF9 = await DSPNxu0h3M.removePauser.call(addressF1c3Iri, {from: accounts[4]});
		const boolJ5knTu2 = await DSPNxu0h3M.paused.call({from: accounts[5]});
		const boolcILRv2W = await DSPNxu0h3M.transferFrom.call(addressvj8tIKo, addresszMhfdy, uintHlp2hhC, {from: accounts[3]});

		assert.equal(boolT8Bu1S, true)
		await expect(DSPNxu0h3M.removePauser.call(addressF1c3Iri, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPs7UTCX = await DSP.new({from: accounts[4]});
		const addresszlr1GgT = accounts[2]
		const uintAV7DKkT = BigInt("1548")
		const addressMuCRaj6 = accounts[1]
		await DSPs7UTCX.pause.call({from: accounts[4]});
		await DSPs7UTCX.onlyNewOwner.call({from: accounts[2]});
		const addressFCh3KSi = await DSPs7UTCX.notFrozen.call(addresszlr1GgT, {from: accounts[1]});
		const uint8OGrjX5F = await DSPs7UTCX.decimals.call({from: accounts[4]});
		const boolKknfMS = await DSPs7UTCX.transfer.call(addressMuCRaj6, uintAV7DKkT, {from: accounts[1]});

		await expect(DSPs7UTCX.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDOuYNjW = await DSP.new({from: accounts[0]});
		const uintiEaFzIv = BigInt("2013")
		const addressQfIqT3z = accounts[0]
		const addressOy7YelN = accounts[4]
		const boolofeQNp = await DSPDOuYNjW.burnFrombyOwner.call(addressQfIqT3z, uintiEaFzIv, {from: accounts[0]});
		const uint256ER3aifS = await DSPDOuYNjW.balanceOf.call(addressOy7YelN, {from: accounts[4]});
		await DSPDOuYNjW.f.call({from: accounts[4]});

		assert.equal(boolofeQNp, true)
		assert.equal(uint256ER3aifS, BigInt("0"))
		await expect(DSPDOuYNjW.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})