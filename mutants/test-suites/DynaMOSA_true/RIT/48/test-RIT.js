const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITszlOUi = await RIT.new({from: accounts[4]});
		const uintjPFi8O = BigInt("1016")
		const addressP3BrSry = accounts[4]
		const addressDnRuNN0 = accounts[3]
		const uintbPwEqzb = BigInt("1834")
		const uintFNFe0JQ = BigInt("808")
		const addressdZLoj5Q = accounts[5]
//		const boolR2IdWIf = await RITszlOUi.transferFrom.call(addressDnRuNN0, addressP3BrSry, uintjPFi8O, {from: accounts[0]});
//		const uint256PwRyJb = await RITszlOUi._burn.call(uintbPwEqzb, {from: accounts[2]});
//		const boolbW52U2b = await RITszlOUi.increaseAllowance.call(addressdZLoj5Q, uintFNFe0JQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RITszlOUi.transferFrom.call(addressDnRuNN0, addressP3BrSry, uintjPFi8O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITO5H6YL9 = await RIT.new({from: accounts[2]});
		const uinttRVzQ0q = BigInt("1745")
		const addressE34ajCx = accounts[3]
		const uintjEOnUXh = BigInt("1341")
		const addresslT6fa9q = accounts[3]
		const uintVzvaL88 = BigInt("1681")
		const addressy3gz5cD = accounts[0]
