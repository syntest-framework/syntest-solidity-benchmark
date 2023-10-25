const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCElxeH2r = await REXUNIFINANCE.new({from: accounts[0]});
		const uintociOpRj = BigInt("1445")
		const addresspWGhpay = accounts[0]
		const addressHMX9wts = accounts[0]
		const uintLhEpvgc = BigInt("1658")
		const addressIiFwq4K = accounts[1]
		const uintwvslSxP = BigInt("1994")
		const addressTWwKwsf = accounts[4]
		const addresschb1f75 = accounts[1]
//		const boolH08Xjx = await REXUNIFINANCElxeH2r.transferFrom.call(addressHMX9wts, addresspWGhpay, uintociOpRj, {from: accounts[2]});
//		const boolFqmZtdg = await REXUNIFINANCElxeH2r.increaseApproval.call(addressIiFwq4K, uintLhEpvgc, {from: accounts[2]});
//		const booltXg4SOw = await REXUNIFINANCElxeH2r.transfer.call(addressTWwKwsf, uintwvslSxP, {from: accounts[5]});
//		const addressB02RFM8 = await REXUNIFINANCElxeH2r.transferOwnership.call(addresschb1f75, {from: accounts[2]});

		await expect(REXUNIFINANCElxeH2r.transferFrom.call(addressHMX9wts, addresspWGhpay, uintociOpRj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEiQFQJwK = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYakq0vS = BigInt("1689")
		const addressB8OaXti = accounts[0]
		const addressJIHBfxu = accounts[5]
		const uintz8YBTLD = BigInt("8")
		const addressRcSCos8 = accounts[4]
		const addressO7pDnMI = accounts[2]
		const uintELLO7X8 = BigInt("1831")
		const addressposqHZ2 = accounts[2]
		const addressUn7lU7 = "0x0000000000000000000000000000000000000001"
		const addressWsdRM26 = accounts[1]
		const addresst1qH9Po = accounts[1]
		const boolBDuUCr9 = await REXUNIFINANCEiQFQJwK.transfer.call(addressB8OaXti, uintYakq0vS, {from: accounts[3]});
		const addressm1Acw7w = await REXUNIFINANCEiQFQJwK.transferOwnership.call(addressJIHBfxu, {from: accounts[1]});
		const boolqKo9PSr = await REXUNIFINANCEiQFQJwK.transferFrom.call(addressO7pDnMI, addressRcSCos8, uintz8YBTLD, {from: accounts[3]});
		const boolYIgJuzE = await REXUNIFINANCEiQFQJwK.transferFrom.call(addressUn7lU7, addressposqHZ2, uintELLO7X8, {from: accounts[4]});
		const uint256KgA3xyv = await REXUNIFINANCEiQFQJwK.allowance.call(addresst1qH9Po, addressWsdRM26, {from: accounts[0]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEpJ9YRV = await REXUNIFINANCE.new({from: accounts[2]});
		const uintvJZ5xnV = BigInt("2034")
		const addressyyQhjI7 = accounts[2]
		const addressCeSLiPU = accounts[3]
		const uintJIEvrni = BigInt("1469")
		const addressic8YmgG = accounts[2]
		const uintDooE6E = BigInt("1682")
		const addressjK4RbYz = accounts[0]
		const boolhnqVfO9 = await REXUNIFINANCEpJ9YRV.increaseApproval.call(addressyyQhjI7, uintvJZ5xnV, {from: accounts[5]});
		const uint256DuJPwWN = await REXUNIFINANCEpJ9YRV.balanceOf.call(addressCeSLiPU, {from: accounts[3]});
//		const boolKTVOdjm = await REXUNIFINANCEpJ9YRV.transfer.call(addressic8YmgG, uintJIEvrni, {from: accounts[0]});
//		const boolE21UNI = await REXUNIFINANCEpJ9YRV.increaseApproval.call(addressjK4RbYz, uintDooE6E, {from: accounts[5]});

		assert.equal(boolhnqVfO9, true)
		assert.equal(uint256DuJPwWN, BigInt("0"))
		await expect(REXUNIFINANCEpJ9YRV.transfer.call(addressic8YmgG, uintJIEvrni, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCETJJhrhu = await REXUNIFINANCE.new({from: accounts[0]});
		const addresscIpZsvD = accounts[1]
		const uintN29SL2s = BigInt("1968")
		const addressjdzyxs0 = accounts[4]
		const addressgFjEaY = accounts[0]
		const uintTWT6dge = BigInt("959")
		const addressZZSwHNt = accounts[3]
		const uint256SYKWn0Y = await REXUNIFINANCETJJhrhu.balanceOf.call(addresscIpZsvD, {from: accounts[0]});
//		const booljwsuOdv = await REXUNIFINANCETJJhrhu.transferFrom.call(addressgFjEaY, addressjdzyxs0, uintN29SL2s, {from: accounts[0]});
//		const boolNHDuTD = await REXUNIFINANCETJJhrhu.approve.call(addressZZSwHNt, uintTWT6dge, {from: accounts[3]});

		assert.equal(uint256SYKWn0Y, BigInt("0"))
		await expect(REXUNIFINANCETJJhrhu.transferFrom.call(addressgFjEaY, addressjdzyxs0, uintN29SL2s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCETIXUOug = await REXUNIFINANCE.new({from: accounts[2]});
		const uintvIKXCKJ = BigInt("1883")
		const addressldvCzxG = accounts[4]
		const uintyzQJTUo = BigInt("1290")
		const addressSB5Bcr6 = accounts[4]
		const addresszaenbT = accounts[1]
		const addresscgyub5r = accounts[5]
		const uintkjQPD1E = BigInt("29")
		const addressK9SgQN9 = accounts[1]
		const uintDolZFL6 = BigInt("1955")
		const addressFOqOVJ = accounts[4]
		const uintXePg1VY = BigInt("1550")
		const addressD6MLvxC = accounts[2]
		const booluhl0BK6 = await REXUNIFINANCETIXUOug.approve.call(addressldvCzxG, uintvIKXCKJ, {from: accounts[1]});
//		const booloteO4BS = await REXUNIFINANCETIXUOug.transfer.call(addressSB5Bcr6, uintyzQJTUo, {from: accounts[3]});
//		const uint256Wi2Ryr = await REXUNIFINANCETIXUOug.allowance.call(addresscgyub5r, addresszaenbT, {from: accounts[4]});
//		const boolO4VyEoU = await REXUNIFINANCETIXUOug.decreaseApproval.call(addressK9SgQN9, uintkjQPD1E, {from: accounts[3]});
//		const boolPdNnzp6 = await REXUNIFINANCETIXUOug.approve.call(addressFOqOVJ, uintDolZFL6, {from: accounts[0]});
//		const boolXwkFekE = await REXUNIFINANCETIXUOug.transfer.call(addressD6MLvxC, uintXePg1VY, {from: accounts[0]});

		assert.equal(booluhl0BK6, true)
		await expect(REXUNIFINANCETIXUOug.transfer.call(addressSB5Bcr6, uintyzQJTUo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCErQxh6oB = await REXUNIFINANCE.new({from: accounts[0]});
		const uintBjf4C26 = BigInt("941")
		const addressQwAAyt = accounts[3]
		const addressH6gbq5L = accounts[2]
		const uintbsvRzL = BigInt("1839")
		const addressW6752l4 = accounts[2]
		const uintfOE0ED7 = BigInt("2028")
		const addressyNxT1F0 = accounts[0]
		const uintP7HWhSG = BigInt("1587")
		const addressOQmp9sZ = accounts[6]
		const booloYevThK = await REXUNIFINANCErQxh6oB.decreaseApproval.call(addressQwAAyt, uintBjf4C26, {from: accounts[1]});
		const uint256AY7QkU = await REXUNIFINANCErQxh6oB.balanceOf.call(addressH6gbq5L, {from: accounts[2]});
		const boolBm4bpow = await REXUNIFINANCErQxh6oB.increaseApproval.call(addressW6752l4, uintbsvRzL, {from: accounts[5]});
		const boolSRFc7x = await REXUNIFINANCErQxh6oB.approve.call(addressyNxT1F0, uintfOE0ED7, {from: accounts[3]});
//		const boolhmJcRsW = await REXUNIFINANCErQxh6oB.transfer.call(addressOQmp9sZ, uintP7HWhSG, {from: accounts[4]});

		assert.equal(boolBm4bpow, true)
		assert.equal(boolSRFc7x, true)
		assert.equal(booloYevThK, true)
		assert.equal(uint256AY7QkU, BigInt("0"))
		await expect(REXUNIFINANCErQxh6oB.transfer.call(addressOQmp9sZ, uintP7HWhSG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCErQxh6oB = await REXUNIFINANCE.new({from: accounts[0]});
		const uintTCW4jX2 = BigInt("1818")
		const addressHEBACT6 = accounts[2]
		const addressqK41ZcS = accounts[4]
		const addressarpupWB = accounts[3]
		const address4f35uU = accounts[1]
		const uintnIqjFFz = BigInt("1587")
		const addressLrFf5lU = accounts[5]
		const addressBed0Pom = accounts[3]
		const addressUc4d6Wo = accounts[2]
		const boolBm4bpow = await REXUNIFINANCErQxh6oB.increaseApproval.call(addressHEBACT6, uintTCW4jX2, {from: accounts[5]});
		const uint256fIfmFwR = await REXUNIFINANCErQxh6oB.allowance.call(addressarpupWB, addressqK41ZcS, {from: accounts[3]});
//		const addressGbJfLm = await REXUNIFINANCErQxh6oB.transferOwnership.call(address4f35uU, {from: accounts[1]});
//		const boolhmJcRsW = await REXUNIFINANCErQxh6oB.transfer.call(addressLrFf5lU, uintnIqjFFz, {from: accounts[4]});
//		const uint256vJHLQGN = await REXUNIFINANCErQxh6oB.allowance.call(addressUc4d6Wo, addressBed0Pom, {from: accounts[2]});

		assert.equal(boolBm4bpow, true)
		assert.equal(uint256fIfmFwR, BigInt("0"))
		await expect(REXUNIFINANCErQxh6oB.transferOwnership.call(address4f35uU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})