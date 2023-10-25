const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractKc40JVU = await ERC20.new({from: accounts[3]});
		const addedValue31fzY8 = BigInt("1531")
		const spenderxo6k0w = accounts[2]
		const valuepKe5iS0 = BigInt("285")
		const spenderQ2kRIma = accounts[2]
		const valuen1fucpD = BigInt("1826")
		const spenderFHK7tf2 = accounts[3]
		const spenderySgFZht = "0x0000000000000000000000000000000000000001"
		const ownerwKCEtyG = accounts[4]
		const subtractedValueRQjuwhs = BigInt("542")
		const spenderfTg5diR = accounts[0]
		const nullBDiyTnk = await contractKc40JVU.increaseAllowance.call(spenderxo6k0w, addedValue31fzY8, {from: accounts[2]});
		const nullDlyNWqT = await contractKc40JVU.approve.call(spenderQ2kRIma, valuepKe5iS0, {from: accounts[2]});
		const nulljYKIJ85 = await contractKc40JVU.approve.call(spenderFHK7tf2, valuen1fucpD, {from: accounts[0]});
		const nulljSBWJkY = await contractKc40JVU.allowance.call(ownerwKCEtyG, spenderySgFZht, {from: accounts[2]});
		const nullDGtfZx0 = await contractKc40JVU.decreaseAllowance.call(spenderfTg5diR, subtractedValueRQjuwhs, {from: accounts[3]});

		assert.equal(nullBDiyTnk, true)
		assert.equal(nullDlyNWqT, true)
		assert.equal(nulljSBWJkY, 0)
		assert.equal(nulljYKIJ85, true)
		await expect(contractKc40JVU.decreaseAllowance.call(spenderfTg5diR, subtractedValueRQjuwhs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractmzA8HsQ = await ERC20.new({from: accounts[2]});
		const valueexYCh94 = BigInt("1768")
		const tonR7iUPC = accounts[4]
		const fromJDQcTd = accounts[2]
		const valueo8lC4vH = BigInt("1976")
		const toNDVsBaE = "0x0000000000000000000000000000000000000001"
		const fromI0GPBCL = accounts[4]
		const subtractedValuecT41q6w = BigInt("1461")
		const spenderlSZCbug = accounts[1]
		const nullgoTLuE3 = await contractmzA8HsQ.transferFrom.call(fromJDQcTd, tonR7iUPC, valueexYCh94, {from: accounts[2]});
		const nullOwCkjuw = await contractmzA8HsQ.transferFrom.call(fromI0GPBCL, toNDVsBaE, valueo8lC4vH, {from: accounts[3]});
		const nulldEuJi5a = await contractmzA8HsQ.decreaseAllowance.call(spenderlSZCbug, subtractedValuecT41q6w, {from: accounts[5]});

		await expect(contractmzA8HsQ.transferFrom.call(fromJDQcTd, tonR7iUPC, valueexYCh94, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractnMP1XUH = await ERC20.new({from: accounts[5]});
		const valueHTH1Jv = BigInt("1984")
		const spenderA3Woxlj = accounts[3]
		const ownerOUXamg = accounts[1]
		const valueR2Jg2Vw = BigInt("644")
		const touoS0l8u = accounts[4]
		const valueF5xtpso = BigInt("1063")
		const touPaQkMG = accounts[4]
		const nullxvdiPyR = await contractnMP1XUH.approve.call(spenderA3Woxlj, valueHTH1Jv, {from: accounts[0]});
		const nullgL2nb2K = await contractnMP1XUH.balanceOf.call(ownerOUXamg, {from: accounts[2]});
		const nullzoC8WfN = await contractnMP1XUH.transfer.call(touoS0l8u, valueR2Jg2Vw, {from: accounts[2]});
		const nullIu0Rw9W = await contractnMP1XUH.transfer.call(touPaQkMG, valueF5xtpso, {from: accounts[3]});

		assert.equal(nullgL2nb2K, 0)
		assert.equal(nullxvdiPyR, true)
		await expect(contractnMP1XUH.transfer.call(touoS0l8u, valueR2Jg2Vw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractA7sVo98 = await ERC20.new({from: accounts[0]});
		const addedValueG0G1bQw = BigInt("1044")
		const spenderu4GCLuB = accounts[2]
		const valueCKB1sDx = BigInt("60")
		const spenderT1hVtJM = accounts[3]
		const valuem5ak9tL = BigInt("1283")
		const toTx12Sk8 = "0x0000000000000000000000000000000000000001"
		const frommW7YzH = accounts[4]
		const nullB54e26e = await contractA7sVo98.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const nullSdfOzgX = await contractA7sVo98.increaseAllowance.call(spenderu4GCLuB, addedValueG0G1bQw, {from: accounts[4]});
		const nullS8e7np = await contractA7sVo98.approve.call(spenderT1hVtJM, valueCKB1sDx, {from: accounts[0]});
		const nullnwMufJP = await contractA7sVo98.transferFrom.call(frommW7YzH, toTx12Sk8, valuem5ak9tL, {from: accounts[0]});

		assert.equal(nullB54e26e, 0)
		assert.equal(nullS8e7np, true)
		assert.equal(nullSdfOzgX, true)
		await expect(contractA7sVo98.transferFrom.call(frommW7YzH, toTx12Sk8, valuem5ak9tL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractPk7kajs = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValueVOYbfm9 = BigInt("498")
		const spendersnqDtuq = accounts[2]
		const valuepP8A5oI = BigInt("698")
		const tonnsUl8a = accounts[2]
		const fromsfBkGx = "0x0000000000000000000000000000000000000001"
		const spenderIv3vpFo = accounts[2]
		const ownerUQQxepC = accounts[1]
		const valueSDQI0vF = BigInt("293")
		const toWx2D5ES = accounts[0]
		const frommFLvn5k = accounts[1]
		const addedValuexjvrC49 = BigInt("1520")
		const spendersu2GG6y = "0x0000000000000000000000000000000000000001"
		const nullYoHWNHv = await contractPk7kajs.increaseAllowance.call(spendersnqDtuq, addedValueVOYbfm9, {from: accounts[0]});
		const nulln311Zto = await contractPk7kajs.transferFrom.call(fromsfBkGx, tonnsUl8a, valuepP8A5oI, {from: accounts[4]});
		const nulllSQACkT = await contractPk7kajs.allowance.call(ownerUQQxepC, spenderIv3vpFo, {from: accounts[4]});
		const nullwOs0ax9 = await contractPk7kajs.transferFrom.call(frommFLvn5k, toWx2D5ES, valueSDQI0vF, {from: "0x0000000000000000000000000000000000000001"});
		const nullPLKBcpi = await contractPk7kajs.increaseAllowance.call(spendersu2GG6y, addedValuexjvrC49, {from: accounts[0]});
	});
})