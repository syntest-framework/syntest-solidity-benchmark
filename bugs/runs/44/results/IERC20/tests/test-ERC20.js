const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractPmqMbHR = await ERC20.new({from: accounts[1]});
		const valueOZn0FVV = BigInt("866")
		const spenderc0lvKWK = accounts[0]
		const valueQQ0iJOu = BigInt("1680")
		const topeanbEu = accounts[4]
		const fromF6zUsbx = accounts[3]
		const spenderB3tp2Dy = accounts[2]
		const ownerCnhEwWk = accounts[3]
		const nullu6BeEUM = await contractPmqMbHR.approve.call(spenderc0lvKWK, valueOZn0FVV, {from: accounts[3]});
		const nullNjpOzcD = await contractPmqMbHR.transferFrom.call(fromF6zUsbx, topeanbEu, valueQQ0iJOu, {from: accounts[2]});
		const nullqjbrVU = await contractPmqMbHR.allowance.call(ownerCnhEwWk, spenderB3tp2Dy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullu6BeEUM, true)
		await expect(contractPmqMbHR.transferFrom.call(fromF6zUsbx, topeanbEu, valueQQ0iJOu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractMiJjQA = await ERC20.new({from: accounts[5]});
		const subtractedValueumQVJx = BigInt("1988")
		const spenderwNXD1Hq = accounts[3]
		const valuem0v6OK5 = BigInt("133")
		const spenderAYsWpI1 = accounts[2]
		const valueJCybcFz = BigInt("293")
		const toqBnOhhx = accounts[3]
		const nullXqUjnRw = await contractMiJjQA.decreaseAllowance.call(spenderwNXD1Hq, subtractedValueumQVJx, {from: accounts[0]});
		const nullLO61Cum = await contractMiJjQA.approve.call(spenderAYsWpI1, valuem0v6OK5, {from: accounts[0]});
		const nullx6CSQM = await contractMiJjQA.transfer.call(toqBnOhhx, valueJCybcFz, {from: accounts[4]});
		const nullSyxbWrE = await contractMiJjQA.totalSupply.call({from: accounts[1]});

		await expect(contractMiJjQA.decreaseAllowance.call(spenderwNXD1Hq, subtractedValueumQVJx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractmmq9WxG = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueNU6VLZr = BigInt("319")
		const spenderUsX3KMD = accounts[0]
		const spenderJ4DBlk = accounts[2]
		const ownerqxlp3l2 = accounts[4]
		const valuewGlrvw = BigInt("534")
		const toZAPNovY = accounts[0]
		const valueOHtOWAt = BigInt("888")
		const toKaMZkG2 = accounts[4]
		const fromQ1iQq4 = accounts[0]
		const nullXj9EiN8 = await contractmmq9WxG.approve.call(spenderUsX3KMD, valueNU6VLZr, {from: "0x0000000000000000000000000000000000000001"});
		const nullX5V9L4j = await contractmmq9WxG.allowance.call(ownerqxlp3l2, spenderJ4DBlk, {from: accounts[2]});
		const nullT4MFWEW = await contractmmq9WxG.totalSupply.call({from: accounts[1]});
		const nullg25Jyq = await contractmmq9WxG.transfer.call(toZAPNovY, valuewGlrvw, {from: accounts[4]});
		const nullbxDatmh = await contractmmq9WxG.transferFrom.call(fromQ1iQq4, toKaMZkG2, valueOHtOWAt, {from: accounts[2]});
	});

	it('test for ERC20', async () => {
		const contractNCOSpb9 = await ERC20.new({from: accounts[2]});
		const spenderTMafb1I = accounts[0]
		const ownergjSIrH = accounts[5]
		const addedValueZGEyyWT = BigInt("728")
		const spenderZj2cy5Q = accounts[1]
		const valueivv0xq = BigInt("1414")
		const spenderrfj6ZXZ = accounts[1]
		const ownerasYm3T = accounts[3]
		const ownerhxPAijN = accounts[1]
		const nullqzw5Dx = await contractNCOSpb9.allowance.call(ownergjSIrH, spenderTMafb1I, {from: accounts[1]});
		const nullXdOj4Yd = await contractNCOSpb9.increaseAllowance.call(spenderZj2cy5Q, addedValueZGEyyWT, {from: accounts[0]});
		const nullXI8AnbU = await contractNCOSpb9.approve.call(spenderrfj6ZXZ, valueivv0xq, {from: accounts[4]});
		const nullNvolMgd = await contractNCOSpb9.balanceOf.call(ownerasYm3T, {from: accounts[1]});
		const nullL4x8uRM = await contractNCOSpb9.balanceOf.call(ownerhxPAijN, {from: accounts[3]});

		assert.equal(nullL4x8uRM, 0)
		assert.equal(nullNvolMgd, 0)
		assert.equal(nullXI8AnbU, true)
		assert.equal(nullXdOj4Yd, true)
		assert.equal(nullqzw5Dx, 0)
	});

	it('test for ERC20', async () => {
		const contractNnGu0SK = await ERC20.new({from: accounts[1]});
		const valueMKXfq06 = BigInt("523")
		const toq4jWtnh = accounts[2]
		const addedValueDLNw3lS = BigInt("862")
		const spenderKniL47 = accounts[0]
		const ownerqKaiVMM = accounts[2]
		const valuefgFS6p7 = BigInt("1622")
		const toMCXxKsJ = accounts[3]
		const fromgkb0Lx = accounts[1]
		const valuelEwANAP = BigInt("1943")
		const tolIA80b7 = accounts[3]
		const spendera18DgJ = "0x0000000000000000000000000000000000000001"
		const ownertUnMppI = accounts[4]
		const null6mO2jS = await contractNnGu0SK.transfer.call(toq4jWtnh, valueMKXfq06, {from: accounts[1]});
		const nullGvv1InY = await contractNnGu0SK.increaseAllowance.call(spenderKniL47, addedValueDLNw3lS, {from: accounts[3]});
		const nullwIBlakC = await contractNnGu0SK.balanceOf.call(ownerqKaiVMM, {from: "0x0000000000000000000000000000000000000001"});
		const nullyh444OU = await contractNnGu0SK.transferFrom.call(fromgkb0Lx, toMCXxKsJ, valuefgFS6p7, {from: accounts[0]});
		const nullpd4eAYS = await contractNnGu0SK.transfer.call(tolIA80b7, valuelEwANAP, {from: accounts[2]});
		const nullsKFw0oL = await contractNnGu0SK.allowance.call(ownertUnMppI, spendera18DgJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractNnGu0SK.transfer.call(toq4jWtnh, valueMKXfq06, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractGyqT5p7 = await ERC20.new({from: accounts[4]});
		const addedValueh0BkTii = BigInt("1307")
		const spenderOCS1pjQ = accounts[1]
		const addedValuegDormWd = BigInt("459")
		const spenderGUyn3e = accounts[2]
		const ownerzgmJysk = accounts[5]
		const spenderBsuDKr = accounts[2]
		const ownerKFd0lkj = accounts[0]
		const valueVJPjm0F = BigInt("1579")
		const spenderaKF9jf = accounts[2]
		const nullIWJWILP = await contractGyqT5p7.increaseAllowance.call(spenderOCS1pjQ, addedValueh0BkTii, {from: accounts[4]});
		const nullCUSilQs = await contractGyqT5p7.increaseAllowance.call(spenderGUyn3e, addedValuegDormWd, {from: accounts[1]});
		const nullcXrOVaQ = await contractGyqT5p7.balanceOf.call(ownerzgmJysk, {from: accounts[3]});
		const nullOmWPllq = await contractGyqT5p7.allowance.call(ownerKFd0lkj, spenderBsuDKr, {from: accounts[0]});
		const nullmaRUZFs = await contractGyqT5p7.approve.call(spenderaKF9jf, valueVJPjm0F, {from: accounts[4]});
		const nullNDeWbk7 = await contractGyqT5p7.totalSupply.call({from: accounts[2]});

		assert.equal(nullCUSilQs, true)
		assert.equal(nullIWJWILP, true)
		assert.equal(nullNDeWbk7, 0)
		assert.equal(nullOmWPllq, 0)
		assert.equal(nullcXrOVaQ, 0)
		assert.equal(nullmaRUZFs, true)
	});
})