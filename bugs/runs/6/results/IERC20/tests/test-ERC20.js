const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractbND3nf0 = await ERC20.new({from: accounts[4]});
		const valueA3BtJQw = BigInt("686")
		const spenderf5ZjCcE = accounts[3]
		const spendernF3nCse = accounts[4]
		const ownermTSAnB = accounts[0]
		const nullqryKg86 = await contractbND3nf0.approve.call(spenderf5ZjCcE, valueA3BtJQw, {from: "0x0000000000000000000000000000000000000001"});
		const nulld3q64EX = await contractbND3nf0.totalSupply.call({from: accounts[3]});
		const nullo6ReF25 = await contractbND3nf0.totalSupply.call({from: accounts[0]});
		const nullq4EKSHL = await contractbND3nf0.allowance.call(ownermTSAnB, spendernF3nCse, {from: accounts[3]});

		assert.equal(nulld3q64EX, 0)
		assert.equal(nullo6ReF25, 0)
		assert.equal(nullq4EKSHL, 0)
		assert.equal(nullqryKg86, true)
	});

	it('test for ERC20', async () => {
		const contractvDCBclr = await ERC20.new({from: accounts[1]});
		const ownerBdkuLEA = accounts[3]
		const addedValueFHzVs1P = BigInt("1047")
		const spenderIKwQdx0 = accounts[2]
		const nullWW33sBx = await contractvDCBclr.balanceOf.call(ownerBdkuLEA, {from: accounts[1]});
		const nullTSLaJPH = await contractvDCBclr.increaseAllowance.call(spenderIKwQdx0, addedValueFHzVs1P, {from: accounts[3]});

		assert.equal(nullTSLaJPH, true)
		assert.equal(nullWW33sBx, 0)
	});

	it('test for ERC20', async () => {
		const contractpgbmvCW = await ERC20.new({from: accounts[1]});
		const valuem0kkuIx = BigInt("1823")
		const spenderv2kXIb = accounts[2]
		const spenderNz5LNe8 = accounts[3]
		const ownerbRlR0Fk = accounts[1]
		const subtractedValuesvHe0Ce = BigInt("13")
		const spenderobJiLU = accounts[5]
		const spenderVc7lUKQ = accounts[2]
		const ownerWSRxkA0 = accounts[0]
		const nullDJYHfYw = await contractpgbmvCW.approve.call(spenderv2kXIb, valuem0kkuIx, {from: "0x0000000000000000000000000000000000000001"});
		const nullUHy244n = await contractpgbmvCW.allowance.call(ownerbRlR0Fk, spenderNz5LNe8, {from: accounts[4]});
		const nullIFZiOnR = await contractpgbmvCW.decreaseAllowance.call(spenderobJiLU, subtractedValuesvHe0Ce, {from: accounts[0]});
		const nullQFItP5V = await contractpgbmvCW.allowance.call(ownerWSRxkA0, spenderVc7lUKQ, {from: accounts[1]});

		assert.equal(nullDJYHfYw, true)
		assert.equal(nullUHy244n, 0)
		await expect(contractpgbmvCW.decreaseAllowance.call(spenderobJiLU, subtractedValuesvHe0Ce, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractoskw4jC = await ERC20.new({from: accounts[3]});
		const valueb3y1Pm8 = BigInt("857")
		const toFLAQdGx = accounts[2]
		const addedValueN2Q7ndl = BigInt("256")
		const spenderFnrKWfp = accounts[0]
		const addedValueSeePD4w = BigInt("1433")
		const spenderqtaYQYX = accounts[5]
		const valuemGDzGdF = BigInt("2011")
		const toYFqnz5 = accounts[5]
		const fromSOR8sG = accounts[4]
		const nullaWPAc0X = await contractoskw4jC.totalSupply.call({from: accounts[0]});
		const nullizGgmi3 = await contractoskw4jC.transfer.call(toFLAQdGx, valueb3y1Pm8, {from: accounts[2]});
		const nullsn9Idf = await contractoskw4jC.increaseAllowance.call(spenderFnrKWfp, addedValueN2Q7ndl, {from: accounts[3]});
		const nullpBM48gC = await contractoskw4jC.increaseAllowance.call(spenderqtaYQYX, addedValueSeePD4w, {from: accounts[2]});
		const nullH4338g = await contractoskw4jC.transferFrom.call(fromSOR8sG, toYFqnz5, valuemGDzGdF, {from: accounts[4]});

		assert.equal(nullaWPAc0X, 0)
		await expect(contractoskw4jC.transfer.call(toFLAQdGx, valueb3y1Pm8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractydmNv7F = await ERC20.new({from: accounts[2]});
		const spendersR6DQzs = accounts[2]
		const ownerVb9JEVt = accounts[3]
		const valueyAX8udG = BigInt("1034")
		const toxTSkUuP = accounts[4]
		const fromxvuJvd = accounts[4]
		const addedValuewg5hmQA = BigInt("1200")
		const spenderH5RRYks = accounts[2]
		const subtractedValueR3OFpul = BigInt("834")
		const spendertXPyeNL = accounts[0]
		const nulliPMIKSf = await contractydmNv7F.allowance.call(ownerVb9JEVt, spendersR6DQzs, {from: accounts[2]});
		const nullQL1xIqw = await contractydmNv7F.transferFrom.call(fromxvuJvd, toxTSkUuP, valueyAX8udG, {from: accounts[5]});
		const nulldmDW7F = await contractydmNv7F.increaseAllowance.call(spenderH5RRYks, addedValuewg5hmQA, {from: accounts[1]});
		const nullBF45bch = await contractydmNv7F.decreaseAllowance.call(spendertXPyeNL, subtractedValueR3OFpul, {from: accounts[3]});

		assert.equal(nulliPMIKSf, 0)
		await expect(contractydmNv7F.transferFrom.call(fromxvuJvd, toxTSkUuP, valueyAX8udG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractdiyBhux = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueBdaH4Kx = BigInt("712")
		const spenderQ0XV3vS = accounts[2]
		const valuexjEhx69 = BigInt("35")
		const spenderUGX0X8 = accounts[0]
		const ownerlcvCDey = accounts[5]
		const valueKu3wEu = BigInt("251")
		const top8POStT = accounts[2]
		const valuet8fMifK = BigInt("1611")
		const toYcmO7bi = accounts[3]
		const frompvkn0Sr = "0x0000000000000000000000000000000000000001"
		const nullO8GuGsw = await contractdiyBhux.approve.call(spenderQ0XV3vS, valueBdaH4Kx, {from: accounts[3]});
		const nullAXxTPAY = await contractdiyBhux.approve.call(spenderUGX0X8, valuexjEhx69, {from: accounts[0]});
		const nullgs9mFKJ = await contractdiyBhux.balanceOf.call(ownerlcvCDey, {from: accounts[5]});
		const nullyipfmYR = await contractdiyBhux.transfer.call(top8POStT, valueKu3wEu, {from: accounts[1]});
		const nullJwljhCu = await contractdiyBhux.transferFrom.call(frompvkn0Sr, toYcmO7bi, valuet8fMifK, {from: accounts[1]});
	});
})