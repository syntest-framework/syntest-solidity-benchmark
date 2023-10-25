const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractv1gBvO = await ERC20.new({from: accounts[1]});
		const valuetrkl0xS = BigInt("50")
		const toIyNctiF = accounts[3]
		const fromiCXYE8d = accounts[3]
		const addedValuer1PDJmO = BigInt("1478")
		const spenderpqkaJe2 = "0x0000000000000000000000000000000000000001"
		const valueQF36pZs = BigInt("1620")
		const spenderPKlryZ = accounts[0]
		const nullxLjOpD = await contractv1gBvO.transferFrom.call(fromiCXYE8d, toIyNctiF, valuetrkl0xS, {from: accounts[5]});
		const nullFSFFoKt = await contractv1gBvO.increaseAllowance.call(spenderpqkaJe2, addedValuer1PDJmO, {from: accounts[0]});
		const nullIpqVaYI = await contractv1gBvO.approve.call(spenderPKlryZ, valueQF36pZs, {from: accounts[1]});

		await expect(contractv1gBvO.transferFrom.call(fromiCXYE8d, toIyNctiF, valuetrkl0xS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractczEmIXW = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerLyubE5w = accounts[3]
		const valuesT9S33R = BigInt("1643")
		const toji1MWyR = accounts[1]
		const valuein9tR0p = BigInt("1794")
		const toOlhs3Ic = accounts[0]
		const fromx9e3fRC = accounts[0]
		const ownerI4Vl7rK = accounts[5]
		const nullvafIbOj = await contractczEmIXW.balanceOf.call(ownerLyubE5w, {from: accounts[2]});
		const nullhO1evGL = await contractczEmIXW.transfer.call(toji1MWyR, valuesT9S33R, {from: accounts[4]});
		const nullmYF5yim = await contractczEmIXW.transferFrom.call(fromx9e3fRC, toOlhs3Ic, valuein9tR0p, {from: accounts[3]});
		const nullZPDkDnB = await contractczEmIXW.balanceOf.call(ownerI4Vl7rK, {from: accounts[3]});
	});

	it('test for ERC20', async () => {
		const contractqcGygW = await ERC20.new({from: accounts[5]});
		const spenderJT0MLrB = accounts[3]
		const ownerwvxy25 = accounts[3]
		const valueUJP2gS6 = BigInt("1791")
		const spenderrovIPJM = accounts[2]
		const owneronsWjBU = accounts[1]
		const subtractedValueWFiOptA = BigInt("888")
		const spenderPsvQgJc = accounts[2]
		const ownerJIIAYa = accounts[0]
		const nullRKeun5A = await contractqcGygW.allowance.call(ownerwvxy25, spenderJT0MLrB, {from: "0x0000000000000000000000000000000000000001"});
		const nulleezBcBt = await contractqcGygW.approve.call(spenderrovIPJM, valueUJP2gS6, {from: accounts[4]});
		const nulloUJIkv1 = await contractqcGygW.totalSupply.call({from: accounts[1]});
		const nulljk5JGaZ = await contractqcGygW.balanceOf.call(owneronsWjBU, {from: accounts[1]});
		const nullFmVo9Ce = await contractqcGygW.decreaseAllowance.call(spenderPsvQgJc, subtractedValueWFiOptA, {from: "0x0000000000000000000000000000000000000001"});
		const nulliAZZtKJ = await contractqcGygW.balanceOf.call(ownerJIIAYa, {from: accounts[2]});

		assert.equal(nullRKeun5A, 0)
		assert.equal(nulleezBcBt, true)
		assert.equal(nulljk5JGaZ, 0)
		assert.equal(nulloUJIkv1, 0)
		await expect(contractqcGygW.decreaseAllowance.call(spenderPsvQgJc, subtractedValueWFiOptA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractw20xJnJ = await ERC20.new({from: accounts[2]});
		const spenderXxaVTvT = "0x0000000000000000000000000000000000000001"
		const ownerlwurLiU = accounts[4]
		const addedValuejowd96J = BigInt("1063")
		const spenderXt8cFxV = accounts[1]
		const valuekdyUCM2 = BigInt("521")
		const toEn9Mnb = accounts[0]
		const fromuHl8nkV = accounts[0]
		const valuerRf650F = BigInt("1790")
		const toC62evgD = accounts[0]
		const spenderHd83jfz = accounts[2]
		const ownerB2LNPmI = accounts[0]
		const nullAUQ4vZz = await contractw20xJnJ.allowance.call(ownerlwurLiU, spenderXxaVTvT, {from: accounts[3]});
		const nullOGnL2m = await contractw20xJnJ.increaseAllowance.call(spenderXt8cFxV, addedValuejowd96J, {from: accounts[2]});
		const null7ZSiwn = await contractw20xJnJ.transferFrom.call(fromuHl8nkV, toEn9Mnb, valuekdyUCM2, {from: accounts[0]});
		const nullae87ky9 = await contractw20xJnJ.transfer.call(toC62evgD, valuerRf650F, {from: accounts[2]});
		const nullQq724u = await contractw20xJnJ.allowance.call(ownerB2LNPmI, spenderHd83jfz, {from: accounts[1]});

		assert.equal(nullAUQ4vZz, 0)
		assert.equal(nullOGnL2m, true)
		await expect(contractw20xJnJ.transferFrom.call(fromuHl8nkV, toEn9Mnb, valuekdyUCM2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractFqrzoJ0 = await ERC20.new({from: accounts[0]});
		const valuevv73oe2 = BigInt("596")
		const tonYwqBfv = accounts[1]
		const valueXSLXDgH = BigInt("1716")
		const toKCCdwTL = accounts[3]
		const fromWKF3kHs = accounts[3]
		const addedValueWRCmRJ3 = BigInt("1807")
		const spendertAs62y5 = accounts[0]
		const addedValueBavv5Yb = BigInt("1111")
		const spenderPSUyOSy = accounts[4]
		const spenderwzYELLB = accounts[3]
		const ownereKlmKBM = accounts[2]
		const nullqsFPDB = await contractFqrzoJ0.transfer.call(tonYwqBfv, valuevv73oe2, {from: accounts[0]});
		const nullLFJFj30 = await contractFqrzoJ0.transferFrom.call(fromWKF3kHs, toKCCdwTL, valueXSLXDgH, {from: accounts[4]});
		const nulli94BShb = await contractFqrzoJ0.increaseAllowance.call(spendertAs62y5, addedValueWRCmRJ3, {from: "0x0000000000000000000000000000000000000001"});
		const nullJxFz1ED = await contractFqrzoJ0.increaseAllowance.call(spenderPSUyOSy, addedValueBavv5Yb, {from: accounts[5]});
		const nullyAScIf6 = await contractFqrzoJ0.allowance.call(ownereKlmKBM, spenderwzYELLB, {from: accounts[1]});

		await expect(contractFqrzoJ0.transfer.call(tonYwqBfv, valuevv73oe2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})