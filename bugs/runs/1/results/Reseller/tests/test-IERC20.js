const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractIWhCHpl = await IERC20.new({from: accounts[0]});
		const valueXghQ5ES = BigInt("975")
		const toIfK9Ku4 = accounts[0]
		const valueTLgMibr = BigInt("1764")
		const toNHK48UD = accounts[1]
		const fromSYIJfcO = accounts[4]
		const spenderL54RXRy = "0x0000000000000000000000000000000000000001"
		const owneroCCujGQ = accounts[0]
		const valueGY3mQD = BigInt("894")
		const toDt7gRL9 = accounts[5]
		const valueeKrqC1a = BigInt("1638")
		const fromw4FHvlJ = accounts[2]
		const nullmakpRLu = await contractIWhCHpl.transfer.call(toIfK9Ku4, valueXghQ5ES, {from: accounts[0]});
		const nullticdyod = await contractIWhCHpl.transferFrom.call(fromSYIJfcO, toNHK48UD, valueTLgMibr, {from: accounts[1]});
		const nullAUSNHfC = await contractIWhCHpl.allowance.call(owneroCCujGQ, spenderL54RXRy, {from: accounts[2]});
		const nullxfrrkqY = await contractIWhCHpl.mint.call(toDt7gRL9, valueGY3mQD, {from: accounts[4]});
		await contractIWhCHpl.burnFrom.call(fromw4FHvlJ, valueeKrqC1a, {from: accounts[2]});
	});
})