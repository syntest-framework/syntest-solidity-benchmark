const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWToken9ZmYiW = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		await POWToken9ZmYiW.updateIncomeRate.call({from: accounts[2]});
		await POWToken9ZmYiW.onlyOwner.call({from: accounts[5]});
	});

	it('test for POWToken', async () => {
		const POWTokenSV8Q6vF = await POWToken.new({from: accounts[2]});
		const uintqfM3Z5D = BigInt("199")
		const uintaEXGLUW = BigInt("297")
		const uint256NcXUdYX = await POWTokenSV8Q6vF.remainingAmount.call({from: accounts[2]});
		const uint256KMvkdG = await POWTokenSV8Q6vF.setDepreciationNumerator.call(uintqfM3Z5D, {from: accounts[1]});
		const uint256N6n0D2h = await POWTokenSV8Q6vF.addHashRate.call(uintaEXGLUW, {from: accounts[3]});

		assert.equal(uint256NcXUdYX, BigInt("0"))
		await expect(POWTokenSV8Q6vF.setDepreciationNumerator.call(uintqfM3Z5D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokengFUaaCw = await POWToken.new({from: accounts[4]});
		const uintcbcwxxY = BigInt("647")
		const addresslfN0z16 = "0x0000000000000000000000000000000000000001"
		const uintw4P5Mk = BigInt("1223")
		const addressAplsARo = accounts[2]
		const uint256y6B6T2F = await POWTokengFUaaCw.remainingAmount.call({from: accounts[3]});
		const uint256iQ9gOxk = await POWTokengFUaaCw.remainingAmount.call({from: accounts[4]});
		const boolKcQTFHU = await POWTokengFUaaCw.approve.call(addresslfN0z16, uintcbcwxxY, {from: accounts[0]});
		const boolDRb67OX = await POWTokengFUaaCw.transfer.call(addressAplsARo, uintw4P5Mk, {from: accounts[3]});

		assert.equal(boolKcQTFHU, true)
		assert.equal(uint256iQ9gOxk, BigInt("0"))
		assert.equal(uint256y6B6T2F, BigInt("0"))
		await expect(POWTokengFUaaCw.transfer.call(addressAplsARo, uintw4P5Mk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenty27YiU = await POWToken.new({from: accounts[0]});
		const uintReocTYn = BigInt("202")
		const uintVsaaS5i = BigInt("701")
		const uint6a1uXq = BigInt("497")
		const uintUG2K0JC = BigInt("1882")
		const uintVVMiNJW = BigInt("320")
		const addressRPZvEkb = accounts[4]
		const addressagiRyRi = accounts[0]
		const addressCPXvETr = accounts[4]
		const addresszuaVvOo = accounts[4]
		const addresspDdaNvj = accounts[0]
		const addressA5pN4wm = accounts[3]
		const addressiahJ9KL = accounts[1]
		const addressVnlsSVF = accounts[1]
		const stringJTJYvYD = "QaoKo"
		const stringLh9wWne = "oq1dt4Rn3tLPXDvWS2jhNwXvM1PNEcoTFkZm"
		const uintJcY5dKT = BigInt("1911")
		const stringqz7JX2T = await POWTokenty27YiU.initialize.call(stringLh9wWne, stringJTJYvYD, addressVnlsSVF, addressiahJ9KL, addressA5pN4wm, addresspDdaNvj, addresszuaVvOo, addressCPXvETr, addressagiRyRi, addressRPZvEkb, uintVVMiNJW, uintUG2K0JC, uint6a1uXq, uintVsaaS5i, uintReocTYn, {from: accounts[1]});
		const uint256f9SU09z = await POWTokenty27YiU.remainingAmount.call({from: accounts[4]});
		const uint256PWqg1f0 = await POWTokenty27YiU.setMinerPoolFeeNumerator.call(uintJcY5dKT, {from: accounts[3]});

		await expect(POWTokenty27YiU.initialize.call(stringLh9wWne, stringJTJYvYD, addressVnlsSVF, addressiahJ9KL, addressA5pN4wm, addresspDdaNvj, addresszuaVvOo, addressCPXvETr, addressagiRyRi, addressRPZvEkb, uintVVMiNJW, uintUG2K0JC, uint6a1uXq, uintVsaaS5i, uintReocTYn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenBNLWau4 = await POWToken.new({from: accounts[3]});
		const uintuc0ZeOG = BigInt("1111")
		const uintwMFtz3X = BigInt("205")
		const addressqByF44c = accounts[3]
		const uintuQO2V4n = BigInt("778")
		const addressB79hlWd = accounts[3]
		const uintrVluP0U = BigInt("1722")
		const addressudppTXH = accounts[4]
		const uint256ljjjKWE = await POWTokenBNLWau4.notifyRewardAmount.call(uintuc0ZeOG, {from: accounts[1]});
		const boolMSIefQl = await POWTokenBNLWau4.approve.call(addressqByF44c, uintwMFtz3X, {from: "0x0000000000000000000000000000000000000001"});
		const addressfYDiRw = await POWTokenBNLWau4.mint.call(addressB79hlWd, uintuQO2V4n, {from: accounts[0]});
		const addressTsb1clg = await POWTokenBNLWau4.mint.call(addressudppTXH, uintrVluP0U, {from: accounts[1]});

		await expect(POWTokenBNLWau4.notifyRewardAmount.call(uintuc0ZeOG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokengFUaaCw = await POWToken.new({from: accounts[4]});
		const uinti3XYMAg = BigInt("647")
		const addresstCO4OU = "0x0000000000000000000000000000000000000001"
		const uintQv94Qe5 = BigInt("1223")
		const address8HxzhJ = accounts[2]
		const uint256y6B6T2F = await POWTokengFUaaCw.remainingAmount.call({from: accounts[3]});
		const boolKcQTFHU = await POWTokengFUaaCw.approve.call(addresstCO4OU, uinti3XYMAg, {from: accounts[0]});
		await POWTokengFUaaCw.updateIncomeRate.call({from: accounts[5]});
		const boolDRb67OX = await POWTokengFUaaCw.transfer.call(address8HxzhJ, uintQv94Qe5, {from: accounts[3]});

		assert.equal(boolKcQTFHU, true)
		assert.equal(uint256y6B6T2F, BigInt("0"))
		await expect(POWTokengFUaaCw.updateIncomeRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokengFUaaCw = await POWToken.new({from: accounts[4]});
		const uintyOTguHl = BigInt("1285")
		const uintpMN4R6g = BigInt("647")
		const addressHm8QfIz = "0x0000000000000000000000000000000000000001"
		const uintwQsSO4v = BigInt("1223")
		const addressjPJwiiH = accounts[2]
		const uintJ0hRFDT = BigInt("1451")
		const addressS28DAN5 = accounts[0]
		const uint256y6B6T2F = await POWTokengFUaaCw.remainingAmount.call({from: accounts[3]});
		const uint256iQ9gOxk = await POWTokengFUaaCw.remainingAmount.call({from: accounts[4]});
		const uint256RpX0jh4 = await POWTokengFUaaCw.getHistoryWorkingRate.call({from: accounts[1]});
		const uint256TjCoM87 = await POWTokengFUaaCw.setStakingRewardRatio.call(uintyOTguHl, {from: accounts[4]});
		const boolKcQTFHU = await POWTokengFUaaCw.approve.call(addressHm8QfIz, uintpMN4R6g, {from: accounts[0]});
		const boolDRb67OX = await POWTokengFUaaCw.transfer.call(addressjPJwiiH, uintwQsSO4v, {from: accounts[3]});
		const addressx8KGKSv = await POWTokengFUaaCw.inCaseTokensGetStuck.call(addressS28DAN5, uintJ0hRFDT, {from: accounts[0]});
		const uint256myeJQQP = await POWTokengFUaaCw.getHistoryWorkingRate.call({from: accounts[2]});

		assert.equal(uint256iQ9gOxk, BigInt("0"))
		assert.equal(uint256y6B6T2F, BigInt("0"))
		await expect(POWTokengFUaaCw.getHistoryWorkingRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenehqshV = await POWToken.new({from: accounts[4]});
		const uintBkvnHZE = BigInt("1259")
		const addressP2plXNM = accounts[5]
		const bytePYUI59i = "0x171f1903070b020f1607031f1d0315121a1f0c0d1a1512040e1e140e090c1015"
		const byteREi2BkP = "0x0914151019081c1f1d1919091a080e170a1f1d170e0211010a16160e171c0c0e"
		const uintWDqXZ9J = BigInt("188")
		const uintVgyNFa = BigInt("1946")
		const uintixyQ4TN = BigInt("1679")
		const addressjtZnzp8 = accounts[1]
		const addressr7NGmCq = accounts[2]
		const addressONYJK4g = await POWTokenehqshV.mint.call(addressP2plXNM, uintBkvnHZE, {from: accounts[4]});
		const addressMIJg27o = await POWTokenehqshV.permit.call(addressr7NGmCq, addressjtZnzp8, uintixyQ4TN, uintVgyNFa, uintWDqXZ9J, byteREi2BkP, bytePYUI59i, {from: accounts[3]});

		await expect(POWTokenehqshV.mint.call(addressP2plXNM, uintBkvnHZE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenehqshV = await POWToken.new({from: accounts[4]});
		const uintLmpC5q4 = BigInt("128")
		const addressVmaM4ry = accounts[5]
		await POWTokenehqshV.whenPaused.call({from: accounts[0]});
		const addressONYJK4g = await POWTokenehqshV.mint.call(addressVmaM4ry, uintLmpC5q4, {from: accounts[4]});

		await expect(POWTokenehqshV.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenehqshV = await POWToken.new({from: accounts[4]});
		const uintqoVyJYj = BigInt("470")
		const addressbCPj43 = accounts[0]
		const uintGekhd2E = BigInt("278")
		const addressKm1vdKZ = accounts[1]
		const uintxq0fYe9 = BigInt("1286")
		const addressSsDlhvS = accounts[6]
		const addresspWv990O = await POWTokenehqshV.claimReward.call(addressbCPj43, uintqoVyJYj, {from: accounts[0]});
		const addressTsuBwg = await POWTokenehqshV.claimIncome.call(addressKm1vdKZ, uintGekhd2E, {from: accounts[2]});
		const addressONYJK4g = await POWTokenehqshV.mint.call(addressSsDlhvS, uintxq0fYe9, {from: accounts[4]});

		await expect(POWTokenehqshV.claimReward.call(addressbCPj43, uintqoVyJYj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokengFUaaCw = await POWToken.new({from: accounts[4]});
		const byteLuS8OUt = "0x1e111b0a12001916100c0d0916111c02120f1a051c0408180a0416070f0b1118"
		const byteFJlO3Bi = "0x16111c1608091a1d1f1a191c201a010216061c111d011d15110604110a090e11"
		const uintUAXDBei = BigInt("129")
		const uintUQsyqpM = BigInt("252")
		const uintZZrkgCG = BigInt("1306")
		const addressmIHCjXw = accounts[1]
		const addressL4u4Fms = accounts[3]
		const uintJMMovjS = BigInt("647")
		const addressdJPLIAs = "0x0000000000000000000000000000000000000001"
		const addressoLV61Pa = await POWTokengFUaaCw.permit.call(addressL4u4Fms, addressmIHCjXw, uintZZrkgCG, uintUQsyqpM, uintUAXDBei, byteFJlO3Bi, byteLuS8OUt, {from: accounts[0]});
		const uint256y6B6T2F = await POWTokengFUaaCw.remainingAmount.call({from: accounts[3]});
		const boolKcQTFHU = await POWTokengFUaaCw.approve.call(addressdJPLIAs, uintJMMovjS, {from: accounts[0]});
		await POWTokengFUaaCw.updateIncomeRate.call({from: accounts[5]});

		await expect(POWTokengFUaaCw.permit.call(addressL4u4Fms, addressmIHCjXw, uintZZrkgCG, uintUQsyqpM, uintUAXDBei, byteFJlO3Bi, byteLuS8OUt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokentvlNtnv = await POWToken.new({from: accounts[3]});
		const byteBIZWKbp = "0x1810080608020e180c100e1b0602110f12110a1b031b0b0e080d111e0d171e1c"
		const bytegXfMoS5 = "0x06131a08031e1e11170914061b04000f03010c15120b141409091b041e100018"
		const uintCFR6ZRH = BigInt("209")
		const uintwwfPBp6 = BigInt("110")
		const uintwHrOoy = BigInt("503")
		const addressoZkaMQ = accounts[4]
		const addressgMdW0yT = "0x0000000000000000000000000000000000000001"
		const boolvjgxVlo = await POWTokentvlNtnv.paused.call({from: accounts[2]});
		const addresssCx0u4 = await POWTokentvlNtnv.permit.call(addressgMdW0yT, addressoZkaMQ, uintwHrOoy, uintwwfPBp6, uintCFR6ZRH, bytegXfMoS5, byteBIZWKbp, {from: accounts[1]});
		await POWTokentvlNtnv.whenPaused.call({from: accounts[3]});

		assert.equal(boolvjgxVlo, false)
		await expect(POWTokentvlNtnv.permit.call(addressgMdW0yT, addressoZkaMQ, uintwHrOoy, uintwwfPBp6, uintCFR6ZRH, bytegXfMoS5, byteBIZWKbp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenk3peCj = await POWToken.new({from: accounts[1]});
		const uintqK5PhpS = BigInt("1858")
		const addressl04eYfS = accounts[1]
		const uint256SVOnOXQ = await POWTokenk3peCj.lpStakingRewardRate.call({from: accounts[1]});
		const boolw1W1SV7 = await POWTokenk3peCj.transfer.call(addressl04eYfS, uintqK5PhpS, {from: accounts[0]});

		assert.equal(uint256SVOnOXQ, BigInt("0"))
		await expect(POWTokenk3peCj.transfer.call(addressl04eYfS, uintqK5PhpS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenty27YiU = await POWToken.new({from: accounts[0]});
		const uintIjqTIBL = BigInt("1911")
		const uint256HVdvmge = await POWTokenty27YiU.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		await POWTokenty27YiU.unpause.call({from: accounts[1]});
		const uint256PWqg1f0 = await POWTokenty27YiU.setMinerPoolFeeNumerator.call(uintIjqTIBL, {from: accounts[3]});

		await expect(POWTokenty27YiU.getIncomeBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokengFUaaCw = await POWToken.new({from: accounts[4]});
		const uintwMv40Dd = BigInt("156")
		const addressMg7MYEL = accounts[1]
		const addressfa6H3b = await POWTokengFUaaCw.claimIncome.call(addressMg7MYEL, uintwMv40Dd, {from: accounts[5]});
		await POWTokengFUaaCw.updateIncomeRate.call({from: accounts[5]});
		await POWTokengFUaaCw.whenNotPaused.call({from: accounts[4]});

		await expect(POWTokengFUaaCw.claimIncome.call(addressMg7MYEL, uintwMv40Dd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokengFUaaCw = await POWToken.new({from: accounts[4]});
		const uint4G4w3Y = BigInt("1538")
		const addresssIaC6QS = accounts[3]
		const addressyNrO0kV = accounts[0]
		const boolDRMF83C = await POWTokengFUaaCw.transferFrom.call(addressyNrO0kV, addresssIaC6QS, uint4G4w3Y, {from: accounts[0]});
		const uint256y6B6T2F = await POWTokengFUaaCw.remainingAmount.call({from: accounts[3]});
		await POWTokengFUaaCw.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokengFUaaCw.transferFrom.call(addressyNrO0kV, addresssIaC6QS, uint4G4w3Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})