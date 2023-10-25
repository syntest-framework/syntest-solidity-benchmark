const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractbawXL9Y = await IERC20.new({from: accounts[0]});
		const valuenhO1UD9 = BigInt("1684")
		const fromkGczZzK = accounts[4]
		const periodc0mRsrC = BigInt("719")
		const amountfZFHobs = BigInt("1809")
		const recipientp9NYOaY = accounts[5]
		const valueq6l0eSh = BigInt("294")
		const tokju4XKS = accounts[5]
		const whoQbZU9FM = accounts[0]
		const whoRGUT911 = accounts[4]
		const nullZ3UIWP5 = await contractbawXL9Y.totalSupply.call({from: accounts[5]});
		await contractbawXL9Y.burnFrom.call(fromkGczZzK, valuenhO1UD9, {from: accounts[2]});
		await contractbawXL9Y.freezeAndTransfer.call(recipientp9NYOaY, amountfZFHobs, periodc0mRsrC, {from: accounts[1]});
		const nulleewZaPt = await contractbawXL9Y.transfer.call(tokju4XKS, valueq6l0eSh, {from: accounts[0]});
		const nullOfUHCqi = await contractbawXL9Y.balanceOf.call(whoQbZU9FM, {from: accounts[4]});
		const nullyKfBLNN = await contractbawXL9Y.balanceOf.call(whoRGUT911, {from: accounts[2]});
	});
})