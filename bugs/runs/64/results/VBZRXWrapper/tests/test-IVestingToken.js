const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contracttfBZoPb = await IVestingToken.new({from: accounts[5]});
		const _owner2hplUW = accounts[2]
		const _ownerQRbwIMU = accounts[1]
		const _ownerRD2g70 = accounts[5]
		const _ownerOIQMZdD = accounts[4]
		const nulliZ9dLbh = await contracttfBZoPb.vestedBalanceOf.call(_owner2hplUW, {from: accounts[0]});
		const nullWNDPdRS = await contracttfBZoPb.vestedBalanceOf.call(_ownerQRbwIMU, {from: accounts[1]});
		const nullJiGno2l = await contracttfBZoPb.claimedBalanceOf.call(_ownerRD2g70, {from: accounts[3]});
		const nullAcyy4rn = await contracttfBZoPb.vestedBalanceOf.call(_ownerOIQMZdD, {from: accounts[2]});
	});
})