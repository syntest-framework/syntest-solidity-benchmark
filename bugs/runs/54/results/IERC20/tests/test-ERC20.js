const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractFhoFATj = await ERC20.new({from: accounts[4]});
		const addedValueaqbN0Ej = BigInt("88")
		const spenderS4gUFdA = accounts[1]
		const valueNE4AtAu = BigInt("1600")
		const spendergdCJ6fg = accounts[2]
		const spenders0iy0j = accounts[0]
		const ownerIZ7gdtz = accounts[3]
		const addedValueKEcJjxf = BigInt("1044")
		const spenderzB8bmrZ = accounts[0]
		const nullA7FSFZS = await contractFhoFATj.increaseAllowance.call(spenderS4gUFdA, addedValueaqbN0Ej, {from: accounts[0]});
		const null6J20pY = await contractFhoFATj.approve.call(spendergdCJ6fg, valueNE4AtAu, {from: accounts[5]});
		const nullH0NLCb = await contractFhoFATj.allowance.call(ownerIZ7gdtz, spenders0iy0j, {from: accounts[1]});
		const nullV10rEI8 = await contractFhoFATj.totalSupply.call({from: accounts[2]});
		const nulloBVrx3j = await contractFhoFATj.increaseAllowance.call(spenderzB8bmrZ, addedValueKEcJjxf, {from: accounts[3]});

		assert.equal(null6J20pY, true)
		assert.equal(nullA7FSFZS, true)
		assert.equal(nullH0NLCb, 0)
		assert.equal(nullV10rEI8, 0)
		assert.equal(nulloBVrx3j, true)
	});

	it('test for ERC20', async () => {
		const contractPdsIM1 = await ERC20.new({from: accounts[2]});
		const spenderwHhOj3y = accounts[4]
		const ownerqBTyGjA = accounts[0]
		const valueMIezkSi = BigInt("964")
		const toIHVDnJw = "0x0000000000000000000000000000000000000001"
		const spenderMtzkbHq = accounts[4]
		const ownerd5rH1bB = accounts[1]
		const nullODWfb5I = await contractPdsIM1.allowance.call(ownerqBTyGjA, spenderwHhOj3y, {from: accounts[5]});
		const nullusnRVhR = await contractPdsIM1.transfer.call(toIHVDnJw, valueMIezkSi, {from: accounts[3]});
		const null3xVQTf = await contractPdsIM1.allowance.call(ownerd5rH1bB, spenderMtzkbHq, {from: accounts[1]});

		assert.equal(nullODWfb5I, 0)
		await expect(contractPdsIM1.transfer.call(toIHVDnJw, valueMIezkSi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractlq1t914 = await ERC20.new({from: accounts[5]});
		const valueLXJFjKQ = BigInt("1109")
		const toBOHpSc7 = "0x0000000000000000000000000000000000000001"
		const fromiavshm = accounts[5]
		const valuexpn1H8M = BigInt("577")
		const toicdFx9w = accounts[0]
		const fromnntU3i = accounts[4]
		const nullWxTzX2g = await contractlq1t914.transferFrom.call(fromiavshm, toBOHpSc7, valueLXJFjKQ, {from: accounts[3]});
		const nulldxWFEB6 = await contractlq1t914.transferFrom.call(fromnntU3i, toicdFx9w, valuexpn1H8M, {from: accounts[2]});

		await expect(contractlq1t914.transferFrom.call(fromiavshm, toBOHpSc7, valueLXJFjKQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractaJHOu6Z = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderwbj2nwB = accounts[1]
		const ownerERgvB6O = accounts[4]
		const valuerqZ4ZN3 = BigInt("563")
		const toPSp1AMQ = accounts[3]
		const fromsOXtTUC = accounts[0]
		const valueh4KYvdJ = BigInt("992")
		const toy8T9d3u = accounts[4]
		const nullyrXeZlZ = await contractaJHOu6Z.allowance.call(ownerERgvB6O, spenderwbj2nwB, {from: accounts[2]});
		const nullNBu9oyQ = await contractaJHOu6Z.transferFrom.call(fromsOXtTUC, toPSp1AMQ, valuerqZ4ZN3, {from: "0x0000000000000000000000000000000000000001"});
		const nullJFh159 = await contractaJHOu6Z.transfer.call(toy8T9d3u, valueh4KYvdJ, {from: accounts[4]});
	});

	it('test for ERC20', async () => {
		const contractBP2LsPu = await ERC20.new({from: accounts[1]});
		const ownerlAIBYg = accounts[5]
		const spenderOuoLGf = accounts[3]
		const ownerZSA7eR = accounts[3]
		const ownerrIlWJyg = accounts[1]
		const addedValueaXt2PaS = BigInt("1963")
		const spendervWJqNnl = accounts[3]
		const nullujqCQn = await contractBP2LsPu.balanceOf.call(ownerlAIBYg, {from: accounts[2]});
		const nullcUGFIn = await contractBP2LsPu.allowance.call(ownerZSA7eR, spenderOuoLGf, {from: accounts[4]});
		const nullIk6NlYI = await contractBP2LsPu.balanceOf.call(ownerrIlWJyg, {from: accounts[2]});
		const nullEnIjZh8 = await contractBP2LsPu.increaseAllowance.call(spendervWJqNnl, addedValueaXt2PaS, {from: accounts[3]});

		assert.equal(nullEnIjZh8, true)
		assert.equal(nullIk6NlYI, 0)
		assert.equal(nullcUGFIn, 0)
		assert.equal(nullujqCQn, 0)
	});

	it('test for ERC20', async () => {
		const contractSXTCDbv = await ERC20.new({from: accounts[2]});
		const subtractedValueZ8y5yWL = BigInt("124")
		const spenderlGwwTji = accounts[3]
		const spendernWkNjJJ = accounts[5]
		const ownerUJr8Azz = accounts[1]
		const nullYLnA7A = await contractSXTCDbv.decreaseAllowance.call(spenderlGwwTji, subtractedValueZ8y5yWL, {from: accounts[2]});
		const nullpCStggJ = await contractSXTCDbv.allowance.call(ownerUJr8Azz, spendernWkNjJJ, {from: accounts[1]});

		await expect(contractSXTCDbv.decreaseAllowance.call(spenderlGwwTji, subtractedValueZ8y5yWL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})