const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractvCofxQ = await ERC20.new({from: accounts[5]});
		const spenderILSmcYU = accounts[2]
		const ownerdKdMh2K = accounts[2]
		const valueXPlMya9 = BigInt("1824")
		const toOqydYk9 = accounts[4]
		const addedValuesv7PWT6 = BigInt("1449")
		const spenderfpAqHyp = accounts[2]
		const valueSr1MFPi = BigInt("461")
		const towHjL6q = accounts[3]
		const valued6Ko39a = BigInt("1312")
		const spendergD6pmZZ = accounts[1]
		const nullcsIgXi = await contractvCofxQ.allowance.call(ownerdKdMh2K, spenderILSmcYU, {from: accounts[1]});
		const nullJGhcIbD = await contractvCofxQ.transfer.call(toOqydYk9, valueXPlMya9, {from: accounts[5]});
		const nullfUHbDR = await contractvCofxQ.increaseAllowance.call(spenderfpAqHyp, addedValuesv7PWT6, {from: accounts[2]});
		const nullFhute8x = await contractvCofxQ.transfer.call(towHjL6q, valueSr1MFPi, {from: accounts[0]});
		const nullifOgaY2 = await contractvCofxQ.approve.call(spendergD6pmZZ, valued6Ko39a, {from: accounts[4]});

		assert.equal(nullcsIgXi, 0)
		await expect(contractvCofxQ.transfer.call(toOqydYk9, valueXPlMya9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractSMtrDvC = await ERC20.new({from: accounts[1]});
		const valueRZk0pQJ = BigInt("1753")
		const spenderJvyRvlg = accounts[3]
		const valueFKTMWUD = BigInt("3")
		const toVbWEKaQ = accounts[0]
		const fromsXgGQ6W = accounts[4]
		const nullIX3yy3Y = await contractSMtrDvC.approve.call(spenderJvyRvlg, valueRZk0pQJ, {from: accounts[2]});
		const nulloYzyYDF = await contractSMtrDvC.transferFrom.call(fromsXgGQ6W, toVbWEKaQ, valueFKTMWUD, {from: accounts[4]});
		const nullYrpiRg = await contractSMtrDvC.totalSupply.call({from: accounts[0]});
		const nullyEIP27G = await contractSMtrDvC.totalSupply.call({from: accounts[0]});

		assert.equal(nullIX3yy3Y, true)
		await expect(contractSMtrDvC.transferFrom.call(fromsXgGQ6W, toVbWEKaQ, valueFKTMWUD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractdlfU6aY = await ERC20.new({from: accounts[2]});
		const subtractedValuetMTwWJk = BigInt("651")
		const spenderg8M4shW = accounts[3]
		const valuejKP0Q49 = BigInt("1718")
		const spenderzRu5wJA = accounts[0]
		const valueJWWMVo8 = BigInt("1651")
		const spendertxVs8M9 = accounts[4]
		const nullJOz4id0 = await contractdlfU6aY.totalSupply.call({from: accounts[2]});
		const nullAXHp46m = await contractdlfU6aY.decreaseAllowance.call(spenderg8M4shW, subtractedValuetMTwWJk, {from: accounts[3]});
		const nullHx6Gskz = await contractdlfU6aY.approve.call(spenderzRu5wJA, valuejKP0Q49, {from: accounts[1]});
		const nullXkpyoOJ = await contractdlfU6aY.approve.call(spendertxVs8M9, valueJWWMVo8, {from: accounts[3]});

		assert.equal(nullJOz4id0, 0)
		await expect(contractdlfU6aY.decreaseAllowance.call(spenderg8M4shW, subtractedValuetMTwWJk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractmsXbtrx = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueYIfgEXd = BigInt("177")
		const tosZWAMOk = accounts[1]
		const fromGDQvkwR = accounts[0]
		const spendero8GMcaa = accounts[1]
		const ownermlpuLKi = accounts[0]
		const valueeDy9AJQ = BigInt("1846")
		const tor8IcGy7 = accounts[4]
		const fromSuGru72 = accounts[2]
		const valueAdXg3v = BigInt("406")
		const spenderXPKJW7w = accounts[2]
		const addedValuezB10ISf = BigInt("1592")
		const spenderbRuypsN = accounts[5]
		const valueZoRcU4G = BigInt("1003")
		const spenderq4F7b1A = accounts[5]
		const nullEisCXeF = await contractmsXbtrx.transferFrom.call(fromGDQvkwR, tosZWAMOk, valueYIfgEXd, {from: accounts[0]});
		const nulldhIKq2k = await contractmsXbtrx.allowance.call(ownermlpuLKi, spendero8GMcaa, {from: accounts[2]});
		const nullQ3wDA88 = await contractmsXbtrx.transferFrom.call(fromSuGru72, tor8IcGy7, valueeDy9AJQ, {from: accounts[2]});
		const nullVAbkynj = await contractmsXbtrx.approve.call(spenderXPKJW7w, valueAdXg3v, {from: accounts[1]});
		const nullkoN7Nm6 = await contractmsXbtrx.increaseAllowance.call(spenderbRuypsN, addedValuezB10ISf, {from: accounts[0]});
		const null2JeuFl = await contractmsXbtrx.approve.call(spenderq4F7b1A, valueZoRcU4G, {from: accounts[4]});
	});

	it('test for ERC20', async () => {
		const contractvuusUnU = await ERC20.new({from: accounts[4]});
		const addedValueTB6NFqQ = BigInt("675")
		const spenderual2CjY = accounts[4]
		const spender1gOzZR = accounts[3]
		const ownerSnN1BWw = accounts[1]
		const ownerphgHOGG = accounts[3]
		const valueeQiEcPm = BigInt("1222")
		const toiuSVJbl = accounts[3]
		const nullO1eu3j6 = await contractvuusUnU.increaseAllowance.call(spenderual2CjY, addedValueTB6NFqQ, {from: accounts[3]});
		const nullQdck0sF = await contractvuusUnU.allowance.call(ownerSnN1BWw, spender1gOzZR, {from: accounts[5]});
		const nullepS8Nd = await contractvuusUnU.balanceOf.call(ownerphgHOGG, {from: accounts[4]});
		const nullVdUV7Gi = await contractvuusUnU.transfer.call(toiuSVJbl, valueeQiEcPm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullO1eu3j6, true)
		assert.equal(nullQdck0sF, 0)
		assert.equal(nullepS8Nd, 0)
		await expect(contractvuusUnU.transfer.call(toiuSVJbl, valueeQiEcPm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})