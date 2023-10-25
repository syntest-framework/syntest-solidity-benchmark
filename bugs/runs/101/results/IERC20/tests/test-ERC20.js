const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contracthxMKCSv = await ERC20.new({from: accounts[2]});
		const valuebL4Xcr7 = BigInt("1207")
		const spenderjCvuzwr = accounts[1]
		const valuePFn3Nhk = BigInt("1336")
		const spenderGgpP0W = accounts[1]
		const valuemIHPPw = BigInt("755")
		const toTCYRc3k = accounts[2]
		const spender4KjstK = accounts[4]
		const ownerONrdke = accounts[4]
		const valueKjt9BQB = BigInt("1630")
		const spenderWd8z5VU = accounts[2]
		const addedValuemf4tWVu = BigInt("386")
		const spenderqjxkq7q = accounts[3]
		const nullORkqLyR = await contracthxMKCSv.approve.call(spenderjCvuzwr, valuebL4Xcr7, {from: accounts[0]});
		const nullXvSr5Of = await contracthxMKCSv.approve.call(spenderGgpP0W, valuePFn3Nhk, {from: accounts[1]});
		const nullDWf5oNg = await contracthxMKCSv.transfer.call(toTCYRc3k, valuemIHPPw, {from: accounts[4]});
		const nullzV3rtz = await contracthxMKCSv.allowance.call(ownerONrdke, spender4KjstK, {from: accounts[2]});
		const nulljgugUMu = await contracthxMKCSv.approve.call(spenderWd8z5VU, valueKjt9BQB, {from: accounts[0]});
		const nullRt2pdso = await contracthxMKCSv.increaseAllowance.call(spenderqjxkq7q, addedValuemf4tWVu, {from: accounts[1]});

		assert.equal(nullORkqLyR, true)
		assert.equal(nullXvSr5Of, true)
		await expect(contracthxMKCSv.transfer.call(toTCYRc3k, valuemIHPPw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractAqob09u = await ERC20.new({from: accounts[4]});
		const subtractedValueXBLUGah = BigInt("232")
		const spenderZkpOeGC = accounts[4]
		const subtractedValueHcX2aJ5 = BigInt("814")
		const spenderSLGbaEY = "0x0000000000000000000000000000000000000001"
		const valueTBEHpUl = BigInt("1598")
		const tosJWdGoe = accounts[3]
		const fromouLjvw = accounts[2]
		const nullUKphV5b = await contractAqob09u.decreaseAllowance.call(spenderZkpOeGC, subtractedValueXBLUGah, {from: accounts[5]});
		const nullhAgpa3R = await contractAqob09u.decreaseAllowance.call(spenderSLGbaEY, subtractedValueHcX2aJ5, {from: accounts[0]});
		const nullIakWE85 = await contractAqob09u.transferFrom.call(fromouLjvw, tosJWdGoe, valueTBEHpUl, {from: accounts[4]});

		await expect(contractAqob09u.decreaseAllowance.call(spenderZkpOeGC, subtractedValueXBLUGah, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractcs8VqbD = await ERC20.new({from: accounts[1]});
		const addedValueFKnJ5Vq = BigInt("1711")
		const spenderHyygWaF = accounts[3]
		const valuecfiOfxK = BigInt("950")
		const toWUC58X = accounts[3]
		const fromWh5RYC = accounts[1]
		const value7BJ5OI = BigInt("242")
		const spenderMeagfPQ = accounts[1]
		const ownerizWacCO = accounts[4]
		const valueRfUXSAw = BigInt("1362")
		const to0LrcIj = accounts[2]
		const nullH4EO6k = await contractcs8VqbD.increaseAllowance.call(spenderHyygWaF, addedValueFKnJ5Vq, {from: accounts[4]});
		const nullgfOCM3 = await contractcs8VqbD.transferFrom.call(fromWh5RYC, toWUC58X, valuecfiOfxK, {from: accounts[5]});
		const nullFf4Za6v = await contractcs8VqbD.approve.call(spenderMeagfPQ, value7BJ5OI, {from: accounts[3]});
		const nullt6fO8Gs = await contractcs8VqbD.balanceOf.call(ownerizWacCO, {from: accounts[0]});
		const nullhnAYeN9 = await contractcs8VqbD.transfer.call(to0LrcIj, valueRfUXSAw, {from: accounts[1]});

		assert.equal(nullH4EO6k, true)
		await expect(contractcs8VqbD.transferFrom.call(fromWh5RYC, toWUC58X, valuecfiOfxK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracts9Il0Qk = await ERC20.new({from: accounts[1]});
		const spenderBbFceFu = accounts[1]
		const ownerVcq1HPO = accounts[3]
		const ownerIG9UzUB = accounts[0]
		const nullHnwTyes = await contracts9Il0Qk.allowance.call(ownerVcq1HPO, spenderBbFceFu, {from: accounts[0]});
		const null3mqFCj = await contracts9Il0Qk.balanceOf.call(ownerIG9UzUB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(null3mqFCj, 0)
		assert.equal(nullHnwTyes, 0)
	});

	it('test for ERC20', async () => {
		const contractDKf0UWG = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuezymsmZn = BigInt("1621")
		const spenderBenBGEm = accounts[1]
		const valueX4TPYa8 = BigInt("1032")
		const spenderPMlj0uY = accounts[4]
		const valuemIXgbWa = BigInt("966")
		const spenderQBXL0cO = accounts[5]
		const addedValueB1bJGBS = BigInt("1006")
		const spendertzMejlF = accounts[3]
		const nulldR7PiuF = await contractDKf0UWG.approve.call(spenderBenBGEm, valuezymsmZn, {from: accounts[2]});
		const nullbzDSyi = await contractDKf0UWG.totalSupply.call({from: accounts[3]});
		const nullI6inNYl = await contractDKf0UWG.totalSupply.call({from: accounts[3]});
		const nullT9iy41t = await contractDKf0UWG.approve.call(spenderPMlj0uY, valueX4TPYa8, {from: accounts[1]});
		const nullCUCOHKf = await contractDKf0UWG.approve.call(spenderQBXL0cO, valuemIXgbWa, {from: accounts[3]});
		const nullie3LMNj = await contractDKf0UWG.increaseAllowance.call(spendertzMejlF, addedValueB1bJGBS, {from: accounts[3]});
	});

	it('test for ERC20', async () => {
		const contractjWb0WkQ = await ERC20.new({from: accounts[3]});
		const ownerQQx1kQM = accounts[0]
		const valueHit4K96 = BigInt("958")
		const tozOXVlRi = accounts[2]
		const valueRuPC9WT = BigInt("1186")
		const tobnoZjTX = accounts[2]
		const nullnLnFaao = await contractjWb0WkQ.balanceOf.call(ownerQQx1kQM, {from: "0x0000000000000000000000000000000000000001"});
		const nullIGBlSis = await contractjWb0WkQ.totalSupply.call({from: accounts[5]});
		const null3fAKJ8 = await contractjWb0WkQ.transfer.call(tozOXVlRi, valueHit4K96, {from: accounts[3]});
		const nullICYqs3 = await contractjWb0WkQ.transfer.call(tobnoZjTX, valueRuPC9WT, {from: accounts[5]});

		assert.equal(nullIGBlSis, 0)
		assert.equal(nullnLnFaao, 0)
		await expect(contractjWb0WkQ.transfer.call(tozOXVlRi, valueHit4K96, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})