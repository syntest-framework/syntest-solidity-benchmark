const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEb2TBMz3 = await REXUNIFINANCE.new({from: accounts[3]});
		const uintELRc1qA = BigInt("1474")
		const addressMoOngqg = accounts[3]
		const uintQerMo2D = BigInt("119")
		const addressJG6ysUT = accounts[3]
		const uintw88bkE0 = BigInt("1813")
		const addressVppxVWa = accounts[3]
		const boolq99WOl = await REXUNIFINANCEb2TBMz3.decreaseApproval.call(addressMoOngqg, uintELRc1qA, {from: accounts[2]});
		const boolkKLgKrt = await REXUNIFINANCEb2TBMz3.approve.call(addressJG6ysUT, uintQerMo2D, {from: accounts[4]});
		const boolXk87qE = await REXUNIFINANCEb2TBMz3.approve.call(addressVppxVWa, uintw88bkE0, {from: accounts[1]});

		assert.equal(boolXk87qE, true)
		assert.equal(boolkKLgKrt, true)
		assert.equal(boolq99WOl, true)
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEX2RIelD = await REXUNIFINANCE.new({from: accounts[3]});
		const uintNpYDs2e = BigInt("1048")
		const addressGIGzMA4 = accounts[4]
		const uintoHW5jk = BigInt("1840")
		const address13t6tp = accounts[5]
		const uintbJQSd0i = BigInt("1782")
		const addressRs2aYm = accounts[5]
		const addressbn1hZKf = accounts[2]
		const addressKOjmqQ = accounts[1]
		const uintAaHRXZ = BigInt("1038")
		const addressv2DyHqL = accounts[0]
		const boolCcLA4Zp = await REXUNIFINANCEX2RIelD.approve.call(addressGIGzMA4, uintNpYDs2e, {from: accounts[0]});
		const boolPr3I9lo = await REXUNIFINANCEX2RIelD.approve.call(address13t6tp, uintoHW5jk, {from: accounts[2]});
