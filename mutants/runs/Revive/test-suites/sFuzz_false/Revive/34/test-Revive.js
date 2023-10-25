const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveMonkBMd = await Revive.new({from: accounts[3]});
		const addressm4tVE4K = accounts[0]
		const addressWUMuN3S = accounts[3]
		const addresscJmkooH = accounts[1]
		const addresshgd8z5V = accounts[2]
		const byteMVuifug = "0x010a181f1b17191806191f081a1b121913161f16171810140319180619101d17"
		const addresspSFrxMK = accounts[0]
		const uint256ZstK7qA = await ReviveMonkBMd.unlock.call(addressm4tVE4K, {from: accounts[3]});
		const addressHRYtIHA = await ReviveMonkBMd.transferOwnership.call(addressWUMuN3S, {from: accounts[0]});
		const uint256cZAE9ri = await ReviveMonkBMd.balanceOf.call(addresscJmkooH, {from: accounts[4]});
		const addressK4Gg88x = await ReviveMonkBMd.transferOwnership.call(addresshgd8z5V, {from: accounts[1]});
		const uint256hJbt2pd = await ReviveMonkBMd.totalSupply.call({from: accounts[3]});
		const uint256XMeVwvx = await ReviveMonkBMd.tokensLocked.call(addresspSFrxMK, byteMVuifug, {from: accounts[2]});

		assert.equal(uint256ZstK7qA, BigInt("0"))
		await expect(ReviveMonkBMd.transferOwnership.call(addressWUMuN3S, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveuI0e8Wd = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGgpP0W = accounts[1]
		await ReviveuI0e8Wd.renounceOwnership.call({from: accounts[0]});
		const addressHuvuopK = await ReviveuI0e8Wd.transferOwnership.call(addressGgpP0W, {from: accounts[3]});
		await ReviveuI0e8Wd.onlyOwner.call({from: accounts[2]});
		const addressFt43wK3 = await ReviveuI0e8Wd.owner.call({from: accounts[3]});
		const boolId1WJmI = await ReviveuI0e8Wd.isOwner.call({from: accounts[0]});
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const uintFrsc6GC = BigInt("508")
		const addressRtADItQ = accounts[0]
		const uintwApWkvM = BigInt("1758")
		const bytetCYbheb = "0x1b160209041018080a1b04111f160d11191516201708160f0c0f1207010a0a14"
		const addresstGeajvs = accounts[2]
		const addressPlnhFeQ = accounts[3]
		const uintgsZQn40 = BigInt("1447")
		const uintz4s0iCa = BigInt("755")
		const byteLeLCOU = "0x0507030602032012010e1014151e071802150e050d091316061a09090b010b04"
		const addressuXcr7vm = accounts[0]
		const boolSmrkQ6 = await RevivedtCvuzw.approve.call(addressRtADItQ, uintFrsc6GC, {from: accounts[1]});
		const uint256OfhLQi3 = await RevivedtCvuzw.tokensLockedAtTime.call(addresstGeajvs, bytetCYbheb, uintwApWkvM, {from: accounts[1]});
		const uint256dcDGMwu = await RevivedtCvuzw.balanceOf.call(addressPlnhFeQ, {from: accounts[3]});
		const booliiXXw0X = await RevivedtCvuzw.transferWithLock.call(addressuXcr7vm, byteLeLCOU, uintz4s0iCa, uintgsZQn40, {from: accounts[5]});

		assert.equal(boolSmrkQ6, true)
		assert.equal(uint256OfhLQi3, BigInt("0"))
		assert.equal(uint256dcDGMwu, BigInt("3000000000000000000000000000"))
		await expect(RevivedtCvuzw.transferWithLock.call(addressuXcr7vm, byteLeLCOU, uintz4s0iCa, uintgsZQn40, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveON8ba03 = await Revive.new({from: accounts[2]});
		const byteSLGbaEY = "0x071a1f1b0d11011512011319161f1d010a0e130c031f1e1e010705131b050718"
		const addressbHChlIv = accounts[1]
		const uintdmD2JW = BigInt("979")
		const uintq9uWsjd = BigInt("1063")
		const addressLm4Kqob = "0x0000000000000000000000000000000000000001"
		const uint256nepIiDj = await ReviveON8ba03.tokensLocked.call(addressbHChlIv, byteSLGbaEY, {from: accounts[1]});
		const uint256oeiABx = await ReviveON8ba03.recoverERC20.call(uintdmD2JW, {from: accounts[3]});
		const addressSmUsDFo = await ReviveON8ba03.recoverERC20.call(addressLm4Kqob, uintq9uWsjd, {from: accounts[3]});

		assert.equal(uint256nepIiDj, BigInt("0"))
		await expect(ReviveON8ba03.recoverERC20.call(uintdmD2JW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveQrz7de2 = await Revive.new({from: accounts[1]});
		const addressZmr6un2 = accounts[3]
		const uintypqlA2Y = BigInt("1833")
		const byteIWCrgMh = "0x1c1d1d191a0b1c04110814110b1a100a040504041f021c1a1f1e13020f0e1616"
		const boolhh20eXZ = await ReviveQrz7de2.isOwner.call({from: accounts[0]});
		const uint256geiHMYg = await ReviveQrz7de2.totalBalanceOf.call(addressZmr6un2, {from: accounts[1]});
		await ReviveQrz7de2.renounceOwnership.call({from: accounts[4]});
		const boolTO2jV0g = await ReviveQrz7de2.extendLock.call(byteIWCrgMh, uintypqlA2Y, {from: accounts[2]});
		const addressOMkOcE7 = await ReviveQrz7de2.owner.call({from: accounts[2]});

		assert.equal(boolhh20eXZ, false)
		assert.equal(uint256geiHMYg, BigInt("0"))
		await expect(ReviveQrz7de2.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGCNx0Ke = await Revive.new({from: accounts[4]});
		const uintsBals1u = BigInt("443")
		const addressLdI0G0Z = accounts[1]
		const addressNiUkER9 = accounts[0]
		const uintSAxNvLz = BigInt("1559")
		const addressj3lXCTs = accounts[4]
		const addressGBtJejg = accounts[4]
		const addressK7xVQcF = accounts[2]
		const uintbjJGpS = BigInt("393")
		const addressEb5CDfy = accounts[4]
		const boolNo2LW6h = await ReviveGCNx0Ke.transferFrom.call(addressNiUkER9, addressLdI0G0Z, uintsBals1u, {from: accounts[3]});
		const boolhXlNi86 = await ReviveGCNx0Ke.transferFrom.call(addressGBtJejg, addressj3lXCTs, uintSAxNvLz, {from: accounts[2]});
		const uint256GAVja53 = await ReviveGCNx0Ke.unlock.call(addressK7xVQcF, {from: accounts[3]});
		const boolbeMIwpA = await ReviveGCNx0Ke.decreaseAllowance.call(addressEb5CDfy, uintbjJGpS, {from: accounts[1]});

		await expect(ReviveGCNx0Ke.transferFrom.call(addressNiUkER9, addressLdI0G0Z, uintsBals1u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveON8ba03 = await Revive.new({from: accounts[2]});
		const bytetq2jmnL = "0x071a1f1b0d11011512011319161f1d010a0e130c031f1e1e010705131b050718"
		const addressEqSsH1 = accounts[1]
		const uintSZIUW7o = BigInt("1322")
		const uintYu9Qump = BigInt("1063")
		const addressO86OGLu = "0x0000000000000000000000000000000000000001"
		const addressp2OCisw = accounts[0]
		const uint256nepIiDj = await ReviveON8ba03.tokensLocked.call(addressEqSsH1, bytetq2jmnL, {from: accounts[1]});
		const uint256oeiABx = await ReviveON8ba03.recoverERC20.call(uintSZIUW7o, {from: accounts[3]});
		const addressSmUsDFo = await ReviveON8ba03.recoverERC20.call(addressO86OGLu, uintYu9Qump, {from: accounts[3]});
		const addressvujniJj = await ReviveON8ba03.transferOwnership.call(addressp2OCisw, {from: accounts[1]});

		assert.equal(uint256nepIiDj, BigInt("0"))
		await expect(ReviveON8ba03.recoverERC20.call(uintSZIUW7o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveON8ba03 = await Revive.new({from: accounts[2]});
		const byteFYT3uOy = "0x071a1f1b0d11011512011319161f1d010a0e130c031f1e1e010705131b050718"
		const addresscvzruqH = accounts[1]
		const uintofT50qO = BigInt("1001")
		const uintMVtEQU = BigInt("133")
		const uintQZEvYDt = BigInt("304")
		const byteRWQZ1YU = "0x1e181d041b04111a12170c12111018060120051b041318151c01181f0e1c131f"
		const addressmVri0PJ = "0x0000000000000000000000000000000000000001"
		const uintPBuD0kl = BigInt("1063")
		const addressthCiQ8b = "0x0000000000000000000000000000000000000001"
		const uint256nepIiDj = await ReviveON8ba03.tokensLocked.call(addresscvzruqH, byteFYT3uOy, {from: accounts[1]});
		const boolvFjvPUm = await ReviveON8ba03.isOwner.call({from: accounts[4]});
		const uint256oeiABx = await ReviveON8ba03.recoverERC20.call(uintofT50qO, {from: accounts[3]});
		const boolLRlBfX = await ReviveON8ba03.transferWithLock.call(addressmVri0PJ, byteRWQZ1YU, uintQZEvYDt, uintMVtEQU, {from: accounts[4]});
		const addressSmUsDFo = await ReviveON8ba03.recoverERC20.call(addressthCiQ8b, uintPBuD0kl, {from: accounts[3]});

		assert.equal(boolvFjvPUm, false)
		assert.equal(uint256nepIiDj, BigInt("0"))
		await expect(ReviveON8ba03.recoverERC20.call(uintofT50qO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGcYnjP = await Revive.new({from: accounts[1]});
		const byteS0fseF0 = "0x0f0c0d030d1d1711201e001f1f160201111d1c19101f081e1805080a1a051f18"
		const addressfUeUx54 = accounts[0]
		const byteDLqlRa5 = "0x0417181f1f1e0a01201e1513010d01070c1c1401190b0c000d1a1d0e070f131e"
		const addressxEEI4OH = accounts[4]
		const addressIDya5x8 = accounts[4]
		const addresswJ0cPtX = accounts[2]
		const addressyw1POfc = accounts[4]
		const addressJeBMkui = accounts[2]
		const uint256pm8ah8F = await ReviveGcYnjP.tokensUnlockable.call(addressfUeUx54, byteS0fseF0, {from: accounts[3]});
		const uint256exwAyIb = await ReviveGcYnjP.tokensUnlockable.call(addressxEEI4OH, byteDLqlRa5, {from: accounts[3]});
		const uint256oZpRXuY = await ReviveGcYnjP.allowance.call(addresswJ0cPtX, addressIDya5x8, {from: accounts[4]});
		const uint256sETMBG0 = await ReviveGcYnjP.totalBalanceOf.call(addressyw1POfc, {from: accounts[0]});
		const uint256x6gUB4X = await ReviveGcYnjP.unlock.call(addressJeBMkui, {from: accounts[1]});

		assert.equal(uint256exwAyIb, BigInt("0"))
		assert.equal(uint256oZpRXuY, BigInt("0"))
		assert.equal(uint256pm8ah8F, BigInt("0"))
		assert.equal(uint256sETMBG0, BigInt("0"))
		assert.equal(uint256x6gUB4X, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveNohMBN3 = await Revive.new({from: accounts[5]});
		await ReviveNohMBN3.onlyOwner.call({from: accounts[3]});
		const addressGpLki51 = await ReviveNohMBN3.owner.call({from: accounts[4]});

		await expect(ReviveNohMBN3.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivenJnTcDC = await Revive.new({from: accounts[4]});
		const uinteaAd1C8 = BigInt("1174")
		const addressnot3xhC = accounts[4]
		const uintItH6QpP = BigInt("1917")
		const byteU554eOA = "0x001d050513030d0e130f100c04180c110b000411010d121b01051c1107010e01"
		const addressmGaEm0G = accounts[3]
		const uint256JO8APq = await RevivenJnTcDC.totalSupply.call({from: accounts[0]});
		const addressXj88i5u = await RevivenJnTcDC.recoverERC20.call(addressnot3xhC, uinteaAd1C8, {from: accounts[2]});
		const uint256s3k51sr = await RevivenJnTcDC.tokensLockedAtTime.call(addressmGaEm0G, byteU554eOA, uintItH6QpP, {from: accounts[4]});

		assert.equal(uint256JO8APq, BigInt("3000000000000000000000000000"))
		await expect(RevivenJnTcDC.recoverERC20.call(addressnot3xhC, uinteaAd1C8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const uintaoCK0n9 = BigInt("318")
		const addressZwQtUIw = accounts[3]
		const uintcTo0h59 = BigInt("186")
		const byteBEfSvXY = "0x1f050c0c061f1c051d10141911181a161419150e161f011c0d130e17161f0c06"
		const addressTBqrVuy = accounts[5]
		const boolhCEb676 = await ReviveVndNr3A.increaseAllowance.call(addressZwQtUIw, uintaoCK0n9, {from: accounts[3]});
		const uint256Ums8Vqb = await ReviveVndNr3A.tokensLockedAtTime.call(addressTBqrVuy, byteBEfSvXY, uintcTo0h59, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolhCEb676, true)
		assert.equal(uint256Ums8Vqb, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const uintyr1c1P = BigInt("186")
		const bytexdkYtzc = "0x1f050c0c061f1c051d10141911181a161419150e161f011c0d130e17161f0c06"
		const addresslYbpJm = accounts[5]
		const addressnPi1QUV = accounts[2]
		const addressCUGUg1M = accounts[2]
		const addressSdO1zIO = "0x0000000000000000000000000000000000000001"
		const uintNSODIcV = BigInt("1678")
		const addressLsK43ui = accounts[0]
		const uint256Ums8Vqb = await ReviveVndNr3A.tokensLockedAtTime.call(addresslYbpJm, bytexdkYtzc, uintyr1c1P, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Z71YuQl = await ReviveVndNr3A.totalBalanceOf.call(addressnPi1QUV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kijv167 = await ReviveVndNr3A.allowance.call(addressSdO1zIO, addressCUGUg1M, {from: accounts[0]});
		const boolp8ZWzlL = await ReviveVndNr3A.decreaseAllowance.call(addressLsK43ui, uintNSODIcV, {from: accounts[2]});

		assert.equal(uint256Ums8Vqb, BigInt("0"))
		assert.equal(uint256Z71YuQl, BigInt("0"))
		assert.equal(uint256kijv167, BigInt("0"))
		await expect(ReviveVndNr3A.decreaseAllowance.call(addressLsK43ui, uintNSODIcV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const uintVDEydzq = BigInt("1758")
		const bytelcfeaXh = "0x1b160209041018080a1b04111f160d11171516201708160f0c0f1207010a0a14"
		const addressbslPBAP = accounts[2]
		const uintmz0Yppz = BigInt("1010")
		const byteUV2Ipl = "0x1601060c1a1d1d1804001810070f0f0b080d060610141d0c090c1e1f1d07071c"
		const addressxItdpBV = accounts[1]
		const addressUecTMps = accounts[0]
		const uint256OfhLQi3 = await RevivedtCvuzw.tokensLockedAtTime.call(addressbslPBAP, bytelcfeaXh, uintVDEydzq, {from: accounts[1]});
		const booluPLWoRm = await RevivedtCvuzw.extendLock.call(byteUV2Ipl, uintmz0Yppz, {from: accounts[2]});
		await RevivedtCvuzw.renounceOwnership.call({from: accounts[0]});
		const uint256NTAacb7 = await RevivedtCvuzw.allowance.call(addressUecTMps, addressxItdpBV, {from: accounts[4]});

		assert.equal(uint256OfhLQi3, BigInt("0"))
		await expect(RevivedtCvuzw.extendLock.call(byteUV2Ipl, uintmz0Yppz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const addressoxPCkQ3 = accounts[1]
		const addressmDeSxQk = accounts[3]
		const uintrvaKSq = BigInt("1758")
		const byteFwdMFwd = "0x0820021705040f00160a20030d1d17160711060e130b0408041218171d010b08"
		const addressgMqYOZz = accounts[2]
		const uint256YYIJL9W = await RevivedtCvuzw.unlock.call(addressoxPCkQ3, {from: accounts[3]});
		const uint256JZUP9eL = await RevivedtCvuzw.getUnlockableTokens.call(addressmDeSxQk, {from: accounts[4]});
		const uint256OfhLQi3 = await RevivedtCvuzw.tokensLockedAtTime.call(addressgMqYOZz, byteFwdMFwd, uintrvaKSq, {from: accounts[1]});

		assert.equal(uint256JZUP9eL, BigInt("0"))
		assert.equal(uint256OfhLQi3, BigInt("0"))
		assert.equal(uint256YYIJL9W, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const uintBjx3gi = BigInt("351")
		const uintfTAJOPi = BigInt("1284")
		const byteu4WWRoE = "0x03100f13131c12190c07120c161c030b11131112080e1e0d190e141a13072002"
		const addressYCbejEe = accounts[2]
		const boolx2DdpVh = await ReviveVndNr3A.lock.call(byteu4WWRoE, uintfTAJOPi, uintBjx3gi, {from: accounts[2]});
		const uint256Z71YuQl = await ReviveVndNr3A.totalBalanceOf.call(addressYCbejEe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveVndNr3A.lock.call(byteu4WWRoE, uintfTAJOPi, uintBjx3gi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const uint6WVEjb = BigInt("1210")
		const bytehEXguuc = "0x05151e1004031d1a1305180e0611050d121f0b041c0a1a1e09091c1e1f081905"
		const uintdk5aOBp = BigInt("186")
		const bytey8mF4g9 = "0x1f050c0c061f1c051d10141911181a161419150e161f011c0d130e17161f0c06"
		const addressCL3fq4c = accounts[5]
		const uintSAa2mQU = BigInt("1414")
		const uintVY9KMYW = BigInt("1127")
		const addressACxaw4e = accounts[1]
		const boolNjxhHQX = await ReviveVndNr3A.increaseLockAmount.call(bytehEXguuc, uint6WVEjb, {from: accounts[3]});
		const uint256Ums8Vqb = await ReviveVndNr3A.tokensLockedAtTime.call(addressCL3fq4c, bytey8mF4g9, uintdk5aOBp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256i7DS8D2 = await ReviveVndNr3A.recoverERC20.call(uintSAa2mQU, {from: accounts[0]});
		const uint256GzeH7f = await ReviveVndNr3A.recoverERC20.call(uintVY9KMYW, {from: accounts[3]});
		const uint256Z71YuQl = await ReviveVndNr3A.totalBalanceOf.call(addressACxaw4e, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveVndNr3A.increaseLockAmount.call(bytehEXguuc, uint6WVEjb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const addressfRnaIvW = accounts[1]
		const uint256YYIJL9W = await RevivedtCvuzw.unlock.call(addressfRnaIvW, {from: accounts[3]});
		const boolgz5gPQZ = await RevivedtCvuzw.isOwner.call({from: accounts[4]});
		const addressxy2wOJ = await RevivedtCvuzw.owner.call({from: accounts[3]});

		assert.equal(addressxy2wOJ, 0x5BF38c999224330badb03AC34e94A7Ff5434a85b)
		assert.equal(boolgz5gPQZ, false)
		assert.equal(uint256YYIJL9W, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const addressPm0oil = "0x0000000000000000000000000000000000000001"
		const bytelwLbzPa = "0x0410091b1f0815020d0503191e131f071204110c020e03140d080b051f18131e"
		const addresskHupbph = accounts[0]
		const byteYWMc9h = "0x1e031d091e090f0d1119150b05180a141e19110e18191b09030c031f1b1c1e10"
		const addressQPObwcY = accounts[4]
		const addressKeOKcNc = await ReviveVndNr3A.transferOwnership.call(addressPm0oil, {from: accounts[3]});
		const boolOhPD8Hr = await ReviveVndNr3A.isOwner.call({from: accounts[0]});
		const uint256aft4b86 = await ReviveVndNr3A.tokensUnlockable.call(addresskHupbph, bytelwLbzPa, {from: accounts[4]});
		const uint256i25qDZZ = await ReviveVndNr3A.tokensUnlockable.call(addressQPObwcY, byteYWMc9h, {from: accounts[1]});

		assert.equal(boolOhPD8Hr, false)
		assert.equal(uint256aft4b86, BigInt("0"))
		assert.equal(uint256i25qDZZ, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const uintWOK8ZR8 = BigInt("1094")
		const uintzedJFia = BigInt("161")
		const byteNuP3nj0 = "0x0a191d200b100510090c060418171f1a18071b0d1f0f040615041207141b1818"
		const addressE7nDI8r = accounts[0]
		const uint256M6ldZlC = await ReviveVndNr3A.recoverERC20.call(uintWOK8ZR8, {from: accounts[3]});
		const uint256eaaElY1 = await ReviveVndNr3A.tokensLockedAtTime.call(addressE7nDI8r, byteNuP3nj0, uintzedJFia, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveVndNr3A.recoverERC20.call(uintWOK8ZR8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const addressx6F2NNe = accounts[0]
		const uintteCVG5 = BigInt("1842")
		const addresssO7yz0Z = accounts[4]
		const uintKQunHjx = BigInt("1447")
		const uintc7xunIh = BigInt("723")
		const byteAQnRc7f = "0x0507030602032012010e1014151e071802150e050d091316061a09090b010804"
		const addressrcv6QTH = accounts[1]
		const uint256Gbemn65 = await RevivedtCvuzw.getUnlockableTokens.call(addressx6F2NNe, {from: "0x0000000000000000000000000000000000000001"});
		const addressHnKG7Ij = await RevivedtCvuzw.recoverERC20.call(addresssO7yz0Z, uintteCVG5, {from: accounts[3]});
		const booliiXXw0X = await RevivedtCvuzw.transferWithLock.call(addressrcv6QTH, byteAQnRc7f, uintc7xunIh, uintKQunHjx, {from: accounts[5]});

		assert.equal(uint256Gbemn65, BigInt("0"))
		await expect(RevivedtCvuzw.recoverERC20.call(addresssO7yz0Z, uintteCVG5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const address1i1fCk = accounts[2]
		const uint3R4cCY = BigInt("1277")
		const uint256YYIJL9W = await RevivedtCvuzw.unlock.call(address1i1fCk, {from: accounts[3]});
		const uint256KRGQPm0 = await RevivedtCvuzw.recoverERC20.call(uint3R4cCY, {from: accounts[1]});

		assert.equal(uint256YYIJL9W, BigInt("0"))
		await expect(RevivedtCvuzw.recoverERC20.call(uint3R4cCY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const uintncU41sp = BigInt("21")
		const uintoVzfFrh = BigInt("552")
		const uintoVSsOUY = BigInt("1758")
		const byteQTchxF = "0x07040807131a0d0d0901150d0c101112080b0617140a091b0f0b1c191c000f00"
		const addressrSjrqGv = accounts[2]
		const uint256W8TTAfi = await RevivedtCvuzw.recoverERC20.call(uintncU41sp, {from: accounts[3]});
		const uint256hNu9pdO = await RevivedtCvuzw.recoverERC20.call(uintoVzfFrh, {from: accounts[1]});
		const uint256OfhLQi3 = await RevivedtCvuzw.tokensLockedAtTime.call(addressrSjrqGv, byteQTchxF, uintoVSsOUY, {from: accounts[1]});

		await expect(RevivedtCvuzw.recoverERC20.call(uintncU41sp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveiYTZfx5 = await Revive.new({from: accounts[3]});
		const addressv8WgmO = accounts[2]
		const uintJDFFhPB = BigInt("1959")
		const byteqJupde1 = "0x1c08192018121d111f08180401101b13190716031d070b131e07101b06011c19"
		const addressBhuBII7 = accounts[2]
		const uint2569dW77V = await ReviveiYTZfx5.totalBalanceOf.call(addressv8WgmO, {from: accounts[3]});
		const uint256M1vbTrc = await ReviveiYTZfx5.recoverERC20.call(uintJDFFhPB, {from: accounts[0]});
		const boolBUTind9 = await ReviveiYTZfx5.isOwner.call({from: accounts[3]});
		const uint256H5DkFEy = await ReviveiYTZfx5.tokensLocked.call(addressBhuBII7, byteqJupde1, {from: accounts[1]});

		assert.equal(uint2569dW77V, BigInt("0"))
		await expect(ReviveiYTZfx5.recoverERC20.call(uintJDFFhPB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const addressnhVwtgD = accounts[1]
		const addressrZWeaUl = accounts[1]
		const addressz5ttAHa = accounts[0]
		const uintRnl0j6t = BigInt("1219")
		const uint256Gbemn65 = await RevivedtCvuzw.getUnlockableTokens.call(addressnhVwtgD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256G6U54W6 = await RevivedtCvuzw.unlock.call(addressrZWeaUl, {from: accounts[2]});
		const uint256mvwX8vL = await RevivedtCvuzw.getUnlockableTokens.call(addressz5ttAHa, {from: accounts[2]});
		const uint256MKYpZ5 = await RevivedtCvuzw.recoverERC20.call(uintRnl0j6t, {from: accounts[4]});

		assert.equal(uint256G6U54W6, BigInt("0"))
		assert.equal(uint256Gbemn65, BigInt("0"))
		assert.equal(uint256mvwX8vL, BigInt("0"))
		await expect(RevivedtCvuzw.recoverERC20.call(uintRnl0j6t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const uintqn8GQL = BigInt("285")
		const addressL1jYDg = accounts[2]
		const addresskmTxige = accounts[1]
		const uintjgcApDq = BigInt("408")
		const byteUArj1lX = "0x0a0e0b140816091b160f131403080d0214160a1303081d0a06100d1510081d14"
		const addressM2ZdxG2 = accounts[4]
		const uint256u0LMDqz = await ReviveVndNr3A.recoverERC20.call(uintqn8GQL, {from: accounts[1]});
		const uint256Z71YuQl = await ReviveVndNr3A.totalBalanceOf.call(addressL1jYDg, {from: "0x0000000000000000000000000000000000000001"});
		const addresszGO0zoz = await ReviveVndNr3A.transferOwnership.call(addresskmTxige, {from: accounts[4]});
		const uint256wIbsAxK = await ReviveVndNr3A.tokensLockedAtTime.call(addressM2ZdxG2, byteUArj1lX, uintjgcApDq, {from: accounts[3]});

		await expect(ReviveVndNr3A.recoverERC20.call(uintqn8GQL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const addressV1xmxsz = accounts[4]
		const uintvJFys5 = BigInt("64")
		const address3Tid4q = accounts[1]
		const uintbCbLqEf = BigInt("1004")
		const addressGcupZmp = "0x0000000000000000000000000000000000000001"
		const uint256TbxmdZ6 = await ReviveVndNr3A.balanceOf.call(addressV1xmxsz, {from: accounts[3]});
		const uint256NUlEePY = await ReviveVndNr3A.recoverERC20.call(uintvJFys5, {from: accounts[4]});
		const uint256Z71YuQl = await ReviveVndNr3A.totalBalanceOf.call(address3Tid4q, {from: "0x0000000000000000000000000000000000000001"});
		const boolz4asuOy = await ReviveVndNr3A.increaseAllowance.call(addressGcupZmp, uintbCbLqEf, {from: accounts[1]});

		assert.equal(uint256TbxmdZ6, BigInt("0"))
		await expect(ReviveVndNr3A.recoverERC20.call(uintvJFys5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveogL6Tf7 = await Revive.new({from: accounts[1]});
		const byteDpJEgsz = "0x1a10140f1a1217180b161b031f1c0f150f020a190b1b0d12050e06120010060a"
		const addressP9hMioW = accounts[4]
		const uintk4cbOkT = BigInt("1027")
		const addressGuLo8Cz = accounts[3]
		const uintxTe8Nke = BigInt("1966")
		const addressLHQHBpn = accounts[1]
		const uint256o8HZnK = await ReviveogL6Tf7.tokensUnlockable.call(addressP9hMioW, byteDpJEgsz, {from: accounts[3]});
		const uint256TCJ3keR = await ReviveogL6Tf7.recoverERC20.call(uintk4cbOkT, {from: accounts[3]});
		const uint256Nue5hxk = await ReviveogL6Tf7.balanceOf.call(addressGuLo8Cz, {from: accounts[2]});
		const addressdYw1Sf = await ReviveogL6Tf7.recoverERC20.call(addressLHQHBpn, uintxTe8Nke, {from: accounts[4]});

		assert.equal(uint256o8HZnK, BigInt("0"))
		await expect(ReviveogL6Tf7.recoverERC20.call(uintk4cbOkT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverseSkht = await Revive.new({from: accounts[1]});
		const uintSp4LrvJ = BigInt("430")
		const uintASvfe4H = BigInt("1395")
		const addressWR8GC1C = accounts[4]
		const uintu27JzFe = BigInt("523")
		const addressxRFZTGI = accounts[2]
		const addressWvKkfJL = accounts[5]
		const addresspcVYhY5 = accounts[2]
		const uintAVbGKz2 = BigInt("1728")
		const uintz4lRji7 = BigInt("2035")
		const byteWrgG1NI = "0x0307050716191d0f1f0e0e04120a0003150607061e11141f0c200504031b0c02"
		const uint256YQI9BwW = await ReviverseSkht.recoverERC20.call(uintSp4LrvJ, {from: accounts[0]});
		const addressUVpMlXH = await ReviverseSkht.owner.call({from: accounts[0]});
		const boolAH1uOqo = await ReviverseSkht.transfer.call(addressWR8GC1C, uintASvfe4H, {from: accounts[4]});
		const boolUWrPcTH = await ReviverseSkht.increaseAllowance.call(addressxRFZTGI, uintu27JzFe, {from: accounts[1]});
		const uint256cQvk8N8 = await ReviverseSkht.allowance.call(addresspcVYhY5, addressWvKkfJL, {from: accounts[5]});
		const boolViYP1j9 = await ReviverseSkht.lock.call(byteWrgG1NI, uintz4lRji7, uintAVbGKz2, {from: accounts[1]});

		await expect(ReviverseSkht.recoverERC20.call(uintSp4LrvJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const uintPeJ3NlI = BigInt("1447")
		const uintfvbOQUp = BigInt("755")
		const bytedjjpJcU = "0x0507030602032012010e1014151e071802150e050d091316061a09090b010b04"
		const addressdhrwtLL = accounts[1]
		await RevivedtCvuzw.renounceOwnership.call({from: accounts[3]});
		await RevivedtCvuzw.onlyOwner.call({from: accounts[5]});
		const booliiXXw0X = await RevivedtCvuzw.transferWithLock.call(addressdhrwtLL, bytedjjpJcU, uintfvbOQUp, uintPeJ3NlI, {from: accounts[5]});

		await expect(RevivedtCvuzw.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const uintgrpk94B = BigInt("1636")
		const uintmcj9w3s = BigInt("1758")
		const bytezKQHToh = "0x1b160209041018080a1b04111f160d11171516201708160f0c0f1207010a0a14"
		const addressRg0IgHD = accounts[3]
		const uint256xd1INa9 = await RevivedtCvuzw.recoverERC20.call(uintgrpk94B, {from: accounts[3]});
		const uint256OfhLQi3 = await RevivedtCvuzw.tokensLockedAtTime.call(addressRg0IgHD, bytezKQHToh, uintmcj9w3s, {from: accounts[1]});
		const addressETuG7zM = await RevivedtCvuzw.owner.call({from: accounts[4]});

		await expect(RevivedtCvuzw.recoverERC20.call(uintgrpk94B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivePC05HD = await Revive.new({from: accounts[2]});
		const addressAIsbxa = accounts[0]
		const bytexetTYt = "0x0e021a0b140504170a0d041b140416030f0413020f10110e17150b1a1f0e190d"
		const addressrJwotLy = accounts[5]
		const uintk3qQeHM = BigInt("1337")
		const uintdL3wqoi = BigInt("1082")
		const uintHyyFNyo = BigInt("1438")
		const byteK38i6H = "0x0e1f011a151118041a1d1e121b091c1d011e1408040b0201190b1e1c020e0b06"
		const uint256bavrMLk = await RevivePC05HD.balanceOf.call(addressAIsbxa, {from: accounts[4]});
		const uint256K6N3aBB = await RevivePC05HD.tokensLocked.call(addressrJwotLy, bytexetTYt, {from: accounts[1]});
		const uint256j9eU0Oo = await RevivePC05HD.recoverERC20.call(uintk3qQeHM, {from: accounts[2]});
		const boolnKsXUzP = await RevivePC05HD.lock.call(byteK38i6H, uintHyyFNyo, uintdL3wqoi, {from: accounts[4]});
		const addressqavJcx9 = await RevivePC05HD.owner.call({from: accounts[3]});

		assert.equal(uint256K6N3aBB, BigInt("0"))
		assert.equal(uint256bavrMLk, BigInt("0"))
		await expect(RevivePC05HD.recoverERC20.call(uintk3qQeHM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const uintgP2HYr7 = BigInt("1758")
		const byteE6ktUpi = "0x1b160209041018020a1b04111f160d11171516201708160f0c0f1207010a0a14"
		const addressQersvb = accounts[2]
		const uintIHjLP2X = BigInt("1836")
		const uint256OfhLQi3 = await RevivedtCvuzw.tokensLockedAtTime.call(addressQersvb, byteE6ktUpi, uintgP2HYr7, {from: accounts[1]});
		const uint256u36M8w = await RevivedtCvuzw.recoverERC20.call(uintIHjLP2X, {from: accounts[1]});

		assert.equal(uint256OfhLQi3, BigInt("0"))
		await expect(RevivedtCvuzw.recoverERC20.call(uintIHjLP2X, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const addressYsOSWhf = accounts[3]
		const addressj1GYAGI = "0x0000000000000000000000000000000000000001"
		const uintwOrymM = BigInt("891")
		const uinto0EkPZp = BigInt("1758")
		const byteKHWaYxU = "0x1b160209041018080a1b04111f160d11171516201708160f0c0f1207010a0a14"
		const addresshGl1rqQ = accounts[3]
		const uint256SPdM2AD = await RevivedtCvuzw.allowance.call(addressj1GYAGI, addressYsOSWhf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sY2R06T = await RevivedtCvuzw.recoverERC20.call(uintwOrymM, {from: accounts[2]});
		const uint256OfhLQi3 = await RevivedtCvuzw.tokensLockedAtTime.call(addresshGl1rqQ, byteKHWaYxU, uinto0EkPZp, {from: accounts[1]});

		assert.equal(uint256SPdM2AD, BigInt("0"))
		await expect(RevivedtCvuzw.recoverERC20.call(uintwOrymM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const uintWMSAsHt = BigInt("1758")
		const bytebW5aFI = "0x1b16ffffffff09041018080a1b04111f160d11171516201708160f0c0f1207010a0a14"
		const addressvGMWuJp = accounts[2]
		const uint256OfhLQi3 = await RevivedtCvuzw.tokensLockedAtTime.call(addressvGMWuJp, bytebW5aFI, uintWMSAsHt, {from: accounts[1]});

		await expect(RevivedtCvuzw.tokensLockedAtTime.call(addressvGMWuJp, bytebW5aFI, uintWMSAsHt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const uintPwEArb = BigInt("78")
		const byteR8hboeh = "0x1014191a120d0f071604081403091d07121f200e04010f0a0c1c0d020c030c1a"
		const addresszg2EhY = accounts[3]
		const uintfFJvthG = BigInt("1113")
		const uint256ktNjVQn = await ReviveVndNr3A.tokensLockedAtTime.call(addresszg2EhY, byteR8hboeh, uintPwEArb, {from: accounts[2]});
		const uint256YY9zaOc = await ReviveVndNr3A.recoverERC20.call(uintfFJvthG, {from: accounts[2]});

		assert.equal(uint256ktNjVQn, BigInt("0"))
		await expect(ReviveVndNr3A.recoverERC20.call(uintfFJvthG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const uintoHTaxfE = BigInt("1848")
		const uintThEdAnR = BigInt("351")
		const uintO64ZtDJ = BigInt("1284")
		const byteWkSoAQa = "0x13200e0c050a0e0715070117120e1a1e1a01041218040f14061c1c110b1a0209"
		const uint256FMXko9f = await ReviveVndNr3A.recoverERC20.call(uintoHTaxfE, {from: accounts[4]});
		await ReviveVndNr3A.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolx2DdpVh = await ReviveVndNr3A.lock.call(byteWkSoAQa, uintO64ZtDJ, uintThEdAnR, {from: accounts[2]});

		await expect(ReviveVndNr3A.recoverERC20.call(uintoHTaxfE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVndNr3A = await Revive.new({from: accounts[3]});
		const uintntYAwba = BigInt("1057")
		const uintxWEudiC = BigInt("885")
		const bytehTVyvwc = "0x190f161f150a001a1d14160c120612181920141a0f061210061f1510061d0009"
		const addressn5wQJ3 = accounts[5]
		const uintx6VPslg = BigInt("351")
		const uintAO1FDsz = BigInt("1284")
		const bytedzJ9cD9 = "0x03100f13131c12190c07130c161c030b11131112080e1e0d190e141a13072002"
		const uint256HVcPQ6h = await ReviveVndNr3A.recoverERC20.call(uintntYAwba, {from: accounts[1]});
		const uint256UKprvLQ = await ReviveVndNr3A.tokensLockedAtTime.call(addressn5wQJ3, bytehTVyvwc, uintxWEudiC, {from: accounts[5]});
		const boolx2DdpVh = await ReviveVndNr3A.lock.call(bytedzJ9cD9, uintAO1FDsz, uintx6VPslg, {from: accounts[2]});

		await expect(ReviveVndNr3A.recoverERC20.call(uintntYAwba, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const uintep4DTI = BigInt("189")
		const addresshHrVapF = accounts[2]
		const uint256Z0mvDW = await RevivedtCvuzw.recoverERC20.call(uintep4DTI, {from: accounts[4]});
		const uint256YYIJL9W = await RevivedtCvuzw.unlock.call(addresshHrVapF, {from: accounts[3]});

		await expect(RevivedtCvuzw.recoverERC20.call(uintep4DTI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedtCvuzw = await Revive.new({from: accounts[3]});
		const addressvU6mAoN = accounts[3]
		const addressvNNVVH0 = "0x0000000000000000000000000000000000000001"
		const uintAWwpzxj = BigInt("1447")
		const uintU7PiHON = BigInt("755")
		const byteRP9GaDp = "0x0507fffffffb0602032012010e1014151e071802150e050d091316061a09090b010b04"
		const addressOow8xt = accounts[1]
		const uintJDvg4nt = BigInt("756")
		const uintKQ3yTtm = BigInt("1781")
		const bytewqF7Ca0 = "0x12061516180b0b1d0d0c000d070b11080d0502181f18160e040502001c13081b"
		const addressEEHkl0R = accounts[1]
		const uint256QBxX5VU = await RevivedtCvuzw.allowance.call(addressvNNVVH0, addressvU6mAoN, {from: accounts[1]});
		const booliiXXw0X = await RevivedtCvuzw.transferWithLock.call(addressOow8xt, byteRP9GaDp, uintU7PiHON, uintAWwpzxj, {from: accounts[5]});
		const boolVdt1nee = await RevivedtCvuzw.transferWithLock.call(addressEEHkl0R, bytewqF7Ca0, uintKQ3yTtm, uintJDvg4nt, {from: accounts[4]});
		const uint256HPit64t = await RevivedtCvuzw.totalSupply.call({from: accounts[1]});

		assert.equal(uint256QBxX5VU, BigInt("0"))
		await expect(RevivedtCvuzw.transferWithLock.call(addressOow8xt, byteRP9GaDp, uintU7PiHON, uintAWwpzxj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})