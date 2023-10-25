const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeAHw8I0m = await Rootkit_finance.new({from: accounts[2]});
		const uintIXvxiLb = BigInt("1633")
		const addressjed71vv = "0x0000000000000000000000000000000000000001"
		const addressQOjYDph = accounts[2]
		const uintN7sjYwF = BigInt("1166")
		const addressL58qvsA = accounts[2]
		const uintYNS8C9m = BigInt("73")
		const addresswFbizan = accounts[5]
		const uintPZQNMma = BigInt("966")
		const addressYHKX8bd = accounts[3]
		const boolvoGFnLm = await Rootkit_financeAHw8I0m.transferFrom.call(addressQOjYDph, addressjed71vv, uintIXvxiLb, {from: accounts[3]});
		const boolmpDM1w = await Rootkit_financeAHw8I0m.approve.call(addressL58qvsA, uintN7sjYwF, {from: accounts[4]});
		const booloz7GTR = await Rootkit_financeAHw8I0m.approve.call(addresswFbizan, uintYNS8C9m, {from: accounts[4]});
		const boolaVbh7SK = await Rootkit_financeAHw8I0m.transfer.call(addressYHKX8bd, uintPZQNMma, {from: accounts[1]});

		assert.equal(boolaVbh7SK, false)
		assert.equal(boolmpDM1w, true)
		assert.equal(booloz7GTR, true)
		assert.equal(boolvoGFnLm, false)
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeZPwzMvK = await Rootkit_finance.new({from: accounts[0]});
		const uintoKFOcDE = BigInt("1405")
		const addressVA1DGmZ = accounts[2]
		const addressoVKObyO = accounts[0]
		const uintBMrc536 = BigInt("841")
		const addressOUgMJ1 = accounts[2]
		const addressLDb2n5 = accounts[1]
		const addresse7peOPP = accounts[1]
		const uintINZLTpU = BigInt("1246")
		const addressdb2vPFP = accounts[2]
		const addressJ7jWZCm = accounts[3]
		const uintqllDnrq = BigInt("198")
		const addressCxkDLMt = accounts[3]
		const boolfbTcgM = await Rootkit_financeZPwzMvK.transferFrom.call(addressoVKObyO, addressVA1DGmZ, uintoKFOcDE, {from: accounts[4]});
		const uint256cdpZkH6 = await Rootkit_financeZPwzMvK.totalSupply.call({from: accounts[2]});
		const boolj3sbGGU = await Rootkit_financeZPwzMvK.transferFrom.call(addressLDb2n5, addressOUgMJ1, uintBMrc536, {from: accounts[3]});
		const uint256uCUGaiB = await Rootkit_financeZPwzMvK.balanceOf.call(addresse7peOPP, {from: accounts[3]});
		const boolwc7kzg = await Rootkit_financeZPwzMvK.transferFrom.call(addressJ7jWZCm, addressdb2vPFP, uintINZLTpU, {from: accounts[2]});
		const boolwlfwAQr = await Rootkit_financeZPwzMvK.transfer.call(addressCxkDLMt, uintqllDnrq, {from: accounts[2]});

		assert.equal(boolfbTcgM, false)
		assert.equal(boolj3sbGGU, false)
		assert.equal(boolwc7kzg, false)
		assert.equal(boolwlfwAQr, false)
		assert.equal(uint256cdpZkH6, BigInt("10000000000000000000000"))
		assert.equal(uint256uCUGaiB, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeBCMVBT = await Rootkit_finance.new({from: accounts[2]});
		const uintXOOtyFf = BigInt("1113")
		const addressVk5rqmc = accounts[4]
		const addressv2Kfdqp = accounts[0]
		const addressOJcgiR7 = accounts[0]
		const addressnc7onjt = accounts[2]
		const uintp36zd2o = BigInt("664")
		const addressxNnyC9W = accounts[2]
		const addressTCeBSmQ = accounts[5]
		const uint256VOxpK8K = await Rootkit_financeBCMVBT.totalSupply.call({from: accounts[0]});
		const boolOoJ8Daq = await Rootkit_financeBCMVBT.transferFrom.call(addressv2Kfdqp, addressVk5rqmc, uintXOOtyFf, {from: accounts[3]});
		const uintIZONg2M = await Rootkit_financeBCMVBT.allowance.call(addressnc7onjt, addressOJcgiR7, {from: accounts[2]});
		const boolBoJ4y5j = await Rootkit_financeBCMVBT.transferFrom.call(addressTCeBSmQ, addressxNnyC9W, uintp36zd2o, {from: accounts[2]});

		assert.equal(boolBoJ4y5j, false)
		assert.equal(boolOoJ8Daq, false)
		assert.equal(uint256VOxpK8K, BigInt("10000000000000000000000"))
		assert.equal(uintIZONg2M, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financefii55aR = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZvdkkG = BigInt("2015")
		const addressh1zAy1 = accounts[5]
		const addressI8XHi89 = accounts[1]
		const uintn0YlsZv = BigInt("265")
		const addressZQj2EhI = accounts[4]
		const uintaHxLUWg = BigInt("1109")
		const addresshaisQC = "0x0000000000000000000000000000000000000001"
		const addressM2THX44 = accounts[1]
		const uint0EDfjR = BigInt("1608")
		const addressAtG5yus = accounts[3]
		const boolT8pyps = await Rootkit_financefii55aR.transferFrom.call(addressI8XHi89, addressh1zAy1, uintZvdkkG, {from: accounts[3]});
		const boolboLgeZd = await Rootkit_financefii55aR.approve.call(addressZQj2EhI, uintn0YlsZv, {from: accounts[2]});
		const boolE99ZQwI = await Rootkit_financefii55aR.transferFrom.call(addressM2THX44, addresshaisQC, uintaHxLUWg, {from: accounts[2]});
		const boolSEZLuum = await Rootkit_financefii55aR.transfer.call(addressAtG5yus, uint0EDfjR, {from: accounts[3]});
	});
})