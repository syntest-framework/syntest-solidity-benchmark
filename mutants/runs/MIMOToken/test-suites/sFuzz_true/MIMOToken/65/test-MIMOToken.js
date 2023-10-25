const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenpcWC4T = await MIMOToken.new({from: accounts[2]});
		const uintnPc6Sxm = BigInt("55")
		const uintwxCtBDa = BigInt("1843")
		const uint256xLbvdR4 = await MIMOTokenpcWC4T.setFeeRate.call(uintnPc6Sxm, {from: accounts[1]});
		const uint256HM8K5NF = await MIMOTokenpcWC4T.getFee.call(uintwxCtBDa, {from: accounts[2]});

		assert.equal(uint256HM8K5NF, BigInt("50000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenjzjQLT6 = await MIMOToken.new({from: accounts[1]});
		const uintUkLEJUz = BigInt("881")
		const addressJE0wlHe = accounts[5]
		const addressJ1Bxkmy = accounts[3]
		const uintGEyBoiu = BigInt("1326")
		const address6b093a = accounts[5]
		const uintgCCLsIy = BigInt("1370")
		const addresst3nIzLz = "0x0000000000000000000000000000000000000001"
		const boolOYAtPM3 = await MIMOTokenjzjQLT6.transfer.call(addressJE0wlHe, uintUkLEJUz, {from: accounts[3]});
		const uintuyUBcK = await MIMOTokenjzjQLT6.balanceOf.call(addressJ1Bxkmy, {from: accounts[5]});
		const boolxFMXUfq = await MIMOTokenjzjQLT6.transfer.call(address6b093a, uintGEyBoiu, {from: accounts[3]});
		const boolcfu6xGk = await MIMOTokenjzjQLT6.approve.call(addresst3nIzLz, uintgCCLsIy, {from: accounts[0]});

		await expect(MIMOTokenjzjQLT6.transfer.call(addressJE0wlHe, uintUkLEJUz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenRbeJ1n5 = await MIMOToken.new({from: accounts[3]});
		const uintO4FodsR = BigInt("602")
		const uintg0GT0vi = BigInt("255")
		const uintGW9rjzF = BigInt("2027")
		const addressguVA92L = accounts[0]
		const addressTIR89G5 = accounts[3]
		const uintIAYCeaz = BigInt("1996")
		const addressLLKLL9e = accounts[2]
		const uint256M1qrvg = await MIMOTokenRbeJ1n5.setFeeRate.call(uintO4FodsR, {from: accounts[2]});
		const uint256W6eeHIX = await MIMOTokenRbeJ1n5.setFeeRate.call(uintg0GT0vi, {from: accounts[3]});
		const boolanhkuBM = await MIMOTokenRbeJ1n5.transferFrom.call(addressTIR89G5, addressguVA92L, uintGW9rjzF, {from: accounts[5]});
		const boolhZRlYTA = await MIMOTokenRbeJ1n5.transfer.call(addressLLKLL9e, uintIAYCeaz, {from: accounts[2]});

		await expect(MIMOTokenRbeJ1n5.transferFrom.call(addressTIR89G5, addressguVA92L, uintGW9rjzF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenoQCwpi = await MIMOToken.new({from: accounts[3]});
		const uintRVMf5X = BigInt("1072")
		const addressWfGtTjP = accounts[5]
		const addressFTiNas3 = accounts[3]
		const addressFUEycg2 = accounts[1]
		const uintlvW9HvO = BigInt("1627")
		const addressgqQdl32 = "0x0000000000000000000000000000000000000001"
		const addressow2768e = "0x0000000000000000000000000000000000000001"
		const uint256LxTvrVU = await MIMOTokenoQCwpi.setMinFee.call(uintRVMf5X, {from: accounts[4]});
		const uintU5pKubf = await MIMOTokenoQCwpi.balanceOf.call(addressWfGtTjP, {from: accounts[1]});
		const uintVtuQF5m = await MIMOTokenoQCwpi.totalSupply.call({from: accounts[2]});
		const uintGL9Obbi = await MIMOTokenoQCwpi.allowance.call(addressFUEycg2, addressFTiNas3, {from: accounts[0]});
		const boolclZJRuN = await MIMOTokenoQCwpi.transferFrom.call(addressow2768e, addressgqQdl32, uintlvW9HvO, {from: accounts[1]});

		assert.equal(uintGL9Obbi, BigInt("0"))
		assert.equal(uintU5pKubf, BigInt("0"))
		assert.equal(uintVtuQF5m, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenoQCwpi.transferFrom.call(addressow2768e, addressgqQdl32, uintlvW9HvO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenpcWC4T = await MIMOToken.new({from: accounts[2]});
		const uintkGrtPV = BigInt("55")
		const uintbHPe80B = BigInt("979")
		const addressHlbi1P6 = accounts[1]
		const uintpwLWW62 = BigInt("1874")
		const uint256xLbvdR4 = await MIMOTokenpcWC4T.setFeeRate.call(uintkGrtPV, {from: accounts[1]});
		const boollR07a4F = await MIMOTokenpcWC4T.approve.call(addressHlbi1P6, uintbHPe80B, {from: accounts[3]});
		const uint256HM8K5NF = await MIMOTokenpcWC4T.getFee.call(uintpwLWW62, {from: accounts[2]});

		assert.equal(boollR07a4F, true)
		assert.equal(uint256HM8K5NF, BigInt("50000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenv7UgeVu = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintpb80Yj = BigInt("1154")
		const uintoWIMExz = BigInt("465")
		const uintjx2Z5cX = BigInt("1666")
		const addressDJxtivo = accounts[4]
		const addressEJ81Fq7 = accounts[3]
		const addresszUWRYfS = accounts[1]
		const addressOmo7qVP = accounts[0]
		const uint256af9kDN = await MIMOTokenv7UgeVu.setFeeRate.call(uintpb80Yj, {from: accounts[0]});
		const uint2568kfWH3 = await MIMOTokenv7UgeVu.getFee.call(uintoWIMExz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NlQcAF = await MIMOTokenv7UgeVu.getFee.call(uintjx2Z5cX, {from: accounts[4]});
		const uintyN6DYqL = await MIMOTokenv7UgeVu.allowance.call(addressEJ81Fq7, addressDJxtivo, {from: accounts[5]});
		const uintB1gFqd9 = await MIMOTokenv7UgeVu.allowance.call(addressOmo7qVP, addresszUWRYfS, {from: accounts[3]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenoQCwpi = await MIMOToken.new({from: accounts[3]});
		const uintf0urDlv = BigInt("1072")
		const addressCs7DC4y = accounts[5]
		const addresskaHhYw3 = accounts[3]
		const addressqmCnZhG = accounts[2]
		const uint5BmB0N = BigInt("1627")
		const addressrxV7dKE = "0x0000000000000000000000000000000000000000"
		const addresslI2R7aj = "0x0000000000000000000000000000000000000001"
		const uint256LxTvrVU = await MIMOTokenoQCwpi.setMinFee.call(uintf0urDlv, {from: accounts[4]});
		const uintU5pKubf = await MIMOTokenoQCwpi.balanceOf.call(addressCs7DC4y, {from: accounts[1]});
		const uintGL9Obbi = await MIMOTokenoQCwpi.allowance.call(addressqmCnZhG, addresskaHhYw3, {from: accounts[0]});
		const boolclZJRuN = await MIMOTokenoQCwpi.transferFrom.call(addresslI2R7aj, addressrxV7dKE, uint5BmB0N, {from: accounts[1]});

		assert.equal(uintGL9Obbi, BigInt("0"))
		assert.equal(uintU5pKubf, BigInt("0"))
		await expect(MIMOTokenoQCwpi.transferFrom.call(addresslI2R7aj, addressrxV7dKE, uint5BmB0N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})