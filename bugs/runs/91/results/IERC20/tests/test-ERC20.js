const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractgimJlmh = await ERC20.new({from: accounts[0]});
		const spenderYpKaBHu = accounts[5]
		const ownerfTodsIj = accounts[3]
		const valueO9XdvL = BigInt("8")
		const toTHcIaI = accounts[1]
		const ownerHdvRQ9k = accounts[4]
		const spenderwB8VMHz = accounts[2]
		const ownerVDRfMlS = accounts[1]
		const valueEWo9tTW = BigInt("1553")
		const tosNjjtev = accounts[0]
		const spenderFvLefdP = accounts[1]
		const ownerizdqqA3 = accounts[4]
		const nullGYnmCLi = await contractgimJlmh.allowance.call(ownerfTodsIj, spenderYpKaBHu, {from: accounts[0]});
		const nullZA59m7N = await contractgimJlmh.transfer.call(toTHcIaI, valueO9XdvL, {from: accounts[3]});
		const nulldtHAjAH = await contractgimJlmh.balanceOf.call(ownerHdvRQ9k, {from: accounts[1]});
		const nullmYs7nL6 = await contractgimJlmh.allowance.call(ownerVDRfMlS, spenderwB8VMHz, {from: "0x0000000000000000000000000000000000000001"});
		const nullfEu0THm = await contractgimJlmh.transfer.call(tosNjjtev, valueEWo9tTW, {from: accounts[1]});
		const nullJiz6Qhf = await contractgimJlmh.allowance.call(ownerizdqqA3, spenderFvLefdP, {from: accounts[2]});

		assert.equal(nullGYnmCLi, 0)
		await expect(contractgimJlmh.transfer.call(toTHcIaI, valueO9XdvL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractBd2U2xU = await ERC20.new({from: accounts[2]});
		const subtractedValueem4ZgpI = BigInt("1330")
		const spenderI4fqVQt = accounts[4]
		const value8Ule9x = BigInt("1615")
		const spendero7n7VQ6 = accounts[2]
		const nullUNlQ6ZQ = await contractBd2U2xU.decreaseAllowance.call(spenderI4fqVQt, subtractedValueem4ZgpI, {from: accounts[3]});
		const nullavQabcQ = await contractBd2U2xU.approve.call(spendero7n7VQ6, value8Ule9x, {from: accounts[1]});

		await expect(contractBd2U2xU.decreaseAllowance.call(spenderI4fqVQt, subtractedValueem4ZgpI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractCNnx79o = await ERC20.new({from: accounts[3]});
		const ownerx25Ss59 = accounts[2]
		const ownerZkJmYEt = accounts[0]
		const spenderZyOBFWQ = accounts[2]
		const ownerjfcbGHs = accounts[0]
		const valueDw0yOcF = BigInt("859")
		const spenderImHMui = accounts[2]
		const ownerdMyXSzw = accounts[4]
		const nullfUTt7BY = await contractCNnx79o.balanceOf.call(ownerx25Ss59, {from: accounts[2]});
		const nulliJ8qQl4 = await contractCNnx79o.balanceOf.call(ownerZkJmYEt, {from: accounts[4]});
		const nullaUTFkYr = await contractCNnx79o.allowance.call(ownerjfcbGHs, spenderZyOBFWQ, {from: accounts[1]});
		const nulldIzxwF7 = await contractCNnx79o.approve.call(spenderImHMui, valueDw0yOcF, {from: accounts[3]});
		const nullArIUe2b = await contractCNnx79o.balanceOf.call(ownerdMyXSzw, {from: accounts[0]});

		assert.equal(nullArIUe2b, 0)
		assert.equal(nullaUTFkYr, 0)
		assert.equal(nulldIzxwF7, true)
		assert.equal(nullfUTt7BY, 0)
		assert.equal(nulliJ8qQl4, 0)
	});

	it('test for ERC20', async () => {
		const contractKAOJNn5 = await ERC20.new({from: accounts[2]});
		const ownergNnSd95 = accounts[2]
		const addedValueTODt3M = BigInt("1144")
		const spenderCjNrKJI = accounts[1]
		const addedValueD9Af9tl = BigInt("855")
		const spenderoo0q6y = accounts[3]
		const ownertQ9LqBa = accounts[0]
		const nullKFPteCB = await contractKAOJNn5.balanceOf.call(ownergNnSd95, {from: accounts[0]});
		const nullvD0iwsZ = await contractKAOJNn5.increaseAllowance.call(spenderCjNrKJI, addedValueTODt3M, {from: accounts[0]});
		const nullwv4pBog = await contractKAOJNn5.increaseAllowance.call(spenderoo0q6y, addedValueD9Af9tl, {from: accounts[4]});
		const nullNh4y4qy = await contractKAOJNn5.totalSupply.call({from: accounts[3]});
		const nullp70M8Ao = await contractKAOJNn5.balanceOf.call(ownertQ9LqBa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullKFPteCB, 0)
		assert.equal(nullNh4y4qy, 0)
		assert.equal(nullp70M8Ao, 0)
		assert.equal(nullvD0iwsZ, true)
		assert.equal(nullwv4pBog, true)
	});

	it('test for ERC20', async () => {
		const contractpxcTjc7 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuejE4Lv7i = BigInt("353")
		const toazWtNoY = accounts[4]
		const addedValueiv4h9a = BigInt("501")
		const spenderBtY8Lqr = accounts[2]
		const valueSmVwrqL = BigInt("1106")
		const spendertpaBym = accounts[1]
		const spendervg0RnFn = accounts[2]
		const ownerxBmqfWN = accounts[3]
		const valueXBRgfpV = BigInt("1033")
		const tof05b5o8 = accounts[2]
		const ownerjQngMxJ = accounts[5]
		const nullaSTvc0m = await contractpxcTjc7.transfer.call(toazWtNoY, valuejE4Lv7i, {from: accounts[2]});
		const nullvvGV3ZW = await contractpxcTjc7.increaseAllowance.call(spenderBtY8Lqr, addedValueiv4h9a, {from: accounts[5]});
		const nulll3CPwCn = await contractpxcTjc7.approve.call(spendertpaBym, valueSmVwrqL, {from: accounts[1]});
		const nullKFo9zlf = await contractpxcTjc7.allowance.call(ownerxBmqfWN, spendervg0RnFn, {from: accounts[0]});
		const nullFNb18Xi = await contractpxcTjc7.transfer.call(tof05b5o8, valueXBRgfpV, {from: accounts[1]});
		const nulltpuIDeK = await contractpxcTjc7.balanceOf.call(ownerjQngMxJ, {from: accounts[1]});
	});

	it('test for ERC20', async () => {
		const contractcXhagxP = await ERC20.new({from: accounts[2]});
		const valueDSyHXRn = BigInt("715")
		const toQfUGsu5 = accounts[5]
		const fromBi4wAD2 = accounts[0]
		const subtractedValuebuuM0wQ = BigInt("1330")
		const spenderscmQBT = accounts[4]
		const valueWHRp7D = BigInt("484")
		const toDhgUzVT = accounts[3]
		const valueXUnp2Vl = BigInt("1653")
		const spenderzEVDMzg = accounts[2]
		const nullglrfl7 = await contractcXhagxP.transferFrom.call(fromBi4wAD2, toQfUGsu5, valueDSyHXRn, {from: accounts[1]});
		const nullRusGMMM = await contractcXhagxP.decreaseAllowance.call(spenderscmQBT, subtractedValuebuuM0wQ, {from: accounts[3]});
		const nully6IOQ9B = await contractcXhagxP.transfer.call(toDhgUzVT, valueWHRp7D, {from: accounts[3]});
		const nullyYb4Pe = await contractcXhagxP.approve.call(spenderzEVDMzg, valueXUnp2Vl, {from: accounts[1]});

		await expect(contractcXhagxP.transferFrom.call(fromBi4wAD2, toQfUGsu5, valueDSyHXRn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})