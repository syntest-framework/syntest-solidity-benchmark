const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveAeH3wwl = await Revive.new({from: accounts[2]});
		const bytehtznpvz = "0x0103010609160b09180604080f0812020e10071e111c1c1304090412181b160e"
		const addressKwX7hn = accounts[5]
		const uintbmEZEWb = BigInt("319")
		const addressygEp7fZ = accounts[1]
		const uintE8cqrP = BigInt("366")
		const byteWUQlAuS = "0x021f020f021a051b01201a03080b170814110f1f1b1a081108180b150a050407"
		const uint256RKIYKWF = await ReviveAeH3wwl.tokensLocked.call(addressKwX7hn, bytehtznpvz, {from: accounts[5]});
		const booljeKltNq = await ReviveAeH3wwl.decreaseAllowance.call(addressygEp7fZ, uintbmEZEWb, {from: accounts[2]});
		const boolFk7luCZ = await ReviveAeH3wwl.extendLock.call(byteWUQlAuS, uintE8cqrP, {from: accounts[4]});

		assert.equal(uint256RKIYKWF, BigInt("0"))
		await expect(ReviveAeH3wwl.decreaseAllowance.call(addressygEp7fZ, uintbmEZEWb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivee2xK5uJ = await Revive.new({from: accounts[1]});
		const addressmmVvYV = accounts[1]
		const addressHLydOHL = accounts[3]
		const uintJbT4mpd = BigInt("134")
		const byteQGNGPN = "0x0316111b130612150a160a160f15200d0104160c0f13110f1c0d0d0414050301"
		const addressdNemIeE = accounts[1]
		const uintzLkHMJK = BigInt("1245")
		const uintqjv14xn = BigInt("400")
		const byteyFo2nst = "0x09100f17081d1a070a130e1112031406060e0d1b181417181c110a021a0d1704"
		const addressTUutQq = accounts[3]
		const uint256KRZQAgl = await Revivee2xK5uJ.getUnlockableTokens.call(addressmmVvYV, {from: accounts[0]});
		const addressQHl1RkT = await Revivee2xK5uJ.transferOwnership.call(addressHLydOHL, {from: accounts[0]});
		const uint256hrEpNPy = await Revivee2xK5uJ.tokensLockedAtTime.call(addressdNemIeE, byteQGNGPN, uintJbT4mpd, {from: accounts[5]});
		const boolzyvMu4F = await Revivee2xK5uJ.transferWithLock.call(addressTUutQq, byteyFo2nst, uintqjv14xn, uintzLkHMJK, {from: accounts[2]});
		await Revivee2xK5uJ.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256KRZQAgl, BigInt("0"))
		await expect(Revivee2xK5uJ.transferOwnership.call(addressHLydOHL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveQdNyJL5 = await Revive.new({from: accounts[0]});
		const byteLO9Fwj = "0x151d04101f0708110b0d060104090d010c0d1f040319161b1d09150c0f0c031e"
		const addressfH06f1 = accounts[0]
		const uintFBzcLWy = BigInt("312")
		const addressAvdONs9 = accounts[1]
		const byter8nHqcC = "0x1d1114201819020a05070b071c0a0320090d0c060b1a1807020311050c04010c"
		const addressc4Jq8R7 = accounts[4]
		const addressHyfA3zX = accounts[1]
		const uint256osrCqTd = await ReviveQdNyJL5.tokensLocked.call(addressfH06f1, byteLO9Fwj, {from: accounts[0]});
		const boolX00sdmr = await ReviveQdNyJL5.approve.call(addressAvdONs9, uintFBzcLWy, {from: accounts[1]});
		const uint256A2IjZs = await ReviveQdNyJL5.tokensLocked.call(addressc4Jq8R7, byter8nHqcC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256l8Ouux = await ReviveQdNyJL5.unlock.call(addressHyfA3zX, {from: accounts[0]});

		assert.equal(boolX00sdmr, true)
		assert.equal(uint256A2IjZs, BigInt("0"))
		assert.equal(uint256l8Ouux, BigInt("0"))
		assert.equal(uint256osrCqTd, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revived1jSFN = await Revive.new({from: accounts[3]});
		const byteqMcamf3 = "0x0209200d0b1302120e010619121d1f170f0605171d030e160b1c11061b191102"
		const addressXFM8NF4 = accounts[5]
		const uintxDUpJYO = BigInt("214")
		const addressTRNl1N = accounts[2]
		const addressNAgcOoR = accounts[3]
		const addressMvnrOOL = accounts[5]
		const uintguiXjTn = BigInt("505")
		const addressnt18sHN = accounts[0]
		const uint256iBPWJsA = await Revived1jSFN.tokensUnlockable.call(addressXFM8NF4, byteqMcamf3, {from: accounts[3]});
		const boolakfTSf = await Revived1jSFN.increaseAllowance.call(addressTRNl1N, uintxDUpJYO, {from: accounts[3]});
		const uint256LmRsO9 = await Revived1jSFN.allowance.call(addressMvnrOOL, addressNAgcOoR, {from: accounts[0]});
		const booleHN2xGo = await Revived1jSFN.decreaseAllowance.call(addressnt18sHN, uintguiXjTn, {from: accounts[1]});

		assert.equal(boolakfTSf, true)
		assert.equal(uint256LmRsO9, BigInt("0"))
		assert.equal(uint256iBPWJsA, BigInt("0"))
		await expect(Revived1jSFN.decreaseAllowance.call(addressnt18sHN, uintguiXjTn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCkJYG0L = await Revive.new({from: accounts[0]});
		const uintpKX9wrp = BigInt("469")
		const addressoRfhcGz = accounts[5]
		const uintthVsMzy = BigInt("1925")
		const addressulTx2ai = accounts[1]
		const addressR3OL6yR = accounts[2]
		const boolO1d0NdE = await ReviveCkJYG0L.transfer.call(addressoRfhcGz, uintpKX9wrp, {from: accounts[3]});
		const boolaubq4rJ = await ReviveCkJYG0L.transferFrom.call(addressR3OL6yR, addressulTx2ai, uintthVsMzy, {from: accounts[1]});

		await expect(ReviveCkJYG0L.transfer.call(addressoRfhcGz, uintpKX9wrp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveY8vDMvM = await Revive.new({from: accounts[1]});
		const addressbpdcXz = accounts[2]
		const uintJdUSpml = BigInt("627")
		const uintnv89Brx = BigInt("1601")
		const bytegmO2ld = "0x17001b0d1e180407151c0e071c151102140e05060909110d17091117051c0b0b"
		const addressEpJurXZ = accounts[4]
		const byteQ3ZcNhW = "0x1f0a19031812060119130d0d1f061909090509151f011e20120d1a130c101d01"
		const addressLZAeFmB = accounts[2]
		const uintpk8TNNP = BigInt("132")
		const addressuI1whR = accounts[3]
		const uintniPU8i7 = BigInt("140")
		const addressNgnN0Og = accounts[3]
		const uint256zvrVNPa = await ReviveY8vDMvM.totalBalanceOf.call(addressbpdcXz, {from: accounts[5]});
		const boolQeXrQUN = await ReviveY8vDMvM.transferWithLock.call(addressEpJurXZ, bytegmO2ld, uintnv89Brx, uintJdUSpml, {from: accounts[5]});
		const uint256aSiWwts = await ReviveY8vDMvM.tokensLocked.call(addressLZAeFmB, byteQ3ZcNhW, {from: accounts[2]});
		const addressSGELnR = await ReviveY8vDMvM.recoverERC20.call(addressuI1whR, uintpk8TNNP, {from: accounts[3]});
		const boolgij17r7 = await ReviveY8vDMvM.increaseAllowance.call(addressNgnN0Og, uintniPU8i7, {from: accounts[1]});

		assert.equal(uint256zvrVNPa, BigInt("0"))
		await expect(ReviveY8vDMvM.transferWithLock.call(addressEpJurXZ, bytegmO2ld, uintnv89Brx, uintJdUSpml, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivelUgia1T = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintK4FV7NA = BigInt("1433")
		const addressyravgtW = accounts[5]
		const uintcXNCuhu = BigInt("439")
		const addressyBe3a1q = accounts[3]
		const uintCvMpRzO = BigInt("989")
		const addressDMbmU2Z = accounts[0]
		const addressbddzvvW = accounts[4]
		const uinteirKi8E = BigInt("1735")
		const addressj98viyc = "0x0000000000000000000000000000000000000001"
		const addressQIcgiN3 = accounts[1]
		const boolE22JBd = await RevivelUgia1T.increaseAllowance.call(addressyravgtW, uintK4FV7NA, {from: accounts[5]});
		const boolJiFzQfZ = await RevivelUgia1T.approve.call(addressyBe3a1q, uintcXNCuhu, {from: accounts[0]});
		const boolWhdj9Uu = await RevivelUgia1T.transferFrom.call(addressbddzvvW, addressDMbmU2Z, uintCvMpRzO, {from: accounts[4]});
		const boolTCkkq8u = await RevivelUgia1T.transferFrom.call(addressQIcgiN3, addressj98viyc, uinteirKi8E, {from: accounts[5]});
	});

	it('test for Revive', async () => {
		const ReviveBwFhDmQ = await Revive.new({from: accounts[3]});
		const addresskvlLLFN = accounts[2]
		const uintafQsJfC = BigInt("91")
		const byteIJEQFw = "0x111c110e01181e1e1c030b17131a1c15071e151a0a1d090313140e0d08041915"
		const uintPk2UsiG = BigInt("1775")
		const bytewAVJS3B = "0x05050b081e040504081f09150713201b1f0b0717001a0e0e190810111d1d040e"
		const uint256gXob8Lc = await ReviveBwFhDmQ.getUnlockableTokens.call(addresskvlLLFN, {from: accounts[1]});
		const boolqQIU9E4 = await ReviveBwFhDmQ.extendLock.call(byteIJEQFw, uintafQsJfC, {from: accounts[2]});
		const uint256LW8NjwG = await ReviveBwFhDmQ.totalSupply.call({from: accounts[5]});
		const boolJT6RyJI = await ReviveBwFhDmQ.extendLock.call(bytewAVJS3B, uintPk2UsiG, {from: accounts[0]});

		assert.equal(uint256gXob8Lc, BigInt("0"))
		await expect(ReviveBwFhDmQ.extendLock.call(byteIJEQFw, uintafQsJfC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveQdNyJL5 = await Revive.new({from: accounts[0]});
		const byteBgIr53h = "0x151d04101f0708110b0d060104090d010c0d1f040319161b1d09150c0f0c031e"
		const addressqAMK99T = accounts[0]
		const uintmLEhn5o = BigInt("312")
		const addressfXfE0lo = accounts[1]
		const byteOz5wOxK = "0x1d111420181a020a05070b071c0a0320090d0c060b1a1807020311050c04010c"
		const addressVg5VN6A = accounts[4]
		const addressXoXgyy9 = accounts[1]
		const addressK4ObZtb = accounts[1]
		await ReviveQdNyJL5.onlyOwner.call({from: accounts[1]});
		const uint256osrCqTd = await ReviveQdNyJL5.tokensLocked.call(addressqAMK99T, byteBgIr53h, {from: accounts[0]});
		const boolX00sdmr = await ReviveQdNyJL5.approve.call(addressfXfE0lo, uintmLEhn5o, {from: accounts[1]});
		const uint256A2IjZs = await ReviveQdNyJL5.tokensLocked.call(addressVg5VN6A, byteOz5wOxK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DXdgOBd = await ReviveQdNyJL5.getUnlockableTokens.call(addressXoXgyy9, {from: accounts[0]});
		const uint256l8Ouux = await ReviveQdNyJL5.unlock.call(addressK4ObZtb, {from: accounts[0]});

		await expect(ReviveQdNyJL5.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveakCEnua = await Revive.new({from: accounts[4]});
		const uintLkcTXNK = BigInt("984")
		const uintUdgMWAj = BigInt("1814")
		const byteFzXthmd = "0x1d170000101e051b0101091d0e0519070b101e1c1c1c0a2004091912141a110d"
		const uintCdM1kT = BigInt("1172")
		const addressVzAM1RO = accounts[0]
		const addressL3oHRA = accounts[4]
		const uintgOkwqun = BigInt("1045")
		const uintlzEsVNo = BigInt("1949")
		const bytePB5Qmoj = "0x1201041116061b120104050c00181315061c111e1a1b01170c1d0009160e0c0d"
		const addressZ6x0QPy = accounts[3]
		const boolTEvVDoF = await ReviveakCEnua.lock.call(byteFzXthmd, uintUdgMWAj, uintLkcTXNK, {from: accounts[5]});
		await ReviveakCEnua.renounceOwnership.call({from: accounts[1]});
		const boolsrOolLM = await ReviveakCEnua.decreaseAllowance.call(addressVzAM1RO, uintCdM1kT, {from: accounts[2]});
		const uint256fP0vg9J = await ReviveakCEnua.balanceOf.call(addressL3oHRA, {from: accounts[0]});
		const boollMdZ1p = await ReviveakCEnua.transferWithLock.call(addressZ6x0QPy, bytePB5Qmoj, uintlzEsVNo, uintgOkwqun, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveakCEnua.lock.call(byteFzXthmd, uintUdgMWAj, uintLkcTXNK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveAeH3wwl = await Revive.new({from: accounts[2]});
		const bytevgGCG4v = "0x0103010609160b09180604080f0812020e10071e111c1c1304090412181b160e"
		const addresskV3eQSP = accounts[5]
		const uintPWeHROr = BigInt("1662")
		const addressRkxmW7 = accounts[0]
		const byteUzztIrB = "0x171a1d1d021e150b0d1d1c0712150403111717011c031500131e1e0617080118"
		const addressVXj2MoD = accounts[3]
		const uintRKDeZsN = BigInt("535")
		const addressnU3F1gK = accounts[3]
		const addresso9HP54N = accounts[4]
		const uintbZYHygp = BigInt("366")
		const byteFtild6q = "0x021f020f021a051b01201a03080b170814110f1f1b1a081108180b150a050407"
		const uint256RKIYKWF = await ReviveAeH3wwl.tokensLocked.call(addresskV3eQSP, bytevgGCG4v, {from: accounts[5]});
		const boolbqTcTF1 = await ReviveAeH3wwl.approve.call(addressRkxmW7, uintPWeHROr, {from: accounts[0]});
		const uint256AwsJ53V = await ReviveAeH3wwl.tokensLocked.call(addressVXj2MoD, byteUzztIrB, {from: accounts[4]});
		const boolLqrIhPa = await ReviveAeH3wwl.transferFrom.call(addresso9HP54N, addressnU3F1gK, uintRKDeZsN, {from: accounts[1]});
		const boolFk7luCZ = await ReviveAeH3wwl.extendLock.call(byteFtild6q, uintbZYHygp, {from: accounts[4]});

		assert.equal(boolbqTcTF1, true)
		assert.equal(uint256AwsJ53V, BigInt("0"))
		assert.equal(uint256RKIYKWF, BigInt("0"))
		await expect(ReviveAeH3wwl.transferFrom.call(addresso9HP54N, addressnU3F1gK, uintRKDeZsN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveQdNyJL5 = await Revive.new({from: accounts[0]});
		const byteMXQapsn = "0x151d04101f0708110b0d060104090d010c0d1f040319161b1d09150c0f0c031e"
		const addressgKJyLHx = accounts[0]
		const uintbr7PdaA = BigInt("312")
		const addressR64rh39 = accounts[1]
		const bytexZu7yv = "0x1d1114201819020a05070b071c0a0320090d0c060b1a1807020311050c04010c"
		const addressIoKs1Jo = accounts[4]
		const addressqEcMDiY = accounts[1]
		const uint256osrCqTd = await ReviveQdNyJL5.tokensLocked.call(addressgKJyLHx, byteMXQapsn, {from: accounts[0]});
		const boolX00sdmr = await ReviveQdNyJL5.approve.call(addressR64rh39, uintbr7PdaA, {from: accounts[1]});
		const uint256ArSK7eO = await ReviveQdNyJL5.totalSupply.call({from: accounts[5]});
		await ReviveQdNyJL5.renounceOwnership.call({from: accounts[5]});
		const uint256A2IjZs = await ReviveQdNyJL5.tokensLocked.call(addressIoKs1Jo, bytexZu7yv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256l8Ouux = await ReviveQdNyJL5.unlock.call(addressqEcMDiY, {from: accounts[0]});

		assert.equal(boolX00sdmr, true)
		assert.equal(uint256ArSK7eO, BigInt("3000000000000000000000000000"))
		assert.equal(uint256osrCqTd, BigInt("0"))
		await expect(ReviveQdNyJL5.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveY8vDMvM = await Revive.new({from: accounts[1]});
		const addressW0od22N = accounts[2]
		const addressEQiQWOS = accounts[3]
		const uintms1MkX = BigInt("128")
		const bytepoMETGT = "0x1f0d140404090b17130a130b051e00000408021d050b180f161e17151c140612"
		const uintDcLOPCq = BigInt("627")
		const uintgVzk8R2 = BigInt("1601")
		const bytef351xRN = "0x17001b0d1e180407151c0e071c151102140e05060909110d17091117051c0b0b"
		const address2Onni5 = accounts[4]
		const byteHkiQ11o = "0x1f0a19031812060119130d0d1f061909090509151f011c20120d1a130c101d01"
		const addressADFjSmD = accounts[2]
		const uintpfeowVX = BigInt("132")
		const addressWEvIyeq = accounts[3]
		const uinty4Ugk9Z = BigInt("140")
		const addressYfGIa5w = accounts[3]
		const uint256zvrVNPa = await ReviveY8vDMvM.totalBalanceOf.call(addressW0od22N, {from: accounts[5]});
		const uint256HiOFkGO = await ReviveY8vDMvM.getUnlockableTokens.call(addressEQiQWOS, {from: accounts[4]});
		const boolYKpQhtC = await ReviveY8vDMvM.isOwner.call({from: accounts[1]});
		const boole4v7BgB = await ReviveY8vDMvM.increaseLockAmount.call(bytepoMETGT, uintms1MkX, {from: "0x0000000000000000000000000000000000000001"});
		const boolQeXrQUN = await ReviveY8vDMvM.transferWithLock.call(address2Onni5, bytef351xRN, uintgVzk8R2, uintDcLOPCq, {from: accounts[5]});
		await ReviveY8vDMvM.onlyOwner.call({from: accounts[3]});
		const uint256aSiWwts = await ReviveY8vDMvM.tokensLocked.call(addressADFjSmD, byteHkiQ11o, {from: accounts[2]});
		const addressSGELnR = await ReviveY8vDMvM.recoverERC20.call(addressWEvIyeq, uintpfeowVX, {from: accounts[3]});
		const boolgij17r7 = await ReviveY8vDMvM.increaseAllowance.call(addressYfGIa5w, uinty4Ugk9Z, {from: accounts[1]});

		assert.equal(boolYKpQhtC, true)
		assert.equal(uint256HiOFkGO, BigInt("0"))
		assert.equal(uint256zvrVNPa, BigInt("0"))
		await expect(ReviveY8vDMvM.increaseLockAmount.call(bytepoMETGT, uintms1MkX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVhTJIg4 = await Revive.new({from: accounts[2]});
		const uintzrwkhq3 = BigInt("779")
		const addressYbIoAgz = accounts[0]
		const addressAsHyp5B = accounts[4]
		const uintVH4Fr7Y = BigInt("1489")
		const addressdc014is = "0x0000000000000000000000000000000000000001"
		const addressgiVTFeB = await ReviveVhTJIg4.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const booljTf983m = await ReviveVhTJIg4.transferFrom.call(addressAsHyp5B, addressYbIoAgz, uintzrwkhq3, {from: accounts[0]});
		const boolVgik1iv = await ReviveVhTJIg4.approve.call(addressdc014is, uintVH4Fr7Y, {from: accounts[3]});

		assert.equal(addressgiVTFeB, 0x58b4fB26C0F0dBfDaCDf9A369eCfb3A322c98D10)
		await expect(ReviveVhTJIg4.transferFrom.call(addressAsHyp5B, addressYbIoAgz, uintzrwkhq3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveM4cY64t = await Revive.new({from: accounts[0]});
		const uintYaW9S8 = BigInt("58")
		const uintLC1w8Pc = BigInt("24")
		const byte1acy2q = "0x170f14120a1301061403071d1d1309020d18041b100413171d03131210110d03"
		const addressioCSWQI = accounts[0]
		const uintfg5outY = BigInt("431")
		const addressAdg3IJ7 = accounts[0]
		const byteGxrt8TI = "0x0905090a150a170f10040808160a08130b181f07172010021e0c0316040b0d1d"
		const addressAfXD62 = "0x0000000000000000000000000000000000000001"
		const uint256t11rT5I = await ReviveM4cY64t.recoverERC20.call(uintYaW9S8, {from: accounts[2]});
		const uint256gWuiOep = await ReviveM4cY64t.tokensLockedAtTime.call(addressioCSWQI, byte1acy2q, uintLC1w8Pc, {from: accounts[5]});
		const boolW9YmabV = await ReviveM4cY64t.decreaseAllowance.call(addressAdg3IJ7, uintfg5outY, {from: accounts[3]});
		const uint256xhKkawB = await ReviveM4cY64t.tokensLocked.call(addressAfXD62, byteGxrt8TI, {from: accounts[5]});

		await expect(ReviveM4cY64t.recoverERC20.call(uintYaW9S8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveQdNyJL5 = await Revive.new({from: accounts[0]});
		const byteEvFuSRu = "0x151d04101f0708110b0d060104090d010c0d1f040319161b1d09150c0f0c031e"
		const addressOdY0jpt = accounts[0]
		const uintGfqUaT = BigInt("312")
		const addressynenWVc = accounts[1]
		const addressLbPcQMK = accounts[2]
		const byteu9nP543 = "0x131c0b101d0f0a1a051a1103171a0b0e0b0d1c010b1112021109011a12091713"
		const addressWJhJgyw = accounts[2]
		const uint256osrCqTd = await ReviveQdNyJL5.tokensLocked.call(addressOdY0jpt, byteEvFuSRu, {from: accounts[0]});
		await ReviveQdNyJL5.renounceOwnership.call({from: accounts[0]});
		const boolX00sdmr = await ReviveQdNyJL5.approve.call(addressynenWVc, uintGfqUaT, {from: accounts[1]});
		const uint256l8Ouux = await ReviveQdNyJL5.unlock.call(addressLbPcQMK, {from: accounts[0]});
		const uint256v6xOGcN = await ReviveQdNyJL5.tokensLocked.call(addressWJhJgyw, byteu9nP543, {from: accounts[4]});

		assert.equal(uint256osrCqTd, BigInt("0"))
		await expect(ReviveQdNyJL5.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCkJYG0L = await Revive.new({from: accounts[0]});
		const uintLiptYHz = BigInt("1436")
		const bytebKY0nBJ = "0x041601060219031a08190e190b031611111d03060f0706000a0d151b16130e15"
		const addressXohzHm = accounts[0]
		const uintfTI49k = BigInt("475")
		const addressVI5gzDy = accounts[5]
		const uint2568ijDFQ = await ReviveCkJYG0L.tokensLockedAtTime.call(addressXohzHm, bytebKY0nBJ, uintLiptYHz, {from: accounts[2]});
		const boolO1d0NdE = await ReviveCkJYG0L.transfer.call(addressVI5gzDy, uintfTI49k, {from: accounts[3]});

		assert.equal(uint2568ijDFQ, BigInt("0"))
		await expect(ReviveCkJYG0L.transfer.call(addressVI5gzDy, uintfTI49k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveakCEnua = await Revive.new({from: accounts[4]});
		const addressP61lKU4 = accounts[1]
		const uintPg2H00p = BigInt("1155")
		const uintjM676OT = BigInt("565")
		const byted4DmQgl = "0x0711050d1f180e1013021e1605140b1c04120f0d0d091b1718001c1b0c0a0018"
		const addressNZRLlmI = await ReviveakCEnua.transferOwnership.call(addressP61lKU4, {from: accounts[4]});
		const boolTF1qWU = await ReviveakCEnua.lock.call(byted4DmQgl, uintjM676OT, uintPg2H00p, {from: accounts[1]});

		await expect(ReviveakCEnua.lock.call(byted4DmQgl, uintjM676OT, uintPg2H00p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveY8vDMvM = await Revive.new({from: accounts[1]});
		const uintEzBQ2kZ = BigInt("608")
		const addresslyZryVw = accounts[1]
		const addressCxJ8ih = accounts[2]
		const addressCRpPYwr = accounts[3]
		const uintummW6Hb = BigInt("627")
		const uintvkjfeQW = BigInt("1601")
		const byteVWI1x48 = "0x17001b0d1e180407151c0e071c151102140e05060909110d17091117051c0b0b"
		const addressWE2xzZV = accounts[4]
		const bytebbB5vR = "0x1f0a19031812060119130d0d1f061909090509151f011c20120d1a130c101d01"
		const addressC3ypvr = accounts[2]
		const uintd1l89jj = BigInt("132")
		const addressNFVRS72 = accounts[3]
		const uintHKkih9 = BigInt("1129")
		const uintpN4g9dr = BigInt("1955")
		const bytePKBPI7x = "0x1f1406050718111e140514060b021b0e09010b02161c1f07040c1012060c0f08"
		const uintyIMRQXk = BigInt("140")
		const addressYCty5u9 = accounts[3]
		const addressAFyVIw = await ReviveY8vDMvM.recoverERC20.call(addresslyZryVw, uintEzBQ2kZ, {from: accounts[1]});
		const uint256zvrVNPa = await ReviveY8vDMvM.totalBalanceOf.call(addressCxJ8ih, {from: accounts[5]});
		const uint256HiOFkGO = await ReviveY8vDMvM.getUnlockableTokens.call(addressCRpPYwr, {from: accounts[4]});
		const boolQeXrQUN = await ReviveY8vDMvM.transferWithLock.call(addressWE2xzZV, byteVWI1x48, uintvkjfeQW, uintummW6Hb, {from: accounts[5]});
		const uint256aSiWwts = await ReviveY8vDMvM.tokensLocked.call(addressC3ypvr, bytebbB5vR, {from: accounts[2]});
		const addressSGELnR = await ReviveY8vDMvM.recoverERC20.call(addressNFVRS72, uintd1l89jj, {from: accounts[3]});
		const boolyFsY0L = await ReviveY8vDMvM.lock.call(bytePKBPI7x, uintpN4g9dr, uintHKkih9, {from: accounts[2]});
		const boolgij17r7 = await ReviveY8vDMvM.increaseAllowance.call(addressYCty5u9, uintyIMRQXk, {from: accounts[1]});

		await expect(ReviveY8vDMvM.recoverERC20.call(addresslyZryVw, uintEzBQ2kZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveY8vDMvM = await Revive.new({from: accounts[1]});
		const uintxaCegzq = BigInt("1439")
		const uintGWnKLRU = BigInt("627")
		const uintppyeHnE = BigInt("1582")
		const byteKgwFOjh = "0x1315001e150f030a0e13040d071c051302150717131213022015050c081f1605"
		const addressgvH9hjc = accounts[4]
		const addressvL9oSlK = accounts[3]
		const addressiYl2IL4 = accounts[4]
		const uint256fBiXrT = await ReviveY8vDMvM.recoverERC20.call(uintxaCegzq, {from: accounts[4]});
		const boolQeXrQUN = await ReviveY8vDMvM.transferWithLock.call(addressgvH9hjc, byteKgwFOjh, uintppyeHnE, uintGWnKLRU, {from: accounts[5]});
		const uint256klrOT9Q = await ReviveY8vDMvM.allowance.call(addressiYl2IL4, addressvL9oSlK, {from: accounts[5]});

		await expect(ReviveY8vDMvM.recoverERC20.call(uintxaCegzq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveY8vDMvM = await Revive.new({from: accounts[1]});
		const uintu3JsNGM = BigInt("862")
		const uintX6tXilh = BigInt("292")
		const byteY2UCjT = "0x12101e1506161419170617060f05020c1c130c031e0909091111060903030e03"
		const addressKUcK4gL = accounts[1]
		const uintXOcnKqv = BigInt("120")
		const addressIYLXHbG = accounts[2]
		const addressZUUc9QJ = accounts[3]
		const uintxQD3V3X = BigInt("132")
		const addressJskCAtA = accounts[5]
		const uint256uxdcnlQ = await ReviveY8vDMvM.recoverERC20.call(uintu3JsNGM, {from: accounts[3]});
		const uint256vKNe3YN = await ReviveY8vDMvM.tokensLockedAtTime.call(addressKUcK4gL, byteY2UCjT, uintX6tXilh, {from: accounts[3]});
		const boolla8yB7w = await ReviveY8vDMvM.transfer.call(addressIYLXHbG, uintXOcnKqv, {from: accounts[1]});
		const uint256zvrVNPa = await ReviveY8vDMvM.totalBalanceOf.call(addressZUUc9QJ, {from: accounts[5]});
		const addressSGELnR = await ReviveY8vDMvM.recoverERC20.call(addressJskCAtA, uintxQD3V3X, {from: accounts[3]});

		await expect(ReviveY8vDMvM.recoverERC20.call(uintu3JsNGM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqmLSS0 = await Revive.new({from: accounts[0]});
		const uintgnGKV8 = BigInt("1059")
		const bytesBZ1HuU = "0x1304160b16151a051b100a0e081f0a0a091c0b03160700181d061a0a161d1909"
		const addressWttxzeR = accounts[1]
		const uintsYWwsG4 = BigInt("2014")
		const uintzqweLHB = BigInt("60")
		const bytejny1AD = "0x11141414011502011c1f1e030c1d0b1f18150405161800180e0d13030017061d"
		const addressTJJJaus = accounts[5]
		const uintkv4TmYN = BigInt("42")
		const addressbJXY7t2 = accounts[0]
		const uintbhQLGx = BigInt("733")
		const addressOJT35th = "0x0000000000000000000000000000000000000001"
		const addressUQ1X5y = accounts[2]
		const addressmPAK3Bs = accounts[0]
		const uint256u053oq7 = await ReviveqmLSS0.tokensLockedAtTime.call(addressWttxzeR, bytesBZ1HuU, uintgnGKV8, {from: accounts[1]});
		const boolrK8LeIV = await ReviveqmLSS0.transferWithLock.call(addressTJJJaus, bytejny1AD, uintzqweLHB, uintsYWwsG4, {from: accounts[0]});
		const uint256o7XaCP5 = await ReviveqmLSS0.recoverERC20.call(uintkv4TmYN, {from: accounts[3]});
		const uint256kDcPUOW = await ReviveqmLSS0.totalBalanceOf.call(addressbJXY7t2, {from: accounts[5]});
		const boolGKRY9Tu = await ReviveqmLSS0.transferFrom.call(addressUQ1X5y, addressOJT35th, uintbhQLGx, {from: accounts[4]});
		const uint256CBUNG6 = await ReviveqmLSS0.totalBalanceOf.call(addressmPAK3Bs, {from: accounts[3]});

		assert.equal(boolrK8LeIV, true)
		assert.equal(uint256u053oq7, BigInt("0"))
		await expect(ReviveqmLSS0.recoverERC20.call(uintkv4TmYN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBwFhDmQ = await Revive.new({from: accounts[3]});
		const uintUvMWRp = BigInt("170")
		const addressW7eC44 = accounts[4]
		const uint256tidxw4U = await ReviveBwFhDmQ.recoverERC20.call(uintUvMWRp, {from: accounts[5]});
		const uint256gXob8Lc = await ReviveBwFhDmQ.getUnlockableTokens.call(addressW7eC44, {from: accounts[1]});

		await expect(ReviveBwFhDmQ.recoverERC20.call(uintUvMWRp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveY8vDMvM = await Revive.new({from: accounts[1]});
		const uintm2ZlTk7 = BigInt("339")
		const byteAedIlnv = "0x02021a010c1316131f021f0a09061e02001a0d06011514070a1609110a1d080b"
		const addressOcKnivt = accounts[1]
		const addressPzMv9D = accounts[4]
		const uintFBU2eoZ = BigInt("1200")
		const uint256pyT1Kd3 = await ReviveY8vDMvM.tokensLockedAtTime.call(addressOcKnivt, byteAedIlnv, uintm2ZlTk7, {from: accounts[4]});
		const uint256zvrVNPa = await ReviveY8vDMvM.totalBalanceOf.call(addressPzMv9D, {from: accounts[5]});
		const uint256DCHP0uW = await ReviveY8vDMvM.recoverERC20.call(uintFBU2eoZ, {from: accounts[4]});

		assert.equal(uint256pyT1Kd3, BigInt("0"))
		assert.equal(uint256zvrVNPa, BigInt("0"))
		await expect(ReviveY8vDMvM.recoverERC20.call(uintFBU2eoZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})