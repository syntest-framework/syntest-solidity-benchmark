const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractrIvlpPx = await IERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdSlXH38 = BigInt("1266")
		const operatormwbh2Vb = accounts[2]
		const ownergpCSi4R = accounts[3]
		const _approvedF3za5LI = false
		const operatorAfhDeM = accounts[1]
		const tokenIdybb3b1P = BigInt("1982")
		const datakUOPHIS = "0x04091918161c0d1a1e1906170d0b1c0308190c1d071d06160a061e07"
		const tokenIdpwKC6Df = BigInt("308")
		const toqqaHs1i = accounts[0]
		const fromp3980nF = accounts[0]
		const operatorOvxLn3n = await contractrIvlpPx.getApproved.call(tokenIdSlXH38, {from: accounts[2]});
		const null5gKFzN = await contractrIvlpPx.isApprovedForAll.call(ownergpCSi4R, operatormwbh2Vb, {from: accounts[3]});
		await contractrIvlpPx.setApprovalForAll.call(operatorAfhDeM, _approvedF3za5LI, {from: accounts[2]});
		const ownera2zuFyF = await contractrIvlpPx.ownerOf.call(tokenIdybb3b1P, {from: accounts[5]});
		await contractrIvlpPx.safeTransferFrom.call(fromp3980nF, toqqaHs1i, tokenIdpwKC6Df, datakUOPHIS, {from: accounts[1]});
	});
})