const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractiX4e2u = await IERC20.new({from: accounts[0]});
		const valueVsGazP = BigInt("115")
		const spenderATnXoc = accounts[4]
		const whor7WGZZR = accounts[0]
		const spendereCs0Zzr = accounts[4]
		const ownerJBMlhOX = accounts[0]
		const nullsZPYCKU = await contractiX4e2u.approve.call(spenderATnXoc, valueVsGazP, {from: accounts[0]});
		const nullq4WdfGC = await contractiX4e2u.balanceOf.call(whor7WGZZR, {from: accounts[2]});
		const nullgnJULm = await contractiX4e2u.allowance.call(ownerJBMlhOX, spendereCs0Zzr, {from: accounts[1]});
	});
})