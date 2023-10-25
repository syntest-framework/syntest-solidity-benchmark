const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractUa1AAiV = await ERC20.new({from: accounts[3]});
		const valueMWv5do9 = BigInt("1637")
		const spenderTrEcN2L = accounts[1]
		const valuegCMtRbX = BigInt("523")
		const toSBflSCc = accounts[4]
		const ownerMRn5qPT = "0x0000000000000000000000000000000000000001"
		const valueX13nCGT = BigInt("675")
		const spenderHl5LWII = accounts[4]
		const nullMsHeVjW = await contractUa1AAiV.totalSupply.call({from: accounts[2]});
		const nullPuUnHzs = await contractUa1AAiV.approve.call(spenderTrEcN2L, valueMWv5do9, {from: accounts[0]});
		const nullyDcjJ9O = await contractUa1AAiV.transfer.call(toSBflSCc, valuegCMtRbX, {from: accounts[2]});
		const nulliQsrmO = await contractUa1AAiV.balanceOf.call(ownerMRn5qPT, {from: accounts[1]});
		const nullXHJUu3t = await contractUa1AAiV.approve.call(spenderHl5LWII, valueX13nCGT, {from: accounts[5]});

		assert.equal(nullMsHeVjW, 0)
		assert.equal(nullPuUnHzs, true)
		await expect(contractUa1AAiV.transfer.call(toSBflSCc, valuegCMtRbX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractSCIHW9 = await ERC20.new({from: accounts[0]});
		const subtractedValuePWKLren = BigInt("1608")
		const spenderNemXEb = accounts[2]
		const subtractedValueWgtE1l = BigInt("384")
		const spendervM39UQ = accounts[4]
		const spendereya8Vln = accounts[4]
		const ownerdcZhcRO = accounts[3]
		const nullVq7V1ZI = await contractSCIHW9.decreaseAllowance.call(spenderNemXEb, subtractedValuePWKLren, {from: accounts[2]});
		const nullgjWbKmW = await contractSCIHW9.decreaseAllowance.call(spendervM39UQ, subtractedValueWgtE1l, {from: accounts[2]});
		const nullNWXvGsq = await contractSCIHW9.allowance.call(ownerdcZhcRO, spendereya8Vln, {from: accounts[2]});

		await expect(contractSCIHW9.decreaseAllowance.call(spenderNemXEb, subtractedValuePWKLren, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractbU8p6TT = await ERC20.new({from: accounts[3]});
		const addedValueoagWA8g = BigInt("4")
		const spenderayTLfjF = accounts[4]
		const spenderjA1NGuZ = accounts[4]
		const ownercW06A6A = accounts[0]
		const nullwWInCg7 = await contractbU8p6TT.totalSupply.call({from: accounts[2]});
		const nullPmmO9vn = await contractbU8p6TT.totalSupply.call({from: accounts[1]});
		const nully5CgOs8 = await contractbU8p6TT.increaseAllowance.call(spenderayTLfjF, addedValueoagWA8g, {from: accounts[1]});
		const nullN0d2Le6 = await contractbU8p6TT.allowance.call(ownercW06A6A, spenderjA1NGuZ, {from: accounts[0]});

		assert.equal(nullN0d2Le6, 0)
		assert.equal(nullPmmO9vn, 0)
		assert.equal(nullwWInCg7, 0)
		assert.equal(nully5CgOs8, true)
	});

	it('test for ERC20', async () => {
		const contractFfWcfQR = await ERC20.new({from: accounts[3]});
		const addedValueJNajEIE = BigInt("12")
		const spendervxdX1Zj = accounts[4]
		const ownerhbWWU16 = accounts[0]
		const valueMaK6GWA = BigInt("192")
		const ton0Sv5GH = accounts[4]
		const fromAiSMc54 = accounts[5]
		const spenderHJ2VEsJ = accounts[4]
		const ownerd20SzxI = accounts[5]
		const valueyoIQGyG = BigInt("177")
		const toalFvvSD = "0x0000000000000000000000000000000000000001"
		const nullBIjCAZM = await contractFfWcfQR.increaseAllowance.call(spendervxdX1Zj, addedValueJNajEIE, {from: accounts[4]});
		const nullNQN2hGb = await contractFfWcfQR.balanceOf.call(ownerhbWWU16, {from: accounts[4]});
		const nullj8kIXbh = await contractFfWcfQR.transferFrom.call(fromAiSMc54, ton0Sv5GH, valueMaK6GWA, {from: accounts[4]});
		const nullAkAtQ1i = await contractFfWcfQR.allowance.call(ownerd20SzxI, spenderHJ2VEsJ, {from: "0x0000000000000000000000000000000000000001"});
		const nullGuXajpJ = await contractFfWcfQR.transfer.call(toalFvvSD, valueyoIQGyG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullBIjCAZM, true)
		assert.equal(nullNQN2hGb, 0)
		await expect(contractFfWcfQR.transferFrom.call(fromAiSMc54, ton0Sv5GH, valueMaK6GWA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractRFbK584 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuewY0NYRc = BigInt("67")
		const toa3AhhHg = accounts[2]
		const addedValueqRjCimT = BigInt("421")
		const spender7skOxI = accounts[2]
		const nullumCpJ0J = await contractRFbK584.transfer.call(toa3AhhHg, valuewY0NYRc, {from: accounts[4]});
		const nulldFPyERb = await contractRFbK584.increaseAllowance.call(spender7skOxI, addedValueqRjCimT, {from: accounts[3]});
	});
})