//		const boolNcnQhjM = await RITO5H6YL9.decreaseAllowance.call(addressE34ajCx, uinttRVzQ0q, {from: accounts[2]});
//		const booltwrU4x = await RITO5H6YL9.decreaseAllowance.call(addresslT6fa9q, uintjEOnUXh, {from: accounts[3]});
//		const uint8SNRpZEr = await RITO5H6YL9.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolX4NB4pP = await RITO5H6YL9.increaseAllowance.call(addressy3gz5cD, uintVzvaL88, {from: accounts[5]});

		await expect(RITO5H6YL9.decreaseAllowance.call(addressE34ajCx, uinttRVzQ0q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITzlVoSkv = await RIT.new({from: accounts[0]});
		const addresspgjicTV = accounts[5]
		const addressg9eFb0K = accounts[3]
		const uintXuh6xZj = BigInt("1010")
		const addresswbaDykL = "0x0000000000000000000000000000000000000001"
		const uint256B9UmTjN = await RITzlVoSkv.allowance.call(addressg9eFb0K, addresspgjicTV, {from: accounts[5]});
		const boolZAkmE3 = await RITzlVoSkv.increaseAllowance.call(addresswbaDykL, uintXuh6xZj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZAkmE3, true)
		assert.equal(uint256B9UmTjN, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITv4TO2Ei = await RIT.new({from: accounts[1]});
		const uintB6VCNMv = BigInt("804")
		const addresspHxt0MB = accounts[1]
		const addressrOWYgxp = accounts[1]
//		const boolPj0RBk4 = await RITv4TO2Ei.transfer.call(addresspHxt0MB, uintB6VCNMv, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zW3z4PA = await RITv4TO2Ei.balanceOf.call(addressrOWYgxp, {from: accounts[2]});

		await expect(RITv4TO2Ei.transfer.call(addresspHxt0MB, uintB6VCNMv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITjjYyGUI = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUgqndg = BigInt("137")
		const addressdUMtdpB = accounts[0]
		const uinttETdxpz = BigInt("350")
		const addressZS3Xcq3 = accounts[4]
		const addressOR2d7AS = accounts[2]
		const uintHCEk9dD = BigInt("434")
		const addressuAinzum = accounts[0]
		const uintfkTR3ey = BigInt("1308")
		const addressyE6Ji68 = accounts[4]
		const boolpSwp5PD = await RITjjYyGUI.increaseAllowance.call(addressdUMtdpB, uintUgqndg, {from: accounts[2]});
		const boolFIcqxyW = await RITjjYyGUI.transferFrom.call(addressOR2d7AS, addressZS3Xcq3, uinttETdxpz, {from: accounts[2]});
		const boolbOGTSd1 = await RITjjYyGUI.transfer.call(addressuAinzum, uintHCEk9dD, {from: accounts[0]});
		const boolnTKtuYX = await RITjjYyGUI.approve.call(addressyE6Ji68, uintfkTR3ey, {from: accounts[1]});
		const stringUKfR9Dr = await RITjjYyGUI.name.call({from: accounts[1]});
	});

	it('test for RIT', async () => {
		const RITCPOM7MS = await RIT.new({from: accounts[1]});
		const addressWJNM2rd = accounts[1]
		const uintf1IP2nX = BigInt("1776")
		const addressIUcjVK = accounts[0]
		const addressU8hse7j = accounts[2]
		const uint256nw1Obg = await RITCPOM7MS.balanceOf.call(addressWJNM2rd, {from: accounts[2]});
//		const boolbeIv7Xc = await RITCPOM7MS.transferFrom.call(addressU8hse7j, addressIUcjVK, uintf1IP2nX, {from: accounts[4]});
//		const stringwjyKtN = await RITCPOM7MS.symbol.call({from: accounts[5]});

		assert.equal(uint256nw1Obg, BigInt("0"))
		await expect(RITCPOM7MS.transferFrom.call(addressU8hse7j, addressIUcjVK, uintf1IP2nX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITlLAO8RQ = await RIT.new({from: accounts[3]});
		const addressjA8zCAy = accounts[1]
		const addressUQUiuyV = accounts[1]
		const uintuupvLUz = BigInt("958")
		const addresseHefHNW = accounts[1]
		const uintN53H0Xj = BigInt("1735")
		const addressnEFqJY = accounts[4]
		const uint256xwPYjKa = await RITlLAO8RQ.allowance.call(addressUQUiuyV, addressjA8zCAy, {from: accounts[2]});
		const stringnv1ieum = await RITlLAO8RQ.name.call({from: accounts[3]});
		const boolSASsybi = await RITlLAO8RQ.approve.call(addresseHefHNW, uintuupvLUz, {from: accounts[0]});
//		const boolNhMPxtG = await RITlLAO8RQ.transfer.call(addressnEFqJY, uintN53H0Xj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolSASsybi, true)
		assert.equal(stringnv1ieum, "Real Estate Investment Token")
		assert.equal(uint256xwPYjKa, BigInt("0"))
		await expect(RITlLAO8RQ.transfer.call(addressnEFqJY, uintN53H0Xj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITzlVoSkv = await RIT.new({from: accounts[0]});
		const address00OUZj = accounts[5]
		const addressH0zmEAS = accounts[3]
		const addressytI4cYL = accounts[2]
		const addressdYBEp7R = accounts[2]
		const addressUrtv8F4 = accounts[0]
		const uint256B9UmTjN = await RITzlVoSkv.allowance.call(addressH0zmEAS, address00OUZj, {from: accounts[5]});
		const uint256PyirmqU = await RITzlVoSkv.balanceOf.call(addressytI4cYL, {from: accounts[0]});
		const stringerc7WBQ = await RITzlVoSkv.symbol.call({from: accounts[5]});
		const uint256nJKbUN2 = await RITzlVoSkv.allowance.call(addressUrtv8F4, addressdYBEp7R, {from: accounts[4]});

		assert.equal(stringerc7WBQ, "RIT 2.0")
		assert.equal(uint256B9UmTjN, BigInt("0"))
		assert.equal(uint256PyirmqU, BigInt("0"))
		assert.equal(uint256nJKbUN2, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITmf01Y6W = await RIT.new({from: accounts[3]});
		const uintdEQW279 = BigInt("1385")
		const addressajbpVu = accounts[0]
		const uintGDwFmx8 = BigInt("723")
		const addresscBfUB2k = accounts[0]
		const addressIA3j66 = accounts[5]
		const addressqgoiZ6H = accounts[2]
		const uinteeSwxre = BigInt("1556")
		const addressZWVTJSj = accounts[4]
		const boolg2Fk8Io = await RITmf01Y6W.increaseAllowance.call(addressajbpVu, uintdEQW279, {from: accounts[4]});
		const boolK9bWEe = await RITmf01Y6W.increaseAllowance.call(addresscBfUB2k, uintGDwFmx8, {from: accounts[3]});
		const uint2568Ngobx = await RITmf01Y6W.totalSupply.call({from: accounts[0]});
		const uint256pXbB7Za = await RITmf01Y6W.allowance.call(addressqgoiZ6H, addressIA3j66, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWMxi3R = await RITmf01Y6W.decreaseAllowance.call(addressZWVTJSj, uinteeSwxre, {from: accounts[5]});

		assert.equal(boolK9bWEe, true)
		assert.equal(boolg2Fk8Io, true)
		assert.equal(uint2568Ngobx, BigInt("500000000000000000000000000"))
		assert.equal(uint256pXbB7Za, BigInt("0"))
		await expect(RITmf01Y6W.decreaseAllowance.call(addressZWVTJSj, uinteeSwxre, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITmf01Y6W = await RIT.new({from: accounts[3]});
		const uintoF7R3i0 = BigInt("1385")
		const addressRd2BDkK = accounts[1]
		const uintYVlrFT9 = BigInt("723")
		const addressYr8kNST = accounts[0]
		const addressZJeNFUZ = accounts[5]
		const addressKycVeMa = accounts[2]
		const uintX2avGB = BigInt("1556")
		const addressEZLXRTp = accounts[4]
		const boolg2Fk8Io = await RITmf01Y6W.increaseAllowance.call(addressRd2BDkK, uintoF7R3i0, {from: accounts[4]});
		const boolK9bWEe = await RITmf01Y6W.increaseAllowance.call(addressYr8kNST, uintYVlrFT9, {from: accounts[3]});
		const uint8mjjDn03 = await RITmf01Y6W.decimals.call({from: accounts[2]});
		const uint2568Ngobx = await RITmf01Y6W.totalSupply.call({from: accounts[0]});
		const uint256pXbB7Za = await RITmf01Y6W.allowance.call(addressKycVeMa, addressZJeNFUZ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWMxi3R = await RITmf01Y6W.decreaseAllowance.call(addressEZLXRTp, uintX2avGB, {from: accounts[5]});

		assert.equal(boolK9bWEe, true)
		assert.equal(boolg2Fk8Io, true)
		assert.equal(uint2568Ngobx, BigInt("500000000000000000000000000"))
		assert.equal(uint256pXbB7Za, BigInt("0"))
		assert.equal(uint8mjjDn03, BigInt("18"))
		await expect(RITmf01Y6W.decreaseAllowance.call(addressEZLXRTp, uintX2avGB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITlLAO8RQ = await RIT.new({from: accounts[3]});
		const addressPo4q6F = accounts[1]
		const addressjs3y93s = accounts[1]
		const uintlvWJHBI = BigInt("1054")
		const uintZ6ZjRzB = BigInt("782")
		const addressFZwX6sN = accounts[2]
		const uintEpDGpO = BigInt("958")
		const addressxZudPab = accounts[1]
		const uintiR2Ehm4 = BigInt("1735")
		const addressLFO2Lk = accounts[3]
		const uint256xwPYjKa = await RITlLAO8RQ.allowance.call(addressjs3y93s, addressPo4q6F, {from: accounts[2]});
//		const uint256gPInfr1 = await RITlLAO8RQ._burn.call(uintlvWJHBI, {from: accounts[4]});
//		const boolZbiYCY2 = await RITlLAO8RQ.decreaseAllowance.call(addressFZwX6sN, uintZ6ZjRzB, {from: accounts[2]});
//		const stringnv1ieum = await RITlLAO8RQ.name.call({from: accounts[3]});
//		const boolSASsybi = await RITlLAO8RQ.approve.call(addressxZudPab, uintEpDGpO, {from: accounts[0]});
//		const boolNhMPxtG = await RITlLAO8RQ.transfer.call(addressLFO2Lk, uintiR2Ehm4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256xwPYjKa, BigInt("0"))
		await expect(RITlLAO8RQ._burn.call(uintlvWJHBI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITO5H6YL9 = await RIT.new({from: accounts[2]});
		const addressKG9JW7c = accounts[5]
		const addressfVGz7uT = "0x0000000000000000000000000000000000000001"
		const uinthf1IZUO = BigInt("1038")
		const addressD8Fmuhu = "0x0000000000000000000000000000000000000000"
		const uint256x5M6nlS = await RITO5H6YL9.allowance.call(addressfVGz7uT, addressKG9JW7c, {from: accounts[4]});
//		const boolxtHjPCp = await RITO5H6YL9.approve.call(addressD8Fmuhu, uinthf1IZUO, {from: accounts[3]});

		assert.equal(uint256x5M6nlS, BigInt("0"))
		await expect(RITO5H6YL9.approve.call(addressD8Fmuhu, uinthf1IZUO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})