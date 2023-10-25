const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractAIU5Vry = await ERC20.new({from: accounts[1]});
		const ownerE6HE8tc = accounts[1]
		const valuem5CBjoo = BigInt("163")
		const spenderuYc99Vp = accounts[5]
		const ownerffTo47b = accounts[0]
		const spenderF9XJt89 = accounts[4]
		const ownerF5ROOat = accounts[2]
		const valuecK2VmW = BigInt("1487")
		const toOzTdrv5 = accounts[4]
		const nullR7lXakl = await contractAIU5Vry.balanceOf.call(ownerE6HE8tc, {from: accounts[4]});
		const nullyACTSMR = await contractAIU5Vry.approve.call(spenderuYc99Vp, valuem5CBjoo, {from: accounts[3]});
		const nullVE3hCTs = await contractAIU5Vry.balanceOf.call(ownerffTo47b, {from: accounts[1]});
		const nullgMwH233 = await contractAIU5Vry.allowance.call(ownerF5ROOat, spenderF9XJt89, {from: accounts[3]});
		const nullZnqvVc0 = await contractAIU5Vry.transfer.call(toOzTdrv5, valuecK2VmW, {from: accounts[1]});

		assert.equal(nullR7lXakl, 0)
		assert.equal(nullVE3hCTs, 0)
		assert.equal(nullgMwH233, 0)
		assert.equal(nullyACTSMR, true)
		await expect(contractAIU5Vry.transfer.call(toOzTdrv5, valuecK2VmW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractw4rsy7 = await ERC20.new({from: accounts[1]});
		const valueqPs588j = BigInt("149")
		const spenderk54AkA2 = accounts[2]
		const valuesRQJrHu = BigInt("277")
		const tonRHej0w = accounts[3]
		const fromSJxEdge = accounts[2]
		const nullzgEE6bH = await contractw4rsy7.approve.call(spenderk54AkA2, valueqPs588j, {from: accounts[4]});
		const nullSV1bBQI = await contractw4rsy7.transferFrom.call(fromSJxEdge, tonRHej0w, valuesRQJrHu, {from: accounts[1]});

		assert.equal(nullzgEE6bH, true)
		await expect(contractw4rsy7.transferFrom.call(fromSJxEdge, tonRHej0w, valuesRQJrHu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractChvYru = await ERC20.new({from: accounts[1]});
		const addedValueI4llG5T = BigInt("329")
		const spendercO1uNZF = accounts[0]
		const valuefJU458a = BigInt("1384")
		const toqlm8IsI = accounts[2]
		const fromcvFCf4 = accounts[1]
		const valuejL9LZD4 = BigInt("1630")
		const toOiyGBMY = accounts[4]
		const valueXjH5aDt = BigInt("1792")
		const spenderi33U7N = accounts[4]
		const nullRJuMabe = await contractChvYru.increaseAllowance.call(spendercO1uNZF, addedValueI4llG5T, {from: accounts[2]});
		const nullG3R68so = await contractChvYru.transferFrom.call(fromcvFCf4, toqlm8IsI, valuefJU458a, {from: accounts[1]});
		const nullmRDUJsG = await contractChvYru.transfer.call(toOiyGBMY, valuejL9LZD4, {from: accounts[0]});
		const nullrYXz8aI = await contractChvYru.approve.call(spenderi33U7N, valueXjH5aDt, {from: accounts[2]});
		const nullxvuvzZ = await contractChvYru.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullRJuMabe, true)
		await expect(contractChvYru.transferFrom.call(fromcvFCf4, toqlm8IsI, valuefJU458a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractn15PiJu = await ERC20.new({from: accounts[0]});
		const addedValuesfxEK7s = BigInt("422")
		const spendercOitdHE = accounts[1]
		const spenderB9kvJU3 = accounts[4]
		const ownerfEpADq = accounts[1]
		const subtractedValueX5wgGVP = BigInt("1616")
		const spenderlCbeS2G = accounts[4]
		const valuezBKD4N = BigInt("5")
		const toruzq7G9 = accounts[2]
		const fromRS4ZIdT = accounts[1]
		const nullcJ6bgs2 = await contractn15PiJu.increaseAllowance.call(spendercOitdHE, addedValuesfxEK7s, {from: accounts[4]});
		const nullZKR1eSw = await contractn15PiJu.allowance.call(ownerfEpADq, spenderB9kvJU3, {from: accounts[2]});
		const nullAPMiGdI = await contractn15PiJu.decreaseAllowance.call(spenderlCbeS2G, subtractedValueX5wgGVP, {from: accounts[0]});
		const nulls20QC95 = await contractn15PiJu.transferFrom.call(fromRS4ZIdT, toruzq7G9, valuezBKD4N, {from: accounts[0]});

		assert.equal(nullZKR1eSw, 0)
		assert.equal(nullcJ6bgs2, true)
		await expect(contractn15PiJu.decreaseAllowance.call(spenderlCbeS2G, subtractedValueX5wgGVP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractp7APtA4 = await ERC20.new({from: accounts[2]});
		const spenderJhqTaEL = accounts[0]
		const ownerGR0WOvI = accounts[2]
		const valueWoYUpdT = BigInt("1321")
		const tozwSi2c0 = accounts[3]
		const value3pdfWT = BigInt("683")
		const toPS1bu3 = accounts[1]
		const fromT4T6dNH = accounts[1]
		const nullnWCVMtf = await contractp7APtA4.totalSupply.call({from: accounts[0]});
		const nullTMPHg4 = await contractp7APtA4.allowance.call(ownerGR0WOvI, spenderJhqTaEL, {from: accounts[1]});
		const nullCY06LxV = await contractp7APtA4.transfer.call(tozwSi2c0, valueWoYUpdT, {from: accounts[1]});
		const nulliIQEwhQ = await contractp7APtA4.transferFrom.call(fromT4T6dNH, toPS1bu3, value3pdfWT, {from: accounts[5]});

		assert.equal(nullTMPHg4, 0)
		assert.equal(nullnWCVMtf, 0)
		await expect(contractp7APtA4.transfer.call(tozwSi2c0, valueWoYUpdT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractL6iyeaR = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownernthms5T = accounts[4]
		const valueY55pWOO = BigInt("1771")
		const toROsO0nX = accounts[2]
		const spenderRWsoRj1 = accounts[1]
		const ownerJwUmyyJ = accounts[1]
		const addedValueaphNPET = BigInt("871")
		const spendertXOQAsD = accounts[4]
		const spenderriPZNK = accounts[2]
		const ownerL068QNa = accounts[0]
		const ownerTQeqfXL = accounts[1]
		const nullpjCnpZm = await contractL6iyeaR.balanceOf.call(ownernthms5T, {from: accounts[5]});
		const nullk5ifAIb = await contractL6iyeaR.transfer.call(toROsO0nX, valueY55pWOO, {from: accounts[4]});
		const nullaqccsdH = await contractL6iyeaR.allowance.call(ownerJwUmyyJ, spenderRWsoRj1, {from: accounts[1]});
		const nullJHFmin = await contractL6iyeaR.increaseAllowance.call(spendertXOQAsD, addedValueaphNPET, {from: accounts[3]});
		const nulllZkfC63 = await contractL6iyeaR.allowance.call(ownerL068QNa, spenderriPZNK, {from: accounts[1]});
		const nullHLq3DJl = await contractL6iyeaR.balanceOf.call(ownerTQeqfXL, {from: accounts[3]});
	});
})