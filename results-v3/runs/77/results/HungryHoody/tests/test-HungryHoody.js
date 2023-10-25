const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyCwbMta6 = await HungryHoody.new({from: accounts[3]});
		const uintlLCnWse = BigInt("1362")
		const uintbehsaS = BigInt("778")
		const uintGe2uFsV = BigInt("299")
		const addressKziiGA = accounts[1]
		const uintWiXISO3 = BigInt("1410")
		const addresszzFZIQU = accounts[4]
		const uintiyhHSC2 = BigInt("451")
		const uintoQSG9ha = BigInt("1654")
		const uintsjb0ia = await HungryHoodyCwbMta6.safeDiv.call(uintbehsaS, uintlLCnWse, {from: accounts[1]});
		const boolTJEKBgL = await HungryHoodyCwbMta6.transfer.call(addressKziiGA, uintGe2uFsV, {from: accounts[2]});
		const boolgeVP27u = await HungryHoodyCwbMta6.transfer.call(addresszzFZIQU, uintWiXISO3, {from: accounts[4]});
		const uintDVF5R9 = await HungryHoodyCwbMta6.safeAdd.call(uintoQSG9ha, uintiyhHSC2, {from: accounts[0]});

		assert.equal(uintsjb0ia, BigInt("0"))
		await expect(HungryHoodyCwbMta6.transfer.call(addressKziiGA, uintGe2uFsV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyhOoatkh = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintydzDuJl = BigInt("283")
		const uinty49Q6MW = BigInt("695")
		const addressKMM5Pay = "0x0000000000000000000000000000000000000001"
		const uint2klwal = BigInt("650")
		const uintykkxdkt = BigInt("457")
		const uinthwBKqL1 = await HungryHoodyhOoatkh.safeMul.call(uinty49Q6MW, uintydzDuJl, {from: accounts[0]});
		const uintiJdlABE = await HungryHoodyhOoatkh.totalSupply.call({from: accounts[3]});
		const uintBbCB5y9 = await HungryHoodyhOoatkh.balanceOf.call(addressKMM5Pay, {from: accounts[2]});
		const uintrZJY7xE = await HungryHoodyhOoatkh.safeAdd.call(uintykkxdkt, uint2klwal, {from: accounts[0]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodysJmKs49 = await HungryHoody.new({from: accounts[2]});
		const addressmIFeCQw = accounts[1]
		const uintF3t9l0Q = BigInt("145")
		const uintQoTbJlt = BigInt("1610")
		const uintVlp7Qa = BigInt("1945")
		const addresscdQOnpI = accounts[4]
		const uintFkAE88 = BigInt("560")
		const addressswpZlln = accounts[4]
		const addresswuI8HzN = accounts[3]
		const uintJmfTfEa = BigInt("499")
		const addressXRjwjID = accounts[5]
		const addressOB9wF0h = accounts[1]
		const uinttLbFP8 = await HungryHoodysJmKs49.balanceOf.call(addressmIFeCQw, {from: accounts[2]});
		const uintWF6DiOI = await HungryHoodysJmKs49.safeMul.call(uintQoTbJlt, uintF3t9l0Q, {from: accounts[4]});
		const boolJcHLQr = await HungryHoodysJmKs49.transfer.call(addresscdQOnpI, uintVlp7Qa, {from: accounts[1]});
		const booldpoHwWF = await HungryHoodysJmKs49.transferFrom.call(addresswuI8HzN, addressswpZlln, uintFkAE88, {from: accounts[2]});
		const booldGhXwP = await HungryHoodysJmKs49.transferFrom.call(addressOB9wF0h, addressXRjwjID, uintJmfTfEa, {from: accounts[4]});

		assert.equal(uintWF6DiOI, BigInt("233450"))
		assert.equal(uinttLbFP8, BigInt("0"))
		await expect(HungryHoodysJmKs49.transfer.call(addresscdQOnpI, uintVlp7Qa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyBJnKVAh = await HungryHoody.new({from: accounts[4]});
		const addresszY1p2pq = accounts[0]
		const addressVX7rOW6 = accounts[1]
		const uintKiWlyG3 = BigInt("1584")
		const uintOB2wn6B = BigInt("1053")
		const uintBLyMG1h = BigInt("1142")
		const uintSnRKKDD = BigInt("1097")
		const addressraPWN1Y = "0x0000000000000000000000000000000000000001"
		const addressEiInSwH = accounts[1]
		const uintdjfgXIK = BigInt("931")
		const uintRtnDPZO = BigInt("1885")
		const uintLanGjAr = await HungryHoodyBJnKVAh.allowance.call(addressVX7rOW6, addresszY1p2pq, {from: accounts[1]});
		const uintOothQe = await HungryHoodyBJnKVAh.safeSub.call(uintOB2wn6B, uintKiWlyG3, {from: accounts[0]});
		const uintjnOw8WK = await HungryHoodyBJnKVAh.safeDiv.call(uintSnRKKDD, uintBLyMG1h, {from: accounts[5]});
		const uintYBLnNIQ = await HungryHoodyBJnKVAh.allowance.call(addressEiInSwH, addressraPWN1Y, {from: accounts[2]});
		const uintj3KKy0H = await HungryHoodyBJnKVAh.safeMul.call(uintRtnDPZO, uintdjfgXIK, {from: accounts[3]});

		assert.equal(uintLanGjAr, BigInt("0"))
		await expect(HungryHoodyBJnKVAh.safeSub.call(uintOB2wn6B, uintKiWlyG3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyPwUMnRM = await HungryHoody.new({from: accounts[4]});
		const uintT387aMh = BigInt("774")
		const uintDDEieY6 = BigInt("662")
		const uintW8vKIR0 = BigInt("1377")
		const addressfIEWZD1 = accounts[4]
		const uintyZYTKAP = BigInt("1916")
		const address4eTrv2 = accounts[0]
		const uintJo7tha = BigInt("1309")
		const uintXdgAZBV = BigInt("635")
		const uintLHBCVl3 = BigInt("1709")
		const uintCurJsxu = BigInt("1267")
		const uintpwpc4BI = await HungryHoodyPwUMnRM.safeMul.call(uintDDEieY6, uintT387aMh, {from: accounts[2]});
		const boolHAj8Vs = await HungryHoodyPwUMnRM.approve.call(addressfIEWZD1, uintW8vKIR0, {from: accounts[4]});
		const boolW7vBkw9 = await HungryHoodyPwUMnRM.approve.call(address4eTrv2, uintyZYTKAP, {from: accounts[4]});
		const uintrF90kP = await HungryHoodyPwUMnRM.safeDiv.call(uintXdgAZBV, uintJo7tha, {from: accounts[1]});
		const uintZP2u146 = await HungryHoodyPwUMnRM.safeSub.call(uintCurJsxu, uintLHBCVl3, {from: accounts[4]});

		assert.equal(boolHAj8Vs, true)
		assert.equal(boolW7vBkw9, true)
		assert.equal(uintpwpc4BI, BigInt("512388"))
		assert.equal(uintrF90kP, BigInt("0"))
		await expect(HungryHoodyPwUMnRM.safeSub.call(uintCurJsxu, uintLHBCVl3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodySJJbMYo = await HungryHoody.new({from: accounts[0]});
		const addressa8ENGtQ = accounts[1]
		const addressa40e95e = accounts[2]
		const uints9EnjK2 = BigInt("1746")
		const uintzdL4E9n = BigInt("886")
		const uintiGtrg3G = BigInt("1494")
		const addressOEIaYsA = accounts[4]
		const addressdHmvfbJ = accounts[2]
		const uintt7H5gwZ = await HungryHoodySJJbMYo.allowance.call(addressa40e95e, addressa8ENGtQ, {from: accounts[3]});
		const uintX37gjNq = await HungryHoodySJJbMYo.safeMul.call(uintzdL4E9n, uints9EnjK2, {from: accounts[4]});
		const boolwpxU9aS = await HungryHoodySJJbMYo.transferFrom.call(addressdHmvfbJ, addressOEIaYsA, uintiGtrg3G, {from: accounts[3]});

		assert.equal(uintX37gjNq, BigInt("1546956"))
		assert.equal(uintt7H5gwZ, BigInt("0"))
		await expect(HungryHoodySJJbMYo.transferFrom.call(addressdHmvfbJ, addressOEIaYsA, uintiGtrg3G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyMERaZ5L = await HungryHoody.new({from: accounts[4]});
		const addressKz4oxu = accounts[3]
		const uintSxaAcHr = BigInt("334")
		const uintqAdUB42 = BigInt("785")
		const uintEn1YZ6J = BigInt("723")
		const uintrLneJBa = BigInt("1769")
		const uintrY4JV1d = await HungryHoodyMERaZ5L.balanceOf.call(addressKz4oxu, {from: accounts[0]});
		const uintKy6dDnL = await HungryHoodyMERaZ5L.safeAdd.call(uintqAdUB42, uintSxaAcHr, {from: accounts[4]});
		const uinteTcR4Tc = await HungryHoodyMERaZ5L.safeMul.call(uintrLneJBa, uintEn1YZ6J, {from: "0x0000000000000000000000000000000000000001"});
		const uintRX3M9gL = await HungryHoodyMERaZ5L.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintKy6dDnL, BigInt("1119"))
		assert.equal(uintRX3M9gL, BigInt("25000000000000000000"))
		assert.equal(uinteTcR4Tc, BigInt("1278987"))
		assert.equal(uintrY4JV1d, BigInt("0"))
	});
})