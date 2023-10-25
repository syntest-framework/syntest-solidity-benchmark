const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractGu8Weff = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuebLE2zMc = BigInt("349")
		const toDhMEMas = accounts[4]
		const spenderOgkYXIW = accounts[2]
		const ownerI53qUpf = accounts[0]
		const spendernVpHvnV = accounts[1]
		const ownercRElYX8 = accounts[1]
		const nullnCfW7h1 = await contractGu8Weff.transfer.call(toDhMEMas, valuebLE2zMc, {from: "0x0000000000000000000000000000000000000001"});
		const nullql2JaL = await contractGu8Weff.allowance.call(ownerI53qUpf, spenderOgkYXIW, {from: accounts[4]});
		const nullzOxGhZ = await contractGu8Weff.allowance.call(ownercRElYX8, spendernVpHvnV, {from: accounts[1]});
	});

	it('test for ERC20', async () => {
		const contractEguLFxO = await ERC20.new({from: accounts[2]});
		const valueGZ2Bbhj = BigInt("1090")
		const toHeE6LzG = accounts[4]
		const fromhKxVHxR = accounts[5]
		const spenderwpn773R = accounts[3]
		const ownertOr4Zta = accounts[0]
		const addedValuegVBmllZ = BigInt("365")
		const spenderxJQDZK2 = accounts[0]
		const valuePeitPyd = BigInt("1386")
		const toaMRVQ3l = accounts[0]
		const fromgCjv0Ct = accounts[0]
		const owner78Kq3r = accounts[0]
		const nullC02TNz = await contractEguLFxO.transferFrom.call(fromhKxVHxR, toHeE6LzG, valueGZ2Bbhj, {from: accounts[0]});
		const nullX3iXbFZ = await contractEguLFxO.allowance.call(ownertOr4Zta, spenderwpn773R, {from: accounts[2]});
		const nullNrhRZHm = await contractEguLFxO.increaseAllowance.call(spenderxJQDZK2, addedValuegVBmllZ, {from: accounts[3]});
		const nullfbh1UmU = await contractEguLFxO.transferFrom.call(fromgCjv0Ct, toaMRVQ3l, valuePeitPyd, {from: accounts[1]});
		const nulliC54MBO = await contractEguLFxO.balanceOf.call(owner78Kq3r, {from: accounts[4]});

		await expect(contractEguLFxO.transferFrom.call(fromhKxVHxR, toHeE6LzG, valueGZ2Bbhj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractQ0tZu0 = await ERC20.new({from: accounts[3]});
		const valueffNdoS = BigInt("32")
		const spenderG5dTFoV = accounts[4]
		const valueFHR3qOd = BigInt("1026")
		const spenderiLnVcVg = accounts[5]
		const subtractedValueBwwSBZ = BigInt("1129")
		const spenderzB7cqga = accounts[2]
		const addedValuev40e0X7 = BigInt("352")
		const spenderlSlht86 = accounts[4]
		const valueINfH3M8 = BigInt("337")
		const spenderd35iFn6 = accounts[2]
		const nulliQN9JbD = await contractQ0tZu0.approve.call(spenderG5dTFoV, valueffNdoS, {from: accounts[0]});
		const nulljyK2tyG = await contractQ0tZu0.approve.call(spenderiLnVcVg, valueFHR3qOd, {from: accounts[2]});
		const nullH1iQSrI = await contractQ0tZu0.decreaseAllowance.call(spenderzB7cqga, subtractedValueBwwSBZ, {from: accounts[4]});
		const nullvhjRLA = await contractQ0tZu0.increaseAllowance.call(spenderlSlht86, addedValuev40e0X7, {from: accounts[5]});
		const nullYU1FbjY = await contractQ0tZu0.approve.call(spenderd35iFn6, valueINfH3M8, {from: accounts[4]});

		assert.equal(nulliQN9JbD, true)
		assert.equal(nulljyK2tyG, true)
		await expect(contractQ0tZu0.decreaseAllowance.call(spenderzB7cqga, subtractedValueBwwSBZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractnqQN1Nx = await ERC20.new({from: accounts[3]});
		const addedValuelGH4tqc = BigInt("643")
		const spenderdIPSHEW = accounts[1]
		const valueNvJtQjX = BigInt("2014")
		const tofmGFBMM = accounts[3]
		const spenderAaAjKTN = accounts[4]
		const ownerAHCmjz = accounts[3]
		const valuevx7xrNm = BigInt("1344")
		const spenderY5qFV4 = accounts[3]
		const nullXmJPrDo = await contractnqQN1Nx.increaseAllowance.call(spenderdIPSHEW, addedValuelGH4tqc, {from: accounts[5]});
		const nullHB6z7vH = await contractnqQN1Nx.totalSupply.call({from: accounts[3]});
		const nullwrF69XD = await contractnqQN1Nx.transfer.call(tofmGFBMM, valueNvJtQjX, {from: accounts[1]});
		const nulljxQSZPB = await contractnqQN1Nx.allowance.call(ownerAHCmjz, spenderAaAjKTN, {from: accounts[4]});
		const nullBXOyt8M = await contractnqQN1Nx.approve.call(spenderY5qFV4, valuevx7xrNm, {from: accounts[3]});

		assert.equal(nullHB6z7vH, 0)
		assert.equal(nullXmJPrDo, true)
		await expect(contractnqQN1Nx.transfer.call(tofmGFBMM, valueNvJtQjX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractjeNUP27 = await ERC20.new({from: accounts[0]});
		const valuey4nhPl1 = BigInt("1974")
		const spenderyPFFjXl = accounts[0]
		const addedValueqQWJfZc = BigInt("906")
		const spenderf27kLYF = accounts[2]
		const spenderSP1aNJ5 = accounts[1]
		const ownerz059hPj = accounts[1]
		const nullGMLpt8m = await contractjeNUP27.approve.call(spenderyPFFjXl, valuey4nhPl1, {from: accounts[2]});
		const nullrQ4aYge = await contractjeNUP27.increaseAllowance.call(spenderf27kLYF, addedValueqQWJfZc, {from: accounts[0]});
		const nullqAwcOv8 = await contractjeNUP27.allowance.call(ownerz059hPj, spenderSP1aNJ5, {from: accounts[4]});

		assert.equal(nullGMLpt8m, true)
		assert.equal(nullqAwcOv8, 0)
		assert.equal(nullrQ4aYge, true)
	});

	it('test for ERC20', async () => {
		const contractrb26fEK = await ERC20.new({from: accounts[2]});
		const ownerTDdcvDa = accounts[5]
		const ownerLcdXGiO = accounts[0]
		const ownerzDAIrWD = accounts[3]
		const subtractedValueI4wF4o9 = BigInt("1897")
		const spenderYGJZbEC = accounts[3]
		const valuev0fcbq = BigInt("575")
		const spenderDpWVsu = accounts[1]
		const nullYdQiuiQ = await contractrb26fEK.balanceOf.call(ownerTDdcvDa, {from: accounts[4]});
		const nullBBi93j = await contractrb26fEK.balanceOf.call(ownerLcdXGiO, {from: accounts[0]});
		const nulldWhHMn = await contractrb26fEK.balanceOf.call(ownerzDAIrWD, {from: accounts[1]});
		const nullufNTYR = await contractrb26fEK.decreaseAllowance.call(spenderYGJZbEC, subtractedValueI4wF4o9, {from: accounts[1]});
		const nullxVoCpfT = await contractrb26fEK.approve.call(spenderDpWVsu, valuev0fcbq, {from: accounts[2]});

		assert.equal(nullBBi93j, 0)
		assert.equal(nullYdQiuiQ, 0)
		assert.equal(nulldWhHMn, 0)
		await expect(contractrb26fEK.decreaseAllowance.call(spenderYGJZbEC, subtractedValueI4wF4o9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})