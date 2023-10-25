const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractPJxWul4 = await IERC721.new({from: accounts[3]});
		const _approved5peAf9 = true
		const operatorzv7wfNT = accounts[4]
		const tokenIdcKobwj = BigInt("1089")
		const tokenIdaCc2sCy = BigInt("1319")
		const toLsgKNP3 = accounts[2]
		const frompXPY2k = accounts[1]
		const operatorZV3SLQo = accounts[2]
		const ownerY3Kjyfu = accounts[4]
		await contractPJxWul4.setApprovalForAll.call(operatorzv7wfNT, _approved5peAf9, {from: "0x0000000000000000000000000000000000000001"});
		const ownerYFUQHf3 = await contractPJxWul4.ownerOf.call(tokenIdcKobwj, {from: accounts[1]});
		await contractPJxWul4.transferFrom.call(frompXPY2k, toLsgKNP3, tokenIdaCc2sCy, {from: accounts[0]});
		const nullAOx0wFe = await contractPJxWul4.isApprovedForAll.call(ownerY3Kjyfu, operatorZV3SLQo, {from: accounts[4]});
	});
})