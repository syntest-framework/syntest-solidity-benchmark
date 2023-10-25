const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringlhOZOL = "vCJzW11kfPumFIPFxofErLx"
		const stringN957KvM = "PMD34mRpqh9SjoO0ADFQvCh2EvfgLz524oO4odTg1S1ShS3esl2gCRyAyigbRetIPb2B15b3PJaTJmowu2Lw"
		const uintKHqNKVe = BigInt("239")
		const DSPsofUHH = await DSP.new(stringlhOZOL, stringN957KvM, uintKHqNKVe, {from: accounts[4]});
		const addressTuaQp9 = accounts[1]
		const addressCM0WrW = accounts[1]
		await DSPsofUHH.onlyNewOwner.call({from: accounts[5]});
		const boolQhbnNI = await DSPsofUHH.isPauser.call(addressTuaQp9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vElATXN = await DSPsofUHH.balanceOf.call(addressCM0WrW, {from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPY4TNCm4 = await DSP.new({from: accounts[0]});
		const addressUxPT0pw = accounts[1]
		const addressGLQYckg = accounts[5]
		const booliAgDffP = await DSPY4TNCm4.unfreezeAccount.call(addressUxPT0pw, {from: accounts[1]});
		const boolMnZqu2Q = await DSPY4TNCm4.freezeAccount.call(addressGLQYckg, {from: accounts[1]});

		await expect(DSPY4TNCm4.unfreezeAccount.call(addressUxPT0pw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const uintDDJWZn = BigInt("41")
		const addressrf0SinC = "0x0000000000000000000000000000000000000001"
		const addressdsmU4uL = accounts[1]
		const uintjVpXQGs = BigInt("1314")
		const addressZ0RcrCt = accounts[4]
		const bool05VoIf = await DSP8OW7mk.transfer.call(addressrf0SinC, uintDDJWZn, {from: accounts[5]});
		const addressppsDZHJ = await DSP8OW7mk.upgradeTo.call(addressdsmU4uL, {from: accounts[1]});
		const boolORkuLfy = await DSP8OW7mk.increaseAllowance.call(addressZ0RcrCt, uintjVpXQGs, {from: accounts[1]});

		await expect(DSP8OW7mk.transfer.call(addressrf0SinC, uintDDJWZn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const uintGmhqIgt = BigInt("41")
		const addressdgCK71 = "0x0000000000000000000000000000000000000001"
		const addressCiawuYH = accounts[1]
		const uintmVAOmgJ = BigInt("1314")
		const addressTafV0wF = accounts[4]
		const boolOMVrwF = await DSP8OW7mk.paused.call({from: accounts[1]});
		const bool05VoIf = await DSP8OW7mk.transfer.call(addressdgCK71, uintGmhqIgt, {from: accounts[5]});
		const addressppsDZHJ = await DSP8OW7mk.upgradeTo.call(addressCiawuYH, {from: accounts[1]});
		const boolORkuLfy = await DSP8OW7mk.increaseAllowance.call(addressTafV0wF, uintmVAOmgJ, {from: accounts[1]});

		assert.equal(boolOMVrwF, false)
		await expect(DSP8OW7mk.transfer.call(addressdgCK71, uintGmhqIgt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const uintYShl6Z = BigInt("1314")
		const addressTsblvjk = accounts[4]
		const boolORkuLfy = await DSP8OW7mk.increaseAllowance.call(addressTsblvjk, uintYShl6Z, {from: accounts[1]});

		assert.equal(boolORkuLfy, true)
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const addressqVimxsP = accounts[5]
		const uintrVdlzBC = BigInt("41")
		const addressYCIgB7e = "0x0000000000000000000000000000000000000001"
		const addresskPMDetV = accounts[1]
		const addressvRC1klS = accounts[1]
		const addressYDs9Dio = accounts[3]
		const uintBZnq1U2 = BigInt("1314")
		const addressV7iHlR8 = accounts[4]
		const addressjGV0yoP = await DSP8OW7mk.notFrozen.call(addressqVimxsP, {from: accounts[1]});
		const bool05VoIf = await DSP8OW7mk.transfer.call(addressYCIgB7e, uintrVdlzBC, {from: accounts[5]});
		const addressppsDZHJ = await DSP8OW7mk.upgradeTo.call(addresskPMDetV, {from: accounts[1]});
		const uint2565nggGP = await DSP8OW7mk.allowance.call(addressYDs9Dio, addressvRC1klS, {from: accounts[5]});
		const boolORkuLfy = await DSP8OW7mk.increaseAllowance.call(addressV7iHlR8, uintBZnq1U2, {from: accounts[1]});

		await expect(DSP8OW7mk.notFrozen.call(addressqVimxsP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const addressE9uMESQ = accounts[0]
		const uintxDslJf0 = BigInt("23")
		const addressGdOP6ke = "0x0000000000000000000000000000000000000001"
		const addressvQL1OEN = accounts[5]
		const addresskuZ2B8V = accounts[1]
		const uintd0xgl7F = BigInt("1817")
		const addressMBieMHm = accounts[2]
		const addresslUnxmp = accounts[3]
		const uintsSORUcb = BigInt("347")
		const uintr6JyDu9 = BigInt("989")
		const addressz4m7Y8C = accounts[0]
		const addressP1yopZX = accounts[1]
		const uintFe6bQYU = BigInt("1314")
		const addressqWsb4df = accounts[4]
		const addressSFZBcj5 = await DSP8OW7mk.removePauser.call(addressE9uMESQ, {from: accounts[0]});
		const bool05VoIf = await DSP8OW7mk.transfer.call(addressGdOP6ke, uintxDslJf0, {from: accounts[5]});
		const boolkXlWsyI = await DSP8OW7mk.unfreezeAccount.call(addressvQL1OEN, {from: accounts[0]});
		const addressEe5Xkmz = await DSP8OW7mk.upgradeTo.call(addresskuZ2B8V, {from: accounts[1]});
		const booldVVBpPM = await DSP8OW7mk.increaseAllowance.call(addressMBieMHm, uintd0xgl7F, {from: accounts[3]});
		const addressppsDZHJ = await DSP8OW7mk.upgradeTo.call(addresslUnxmp, {from: accounts[1]});
		const boolIdRFyk7 = await DSP8OW7mk.transferWithLock.call(addressz4m7Y8C, uintr6JyDu9, uintsSORUcb, {from: accounts[0]});
		const addresstrBiCj6 = await DSP8OW7mk.upgradeTo.call(addressP1yopZX, {from: accounts[3]});
		const boolORkuLfy = await DSP8OW7mk.increaseAllowance.call(addressqWsb4df, uintFe6bQYU, {from: accounts[1]});

		await expect(DSP8OW7mk.transfer.call(addressGdOP6ke, uintxDslJf0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const uintWdQTyc5 = BigInt("656")
		const addressmFKzXJd = accounts[3]
		const uintXRK7dTA = BigInt("1304")
		const addresst6DkZGU = accounts[4]
		const uintcnaqbM4 = BigInt("1505")
		const addressS9esIEb = accounts[4]
		const addressOgN5Fcu = accounts[3]
		const boolMTMB80O = await DSP8OW7mk.increaseAllowance.call(addressmFKzXJd, uintWdQTyc5, {from: accounts[4]});
		const boolORkuLfy = await DSP8OW7mk.increaseAllowance.call(addresst6DkZGU, uintXRK7dTA, {from: accounts[1]});
		const boolBT6VOcV = await DSP8OW7mk.transferFrom.call(addressOgN5Fcu, addressS9esIEb, uintcnaqbM4, {from: accounts[1]});

		assert.equal(boolMTMB80O, true)
		assert.equal(boolORkuLfy, true)
		await expect(DSP8OW7mk.transferFrom.call(addressOgN5Fcu, addressS9esIEb, uintcnaqbM4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const uintz9uoQOO = BigInt("114")
		const addressVAEChj = accounts[1]
		const addressS50Qrst = accounts[0]
		const uintsuC1t9A = BigInt("1336")
		const addressUSIENs = accounts[4]
		const stringfDGWal5 = await DSP8OW7mk.symbol.call({from: accounts[3]});
		const boolHi5ZDhM = await DSP8OW7mk.transferFrom.call(addressS50Qrst, addressVAEChj, uintz9uoQOO, {from: accounts[1]});
		const boolORkuLfy = await DSP8OW7mk.increaseAllowance.call(addressUSIENs, uintsuC1t9A, {from: accounts[1]});
		await DSP8OW7mk.onlyNewOwner.call({from: accounts[1]});

		assert.equal(stringfDGWal5, "DSP")
		await expect(DSP8OW7mk.transferFrom.call(addressS50Qrst, addressVAEChj, uintz9uoQOO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const addresssKNynCp = accounts[3]
		const addressDPeSvxC = accounts[0]
		const uintv34wJR = BigInt("23")
		const addressQ3iDJ2q = "0x0000000000000000000000000000000000000001"
		const addressKbziTF = accounts[1]
		const uintEr6RiZ = BigInt("1817")
		const addressagWFea6 = accounts[2]
		const addressfgsysif = accounts[3]
		const uintj7Hvvdh = BigInt("347")
		const uintjmXJDCz = BigInt("989")
		const addressHITRRt1 = accounts[0]
		const addressl7zkwb9 = accounts[1]
		const uintllB53ym = BigInt("1314")
		const addressiilrqj = accounts[4]
		const uint256O1rcyHQ = await DSP8OW7mk.balanceOf.call(addresssKNynCp, {from: accounts[0]});
		const addressSFZBcj5 = await DSP8OW7mk.removePauser.call(addressDPeSvxC, {from: accounts[0]});
		const bool05VoIf = await DSP8OW7mk.transfer.call(addressQ3iDJ2q, uintv34wJR, {from: accounts[5]});
		await DSP8OW7mk.onlyNewOwner.call({from: accounts[3]});
		const addressEe5Xkmz = await DSP8OW7mk.upgradeTo.call(addressKbziTF, {from: accounts[1]});
		const booldVVBpPM = await DSP8OW7mk.increaseAllowance.call(addressagWFea6, uintEr6RiZ, {from: accounts[3]});
		const addressppsDZHJ = await DSP8OW7mk.upgradeTo.call(addressfgsysif, {from: accounts[1]});
		const boolIdRFyk7 = await DSP8OW7mk.transferWithLock.call(addressHITRRt1, uintjmXJDCz, uintj7Hvvdh, {from: accounts[0]});
		const addresstrBiCj6 = await DSP8OW7mk.upgradeTo.call(addressl7zkwb9, {from: accounts[3]});
		const boolORkuLfy = await DSP8OW7mk.increaseAllowance.call(addressiilrqj, uintllB53ym, {from: accounts[1]});

		assert.equal(uint256O1rcyHQ, BigInt("0"))
		await expect(DSP8OW7mk.transfer.call(addressQ3iDJ2q, uintv34wJR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const addresspsgLIh4 = accounts[1]
		const addressHJ4Va7U = accounts[1]
		const addressc7qXIxx = accounts[3]
		const addressfZ6DTAE = accounts[0]
		const uintBTAf4kK = BigInt("23")
		const addressDc1VLKo = "0x0000000000000000000000000000000000000001"
		const uintB5NlPiL = BigInt("817")
		const addresseZA286R = "0x0000000000000000000000000000000000000001"
		const addressXoajiu = accounts[1]
		const uintD8PwiZs = BigInt("1817")
		const addressPnmvSvr = accounts[2]
		const uintXbPYXfr = BigInt("1275")
		const addresspJkNqRR = accounts[4]
		const addresshnXNGAf = accounts[3]
		const uintkayKp8 = BigInt("347")
		const uintC9i0N3l = BigInt("989")
		const addressphBpc5k = accounts[0]
		const addressm9eVI0n = accounts[1]
		const uintp13k0OH = BigInt("1314")
		const addressNOstl8T = accounts[4]
		const uint256TO2tTVV = await DSP8OW7mk.allowance.call(addressHJ4Va7U, addresspsgLIh4, {from: accounts[4]});
		const uint256O1rcyHQ = await DSP8OW7mk.balanceOf.call(addressc7qXIxx, {from: accounts[0]});
		const addressSFZBcj5 = await DSP8OW7mk.removePauser.call(addressfZ6DTAE, {from: accounts[0]});
		const stringgsxRBi3 = await DSP8OW7mk.name.call({from: "0x0000000000000000000000000000000000000001"});
		const bool05VoIf = await DSP8OW7mk.transfer.call(addressDc1VLKo, uintBTAf4kK, {from: accounts[5]});
		await DSP8OW7mk.onlyNewOwner.call({from: accounts[3]});
		const booljUKE5mj = await DSP8OW7mk.approve.call(addresseZA286R, uintB5NlPiL, {from: accounts[4]});
		const addressEe5Xkmz = await DSP8OW7mk.upgradeTo.call(addressXoajiu, {from: accounts[1]});
		const booldVVBpPM = await DSP8OW7mk.increaseAllowance.call(addressPnmvSvr, uintD8PwiZs, {from: accounts[3]});
		const boolvFaPqL = await DSP8OW7mk.transfer.call(addresspJkNqRR, uintXbPYXfr, {from: accounts[1]});
		const addressppsDZHJ = await DSP8OW7mk.upgradeTo.call(addresshnXNGAf, {from: accounts[1]});
		const boolIdRFyk7 = await DSP8OW7mk.transferWithLock.call(addressphBpc5k, uintC9i0N3l, uintkayKp8, {from: accounts[0]});
		const addresstrBiCj6 = await DSP8OW7mk.upgradeTo.call(addressm9eVI0n, {from: accounts[3]});
		const boolORkuLfy = await DSP8OW7mk.increaseAllowance.call(addressNOstl8T, uintp13k0OH, {from: accounts[1]});

		assert.equal(stringgsxRBi3, "DSP")
		assert.equal(uint256O1rcyHQ, BigInt("0"))
		assert.equal(uint256TO2tTVV, BigInt("0"))
		await expect(DSP8OW7mk.transfer.call(addressDc1VLKo, uintBTAf4kK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const addressjXFDLe = accounts[3]
		const uintuJDirSt = BigInt("656")
		const addressEEUsks1 = accounts[4]
		const addressO8TX4Lk = accounts[1]
		const uintVDvdn10 = BigInt("1505")
		const addresshJSg6Xe = accounts[4]
		const addressoWptJ8G = accounts[4]
		const uint256dNsKqZD = await DSP8OW7mk.totalSupply.call({from: accounts[2]});
		const addressCyvJMqx = await DSP8OW7mk.transferOwnership.call(addressjXFDLe, {from: accounts[2]});
		const boolMTMB80O = await DSP8OW7mk.increaseAllowance.call(addressEEUsks1, uintuJDirSt, {from: accounts[4]});
		const boolYCFzQpv = await DSP8OW7mk.isPauser.call(addressO8TX4Lk, {from: accounts[3]});
		const boolBT6VOcV = await DSP8OW7mk.transferFrom.call(addressoWptJ8G, addresshJSg6Xe, uintVDvdn10, {from: accounts[1]});

		assert.equal(uint256dNsKqZD, BigInt("100000000000000000000000000000"))
		await expect(DSP8OW7mk.transferOwnership.call(addressjXFDLe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPY4TNCm4 = await DSP.new({from: accounts[0]});
		const addressMnzr7V9 = accounts[0]
		const addressEkIKbjU = accounts[3]
		await DSPY4TNCm4.f.call({from: accounts[4]});
		const addressnfg2PQE = await DSPY4TNCm4.upgradeTo.call(addressMnzr7V9, {from: accounts[4]});
		await DSPY4TNCm4.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const booliAgDffP = await DSPY4TNCm4.unfreezeAccount.call(addressEkIKbjU, {from: accounts[1]});

		await expect(DSPY4TNCm4.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPY4TNCm4 = await DSP.new({from: accounts[0]});
		const addressSQxDGDg = accounts[3]
		const uintKFz05yr = BigInt("656")
		const addressbqwHW3V = accounts[2]
		const addressuopcTu = accounts[3]
		const uint8SHiGPpX = await DSPY4TNCm4.decimals.call({from: accounts[1]});
		const booliAgDffP = await DSPY4TNCm4.unfreezeAccount.call(addressSQxDGDg, {from: accounts[1]});
		const boolRm72HXP = await DSPY4TNCm4.transferFrom.call(addressuopcTu, addressbqwHW3V, uintKFz05yr, {from: accounts[1]});

		assert.equal(uint8SHiGPpX, BigInt("18"))
		await expect(DSPY4TNCm4.unfreezeAccount.call(addressSQxDGDg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPY4TNCm4 = await DSP.new({from: accounts[0]});
		const uintFe9b1Gp = BigInt("1694")
		const addressV4AvR9p = accounts[0]
		const addressVikmlrs = accounts[3]
		const boollCH4VoD = await DSPY4TNCm4.transfer.call(addressV4AvR9p, uintFe9b1Gp, {from: accounts[0]});
		const booliAgDffP = await DSPY4TNCm4.unfreezeAccount.call(addressVikmlrs, {from: accounts[1]});

		assert.equal(boollCH4VoD, true)
		await expect(DSPY4TNCm4.unfreezeAccount.call(addressVikmlrs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPY4TNCm4 = await DSP.new({from: accounts[0]});
		const uintrCOUsmw = BigInt("1694")
		const addressEDgnce9 = accounts[1]
		const uintdGjzkQF = BigInt("1393")
		const addressXOpS7rA = accounts[0]
		const addressEAXl5WT = accounts[4]
		const addressNo4zGf = accounts[3]
		const addressA46f7iY = accounts[3]
		const boollCH4VoD = await DSPY4TNCm4.transfer.call(addressEDgnce9, uintrCOUsmw, {from: accounts[0]});
		const booliTM93D = await DSPY4TNCm4.decreaseAllowance.call(addressXOpS7rA, uintdGjzkQF, {from: accounts[0]});
		const uint256T2HPxcw = await DSPY4TNCm4.allowance.call(addressNo4zGf, addressEAXl5WT, {from: accounts[5]});
		const booliAgDffP = await DSPY4TNCm4.unfreezeAccount.call(addressA46f7iY, {from: accounts[1]});

		assert.equal(boollCH4VoD, true)
		await expect(DSPY4TNCm4.decreaseAllowance.call(addressXOpS7rA, uintdGjzkQF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGocJOEH = await DSP.new({from: accounts[1]});
		const uintY9e6ZBd = BigInt("433")
		const addressLpWc2dx = accounts[2]
		const addressR9NJMOl = accounts[3]
		const uintEeLA4uC = BigInt("520")
		const addressOfXINXY = accounts[2]
		const boolvsL64TZ = await DSPGocJOEH.approve.call(addressLpWc2dx, uintY9e6ZBd, {from: accounts[2]});
		const boolrpWBCr7 = await DSPGocJOEH.freezeAccount.call(addressR9NJMOl, {from: accounts[1]});
		const boolJ2T4s2p = await DSPGocJOEH.unlock.call(addressOfXINXY, uintEeLA4uC, {from: accounts[2]});
		const stringTvxz4o = await DSPGocJOEH.symbol.call({from: accounts[0]});

		assert.equal(boolrpWBCr7, true)
		assert.equal(boolvsL64TZ, true)
		await expect(DSPGocJOEH.unlock.call(addressOfXINXY, uintEeLA4uC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPY4TNCm4 = await DSP.new({from: accounts[0]});
		const addressFKYGhov = accounts[4]
		const uintbKIS8Jx = BigInt("916")
		const addressLmmYnS9 = accounts[1]
		const addressER7ammc = accounts[3]
		const uintVvmfWJ6 = BigInt("833")
		const addressK9kdGdL = "0x0000000000000000000000000000000000000001"
		const addressdJ69iAB = accounts[3]
		await DSPY4TNCm4.renouncePauser.call({from: accounts[1]});
		const booliAgDffP = await DSPY4TNCm4.unfreezeAccount.call(addressFKYGhov, {from: accounts[1]});
		const bool7dDWPt = await DSPY4TNCm4.transferFrom.call(addressER7ammc, addressLmmYnS9, uintbKIS8Jx, {from: accounts[0]});
		const boolnF2iKEm = await DSPY4TNCm4.transferFrom.call(addressdJ69iAB, addressK9kdGdL, uintVvmfWJ6, {from: accounts[1]});

		await expect(DSPY4TNCm4.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPLxlGA6M = await DSP.new({from: accounts[4]});
		const uintTnHz5z = BigInt("1879")
		const uintBxIiBh3 = BigInt("631")
		const addressto1oiDl = accounts[1]
		const uinta1X00Ga = BigInt("1851")
		const addressKEjHuOw = accounts[3]
		const uintYMigxyw = BigInt("1882")
		const addressHrVwa9S = accounts[4]
		const addressUpNZsS2 = accounts[2]
		const boola0c6uft = await DSPLxlGA6M.lock.call(addressto1oiDl, uintBxIiBh3, uintTnHz5z, {from: accounts[4]});
		const boollTGcxSk = await DSPLxlGA6M.transfer.call(addressKEjHuOw, uinta1X00Ga, {from: accounts[2]});
		const boolQipiuuV = await DSPLxlGA6M.transferFrom.call(addressUpNZsS2, addressHrVwa9S, uintYMigxyw, {from: accounts[2]});
		const stringGWH1pOO = await DSPLxlGA6M.symbol.call({from: accounts[0]});

		await expect(DSPLxlGA6M.lock.call(addressto1oiDl, uintBxIiBh3, uintTnHz5z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const addressew2W4Pp = accounts[5]
		const addressuyNQ5bZ = accounts[2]
		const uintl4cgCA = BigInt("1519")
		const addresssirFn8D = accounts[6]
		const addressVuBfbPe = accounts[4]
		const boolrI1h5JR = await DSP8OW7mk.isOwner.call(addressew2W4Pp, {from: accounts[3]});
		await DSP8OW7mk.renouncePauser.call({from: accounts[0]});
		const boolGHqJnV = await DSP8OW7mk.unfreezeAccount.call(addressuyNQ5bZ, {from: accounts[0]});
		const boolBT6VOcV = await DSP8OW7mk.transferFrom.call(addressVuBfbPe, addresssirFn8D, uintl4cgCA, {from: accounts[1]});

		assert.equal(boolrI1h5JR, false)
		await expect(DSP8OW7mk.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const addressfLyQExd = accounts[5]
		const addresscJSPhZG = accounts[2]
		const uintH6Bys2l = BigInt("1519")
		const addressDm6wiOP = accounts[6]
		const addressJLus0SY = accounts[4]
		await DSP8OW7mk.pause.call({from: accounts[0]});
		const boolrI1h5JR = await DSP8OW7mk.isOwner.call(addressfLyQExd, {from: accounts[3]});
		await DSP8OW7mk.renouncePauser.call({from: accounts[0]});
		const boolGHqJnV = await DSP8OW7mk.unfreezeAccount.call(addresscJSPhZG, {from: accounts[0]});
		const boolBT6VOcV = await DSP8OW7mk.transferFrom.call(addressJLus0SY, addressDm6wiOP, uintH6Bys2l, {from: accounts[1]});
		const stringMPB55h = await DSP8OW7mk.name.call({from: accounts[0]});

		await expect(DSP8OW7mk.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPlNi9n0 = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZRWdwY = BigInt("28")
		const addressFtU3xmi = accounts[3]
		const addressFHNdnAW = accounts[1]
		const addressebDOmBY = accounts[4]
		const boolDXN6GT = await DSPlNi9n0.paused.call({from: accounts[5]});
		const boolH8eAyJ = await DSPlNi9n0.transfer.call(addressFtU3xmi, uintZRWdwY, {from: accounts[1]});
		const boolXPvs0hy = await DSPlNi9n0.freezeAccount.call(addressFHNdnAW, {from: accounts[2]});
		await DSPlNi9n0.unpause.call({from: accounts[5]});
		const uint256SoIWWNg = await DSPlNi9n0.balanceOf.call(addressebDOmBY, {from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const addressFNTucF = accounts[1]
		const addresswuhqdjE = accounts[2]
		const addressajGF0CV = accounts[3]
		const addressg4MTakc = accounts[0]
		const uintE2wLjFE = BigInt("346")
		const addressbfM6en = accounts[2]
		const addressBgdFh93 = accounts[5]
		const addressVHEAay = accounts[1]
		const uintB6uv0R = BigInt("1817")
		const addressSiHlZLw = accounts[2]
		const addresseJ5mKv = accounts[3]
		const uintFR70Kg4 = BigInt("347")
		const uintLDWSXT0 = BigInt("989")
		const addressulUuG8f = accounts[0]
		const addressfazruu = accounts[1]
		const uintxofYZlT = BigInt("1314")
		const addressW9yhBL = accounts[4]
		const address5GP63C = await DSP8OW7mk.transferOwnership.call(addressFNTucF, {from: accounts[0]});
		const addressZCCwach = await DSP8OW7mk.removePauser.call(addresswuhqdjE, {from: accounts[0]});
		const uint256O1rcyHQ = await DSP8OW7mk.balanceOf.call(addressajGF0CV, {from: accounts[0]});
		const addressSFZBcj5 = await DSP8OW7mk.removePauser.call(addressg4MTakc, {from: accounts[0]});
		const boolAHzzxMV = await DSP8OW7mk.transferFrom.call(addressBgdFh93, addressbfM6en, uintE2wLjFE, {from: accounts[2]});
		await DSP8OW7mk.onlyNewOwner.call({from: accounts[3]});
		const addressEe5Xkmz = await DSP8OW7mk.upgradeTo.call(addressVHEAay, {from: accounts[1]});
		const booldVVBpPM = await DSP8OW7mk.increaseAllowance.call(addressSiHlZLw, uintB6uv0R, {from: accounts[3]});
		const addressppsDZHJ = await DSP8OW7mk.upgradeTo.call(addresseJ5mKv, {from: accounts[1]});
		const boolIdRFyk7 = await DSP8OW7mk.transferWithLock.call(addressulUuG8f, uintLDWSXT0, uintFR70Kg4, {from: accounts[0]});
		const addresstrBiCj6 = await DSP8OW7mk.upgradeTo.call(addressfazruu, {from: accounts[3]});
		const boolORkuLfy = await DSP8OW7mk.increaseAllowance.call(addressW9yhBL, uintxofYZlT, {from: accounts[1]});

		await expect(DSP8OW7mk.removePauser.call(addresswuhqdjE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const addressvyyXaNp = accounts[5]
		const addressv0W4fR4 = "0x0000000000000000000000000000000000000001"
		const uintyQvAvib = BigInt("123")
		const addressckaAOM = "0x0000000000000000000000000000000000000001"
		const uintIzMyd6f = BigInt("637")
		const addressoQArrFb = accounts[1]
		const addressW2QpOqv = accounts[1]
		const addresshuJCYrI = accounts[5]
		const uint256DRYYTod = await DSP8OW7mk.allowance.call(addressv0W4fR4, addressvyyXaNp, {from: accounts[4]});
		const boolidL8mW = await DSP8OW7mk.mint.call(addressckaAOM, uintyQvAvib, {from: accounts[0]});
		const boolEhnrF45 = await DSP8OW7mk.transfer.call(addressoQArrFb, uintIzMyd6f, {from: accounts[0]});
		const uint256gtPAOQK = await DSP8OW7mk.balanceOf.call(addressW2QpOqv, {from: accounts[5]});
		const boolGKWjwIk = await DSP8OW7mk.isOwner.call(addresshuJCYrI, {from: accounts[4]});

		assert.equal(boolEhnrF45, true)
		assert.equal(boolGKWjwIk, false)
		assert.equal(boolidL8mW, true)
		assert.equal(uint256DRYYTod, BigInt("0"))
		assert.equal(uint256gtPAOQK, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSP8OW7mk = await DSP.new({from: accounts[0]});
		const addresswuDsMTZ = accounts[5]
		const addressD1XNn7 = accounts[2]
		const address8CtL4C = accounts[3]
		const uintAfNMZ8e = BigInt("975")
		const addressGLwoxYu = accounts[4]
		const uintOZ9vJ7T = BigInt("1519")
		const addressIIVbMax = accounts[6]
		const addressPRv74Dm = accounts[4]
		const boolrI1h5JR = await DSP8OW7mk.isOwner.call(addresswuDsMTZ, {from: accounts[3]});
		const stringPfQZ8v2 = await DSP8OW7mk.symbol.call({from: accounts[3]});
		await DSP8OW7mk.renouncePauser.call({from: accounts[0]});
		const uint256Pkr8vlY = await DSP8OW7mk.allowance.call(address8CtL4C, addressD1XNn7, {from: accounts[0]});
		const boolIbOJEKP = await DSP8OW7mk.unlock.call(addressGLwoxYu, uintAfNMZ8e, {from: accounts[0]});
		await DSP8OW7mk.onlyNewOwner.call({from: accounts[3]});
		await DSP8OW7mk.unpause.call({from: accounts[5]});
		await DSP8OW7mk.onlyOwner.call({from: accounts[2]});
		const boolBT6VOcV = await DSP8OW7mk.transferFrom.call(addressPRv74Dm, addressIIVbMax, uintOZ9vJ7T, {from: accounts[1]});
		await DSP8OW7mk.whenPaused.call({from: accounts[0]});

		assert.equal(boolrI1h5JR, false)
		assert.equal(stringPfQZ8v2, "DSP")
		await expect(DSP8OW7mk.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})