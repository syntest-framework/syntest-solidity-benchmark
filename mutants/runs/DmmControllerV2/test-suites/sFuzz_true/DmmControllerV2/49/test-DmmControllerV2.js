const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2ALfKf4Z = await DmmControllerV2.new({from: accounts[5]});
		const uintmmWq2Jd = BigInt("639")
		const uintPbi2MLF = BigInt("585")
		const uintf4hL6RW = BigInt("537")
		const addressHWg721 = accounts[3]
		const uintiHPpKc = await DmmControllerV2ALfKf4Z.disableMarket.call(uintmmWq2Jd, {from: accounts[2]});
		const 
ZRt3Auk = await DmmControllerV2ALfKf4Z.increaseTotalSupply.call(uintf4hL6RW, uintPbi2MLF, {from: accounts[3]});
		await DmmControllerV2ALfKf4Z.initializer.call({from: accounts[4]});
		const addressj0hyhw = await DmmControllerV2ALfKf4Z.transferOwnership.call(addressHWg721, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressULUqjNY = accounts[0]
		const addressKdEA9gl = accounts[3]
		const addressJiKRt8x = accounts[3]
		const addresswZUEU6Q = accounts[3]
		const addressPdpD1t3 = accounts[1]
		const addressyM88J85 = accounts[2]
		const addressz06is5q = accounts[2]
		const addressQSGMAHF = "0x0000000000000000000000000000000000000001"
		const addressjtGTUch = accounts[1]
		const uintsilKkai = BigInt("697")
		const uintadSOcza = BigInt("739")
		const addressFcNqbZT = accounts[0]
		const DmmControllerV2JvdDEnr = await DmmControllerV2.new(addressULUqjNY, addressKdEA9gl, addressJiKRt8x, addresswZUEU6Q, addressPdpD1t3, addressyM88J85, addressz06is5q, addressQSGMAHF, addressjtGTUch, uintsilKkai, uintadSOcza, addressFcNqbZT, {from: accounts[2]});
		const uintUiq33E = BigInt("302")
		const uintOHDEAYo = BigInt("61")
		const uintGqsIvPy = BigInt("520")
		const addresshjDR6bS = accounts[0]
		const 
cJ0XKeS = await DmmControllerV2JvdDEnr.increaseTotalSupply.call(uintOHDEAYo, uintUiq33E, {from: accounts[3]});
		const boolr76plWv = await DmmControllerV2JvdDEnr.isMarketEnabledByDmmTokenId.call(uintGqsIvPy, {from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2JvdDEnr.nonReentrant.call({from: accounts[3]});
		const addressDfq6C6a = await DmmControllerV2JvdDEnr.blacklist.call(addresshjDR6bS, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressqMpIbdd = accounts[2]
		const addresse5c1UNH = accounts[0]
		const addressOrfcyU1 = accounts[3]
		const addressCxxEJFY = accounts[4]
		const addressl0jLTA7 = accounts[4]
		const addressfqvM837 = accounts[2]
		const addressKiecGkE = accounts[3]
		const addressP8GHkqY = "0x0000000000000000000000000000000000000001"
		const addresswnBFMO = accounts[0]
		const uintD0d2s0q = BigInt("1472")
		const uintiDKy2A = BigInt("300")
		const addressdYqRjAV = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2Pe5RkNf = await DmmControllerV2.new(addressqMpIbdd, addresse5c1UNH, addressOrfcyU1, addressCxxEJFY, addressl0jLTA7, addressfqvM837, addressKiecGkE, addressP8GHkqY, addresswnBFMO, uintD0d2s0q, uintiDKy2A, addressdYqRjAV, {from: accounts[2]});
		const addresslYSh1u7 = accounts[5]
		const addresskgM2R2 = accounts[1]
		const addressv8HJnJo = "0x0000000000000000000000000000000000000001"
		const uintWhexcRg = await DmmControllerV2Pe5RkNf.getTotalCollateralization.call({from: accounts[1]});
		const uintjMdCd1N = await DmmControllerV2Pe5RkNf.getTokenIdFromDmmTokenAddress.call(addresslYSh1u7, {from: "0x0000000000000000000000000000000000000001"});
		const 
cHCiVaB = await DmmControllerV2Pe5RkNf.addMarketFromExistingDmmToken.call(addressv8HJnJo, addresskgM2R2, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressHUx3BYG = accounts[1]
		const addressUTsjDy = accounts[1]
		const addressoQttrNB = accounts[4]
		const addressJxsu9r = accounts[0]
		const addressTFhGRbj = "0x0000000000000000000000000000000000000001"
		const addressW3rl1oT = accounts[1]
		const addressjZnVPmU = accounts[1]
		const addressNNPdCN = accounts[0]
		const addressr3Tz76E = accounts[2]
		const uintB8XciQF = BigInt("1577")
		const uintt6asXIj = BigInt("635")
		const addressktnkgaV = accounts[2]
		const DmmControllerV2CjbGZxw = await DmmControllerV2.new(addressHUx3BYG, addressUTsjDy, addressoQttrNB, addressJxsu9r, addressTFhGRbj, addressW3rl1oT, addressjZnVPmU, addressNNPdCN, addressr3Tz76E, uintB8XciQF, uintt6asXIj, addressktnkgaV, {from: accounts[5]});
		const uint5EJlhd = BigInt("936")
		const uintQSHg2Wr = BigInt("1078")
		const addressvIUESE6 = await DmmControllerV2CjbGZxw.guardian.call({from: accounts[2]});
		const uintwSMJJ3J = await DmmControllerV2CjbGZxw.setMinReserveRatio.call(uint5EJlhd, {from: accounts[2]});
		await DmmControllerV2CjbGZxw.whenPaused.call({from: accounts[3]});
		const uint8xvkNW = await DmmControllerV2CjbGZxw.setMinCollateralization.call(uintQSHg2Wr, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressurydoW = accounts[1]
		const addressLG9bWj1 = accounts[4]
		const addressVC5yp9P = accounts[2]
		const addressQg3arVo = accounts[4]
		const addressXuLZOO = accounts[4]
		const address4xekzC = accounts[5]
		const addressngO5yXo = accounts[0]
		const addressETiIrrG = accounts[4]
		const addressvZ2OZR5 = accounts[2]
		const uintj5cEOh = BigInt("1546")
		const uintJVMP5H = BigInt("183")
		const addressG3lh1YC = accounts[0]
		const DmmControllerV2M8Jr0RX = await DmmControllerV2.new(addressurydoW, addressLG9bWj1, addressVC5yp9P, addressQg3arVo, addressXuLZOO, address4xekzC, addressngO5yXo, addressETiIrrG, addressvZ2OZR5, uintj5cEOh, uintJVMP5H, addressG3lh1YC, {from: accounts[4]});
		await DmmControllerV2M8Jr0RX.pause.call({from: accounts[4]});
		await DmmControllerV2M8Jr0RX.onlyOwnerOrGuardian.call({from: accounts[3]});
		await DmmControllerV2M8Jr0RX.initializer.call({from: accounts[3]});
		await DmmControllerV2M8Jr0RX.onlyOwnerOrGuardian.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressyZVn5Rm = accounts[1]
		const addressotL0jza = accounts[4]
		const addressVkLWgWl = accounts[2]
		const addressUFnPLw = accounts[4]
		const addressRSATt5P = accounts[4]
		const addressti2T0n = accounts[5]
		const addressYI2m0vH = accounts[0]
		const addressUpnvf3 = accounts[4]
		const addressiY9TH1L = accounts[2]
		const uintLW0eCo2 = BigInt("1546")
		const uintiBXMJCH = BigInt("183")
		const addressHtStK6i = accounts[0]
		const DmmControllerV2M8Jr0RX = await DmmControllerV2.new(addressyZVn5Rm, addressotL0jza, addressVkLWgWl, addressUFnPLw, addressRSATt5P, addressti2T0n, addressYI2m0vH, addressUpnvf3, addressiY9TH1L, uintLW0eCo2, uintiBXMJCH, addressHtStK6i, {from: accounts[4]});
		const addressuT2TKWL = accounts[4]
		await DmmControllerV2M8Jr0RX.pause.call({from: accounts[4]});
		const uintFvQnfm = await DmmControllerV2M8Jr0RX.getInterestRateByUnderlyingTokenAddress.call(addressuT2TKWL, {from: accounts[2]});
		await DmmControllerV2M8Jr0RX.initializer.call({from: accounts[3]});
		await DmmControllerV2M8Jr0RX.onlyOwnerOrGuardian.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressU6lwonq = accounts[2]
		const addressQF1Myk1 = accounts[4]
		const addresswMPOW9c = accounts[1]
		const addressPAMhrIc = accounts[0]
		const addressIFeiONs = accounts[4]
		const addresse70JeW7 = accounts[0]
		const addressJl0dEOY = accounts[5]
		const addresskKALTKO = accounts[0]
		const addressk2uJqn4 = accounts[2]
		const uintDD6XoNd = BigInt("351")
		const uintYFFx0kx = BigInt("1334")
		const addressHSSvp8e = accounts[1]
		const DmmControllerV2NcYX1Z = await DmmControllerV2.new(addressU6lwonq, addressQF1Myk1, addresswMPOW9c, addressPAMhrIc, addressIFeiONs, addresse70JeW7, addressJl0dEOY, addresskKALTKO, addressk2uJqn4, uintDD6XoNd, uintYFFx0kx, addressHSSvp8e, {from: accounts[1]});
		const addressriV62XH = accounts[3]
		const addresshVTbf7 = accounts[0]
		const uintccSvgcG = await DmmControllerV2NcYX1Z.getExchangeRate.call(addressriV62XH, {from: accounts[1]});
		const addressxxMmNfr = await DmmControllerV2NcYX1Z.guardian.call({from: accounts[3]});
		const 
GNMCEZA = await DmmControllerV2NcYX1Z.transferOwnership.call(addresshVTbf7, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressyVc4PIV = accounts[4]
		const addressH74asuQ = accounts[3]
		const addressNO4KN3F = accounts[2]
		const addressBTs5R1 = accounts[4]
		const addressZmWig7V = accounts[4]
		const addressR6MpaHn = accounts[4]
		const addresskmvuscp = accounts[0]
		const addressAaoj38M = accounts[3]
		const addressiIOApm4 = accounts[1]
		const uintFRpW4jN = BigInt("1742")
		const uintXos8s5c = BigInt("980")
		const addressQsUM4BF = accounts[3]
		const DmmControllerV2HHui7Nt = await DmmControllerV2.new(addressyVc4PIV, addressH74asuQ, addressNO4KN3F, addressBTs5R1, addressZmWig7V, addressR6MpaHn, addresskmvuscp, addressAaoj38M, addressiIOApm4, uintFRpW4jN, uintXos8s5c, addressQsUM4BF, {from: accounts[4]});
		const uintd6q5sMP = BigInt("834")
		const addressarIlUBM = accounts[0]
		await DmmControllerV2HHui7Nt.renounceOwnership.call({from: accounts[2]});
		const boolIn9hhIw = await DmmControllerV2HHui7Nt.isMarketEnabledByDmmTokenId.call(uintd6q5sMP, {from: accounts[0]});
		const addressvWgqS8b = await DmmControllerV2HHui7Nt.getUnderlyingTokenForDmm.call(addressarIlUBM, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressHsUq4IU = accounts[2]
		const addressXJU6qTi = accounts[4]
		const addressL6L0Coe = accounts[1]
		const addressdkIbxC6 = accounts[0]
		const addressOsISCru = accounts[4]
		const addressDuKL8F1 = accounts[0]
		const addressZ4M8pI6 = accounts[5]
		const addressAj0O0gF = accounts[0]
		const addressnQG0jNg = accounts[2]
		const uintVqwWcXb = BigInt("351")
		const uintdr2govA = BigInt("1334")
		const addressbxgRzxA = accounts[1]
		const DmmControllerV2NcYX1Z = await DmmControllerV2.new(addressHsUq4IU, addressXJU6qTi, addressL6L0Coe, addressdkIbxC6, addressOsISCru, addressDuKL8F1, addressZ4M8pI6, addressAj0O0gF, addressnQG0jNg, uintVqwWcXb, uintdr2govA, addressbxgRzxA, {from: accounts[1]});
		const addresswecRjhk = accounts[4]
		const uintsfiZwpb = await DmmControllerV2NcYX1Z.getActiveCollateralization.call({from: accounts[4]});
		await DmmControllerV2NcYX1Z.initializer.call({from: accounts[2]});
		const uintccSvgcG = await DmmControllerV2NcYX1Z.getExchangeRate.call(addresswecRjhk, {from: accounts[1]});
	});
})