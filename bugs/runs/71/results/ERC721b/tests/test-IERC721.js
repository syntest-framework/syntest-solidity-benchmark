const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractSWCuOa = await IERC721.new({from: accounts[2]});
		const tokenIdXDXL3e0 = BigInt("111")
		const to5yc4IF = accounts[0]
		const fromSd0MbSH = accounts[4]
		const ownerZF8ji6a = accounts[2]
		const _approvedguTtgSk = true
		const operatorU7it4P = accounts[5]
		await contractSWCuOa.safeTransferFrom.call(fromSd0MbSH, to5yc4IF, tokenIdXDXL3e0, {from: accounts[1]});
		const balancePp7i3M5 = await contractSWCuOa.balanceOf.call(ownerZF8ji6a, {from: accounts[0]});
		await contractSWCuOa.setApprovalForAll.call(operatorU7it4P, _approvedguTtgSk, {from: "0x0000000000000000000000000000000000000001"});
	});
})