//		const booltqhMQ8J = await REXUNIFINANCEX2RIelD.transferFrom.call(addressbn1hZKf, addressRs2aYm, uintbJQSd0i, {from: accounts[5]});
//		const uint256qyJ4pJb = await REXUNIFINANCEX2RIelD.balanceOf.call(addressKOjmqQ, {from: accounts[1]});
//		const boolmyEskWG = await REXUNIFINANCEX2RIelD.increaseApproval.call(addressv2DyHqL, uintAaHRXZ, {from: accounts[5]});

		assert.equal(boolCcLA4Zp, true)
		assert.equal(boolPr3I9lo, true)
		await expect(REXUNIFINANCEX2RIelD.transferFrom.call(addressbn1hZKf, addressRs2aYm, uintbJQSd0i, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEzb6Hptl = await REXUNIFINANCE.new({from: accounts[0]});
		const addressPAnq3gP = accounts[3]
		const addressKSbYiyP = accounts[2]
		const addressgaiagr8 = accounts[5]
		const uintbjIOkMy = BigInt("1811")
		const addresskIL0JZo = accounts[4]
		const uint256JiR3wVs = await REXUNIFINANCEzb6Hptl.transferableTokens.call(addressPAnq3gP, {from: accounts[1]});
		const uint256OingpMs = await REXUNIFINANCEzb6Hptl.balanceOf.call(addressKSbYiyP, {from: accounts[3]});
//		const addressv2ztVxG = await REXUNIFINANCEzb6Hptl.transferOwnership.call(addressgaiagr8, {from: accounts[3]});
//		const booltpT96AQ = await REXUNIFINANCEzb6Hptl.decreaseApproval.call(addresskIL0JZo, uintbjIOkMy, {from: accounts[1]});

		assert.equal(uint256JiR3wVs, BigInt("0"))
		assert.equal(uint256OingpMs, BigInt("0"))
		await expect(REXUNIFINANCEzb6Hptl.transferOwnership.call(addressgaiagr8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEZRy7p6F = await REXUNIFINANCE.new({from: accounts[0]});
		const uintwYh7M0V = BigInt("321")
		const addresssQu08d5 = "0x0000000000000000000000000000000000000001"
		const uintfCbqKG = BigInt("345")
		const addressAySGdce = accounts[3]
		const uintQULvrl1 = BigInt("1908")
		const addressWyXf4tj = accounts[2]
		const uintfEUrPTr = BigInt("1415")
		const addressR0zQeXb = accounts[0]
//		const boolx5ajUI = await REXUNIFINANCEZRy7p6F.transfer.call(addresssQu08d5, uintwYh7M0V, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYxXwzga = await REXUNIFINANCEZRy7p6F.decreaseApproval.call(addressAySGdce, uintfCbqKG, {from: accounts[1]});
//		const boolsbhXrTh = await REXUNIFINANCEZRy7p6F.decreaseApproval.call(addressWyXf4tj, uintQULvrl1, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAchA2z = await REXUNIFINANCEZRy7p6F.transfer.call(addressR0zQeXb, uintfEUrPTr, {from: accounts[4]});

		await expect(REXUNIFINANCEZRy7p6F.transfer.call(addresssQu08d5, uintwYh7M0V, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEIlw7mIa = await REXUNIFINANCE.new({from: accounts[4]});
		const addressg55wYi4 = accounts[0]
		const addressKFy9zIO = "0x0000000000000000000000000000000000000001"
		const addressZ7XDWX5 = accounts[0]
		const addressSUbch8S = "0x0000000000000000000000000000000000000001"
		const uintudjbGPH = BigInt("1558")
		const addressceT0958 = accounts[3]
		const uint256PvyMyk5 = await REXUNIFINANCEIlw7mIa.allowance.call(addressKFy9zIO, addressg55wYi4, {from: accounts[2]});
		const uint256BdZ9LSs = await REXUNIFINANCEIlw7mIa.balanceOf.call(addressZ7XDWX5, {from: accounts[3]});
		const addressYjhZW7U = await REXUNIFINANCEIlw7mIa.transferOwnership.call(addressSUbch8S, {from: accounts[4]});
		const boolY6dWpim = await REXUNIFINANCEIlw7mIa.approve.call(addressceT0958, uintudjbGPH, {from: accounts[4]});

		assert.equal(boolY6dWpim, true)
		assert.equal(uint256BdZ9LSs, BigInt("0"))
		assert.equal(uint256PvyMyk5, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEcGauu9R = await REXUNIFINANCE.new({from: accounts[5]});
		const uintGbpy4p = BigInt("926")
		const addresssYPfaUk = accounts[1]
		const uintA4Y5e4p = BigInt("1539")
		const addresshIZheX6 = accounts[5]
		const addressoujpenA = accounts[4]
		const address2KXCWK = accounts[0]
		const uintSgKrFhU = BigInt("1328")
		const addressme2XSdS = accounts[1]
		const addresswHbRlu7 = "0x0000000000000000000000000000000000000001"
		const uintXRwyZOC = BigInt("1995")
		const addressi0Sfkrr = accounts[5]
//		const boolBQoJtB5 = await REXUNIFINANCEcGauu9R.increaseApproval.call(addresssYPfaUk, uintGbpy4p, {from: accounts[1]});
//		const boolDpGKWlc = await REXUNIFINANCEcGauu9R.increaseApproval.call(addresshIZheX6, uintA4Y5e4p, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YYoOT2h = await REXUNIFINANCEcGauu9R.allowance.call(address2KXCWK, addressoujpenA, {from: accounts[4]});
//		const boolhs1aptO = await REXUNIFINANCEcGauu9R.transferFrom.call(addresswHbRlu7, addressme2XSdS, uintSgKrFhU, {from: accounts[1]});
//		const boolLG5clck = await REXUNIFINANCEcGauu9R.approve.call(addressi0Sfkrr, uintXRwyZOC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(REXUNIFINANCEcGauu9R.increaseApproval.call(addresssYPfaUk, uintGbpy4p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEQsRdswa = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQzAwuJ = "0x0000000000000000000000000000000000000001"
		const addressZRGX19c = accounts[1]
		const uintV2rVacD = BigInt("581")
		const addressr3wo0fQ = accounts[5]
		const addresspMhCB2Z = accounts[3]
		const uintGBfSXe = BigInt("1216")
		const addressoRcdoc = accounts[2]
		const uint256DEo8zyd = await REXUNIFINANCEQsRdswa.balanceOf.call(addressQzAwuJ, {from: accounts[1]});
		const uint256vnIo2aE = await REXUNIFINANCEQsRdswa.transferableTokens.call(addressZRGX19c, {from: accounts[3]});
		const boolzWUfOkz = await REXUNIFINANCEQsRdswa.transferFrom.call(addresspMhCB2Z, addressr3wo0fQ, uintV2rVacD, {from: accounts[1]});
		const boolHDJyQU8 = await REXUNIFINANCEQsRdswa.transfer.call(addressoRcdoc, uintGBfSXe, {from: accounts[0]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEZRy7p6F = await REXUNIFINANCE.new({from: accounts[0]});
		const uintTFQlC1 = BigInt("321")
		const addressbityugt = "0x0000000000000000000000000000000000000002"
		const uintOYes9d = BigInt("466")
		const address6yVT3b = accounts[3]
		const uintX14yJP2 = BigInt("316")
		const addressnzCdikd = accounts[4]
		const addressyWiJffy = accounts[0]
		const uintMJV04T9 = BigInt("1908")
		const addressltOavLv = accounts[2]
		const uintk9fIKRO = BigInt("1415")
		const addressBZayUVM = accounts[0]
//		const boolx5ajUI = await REXUNIFINANCEZRy7p6F.transfer.call(addressbityugt, uintTFQlC1, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnKWiFJ = await REXUNIFINANCEZRy7p6F.transfer.call(address6yVT3b, uintOYes9d, {from: accounts[4]});
//		const boolQzOgcS2 = await REXUNIFINANCEZRy7p6F.transferFrom.call(addressyWiJffy, addressnzCdikd, uintX14yJP2, {from: accounts[4]});
//		const boolsbhXrTh = await REXUNIFINANCEZRy7p6F.decreaseApproval.call(addressltOavLv, uintMJV04T9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAchA2z = await REXUNIFINANCEZRy7p6F.transfer.call(addressBZayUVM, uintk9fIKRO, {from: accounts[4]});

		await expect(REXUNIFINANCEZRy7p6F.transfer.call(addressbityugt, uintTFQlC1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEb2TBMz3 = await REXUNIFINANCE.new({from: accounts[3]});
		const uintUs0Dx9I = BigInt("1499")
		const addressVpJK0T9 = accounts[4]
		const uintrapBi3X = BigInt("1794")
		const addressmniqJIw = accounts[4]
		const uintUV2KbbC = BigInt("696")
		const addresswjIUJh1 = accounts[4]
		const uint1MFBDx = BigInt("1236")
		const addressJNbpORB = accounts[0]
		const boolq99WOl = await REXUNIFINANCEb2TBMz3.decreaseApproval.call(addressVpJK0T9, uintUs0Dx9I, {from: accounts[2]});
		const boolfqFKW0r = await REXUNIFINANCEb2TBMz3.increaseApproval.call(addressmniqJIw, uintrapBi3X, {from: accounts[1]});
		const boolx4rXaw0 = await REXUNIFINANCEb2TBMz3.decreaseApproval.call(addresswjIUJh1, uintUV2KbbC, {from: accounts[3]});
		const boolv5rjnC3 = await REXUNIFINANCEb2TBMz3.increaseApproval.call(addressJNbpORB, uint1MFBDx, {from: accounts[1]});

		assert.equal(boolfqFKW0r, true)
		assert.equal(boolq99WOl, true)
		assert.equal(boolv5rjnC3, true)
		assert.equal(boolx4rXaw0, true)
	});
})