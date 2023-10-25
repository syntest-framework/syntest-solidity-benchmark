const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractUOIEes1 = await IERC20.new({from: accounts[2]});
		const amountE6r6Dyj = BigInt("765")
		const spenderOKPOOcH = accounts[3]
		const amountwUOqyeM = BigInt("1261")
		const recipientk8tB5xu = accounts[2]
		const spenderLbxlNBK = accounts[5]
		const ownerGViILV = accounts[4]
		const spenderG8AIL0Q = accounts[4]
		const ownerbgyjS86 = accounts[3]
		const amounttKFZfaJ = BigInt("1832")
		const recipientQ23QqxZ = accounts[1]
		const senderiSBirEZ = accounts[1]
		const nullwhhfGZ = await contractUOIEes1.approve.call(spenderOKPOOcH, amountE6r6Dyj, {from: accounts[2]});
		const nullATxBsx = await contractUOIEes1.transfer.call(recipientk8tB5xu, amountwUOqyeM, {from: "0x0000000000000000000000000000000000000001"});
		const nulllPMQBOd = await contractUOIEes1.allowance.call(ownerGViILV, spenderLbxlNBK, {from: accounts[4]});
		const nullTpn62Ll = await contractUOIEes1.allowance.call(ownerbgyjS86, spenderG8AIL0Q, {from: accounts[1]});
		const nullht57Ltp = await contractUOIEes1.transferFrom.call(senderiSBirEZ, recipientQ23QqxZ, amounttKFZfaJ, {from: accounts[2]});
		const nulloeZW4mA = await contractUOIEes1.totalSupply.call({from: accounts[0]});
	});
})