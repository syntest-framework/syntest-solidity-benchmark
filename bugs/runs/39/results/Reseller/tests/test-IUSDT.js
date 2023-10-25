const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractYeIU32U = await IUSDT.new({from: accounts[4]});
		const accountM6Crb2l = accounts[0]
		const accountrKEdNm = accounts[2]
		const spenderS7zZKj = accounts[1]
		const owner3TNTKz = accounts[4]
		const amountqkQNoi3 = BigInt("685")
		const recipientEydNgNG = accounts[0]
		const sendersAu82l7 = accounts[4]
		const accountdimWiSO = accounts[3]
		const spenderOVwAw1c = accounts[2]
		const ownerY0jDbh8 = accounts[1]
		const nullyAQVd0A = await contractYeIU32U.balanceOf.call(accountM6Crb2l, {from: accounts[0]});
		const nullGeMaI2E = await contractYeIU32U.balanceOf.call(accountrKEdNm, {from: accounts[5]});
		const nully2O7T0J = await contractYeIU32U.allowance.call(owner3TNTKz, spenderS7zZKj, {from: accounts[2]});
		await contractYeIU32U.transferFrom.call(sendersAu82l7, recipientEydNgNG, amountqkQNoi3, {from: accounts[4]});
		const nullPJe8TQ5 = await contractYeIU32U.balanceOf.call(accountdimWiSO, {from: accounts[0]});
		const nullSmeTN69 = await contractYeIU32U.allowance.call(ownerY0jDbh8, spenderOVwAw1c, {from: accounts[1]});
	});
})