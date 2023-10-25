const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractrHrYmgw = await IERC721.new({from: accounts[1]});
		const tokenIdrsjYk0p = BigInt("754")
		const tokenIdQZvxuqS = BigInt("849")
		const tokenIdK8Mp8xf = BigInt("1882")
		const ownergYZyedY = accounts[0]
		const tokenIddOSLEEs = BigInt("46")
		const operatorBrefD6l = await contractrHrYmgw.getApproved.call(tokenIdrsjYk0p, {from: accounts[1]});
		const operatorz8tfACh = await contractrHrYmgw.getApproved.call(tokenIdQZvxuqS, {from: accounts[2]});
		const operatorx8c710D = await contractrHrYmgw.getApproved.call(tokenIdK8Mp8xf, {from: accounts[1]});
		const balancet31vHJn = await contractrHrYmgw.balanceOf.call(ownergYZyedY, {from: accounts[4]});
		const operatorydfVcXZ = await contractrHrYmgw.getApproved.call(tokenIddOSLEEs, {from: accounts[2]});
	});
})