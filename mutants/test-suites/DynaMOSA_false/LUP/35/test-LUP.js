const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPgMj2Y2s = await LUP.new({from: accounts[0]});
		const addressulJ8zTg = accounts[0]
		const uintTiRh2Mf = BigInt("1709")
		const uintryEJ4Z1 = BigInt("637")
		const addressfq2MveN = accounts[2]
		const uint256WrdHTtM = await LUPgMj2Y2s.balanceOf.call(addressulJ8zTg, {from: accounts[3]});
//		const boolW38tJTm = await LUPgMj2Y2s.lock.call(addressfq2MveN, uintryEJ4Z1, uintTiRh2Mf, {from: accounts[2]});
//		const stringck3fG2f = await LUPgMj2Y2s.symbol.call({from: accounts[1]});

		assert.equal(uint256WrdHTtM, BigInt("50000000000000000000000000"))
		await expect(LUPgMj2Y2s.lock.call(addressfq2MveN, uintryEJ4Z1, uintTiRh2Mf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringEBRGaxF = "wAnlZ4Daa11zaG2lzqHgl3jntTsmeW3VfpiYxsTwf5A0lSOg4lvyU6GbbF4er8kTO1qB3oLvzXtHSvsvWYAYYGObZ8fTcu8RxBm"
		const stringbS8i0OR = "dh1KilHj1L1iurOWre7SHhoV"
		const uintmvhbV0y = BigInt("207")
		const LUPY4QDfNn = await LUP.new(stringEBRGaxF, stringbS8i0OR, uintmvhbV0y, {from: accounts[0]});
		const uintyS6lzs1 = BigInt("2026")
		const addressKM7ywv7 = accounts[4]
		const stringTeSMiz = await LUPY4QDfNn.name.call({from: accounts[4]});
		const stringDexRT7w = await LUPY4QDfNn.name.call({from: accounts[2]});
		const booldSy35zp = await LUPY4QDfNn.transfer.call(addressKM7ywv7, uintyS6lzs1, {from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPBnMFyvX = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrpgMgKo = accounts[2]
		const boolw3nceKt = false
		const addressVKS0c5a = accounts[3]
		const uint256foBuYm4 = await LUPBnMFyvX.balanceOf.call(addressrpgMgKo, {from: accounts[4]});
		const booloTohI8f = await LUPBnMFyvX.freezeAccount.call(addressVKS0c5a, boolw3nceKt, {from: accounts[3]});
	});

	it('test for LUP', async () => {
		const LUPnWInRiA = await LUP.new({from: accounts[0]});
		const uint0AqD8R = BigInt("631")
		const addressE0Oiwtq = accounts[2]
		const boolD6r4heI = true
		const addressMNm2uHL = accounts[4]
//		const boolbs4a7sb = await LUPnWInRiA.transfer.call(addressE0Oiwtq, uint0AqD8R, {from: accounts[3]});
//		const boolgPHPsT3 = await LUPnWInRiA.freezeAccount.call(addressMNm2uHL, boolD6r4heI, {from: accounts[2]});
//		const stringi7krMp6 = await LUPnWInRiA.symbol.call({from: accounts[4]});

		await expect(LUPnWInRiA.transfer.call(addressE0Oiwtq, uint0AqD8R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPgMj2Y2s = await LUP.new({from: accounts[0]});
		const addressGk87XIv = accounts[0]
		const uinttNrjxA = BigInt("706")
		const addressPAx96D7 = accounts[2]
		const uinto4RhDcd = BigInt("1709")
		const uintiX3hKne = BigInt("637")
		const addressHjTvSN1 = accounts[2]
		const uintbJD6YM9 = BigInt("1217")
		const uintcBWRJp3 = BigInt("794")
		const addressgLirBln = accounts[5]
		const uint256WrdHTtM = await LUPgMj2Y2s.balanceOf.call(addressGk87XIv, {from: accounts[3]});
//		const boolsDKrNQ = await LUPgMj2Y2s.unlock.call(addressPAx96D7, uinttNrjxA, {from: accounts[0]});
//		const boolW38tJTm = await LUPgMj2Y2s.lock.call(addressHjTvSN1, uintiX3hKne, uinto4RhDcd, {from: accounts[2]});
//		const boolC8sPH0I = await LUPgMj2Y2s.lock.call(addressgLirBln, uintcBWRJp3, uintbJD6YM9, {from: "0x0000000000000000000000000000000000000001"});
//		const stringck3fG2f = await LUPgMj2Y2s.symbol.call({from: accounts[1]});

		assert.equal(uint256WrdHTtM, BigInt("50000000000000000000000000"))
		await expect(LUPgMj2Y2s.unlock.call(addressPAx96D7, uinttNrjxA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPWjDJFAZ = await LUP.new({from: accounts[1]});
		const uintJvWxlaf = BigInt("349")
		const uintyRpd5JL = BigInt("2046")
		const addresslV554sQ = accounts[2]
		const uint8VjWAGpg = await LUPWjDJFAZ.decimals.call({from: accounts[4]});
//		const boolzzfHgX7 = await LUPWjDJFAZ.lock.call(addresslV554sQ, uintyRpd5JL, uintJvWxlaf, {from: accounts[5]});

		assert.equal(uint8VjWAGpg, BigInt("18"))
		await expect(LUPWjDJFAZ.lock.call(addresslV554sQ, uintyRpd5JL, uintJvWxlaf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPnWInRiA = await LUP.new({from: accounts[0]});
		const uintPMc964D = BigInt("631")
		const addresswCpq1Bk = accounts[3]
		const addressGFWuUaE = accounts[2]
		const boolD6r4heI = true
		const addressjmYGrx7 = accounts[4]
		const stringP0yWALN = await LUPnWInRiA.symbol.call({from: accounts[4]});
//		const boolbs4a7sb = await LUPnWInRiA.transfer.call(addresswCpq1Bk, uintPMc964D, {from: accounts[3]});
//		const uint256ypDZKVu = await LUPnWInRiA.balanceOf.call(addressGFWuUaE, {from: accounts[1]});
//		const boolgPHPsT3 = await LUPnWInRiA.freezeAccount.call(addressjmYGrx7, boolD6r4heI, {from: accounts[2]});
//		const stringi7krMp6 = await LUPnWInRiA.symbol.call({from: accounts[4]});

		assert.equal(stringP0yWALN, "LUP")
		await expect(LUPnWInRiA.transfer.call(addresswCpq1Bk, uintPMc964D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPnWInRiA = await LUP.new({from: accounts[0]});
		const uintnw4sr7z = BigInt("631")
		const addressDVLCYhy = accounts[2]
		const addressN2RAlwc = accounts[2]
		const boolD6r4heI = false
		const addressO3Ks96D = accounts[4]
		const stringsNm9jxk = await LUPnWInRiA.name.call({from: accounts[3]});
//		const boolbs4a7sb = await LUPnWInRiA.transfer.call(addressDVLCYhy, uintnw4sr7z, {from: accounts[3]});
//		const addressjlZofPv = await LUPnWInRiA.notFrozen.call(addressN2RAlwc, {from: accounts[1]});
//		const boolgPHPsT3 = await LUPnWInRiA.freezeAccount.call(addressO3Ks96D, boolD6r4heI, {from: accounts[2]});
//		const stringi7krMp6 = await LUPnWInRiA.symbol.call({from: accounts[4]});

		assert.equal(stringsNm9jxk, "LINKUP Token")
		await expect(LUPnWInRiA.transfer.call(addressDVLCYhy, uintnw4sr7z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPmxUTG4A = await LUP.new({from: accounts[2]});
		const addressZDQE4zW = accounts[3]
		const addressRT19qN9 = accounts[1]
		const stringHUZIict = await LUPmxUTG4A.symbol.call({from: accounts[0]});
//		const addressXx3yFHL = await LUPmxUTG4A.notFrozen.call(addressZDQE4zW, {from: accounts[2]});
//		const uint256h8umnvP = await LUPmxUTG4A.balanceOf.call(addressRT19qN9, {from: accounts[4]});

		assert.equal(stringHUZIict, "LUP")
		await expect(LUPmxUTG4A.notFrozen.call(addressZDQE4zW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPgMj2Y2s = await LUP.new({from: accounts[0]});
		const addressajF4Fi4 = accounts[1]
		const uintBvCoNdX = BigInt("1644")
		const uintNHDdEbo = BigInt("1168")
		const addresskODe0yk = accounts[3]
		const uintqhntdYs = BigInt("96")
		const addressePzUwOd = accounts[1]
		const uintaMZ5Krw = BigInt("1220")
		const addressC0wewPH = accounts[3]
		const uint256WrdHTtM = await LUPgMj2Y2s.balanceOf.call(addressajF4Fi4, {from: accounts[3]});
		const boolb3d8Mym = await LUPgMj2Y2s.transferWithLock.call(addresskODe0yk, uintNHDdEbo, uintBvCoNdX, {from: accounts[0]});
//		const boolFYvRS2i = await LUPgMj2Y2s.transfer.call(addressePzUwOd, uintqhntdYs, {from: accounts[4]});
//		const stringck3fG2f = await LUPgMj2Y2s.symbol.call({from: accounts[1]});
//		const boolN3Nu64P = await LUPgMj2Y2s.transfer.call(addressC0wewPH, uintaMZ5Krw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolb3d8Mym, true)
		assert.equal(uint256WrdHTtM, BigInt("0"))
		await expect(LUPgMj2Y2s.transfer.call(addressePzUwOd, uintqhntdYs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPgMj2Y2s = await LUP.new({from: accounts[0]});
		const addressl5OndBu = accounts[0]
		const uintbpO7TL7 = BigInt("1916")
		const uintsukMYpb = BigInt("56")
		const addressYnLBTLq = accounts[3]
		const uint256WrdHTtM = await LUPgMj2Y2s.balanceOf.call(addressl5OndBu, {from: accounts[3]});
//		const boolzWyGWPw = await LUPgMj2Y2s.lock.call(addressYnLBTLq, uintsukMYpb, uintbpO7TL7, {from: accounts[0]});
//		const uint8Dt0lbCN = await LUPgMj2Y2s.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringck3fG2f = await LUPgMj2Y2s.symbol.call({from: accounts[1]});

		assert.equal(uint256WrdHTtM, BigInt("50000000000000000000000000"))
		await expect(LUPgMj2Y2s.lock.call(addressYnLBTLq, uintsukMYpb, uintbpO7TL7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPgMj2Y2s = await LUP.new({from: accounts[0]});
		const boolG2WdELU = false
		const addressDzxcGw9 = accounts[3]
		const addressEIdphap = accounts[0]
		const uintNlwXRAf = BigInt("190")
		const uintEO2Hxwt = BigInt("1426")
		const addressrLPPDtA = accounts[5]
		const boolGgtRdgH = await LUPgMj2Y2s.freezeAccount.call(addressDzxcGw9, boolG2WdELU, {from: accounts[0]});
		const uint256WrdHTtM = await LUPgMj2Y2s.balanceOf.call(addressEIdphap, {from: accounts[3]});
//		const boolQL5nMqz = await LUPgMj2Y2s.transferWithLock.call(addressrLPPDtA, uintEO2Hxwt, uintNlwXRAf, {from: accounts[2]});

		assert.equal(boolGgtRdgH, true)
		assert.equal(uint256WrdHTtM, BigInt("50000000000000000000000000"))
		await expect(LUPgMj2Y2s.transferWithLock.call(addressrLPPDtA, uintEO2Hxwt, uintNlwXRAf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPgMj2Y2s = await LUP.new({from: accounts[0]});
		const addressJAe2Ump = accounts[1]
		const addressgKV7rOQ = accounts[3]
		const uintolitTDz = BigInt("1646")
		const uintdDfYBU6 = BigInt("1168")
		const addressySWWwJN = accounts[3]
		const addressw5OqcgC = accounts[2]
		const uintWALAQ9 = BigInt("96")
		const addressJJ5kfva = accounts[2]
		const uintNjwsB4M = BigInt("1220")
		const addressk21WJju = accounts[3]
		const addressxKP2zzL = accounts[4]
		const uint256WrdHTtM = await LUPgMj2Y2s.balanceOf.call(addressJAe2Ump, {from: accounts[3]});
//		const addressedbKKwj = await LUPgMj2Y2s.upgradeTo.call(addressgKV7rOQ, {from: accounts[3]});
//		const stringcntFPZS = await LUPgMj2Y2s.symbol.call({from: accounts[2]});
//		const boolb3d8Mym = await LUPgMj2Y2s.transferWithLock.call(addressySWWwJN, uintdDfYBU6, uintolitTDz, {from: accounts[0]});
//		const uint256D33sPXQ = await LUPgMj2Y2s.balanceOf.call(addressw5OqcgC, {from: accounts[3]});
//		const boolFYvRS2i = await LUPgMj2Y2s.transfer.call(addressJJ5kfva, uintWALAQ9, {from: accounts[4]});
//		const stringck3fG2f = await LUPgMj2Y2s.symbol.call({from: accounts[1]});
//		const boolN3Nu64P = await LUPgMj2Y2s.transfer.call(addressk21WJju, uintNjwsB4M, {from: "0x0000000000000000000000000000000000000001"});
//		const addresso3ghUCa = await LUPgMj2Y2s.notFrozen.call(addressxKP2zzL, {from: accounts[0]});

		assert.equal(uint256WrdHTtM, BigInt("0"))
		await expect(LUPgMj2Y2s.upgradeTo.call(addressgKV7rOQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPgMj2Y2s = await LUP.new({from: accounts[0]});
		const addressH414j5Y = accounts[1]
		const uintJV7MrBo = BigInt("1644")
		const uintwqWg1j = BigInt("1168")
		const addressD8fMVQa = accounts[3]
		const addressrmM0fP3 = accounts[3]
		const uintyMisVYr = BigInt("97")
		const addressCGkQlCo = accounts[1]
		const uintWFSivOD = BigInt("1220")
		const addresspT3T5QN = accounts[3]
		const boolTls61rr = false
		const addressGNWqGs4 = accounts[2]
		const uintbHtFSdx = BigInt("980")
		const addressIpfoo3 = accounts[0]
		const uint256WrdHTtM = await LUPgMj2Y2s.balanceOf.call(addressH414j5Y, {from: accounts[3]});
		const boolb3d8Mym = await LUPgMj2Y2s.transferWithLock.call(addressD8fMVQa, uintwqWg1j, uintJV7MrBo, {from: accounts[0]});
		const addressDbOW29F = await LUPgMj2Y2s.upgradeTo.call(addressrmM0fP3, {from: accounts[0]});
//		const boolFYvRS2i = await LUPgMj2Y2s.transfer.call(addressCGkQlCo, uintyMisVYr, {from: accounts[4]});
//		const stringck3fG2f = await LUPgMj2Y2s.symbol.call({from: accounts[1]});
//		const boolN3Nu64P = await LUPgMj2Y2s.transfer.call(addresspT3T5QN, uintWFSivOD, {from: "0x0000000000000000000000000000000000000001"});
//		const bool2iyKd2 = await LUPgMj2Y2s.freezeAccount.call(addressGNWqGs4, boolTls61rr, {from: "0x0000000000000000000000000000000000000001"});
//		const booltse2fuy = await LUPgMj2Y2s.transfer.call(addressIpfoo3, uintbHtFSdx, {from: accounts[4]});

		assert.equal(boolb3d8Mym, true)
		assert.equal(uint256WrdHTtM, BigInt("0"))
		await expect(LUPgMj2Y2s.transfer.call(addressCGkQlCo, uintyMisVYr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})