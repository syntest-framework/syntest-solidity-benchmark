const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractakNV7l = await IERC721.new({from: accounts[4]});
		const operatorDupE4XE = "0x0000000000000000000000000000000000000001"
		const ownermUmAM50 = accounts[3]
		const tokenIdfks76L0 = BigInt("1250")
		const operatorCDZBK8j = accounts[5]
		const ownerv3Bjph1 = accounts[2]
		const _approvedopCf09x = true
		const operatorte2T8z0 = accounts[0]
		const nullEkLH7Z0 = await contractakNV7l.isApprovedForAll.call(ownermUmAM50, operatorDupE4XE, {from: accounts[0]});
		const ownerxWexpOm = await contractakNV7l.ownerOf.call(tokenIdfks76L0, {from: accounts[0]});
		const nullIaFrzM9 = await contractakNV7l.isApprovedForAll.call(ownerv3Bjph1, operatorCDZBK8j, {from: accounts[2]});
		await contractakNV7l.setApprovalForAll.call(operatorte2T8z0, _approvedopCf09x, {from: accounts[2]});
	});
})