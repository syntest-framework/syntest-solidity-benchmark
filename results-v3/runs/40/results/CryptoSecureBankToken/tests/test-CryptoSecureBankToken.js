const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokencoeD7U = await CryptoSecureBankToken.new({from: accounts[1]});
		const uinto71kqsY = BigInt("1212")
		const addressmuo4RBi = accounts[2]
		const uintevnsAgo = BigInt("1301")
		const addressurhSihv = accounts[3]
		const addressScU2TFz = accounts[3]
		const uintiw9e19 = BigInt("1768")
		const boolcS0GR4O = await CryptoSecureBankTokencoeD7U.approve.call(addressmuo4RBi, uinto71kqsY, {from: accounts[4]});
		await CryptoSecureBankTokencoeD7U.whenNotPaused.call({from: accounts[3]});
		const bools8hajI2 = await CryptoSecureBankTokencoeD7U.transferFrom.call(addressScU2TFz, addressurhSihv, uintevnsAgo, {from: accounts[4]});
		const bool9HZcHS = await CryptoSecureBankTokencoeD7U.redeem.call(uintiw9e19, {from: accounts[3]});

		assert.equal(boolcS0GR4O, true)
		await expect(CryptoSecureBankTokencoeD7U.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenxd3CLgT = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyT2ZIZt = BigInt("1299")
		const addressopv2HVV = accounts[5]
		await CryptoSecureBankTokenxd3CLgT.whenPaused.call({from: accounts[3]});
		const bool3G8oSK = await CryptoSecureBankTokenxd3CLgT.approve.call(addressopv2HVV, uintyT2ZIZt, {from: accounts[1]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO0WDWA = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressnBzWEAo = accounts[4]
		const addressrDNd8KD = accounts[4]
		const uintclByc4 = await CryptoSecureBankTokenO0WDWA.allowance.call(addressrDNd8KD, addressnBzWEAo, {from: accounts[1]});
		await CryptoSecureBankTokenO0WDWA.whenNotPaused.call({from: accounts[2]});
		await CryptoSecureBankTokenO0WDWA.pause.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintclByc4, BigInt("0"))
		await expect(CryptoSecureBankTokenO0WDWA.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentzZVV7B = await CryptoSecureBankToken.new({from: accounts[5]});
		const addresseMl5C9 = accounts[2]
		const addresskMDSqkf = accounts[0]
		const addressgK6RuT4 = accounts[4]
		const addressbBOoQvw = accounts[0]
		const uinthG4ThZB = BigInt("1680")
		const addressNuKf6Ek = accounts[0]
		const uintd6MjzhJ = await CryptoSecureBankTokentzZVV7B.allowance.call(addresskMDSqkf, addresseMl5C9, {from: accounts[1]});
		const boolf9jbBLP = await CryptoSecureBankTokentzZVV7B.getBlackListStatus.call(addressgK6RuT4, {from: "0x0000000000000000000000000000000000000001"});
		const uintu3GVF9u = await CryptoSecureBankTokentzZVV7B.balanceOf.call(addressbBOoQvw, {from: accounts[5]});
		const boolwtWtKUP = await CryptoSecureBankTokentzZVV7B.approve.call(addressNuKf6Ek, uinthG4ThZB, {from: accounts[2]});

		assert.equal(boolf9jbBLP, false)
		assert.equal(boolwtWtKUP, true)
		assert.equal(uintd6MjzhJ, BigInt("0"))
		assert.equal(uintu3GVF9u, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenri0TYOu = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressBCv7xuG = accounts[5]
		const uintyui2nkc = BigInt("370")
		const uintBEmvWUt = BigInt("1946")
		const addressngM4hE = "0x0000000000000000000000000000000000000001"
		const addressxsUZ6Ow = accounts[1]
		const addressJa8h3mx = await CryptoSecureBankTokenri0TYOu.addBlackList.call(addressBCv7xuG, {from: accounts[4]});
		await CryptoSecureBankTokenri0TYOu.pause.call({from: accounts[1]});
		const uinteEfd7p6 = await CryptoSecureBankTokenri0TYOu.onlyPayloadSize.call(uintyui2nkc, {from: accounts[2]});
		const boolMWbBtv = await CryptoSecureBankTokenri0TYOu.transferFrom.call(addressxsUZ6Ow, addressngM4hE, uintBEmvWUt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenri0TYOu.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenrPEtMe4 = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintURlFig = BigInt("1097")
		const addressyqiFP1t = accounts[3]
		const addressFgD3tSF = accounts[2]
		const addressxmZArKF = accounts[1]
		const boolI3doGa2 = await CryptoSecureBankTokenrPEtMe4.transferFrom.call(addressFgD3tSF, addressyqiFP1t, uintURlFig, {from: accounts[1]});
		const addressRcXplR = await CryptoSecureBankTokenrPEtMe4.addBlackList.call(addressxmZArKF, {from: accounts[4]});
		const addresswXnnAdt = await CryptoSecureBankTokenrPEtMe4.getOwner.call({from: accounts[0]});

		await expect(CryptoSecureBankTokenrPEtMe4.transferFrom.call(addressFgD3tSF, addressyqiFP1t, uintURlFig, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentzZVV7B = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressx8f5lrL = accounts[2]
		const addressgSO1EYN = accounts[0]
		const address0OGtm4 = accounts[4]
		const addressQtAxmHq = accounts[0]
		const uintv1vDTt8 = BigInt("1680")
		const addressxZ6N0la = accounts[0]
		const uintd6MjzhJ = await CryptoSecureBankTokentzZVV7B.allowance.call(addressgSO1EYN, addressx8f5lrL, {from: accounts[1]});
		const addresseNLIKrU = await CryptoSecureBankTokentzZVV7B.getOwner.call({from: accounts[5]});
		const boolf9jbBLP = await CryptoSecureBankTokentzZVV7B.getBlackListStatus.call(address0OGtm4, {from: "0x0000000000000000000000000000000000000001"});
		const uintu3GVF9u = await CryptoSecureBankTokentzZVV7B.balanceOf.call(addressQtAxmHq, {from: accounts[5]});
		const boolwtWtKUP = await CryptoSecureBankTokentzZVV7B.approve.call(addressxZ6N0la, uintv1vDTt8, {from: accounts[2]});

		assert.equal(addresseNLIKrU, 0xC3A0D34C29288F9A2DB198E06965050cbCE40dda)
		assert.equal(boolf9jbBLP, false)
		assert.equal(boolwtWtKUP, true)
		assert.equal(uintd6MjzhJ, BigInt("0"))
		assert.equal(uintu3GVF9u, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokencoeD7U = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintaXnST3o = BigInt("1212")
		const addressc95vcBI = accounts[2]
		const uintZP8rff2 = BigInt("1175")
		const addressoU1PrzX = accounts[1]
		const address0VYL9q = accounts[4]
		const addressC15xX1H = accounts[4]
		const uintc2QTxe9 = BigInt("1301")
		const addressOyT5gid = accounts[3]
		const addresss9aSPKH = accounts[3]
		const uintgCFuqXp = BigInt("1768")
		const boolcS0GR4O = await CryptoSecureBankTokencoeD7U.approve.call(addressc95vcBI, uintaXnST3o, {from: accounts[4]});
		const boolYtNjvVm = await CryptoSecureBankTokencoeD7U.transfer.call(addressoU1PrzX, uintZP8rff2, {from: accounts[4]});
		const uintQJx9qb = await CryptoSecureBankTokencoeD7U.allowance.call(addressC15xX1H, address0VYL9q, {from: accounts[2]});
		await CryptoSecureBankTokencoeD7U.whenNotPaused.call({from: accounts[3]});
		const bools8hajI2 = await CryptoSecureBankTokencoeD7U.transferFrom.call(addresss9aSPKH, addressOyT5gid, uintc2QTxe9, {from: accounts[4]});
		const bool9HZcHS = await CryptoSecureBankTokencoeD7U.redeem.call(uintgCFuqXp, {from: accounts[3]});

		assert.equal(boolcS0GR4O, true)
		await expect(CryptoSecureBankTokencoeD7U.transfer.call(addressoU1PrzX, uintZP8rff2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenqYdyNj = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintrwvqbN = await CryptoSecureBankTokenqYdyNj.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokenqYdyNj.unpause.call({from: accounts[0]});

		assert.equal(uintrwvqbN, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenqYdyNj.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO0WDWA = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressAMOSJPG = accounts[0]
		const addressUo3PWso = accounts[5]
		const addressXeEnUu8 = accounts[5]
		const addresshV2m3eP = await CryptoSecureBankTokenO0WDWA.transferOwnership.call(addressAMOSJPG, {from: accounts[0]});
		const uintclByc4 = await CryptoSecureBankTokenO0WDWA.allowance.call(addressXeEnUu8, addressUo3PWso, {from: accounts[1]});
		await CryptoSecureBankTokenO0WDWA.pause.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintclByc4, BigInt("0"))
		await expect(CryptoSecureBankTokenO0WDWA.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentzZVV7B = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressP8CEHia = accounts[1]
		const addressY2H4ijV = accounts[0]
		const uintekTO7Ih = BigInt("1680")
		const addressY8efyYv = accounts[1]
		const addressqkqEV39 = accounts[4]
		const uintu3GVF9u = await CryptoSecureBankTokentzZVV7B.balanceOf.call(addressP8CEHia, {from: accounts[5]});
		const addressj3SdO9U = await CryptoSecureBankTokentzZVV7B.removeBlackList.call(addressY2H4ijV, {from: accounts[5]});
		const boolwtWtKUP = await CryptoSecureBankTokentzZVV7B.approve.call(addressY8efyYv, uintekTO7Ih, {from: accounts[2]});
		const uinttE6l9wx = await CryptoSecureBankTokentzZVV7B.balanceOf.call(addressqkqEV39, {from: accounts[3]});

		assert.equal(boolwtWtKUP, true)
		assert.equal(uinttE6l9wx, BigInt("0"))
		assert.equal(uintu3GVF9u, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO0WDWA = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintittwYI7 = BigInt("1273")
		const addressJVEdZOr = accounts[5]
		const addressILP7vR = accounts[5]
		const addresstJHUemH = accounts[3]
		const addressA3hyfsi = accounts[1]
		const boolv4Wd2Vz = await CryptoSecureBankTokenO0WDWA.redeem.call(uintittwYI7, {from: accounts[0]});
		const uintclByc4 = await CryptoSecureBankTokenO0WDWA.allowance.call(addressILP7vR, addressJVEdZOr, {from: accounts[1]});
		const addressfDkZfzI = await CryptoSecureBankTokenO0WDWA.transferOwnership.call(addresstJHUemH, {from: accounts[4]});
		const uintRg5GUsm = await CryptoSecureBankTokenO0WDWA.balanceOf.call(addressA3hyfsi, {from: accounts[1]});
		await CryptoSecureBankTokenO0WDWA.pause.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolv4Wd2Vz, true)
		assert.equal(uintclByc4, BigInt("0"))
		await expect(CryptoSecureBankTokenO0WDWA.transferOwnership.call(addresstJHUemH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO0WDWA = await CryptoSecureBankToken.new({from: accounts[0]});
		const uinthmjuaeq = BigInt("1673")
		const addressoM8tWX7 = accounts[1]
		const addressNVVG995 = accounts[4]
		const addressnX2Mj4u = accounts[5]
		const boolvPyzus = await CryptoSecureBankTokenO0WDWA.transfer.call(addressoM8tWX7, uinthmjuaeq, {from: accounts[0]});
		const uintclByc4 = await CryptoSecureBankTokenO0WDWA.allowance.call(addressnX2Mj4u, addressNVVG995, {from: accounts[1]});
		await CryptoSecureBankTokenO0WDWA.pause.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolvPyzus, true)
		assert.equal(uintclByc4, BigInt("0"))
		await expect(CryptoSecureBankTokenO0WDWA.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennEcYy8 = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintcpG6bVG = BigInt("1351")
		const addressLJ4rRoc = accounts[1]
		const addressg5duW6z = accounts[5]
		const boolOgU1l5z = await CryptoSecureBankTokennEcYy8.approve.call(addressLJ4rRoc, uintcpG6bVG, {from: "0x0000000000000000000000000000000000000001"});
		await CryptoSecureBankTokennEcYy8.pause.call({from: accounts[0]});
		await CryptoSecureBankTokennEcYy8.whenNotPaused.call({from: accounts[4]});
		const addressRnXVJgZ = await CryptoSecureBankTokennEcYy8.removeBlackList.call(addressg5duW6z, {from: accounts[5]});

		assert.equal(boolOgU1l5z, true)
		await expect(CryptoSecureBankTokennEcYy8.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentzZVV7B = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressFFhN1p = accounts[1]
		const uintvIdB1Nd = BigInt("1789")
		const addressRZCOo1n = "0x0000000000000000000000000000000000000001"
		const uintr6KX0TF = BigInt("1189")
		const addressWAeQpi8 = accounts[3]
		const addresszQzv6m = accounts[2]
		const boolSWZI4KA = await CryptoSecureBankTokentzZVV7B.deprecate.call(addressFFhN1p, {from: accounts[5]});
		const boolLVsv0pr = await CryptoSecureBankTokentzZVV7B.transfer.call(addressRZCOo1n, uintvIdB1Nd, {from: accounts[2]});
		const booleYioPV9 = await CryptoSecureBankTokentzZVV7B.approve.call(addressWAeQpi8, uintr6KX0TF, {from: accounts[4]});
		const uintu3GVF9u = await CryptoSecureBankTokentzZVV7B.balanceOf.call(addresszQzv6m, {from: accounts[5]});

		assert.equal(boolSWZI4KA, true)
		await expect(CryptoSecureBankTokentzZVV7B.transfer.call(addressRZCOo1n, uintvIdB1Nd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenrPEtMe4 = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresst4sEnnk = accounts[3]
		const uintl5yniPS = BigInt("1047")
		const addressQNuyUvd = accounts[3]
		const addressL9SfQ7l = accounts[2]
		const addressMxstCO1 = await CryptoSecureBankTokenrPEtMe4.setOwner2.call(addresst4sEnnk, {from: accounts[1]});
		const boolI3doGa2 = await CryptoSecureBankTokenrPEtMe4.transferFrom.call(addressL9SfQ7l, addressQNuyUvd, uintl5yniPS, {from: accounts[1]});

		await expect(CryptoSecureBankTokenrPEtMe4.transferFrom.call(addressL9SfQ7l, addressQNuyUvd, uintl5yniPS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenYhyJBHk = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintYCHBgGx = BigInt("0")
		const addressqvDOOYL = accounts[4]
		const addressO8juuLT = accounts[0]
		const addressABQ52c = accounts[2]
		const addressaKy3hPT = accounts[0]
		const boolCBgkprb = await CryptoSecureBankTokenYhyJBHk.transfer.call(addressqvDOOYL, uintYCHBgGx, {from: accounts[4]});
		const uintpm1JdtM = await CryptoSecureBankTokenYhyJBHk.allowance.call(addressABQ52c, addressO8juuLT, {from: accounts[0]});
		await CryptoSecureBankTokenYhyJBHk.whenNotPaused.call({from: accounts[0]});
		const uintaSZxOP = await CryptoSecureBankTokenYhyJBHk.totalSupply.call({from: accounts[4]});
		const addresstH04w1V = await CryptoSecureBankTokenYhyJBHk.removeBlackList.call(addressaKy3hPT, {from: accounts[4]});

		assert.equal(boolCBgkprb, true)
		assert.equal(uintpm1JdtM, BigInt("0"))
		await expect(CryptoSecureBankTokenYhyJBHk.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenrPEtMe4 = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressDpLtG2t = accounts[4]
		const addressIWBQ34t = accounts[0]
		const uintgIiA4Fw = BigInt("1505")
		const addressOIPoRTv = accounts[1]
		const addressqMwzfp = accounts[0]
		const uintxY6tfgf = BigInt("1959")
		const addressLltzbtJ = accounts[3]
		const addressW6BvdVO = accounts[2]
		const uintfvwCRfY = await CryptoSecureBankTokenrPEtMe4.balanceOf.call(addressDpLtG2t, {from: accounts[2]});
		const addressa0nWJvK = await CryptoSecureBankTokenrPEtMe4.destroyBlackFunds.call(addressIWBQ34t, {from: accounts[1]});
		const boolNJlmCl = await CryptoSecureBankTokenrPEtMe4.transferFrom.call(addressqMwzfp, addressOIPoRTv, uintgIiA4Fw, {from: accounts[1]});
		const boolI3doGa2 = await CryptoSecureBankTokenrPEtMe4.transferFrom.call(addressW6BvdVO, addressLltzbtJ, uintxY6tfgf, {from: accounts[1]});

		assert.equal(uintfvwCRfY, BigInt("0"))
		await expect(CryptoSecureBankTokenrPEtMe4.destroyBlackFunds.call(addressIWBQ34t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenO0WDWA = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintDr6xGdG = BigInt("392")
		const addressgbQXqzw = accounts[4]
		const uintJLVzNak = BigInt("1673")
		const addressGTDoP7A = accounts[1]
		const uintAGC86u2 = BigInt("1037")
		const addresstTObq14 = accounts[3]
		const uintyvW7s9O = BigInt("86")
		const uintbYuXwl2 = BigInt("792")
		const addressnDHRY8m = accounts[0]
		const addresswspx6az = accounts[3]
		const addressoHY02SN = accounts[6]
		const booljt81mEA = await CryptoSecureBankTokenO0WDWA.transfer.call(addressgbQXqzw, uintDr6xGdG, {from: accounts[0]});
		const boolvPyzus = await CryptoSecureBankTokenO0WDWA.transfer.call(addressGTDoP7A, uintJLVzNak, {from: accounts[0]});
		const boolk3kLqRR = await CryptoSecureBankTokenO0WDWA.approve.call(addresstTObq14, uintAGC86u2, {from: accounts[0]});
		const uintGcZpQ9F = await CryptoSecureBankTokenO0WDWA.setParams.call(uintbYuXwl2, uintyvW7s9O, {from: accounts[0]});
		const uintvWneVVT = await CryptoSecureBankTokenO0WDWA.balanceOf.call(addressnDHRY8m, {from: accounts[4]});
		const uintdFWckkH = await CryptoSecureBankTokenO0WDWA.allowance.call(addressoHY02SN, addresswspx6az, {from: accounts[2]});

		assert.equal(booljt81mEA, true)
		assert.equal(boolk3kLqRR, true)
		assert.equal(boolvPyzus, true)
		await expect(CryptoSecureBankTokenO0WDWA.setParams.call(uintbYuXwl2, uintyvW7s9O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})