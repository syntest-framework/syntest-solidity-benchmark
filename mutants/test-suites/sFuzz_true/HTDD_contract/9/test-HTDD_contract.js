const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractT99LVYV = await HTDD_contract.new({from: accounts[1]});
		const addressnoFRrJE = accounts[4]
		const addressIwJQVW9 = "0x0000000000000000000000000000000000000001"
		const uintV6dmDO3 = BigInt("1549")
		const addresseKhsXol = accounts[3]
		const uintH2clh0J = BigInt("90")
		const addressDLOkjK6 = accounts[5]
		const addressnh2PqZL = accounts[0]
		const uintpiFwhay = BigInt("1709")
		const addressluE2o0D = accounts[3]
		const addressjAuKUxp = "0x0000000000000000000000000000000000000001"
		const uintnt2fuLr = BigInt("1256")
		const addressFTq1OT3 = accounts[2]
		const addressGNhUG3z = accounts[1]
		const uint256wPFaPL = await HTDD_contractT99LVYV.allowance.call(addressIwJQVW9, addressnoFRrJE, {from: accounts[3]});
//		const boolbe4MJMQ = await HTDD_contractT99LVYV.transfer.call(addresseKhsXol, uintV6dmDO3, {from: accounts[3]});
//		const boolSK6D6Bt = await HTDD_contractT99LVYV.transferFrom.call(addressnh2PqZL, addressDLOkjK6, uintH2clh0J, {from: accounts[4]});
//		const boolD7nNnP7 = await HTDD_contractT99LVYV.transferFrom.call(addressjAuKUxp, addressluE2o0D, uintpiFwhay, {from: accounts[4]});
//		const boolhiRthOO = await HTDD_contractT99LVYV.transferFrom.call(addressGNhUG3z, addressFTq1OT3, uintnt2fuLr, {from: accounts[3]});

		assert.equal(uint256wPFaPL, BigInt("0"))
		await expect(HTDD_contractT99LVYV.transfer.call(addresseKhsXol, uintV6dmDO3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractDiZucmY = await HTDD_contract.new({from: accounts[2]});
		const addressWbBzMKV = accounts[0]
		const addressiVWCOqX = accounts[0]
		const uintqFq1Pub = BigInt("265")
		const addressBN2Qf5a = accounts[5]
		const addressM3yYhsx = accounts[4]
		const uintPEvvuaE = BigInt("176")
		const addressSkCT5Dj = accounts[1]
		const uint256cPkssl0 = await HTDD_contractDiZucmY.allowance.call(addressiVWCOqX, addressWbBzMKV, {from: accounts[4]});
//		const boolRxtIGbG = await HTDD_contractDiZucmY.transferFrom.call(addressM3yYhsx, addressBN2Qf5a, uintqFq1Pub, {from: accounts[0]});
//		const boolUf5xu5 = await HTDD_contractDiZucmY.transfer.call(addressSkCT5Dj, uintPEvvuaE, {from: accounts[4]});

		assert.equal(uint256cPkssl0, BigInt("0"))
		await expect(HTDD_contractDiZucmY.transferFrom.call(addressM3yYhsx, addressBN2Qf5a, uintqFq1Pub, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractnjFpTD = await HTDD_contract.new({from: accounts[2]});
		const addressK62GqXp = accounts[2]
		const addressP9Yr6pL = accounts[2]
		const uintiCOGNoU = BigInt("42")
		const addressivO2JHm = accounts[2]
		const uint256g9KeT07 = await HTDD_contractnjFpTD.allowance.call(addressP9Yr6pL, addressK62GqXp, {from: accounts[3]});
		const booliEBw0K2 = await HTDD_contractnjFpTD.approve.call(addressivO2JHm, uintiCOGNoU, {from: accounts[5]});

		assert.equal(booliEBw0K2, true)
		assert.equal(uint256g9KeT07, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractXfhWtle = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqRMY346 = BigInt("459")
		const addresseT6Cw2 = accounts[2]
		const uintbzZWogc = BigInt("972")
		const addressdqxkxeH = accounts[0]
		const addressLUUeJx8 = accounts[2]
		const booldTdoP8N = await HTDD_contractXfhWtle.transfer.call(addresseT6Cw2, uintqRMY346, {from: accounts[4]});
		const boolPVfwhKX = await HTDD_contractXfhWtle.transferFrom.call(addressLUUeJx8, addressdqxkxeH, uintbzZWogc, {from: accounts[1]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractOm0Lpg3 = await HTDD_contract.new({from: accounts[4]});
		const uintMXL2dNM = BigInt("877")
		const addressd3TJT6d = accounts[1]
		const addressSSckyrp = accounts[0]
		const addressTdK2inq = accounts[1]
		const uintGEeiCto = BigInt("1420")
		const addressrmOPrB = accounts[1]
		const addressbW0UUFE = accounts[4]
		const boolM6ScPd = await HTDD_contractOm0Lpg3.approve.call(addressd3TJT6d, uintMXL2dNM, {from: accounts[2]});
		const uint256shOJv75 = await HTDD_contractOm0Lpg3.allowance.call(addressTdK2inq, addressSSckyrp, {from: accounts[4]});
//		const boolx6hx4n = await HTDD_contractOm0Lpg3.transferFrom.call(addressbW0UUFE, addressrmOPrB, uintGEeiCto, {from: accounts[0]});

		assert.equal(boolM6ScPd, true)
		assert.equal(uint256shOJv75, BigInt("0"))
		await expect(HTDD_contractOm0Lpg3.transferFrom.call(addressbW0UUFE, addressrmOPrB, uintGEeiCto, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractnjFpTD = await HTDD_contract.new({from: accounts[2]});
		const uinttizlnJV = BigInt("780")
		const addressfsjKReS = accounts[5]
		const uintGamIlf = BigInt("176")
		const addressyIhrxzL = accounts[2]
		const addressBfMz3dy = accounts[4]
		const addressRGKR1Q = accounts[4]
		const addressfk2TnBU = accounts[2]
		const boolQosepo = await HTDD_contractnjFpTD.transfer.call(addressfsjKReS, uinttizlnJV, {from: accounts[2]});
//		const boolgSehWhC = await HTDD_contractnjFpTD.transferFrom.call(addressBfMz3dy, addressyIhrxzL, uintGamIlf, {from: accounts[4]});
//		const uint256g9KeT07 = await HTDD_contractnjFpTD.allowance.call(addressfk2TnBU, addressRGKR1Q, {from: accounts[3]});

		assert.equal(boolQosepo, true)
		await expect(HTDD_contractnjFpTD.transferFrom.call(addressBfMz3dy, addressyIhrxzL, uintGamIlf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})