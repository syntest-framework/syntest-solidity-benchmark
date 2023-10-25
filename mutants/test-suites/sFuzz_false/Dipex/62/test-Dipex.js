const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringHPoBEmA = "iv9xPQxp90Ddg8ofXdecykMFwXYS2cx80bdRJBxUgUun59YX5Tj13UukA8kOae2nu6MX6PgvO1hEIpNROf"
		const stringlZcOntF = "9CxTejlYBDyTA8hGyILm3rf2x2Hxt6i7PXz84YXHjR6pL2P"
		const uintJPYDbbV = BigInt("1713")
		const Dipexs0TVXJW = await Dipex.new(stringHPoBEmA, stringlZcOntF, uintJPYDbbV, {from: accounts[1]});
		const uintiohimDU = BigInt("875")
		const addressVCOFcsm = accounts[0]
		const addressWj1MxBq = accounts[0]
		const uintOgHcH7 = BigInt("1171")
		const addressSMDZJZN = accounts[0]
		const addressL4Pzifo = accounts[3]
		const boolpCDM8rC = await Dipexs0TVXJW.transfer.call(addressVCOFcsm, uintiohimDU, {from: accounts[1]});
//		const booljdqe8Pr = await Dipexs0TVXJW.transferownership.call(addressWj1MxBq, {from: accounts[4]});
//		const boolnO9dJyl = await Dipexs0TVXJW.transfer.call(addressSMDZJZN, uintOgHcH7, {from: accounts[3]});
//		const booluuLWoc0 = await Dipexs0TVXJW.transferownership.call(addressL4Pzifo, {from: accounts[4]});

		assert.equal(boolpCDM8rC, true)
		await expect(Dipexs0TVXJW.transferownership.call(addressWj1MxBq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringZGc6q6F = "PD2ut5DQ2BLGmnjv9Tc4AHhB4NqNRsn2Oukbx4bmQsnAsW9y1ycEEIpJqT54s2hwwTMpmNt1GD241MQ4xRMAh1wah2B8"
		const stringfME6dUg = "3HIkHjcujttyTFnxv9XmGC7OEblwRUsY9xxse9tI35ipwTxLd1611xLvjRgk3vglb"
		const uintInmlbgW = BigInt("176")
		const DipexuNpSd2i = await Dipex.new(stringZGc6q6F, stringfME6dUg, uintInmlbgW, {from: "0x0000000000000000000000000000000000000001"});
		const addressXJJlDcJ = accounts[1]
		const uintw5EEVaM = BigInt("1945")
		const addressHya5j1A = accounts[4]
		const addressoTYhLa1 = accounts[3]
		const boolxMJWCCN = await DipexuNpSd2i.transferownership.call(addressXJJlDcJ, {from: accounts[0]});
		const boolROmvNKe = await DipexuNpSd2i.approveAndCall.call(addressHya5j1A, uintw5EEVaM, {from: accounts[2]});
		const boolTXebA2q = await DipexuNpSd2i.transferownership.call(addressoTYhLa1, {from: accounts[3]});
	});

	it('test for Dipex', async () => {
		const stringYMs3fS = "ZDTREg531w7Rl53A4W6xrkkX8NF4jAs"
		const stringaBkRQZ7 = "LfGXnbimCOFB74njgA3NPzg0kewsk8B1ne7BlX3V6SNprWX8hH3rIvDfNFXvokfVRwKSUJ7r76bFPABjvLU2oJErzFcQJB3Ua"
		const uintO5ekPQ1 = BigInt("1318")
		const DipexDKUjXv5 = await Dipex.new(stringYMs3fS, stringaBkRQZ7, uintO5ekPQ1, {from: accounts[1]});
		const uintejv3GVB = BigInt("1229")
		const addressa1vN0jt = accounts[4]
		const uintaktnGa = BigInt("839")
		const addresszEX5Xyw = accounts[3]
		const uintV0hTNIZ = BigInt("1623")
		const addressGtbudV = accounts[2]
		const boolbfCYa7e = await DipexDKUjXv5.approveAndCall.call(addressa1vN0jt, uintejv3GVB, {from: accounts[1]});
//		const boolNVkz0YS = await DipexDKUjXv5.transfer.call(addresszEX5Xyw, uintaktnGa, {from: accounts[5]});
//		const boolWXgE4d = await DipexDKUjXv5.transfer.call(addressGtbudV, uintV0hTNIZ, {from: accounts[3]});

		assert.equal(boolbfCYa7e, true)
		await expect(DipexDKUjXv5.transfer.call(addresszEX5Xyw, uintaktnGa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringgjijMIn = "z9qH7VsiIikbQb0z27UMY1x9Xc57MsCa"
		const stringEXfSi8 = "UI4OlOeJNqzi5quCy6SC9W5AGg58Kgc4zLIlEIOh"
		const uintC5b5nVb = BigInt("914")
		const DipexZ7n0M7a = await Dipex.new(stringgjijMIn, stringEXfSi8, uintC5b5nVb, {from: accounts[2]});
		const uint6IXFMk = BigInt("1429")
		const addressyhQc5sA = accounts[2]
		const uintA8MrAb = BigInt("1325")
		const addressa9n0vhE = accounts[2]
		const uint2lgldN = BigInt("1838")
		const addressFjRKsKo = accounts[4]
		const uintrqsZXAI = BigInt("1911")
		const addressVOZiJ0 = accounts[1]
		const uintRdXX1fW = BigInt("1212")
		const addressnbn27tV = accounts[3]
		const uintrgnpcFF = BigInt("570")
		const addressSR8M3Af = accounts[1]
		const addressFsUmql = accounts[4]
		const bool1gZBGV = await DipexZ7n0M7a.approve.call(addressyhQc5sA, uint6IXFMk, {from: "0x0000000000000000000000000000000000000001"});
//		const booliOz4mt1 = await DipexZ7n0M7a.approveAndCall.call(addressa9n0vhE, uintA8MrAb, {from: accounts[4]});
//		const boolfMh9sL = await DipexZ7n0M7a.transfer.call(addressFjRKsKo, uint2lgldN, {from: accounts[1]});
//		const boolpBb3xfW = await DipexZ7n0M7a.approve.call(addressVOZiJ0, uintrqsZXAI, {from: accounts[2]});
//		const boolPJbbWXM = await DipexZ7n0M7a.approve.call(addressnbn27tV, uintRdXX1fW, {from: accounts[2]});
//		const boolSpZ1oCE = await DipexZ7n0M7a.transferFrom.call(addressFsUmql, addressSR8M3Af, uintrgnpcFF, {from: accounts[5]});

		assert.equal(bool1gZBGV, true)
		await expect(DipexZ7n0M7a.approveAndCall.call(addressa9n0vhE, uintA8MrAb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringW1p5tRS = "Vfb6wEArNrAecUCvPzNPkcJswa2cjEeac61hFXCKiuwYAjramfYmrkgMmALP5P3bmSa"
		const stringELHWjCd = "99vAvNcksxIYDG4FcBRvXs"
		const uintsdMTWpu = BigInt("1566")
		const DipexTuYTsZR = await Dipex.new(stringW1p5tRS, stringELHWjCd, uintsdMTWpu, {from: accounts[1]});
		const uintWSl4m3H = BigInt("0")
		const addressBkT7dS4 = accounts[7]
		const boolxTYY4Kv = await DipexTuYTsZR.approveAndCall.call(addressBkT7dS4, uintWSl4m3H, {from: accounts[1]});

		assert.equal(boolxTYY4Kv, true)
	});

	it('test for Dipex', async () => {
		const stringW1p5tRS = "Vfb6wEArNrAecUCvPzNPkcJswa2cjEeac61hFXCKiuwYAjramfYmrkgMmALP5P3bmSa"
		const stringELHWjCd = "99vAvNcksxIYDG4FcBRvXs"
		const uintMzF80UH = BigInt("1566")
		const DipexTuYTsZR = await Dipex.new(stringW1p5tRS, stringELHWjCd, uintMzF80UH, {from: accounts[1]});
		const uint4ajg1z = BigInt("0")
		const addressvD9bMlc = "0x0000000000000000000000000000000000000001"
		const boolRupD1q0 = await DipexTuYTsZR.transfer.call(addressvD9bMlc, uint4ajg1z, {from: accounts[3]});

		assert.equal(boolRupD1q0, true)
	});
})