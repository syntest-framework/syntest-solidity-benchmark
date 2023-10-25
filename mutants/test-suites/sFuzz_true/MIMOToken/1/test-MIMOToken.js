const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenVgj4T1P = await MIMOToken.new({from: accounts[1]});
		const addresswGf3rH2 = accounts[3]
		const addressVaNdsr = accounts[2]
		const addressOR00IPg = accounts[2]
		const addressbt4Id6C = accounts[4]
		const uintayXkpWa = await MIMOTokenVgj4T1P.allowance.call(addressVaNdsr, addresswGf3rH2, {from: accounts[3]});
		const uint5g4ZW2 = await MIMOTokenVgj4T1P.totalSupply.call({from: accounts[4]});
		const uintRKguNi1 = await MIMOTokenVgj4T1P.allowance.call(addressbt4Id6C, addressOR00IPg, {from: accounts[0]});

		assert.equal(uint5g4ZW2, BigInt("16000000000000000000000000"))
		assert.equal(uintRKguNi1, BigInt("0"))
		assert.equal(uintayXkpWa, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokeng0O1bGj = await MIMOToken.new({from: accounts[5]});
		const uintIKEkPg1 = BigInt("168")
		const addressh8x1p3B = accounts[4]
		const uintzbRDQO3 = BigInt("1953")
		const address8Ctaxc = accounts[3]
		const addressMvmPNdV = accounts[4]
		const addressfIUrUae = accounts[3]
		const uintut5IOUn = await MIMOTokeng0O1bGj.totalSupply.call({from: accounts[4]});
		const booli2yQEQ = await MIMOTokeng0O1bGj.approve.call(addressh8x1p3B, uintIKEkPg1, {from: accounts[3]});
//		const boolvzk9UnR = await MIMOTokeng0O1bGj.transfer.call(address8Ctaxc, uintzbRDQO3, {from: accounts[2]});
//		const uintK0fDHoQ = await MIMOTokeng0O1bGj.balanceOf.call(addressMvmPNdV, {from: accounts[2]});
//		const uintvQ4DQs = await MIMOTokeng0O1bGj.balanceOf.call(addressfIUrUae, {from: accounts[0]});

		assert.equal(booli2yQEQ, true)
		assert.equal(uintut5IOUn, BigInt("16000000000000000000000000"))
		await expect(MIMOTokeng0O1bGj.transfer.call(address8Ctaxc, uintzbRDQO3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenUhjoLPv = await MIMOToken.new({from: accounts[5]});
		const uintk5dwaih = BigInt("1107")
		const uintwQalWIc = BigInt("1844")
		const addressxlzHwym = accounts[2]
		const uintx1W0IYO = BigInt("1236")
		const uintrAYY9nK = BigInt("1242")
		const addressbLBHQUu = accounts[2]
		const uint256OHIwFY8 = await MIMOTokenUhjoLPv.setMinFee.call(uintk5dwaih, {from: accounts[1]});
		const boolV5PTPJx = await MIMOTokenUhjoLPv.approve.call(addressxlzHwym, uintwQalWIc, {from: accounts[2]});
		const uint256wuguXJX = await MIMOTokenUhjoLPv.setFeeRate.call(uintx1W0IYO, {from: accounts[4]});
		const uint256TUxwtJS = await MIMOTokenUhjoLPv.setFeeRate.call(uintrAYY9nK, {from: accounts[1]});
		const uintYgkE4h9 = await MIMOTokenUhjoLPv.balanceOf.call(addressbLBHQUu, {from: accounts[0]});

		assert.equal(boolV5PTPJx, true)
		assert.equal(uintYgkE4h9, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokencRwMz08 = await MIMOToken.new({from: accounts[1]});
		const addresswmEwyM = accounts[1]
		const addressytynC7I = accounts[0]
		const uintPUEtPYD = BigInt("1816")
		const uintFF1gX3y = BigInt("1064")
		const addressKWRO6hw = accounts[3]
		const addressDfcB1d = accounts[4]
		const uintuVCMGW = BigInt("584")
		const uintGs5JAWo = BigInt("1462")
		const addressQMALAfA = accounts[2]
		const uintFGBXIwo = await MIMOTokencRwMz08.allowance.call(addressytynC7I, addresswmEwyM, {from: accounts[4]});
		const uint256JE0zNHO = await MIMOTokencRwMz08.setFeeRate.call(uintPUEtPYD, {from: accounts[1]});
//		const boolwAjVXYx = await MIMOTokencRwMz08.transferFrom.call(addressDfcB1d, addressKWRO6hw, uintFF1gX3y, {from: accounts[1]});
//		const uint256bHUTKDo = await MIMOTokencRwMz08.setMinFee.call(uintuVCMGW, {from: accounts[4]});
//		const boolpNQRcQA = await MIMOTokencRwMz08.transfer.call(addressQMALAfA, uintGs5JAWo, {from: accounts[0]});

		assert.equal(uintFGBXIwo, BigInt("0"))
		await expect(MIMOTokencRwMz08.transferFrom.call(addressDfcB1d, addressKWRO6hw, uintFF1gX3y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenhmTuB6 = await MIMOToken.new({from: accounts[1]});
		const uintb36P5Gq = BigInt("1151")
		const uintx9svlze = BigInt("465")
		const addressrTmHysn = accounts[0]
		const uintEEJt2F4 = BigInt("1552")
		const uintyvve1vj = BigInt("1900")
		const addressdmxlLtm = accounts[3]
		const uintm34Mzx = BigInt("1851")
		const address2gmU6c = accounts[2]
		const uintDWEdqD = BigInt("1362")
		const uintkkL4HNK = BigInt("169")
		const addressOILfeNk = "0x0000000000000000000000000000000000000001"
		const uint256z7GEi23 = await MIMOTokenhmTuB6.setFeeRate.call(uintb36P5Gq, {from: accounts[2]});
		const booleMS1nR = await MIMOTokenhmTuB6.approve.call(addressrTmHysn, uintx9svlze, {from: accounts[5]});
		const uint256S2n1id1 = await MIMOTokenhmTuB6.getFee.call(uintEEJt2F4, {from: accounts[1]});
		const boolf1y4VC = await MIMOTokenhmTuB6.approve.call(addressdmxlLtm, uintyvve1vj, {from: accounts[0]});
		const booljvmUQ8C = await MIMOTokenhmTuB6.approve.call(address2gmU6c, uintm34Mzx, {from: accounts[4]});
		const uint256QQR4rqS = await MIMOTokenhmTuB6.setFeeRate.call(uintDWEdqD, {from: accounts[1]});
//		const boolGdVZjma = await MIMOTokenhmTuB6.transfer.call(addressOILfeNk, uintkkL4HNK, {from: accounts[2]});

		assert.equal(booleMS1nR, true)
		assert.equal(boolf1y4VC, true)
		assert.equal(booljvmUQ8C, true)
		assert.equal(uint256S2n1id1, BigInt("50000000000000000"))
		await expect(MIMOTokenhmTuB6.transfer.call(addressOILfeNk, uintkkL4HNK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenOjA8taz = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkbfJstM = BigInt("2018")
		const addressYtQmTBW = accounts[1]
		const uintuRkxxuW = BigInt("897")
		const uintE7qAEWD = BigInt("1693")
		const booliRbiTKg = await MIMOTokenOjA8taz.transfer.call(addressYtQmTBW, uintkbfJstM, {from: accounts[0]});
		const uint2562ODGFm = await MIMOTokenOjA8taz.getFee.call(uintuRkxxuW, {from: accounts[0]});
		const uint256eEqVISE = await MIMOTokenOjA8taz.setFeeRate.call(uintE7qAEWD, {from: accounts[4]});
		const uintJhAHR4U = await MIMOTokenOjA8taz.totalSupply.call({from: accounts[0]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenhmTuB6 = await MIMOToken.new({from: accounts[1]});
		const uinth2q7FVD = BigInt("1151")
		const uintyNASKU = BigInt("1900")
		const addressrEPpYtV = accounts[3]
		const uinttK8iCtR = BigInt("169")
		const addressIhZ8lcC = "0x0000000000000000000000000000000000000000"
		const uint256z7GEi23 = await MIMOTokenhmTuB6.setFeeRate.call(uinth2q7FVD, {from: accounts[2]});
		const boolf1y4VC = await MIMOTokenhmTuB6.approve.call(addressrEPpYtV, uintyNASKU, {from: accounts[0]});
//		const boolGdVZjma = await MIMOTokenhmTuB6.transfer.call(addressIhZ8lcC, uinttK8iCtR, {from: accounts[2]});

		assert.equal(boolf1y4VC, true)
		await expect(MIMOTokenhmTuB6.transfer.call(addressIhZ8lcC, uinttK8iCtR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})