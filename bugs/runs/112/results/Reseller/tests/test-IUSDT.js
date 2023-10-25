const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractGLStXO2 = await IUSDT.new({from: accounts[1]});
		const spendergATQFcD = accounts[1]
		const owneryljDOvg = accounts[0]
		const amountHfBoa7X = BigInt("335")
		const recipientg92Gvb7 = "0x0000000000000000000000000000000000000001"
		const senderWAYJ6sL = accounts[1]
		const amountamYCE2R = BigInt("70")
		const spendermlZzyUl = accounts[1]
		const accountf9WmQza = accounts[4]
		const nullccdf2Qj = await contractGLStXO2.allowance.call(owneryljDOvg, spendergATQFcD, {from: accounts[0]});
		await contractGLStXO2.transferFrom.call(senderWAYJ6sL, recipientg92Gvb7, amountHfBoa7X, {from: accounts[2]});
		await contractGLStXO2.approve.call(spendermlZzyUl, amountamYCE2R, {from: accounts[0]});
		const nullrdn4PzQ = await contractGLStXO2.balanceOf.call(accountf9WmQza, {from: accounts[3]});
	});
})