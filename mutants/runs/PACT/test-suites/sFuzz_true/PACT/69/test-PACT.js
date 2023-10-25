const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTKrGmfaM = await PACT.new({from: accounts[4]});
		const addressDt2bym = accounts[3]
		const addressPgH3DfA = accounts[4]
		const uintPy1zqvO = BigInt("311")
		const addresssfwcjnT = accounts[3]
		const uinto7gFCq = BigInt("24")
		const addressIMTF2yf = accounts[1]
		const uintF3N1dF = await PACTKrGmfaM.allowance.call(addressPgH3DfA, addressDt2bym, {from: accounts[0]});
		const boolVHFEWyz = await PACTKrGmfaM.transfer.call(addresssfwcjnT, uintPy1zqvO, {from: accounts[4]});
		const boolvMOfj5F = await PACTKrGmfaM.burn.call(addressIMTF2yf, uinto7gFCq, {from: accounts[1]});
		const uintCQXyFQ = await PACTKrGmfaM.totalSupply.call({from: accounts[3]});

		assert.equal(uintF3N1dF, BigInt("0"))
		await expect(PACTKrGmfaM.transfer.call(addresssfwcjnT, uintPy1zqvO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKI5peBp = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressoTkmH8f = accounts[4]
		const uintpsW6Zi = BigInt("730")
		const addressdRwbSS = accounts[2]
		const addressE1V4gay = accounts[0]
		const boolA723DX = await PACTKI5peBp.setupRewards.call(addressoTkmH8f, {from: accounts[2]});
		const boolG35ZyDS = await PACTKI5peBp.approve.call(addressdRwbSS, uintpsW6Zi, {from: "0x0000000000000000000000000000000000000001"});
		const boolJMPY4Gc = await PACTKI5peBp.setupTeam.call(addressE1V4gay, {from: accounts[5]});
	});

	it('test for PACT', async () => {
		const PACTRmtzrLN = await PACT.new({from: accounts[3]});
		const uint8AjJRzwh = await PACTRmtzrLN.decimals.call({from: accounts[4]});
		const stringBghqgS4 = await PACTRmtzrLN.symbol.call({from: accounts[5]});

		assert.equal(stringBghqgS4, "PACT")
		assert.equal(uint8AjJRzwh, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACTddxKNXa = await PACT.new({from: accounts[2]});
		const addressIzXJYL6 = "0x0000000000000000000000000000000000000001"
		const addressQhFV8fw = "0x0000000000000000000000000000000000000001"
		const boolhcv1C3p = await PACTddxKNXa.setupReserve.call(addressIzXJYL6, {from: accounts[2]});
		const uintGZQzpxr = await PACTddxKNXa.totalSupply.call({from: accounts[2]});
		const boolGAB6dP4 = await PACTddxKNXa.setupFarming.call(addressQhFV8fw, {from: accounts[4]});
		const stringHPLpNY2 = await PACTddxKNXa.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTddxKNXa.setupReserve.call(addressIzXJYL6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTHarcjQj = await PACT.new({from: accounts[1]});
		const addressaWmiSs4 = accounts[3]
		const addresscmdvHo2 = accounts[3]
		const addressHxGZDtL = accounts[3]
		const uintCghd060 = BigInt("1676")
		const addressqCwchTy = accounts[3]
		const boolTG6I4zg = await PACTHarcjQj.setupBasePool.call(addressaWmiSs4, {from: accounts[1]});
		const boolVDLX15 = await PACTHarcjQj.setupTeam.call(addresscmdvHo2, {from: "0x0000000000000000000000000000000000000001"});
		const boolWRJofZ = await PACTHarcjQj.setupBasePool.call(addressHxGZDtL, {from: "0x0000000000000000000000000000000000000001"});
		const boolwMzVp8x = await PACTHarcjQj.transfer.call(addressqCwchTy, uintCghd060, {from: accounts[0]});

		await expect(PACTHarcjQj.setupBasePool.call(addressaWmiSs4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzoPBheA = await PACT.new({from: accounts[5]});
		const uintPYyfogm = BigInt("300")
		const address4fvoX8 = accounts[4]
		const uintN7txmw = BigInt("24")
		const addressFdaHErE = accounts[3]
		const boolgtyEAvJ = await PACTzoPBheA.approve.call(address4fvoX8, uintPYyfogm, {from: accounts[2]});
		const uintp24fis = await PACTzoPBheA.totalSupply.call({from: accounts[2]});
		const bool5kn79N = await PACTzoPBheA.burn.call(addressFdaHErE, uintN7txmw, {from: accounts[5]});

		assert.equal(boolgtyEAvJ, true)
		assert.equal(uintp24fis, BigInt("1000000000000000000000000000"))
		await expect(PACTzoPBheA.burn.call(addressFdaHErE, uintN7txmw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTnnGW534 = await PACT.new({from: accounts[2]});
		const address1Bjwq0 = accounts[4]
		const addresskyr0E1G = accounts[2]
		const addressT6GEisS = accounts[0]
		const addressmylvnP = accounts[1]
		const boolaIIpC3o = await PACTnnGW534.setupRewards.call(address1Bjwq0, {from: accounts[1]});
		const uintAP5hdvU = await PACTnnGW534.totalSupply.call({from: accounts[2]});
		const uintF4ji9B = await PACTnnGW534.allowance.call(addressT6GEisS, addresskyr0E1G, {from: "0x0000000000000000000000000000000000000001"});
		const boolHWTj6sf = await PACTnnGW534.setupBasePool.call(addressmylvnP, {from: accounts[4]});

		await expect(PACTnnGW534.setupRewards.call(address1Bjwq0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTRmtzrLN = await PACT.new({from: accounts[3]});
		const addressN3OVRvW = accounts[2]
		const addressxJ4OpPW = accounts[3]
		const addressPdVTEAp = accounts[3]
		const boolIESbQ4Q = await PACTRmtzrLN.setupTeam.call(addressN3OVRvW, {from: accounts[2]});
		const uint8AjJRzwh = await PACTRmtzrLN.decimals.call({from: accounts[4]});
		const uintibmshwa = await PACTRmtzrLN.allowance.call(addressPdVTEAp, addressxJ4OpPW, {from: accounts[4]});
		const stringBghqgS4 = await PACTRmtzrLN.symbol.call({from: accounts[5]});

		await expect(PACTRmtzrLN.setupTeam.call(addressN3OVRvW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzoPBheA = await PACT.new({from: accounts[5]});
		const uintffHbTfE = BigInt("300")
		const addressfWtKtyC = accounts[5]
		const uintbK9IMAs = BigInt("24")
		const addressMlfXAK = accounts[3]
		const boolgtyEAvJ = await PACTzoPBheA.approve.call(addressfWtKtyC, uintffHbTfE, {from: accounts[2]});
		const stringc38aTUt = await PACTzoPBheA.name.call({from: accounts[1]});
		const bool5kn79N = await PACTzoPBheA.burn.call(addressMlfXAK, uintbK9IMAs, {from: accounts[5]});

		assert.equal(boolgtyEAvJ, true)
		assert.equal(stringc38aTUt, "P2PB2B community token")
		await expect(PACTzoPBheA.burn.call(addressMlfXAK, uintbK9IMAs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTTHYQlHx = await PACT.new({from: accounts[5]});
		const addressTUpUBDr = accounts[5]
		const addressoJ5tuzx = accounts[0]
		const uintzY951Ql = BigInt("1742")
		const addressCl5eIQk = accounts[0]
		const addressh8nHnHU = accounts[0]
		const uintBPM4hXa = await PACTTHYQlHx.allowance.call(addressoJ5tuzx, addressTUpUBDr, {from: accounts[4]});
		const boolfJ9HViH = await PACTTHYQlHx.approve.call(addressCl5eIQk, uintzY951Ql, {from: accounts[2]});
		const string0Dwn9i = await PACTTHYQlHx.symbol.call({from: accounts[1]});
		const boolwEqNi9l = await PACTTHYQlHx.setupFarming.call(addressh8nHnHU, {from: accounts[5]});

		assert.equal(boolfJ9HViH, true)
		assert.equal(string0Dwn9i, "PACT")
		assert.equal(uintBPM4hXa, BigInt("0"))
		await expect(PACTTHYQlHx.setupFarming.call(addressh8nHnHU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzoPBheA = await PACT.new({from: accounts[5]});
		const addressB6roUFk = accounts[3]
		const uintrJ8B7eg = await PACTzoPBheA.balanceOf.call(addressB6roUFk, {from: accounts[4]});
		const uintp24fis = await PACTzoPBheA.totalSupply.call({from: accounts[2]});

		assert.equal(uintp24fis, BigInt("1000000000000000000000000000"))
		assert.equal(uintrJ8B7eg, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTnnGW534 = await PACT.new({from: accounts[2]});
		const uintQRTAJ9I = BigInt("575")
		const addressXehFMBj = accounts[3]
		const addressX6ijxE1 = accounts[0]
		const addressJdZEpnr = accounts[5]
		const addressv7Z4Wo = accounts[2]
		const addresssXeeAq3 = accounts[1]
		const boollqGRHmi = await PACTnnGW534.transferFrom.call(addressX6ijxE1, addressXehFMBj, uintQRTAJ9I, {from: accounts[0]});
		const uint8DmkyqqU = await PACTnnGW534.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolaIIpC3o = await PACTnnGW534.setupRewards.call(addressJdZEpnr, {from: accounts[1]});
		const uintF4ji9B = await PACTnnGW534.allowance.call(addresssXeeAq3, addressv7Z4Wo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTnnGW534.transferFrom.call(addressX6ijxE1, addressXehFMBj, uintQRTAJ9I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})