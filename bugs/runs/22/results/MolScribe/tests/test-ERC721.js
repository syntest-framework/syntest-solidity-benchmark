const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractH90vQSy = await ERC721.new({from: accounts[1]});
		const tokenIdPKyTg70 = BigInt("1071")
		const operatorFre56uk = accounts[4]
		const ownerpOHYn5e = accounts[1]
		const nullrZroibG = await contractH90vQSy.getApproved.call(tokenIdPKyTg70, {from: accounts[4]});
		const nullkihms3u = await contractH90vQSy.isApprovedForAll.call(ownerpOHYn5e, operatorFre56uk, {from: accounts[1]});

		await expect(contractH90vQSy.getApproved.call(tokenIdPKyTg70, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracto99sK3 = await ERC721.new({from: accounts[3]});
		const _datain99W4l = "0x0e08091304181809051b0d03170e19010e1a"
		const tokenIdVyr4Tfj = BigInt("1003")
		const tokYhvKXu = accounts[5]
		const fromm62bIk4 = accounts[2]
		const approvedNgmlv4k = false
		const toSf4qJkV = accounts[3]
		const ownerVQsDUAS = accounts[3]
		const tokenIdGSM3OG0 = BigInt("1084")
		await contracto99sK3.safeTransferFrom.call(fromm62bIk4, tokYhvKXu, tokenIdVyr4Tfj, _datain99W4l, {from: accounts[4]});
		await contracto99sK3.setApprovalForAll.call(toSf4qJkV, approvedNgmlv4k, {from: accounts[5]});
		const nullpkYtxdo = await contracto99sK3.balanceOf.call(ownerVQsDUAS, {from: accounts[4]});
		const nullP1Veh0s = await contracto99sK3.getApproved.call(tokenIdGSM3OG0, {from: accounts[0]});

		await expect(contracto99sK3.safeTransferFrom.call(fromm62bIk4, tokYhvKXu, tokenIdVyr4Tfj, _datain99W4l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractEir6VLE = await ERC721.new({from: accounts[0]});
		const tokenIdLOvmybx = BigInt("1260")
		const toHbYrF3E = accounts[2]
		const tokenIdUOy54C = BigInt("182")
		const toyaMPTzh = accounts[0]
		const fromvUZQANN = "0x0000000000000000000000000000000000000001"
		await contractEir6VLE.approve.call(toHbYrF3E, tokenIdLOvmybx, {from: accounts[5]});
		await contractEir6VLE.transferFrom.call(fromvUZQANN, toyaMPTzh, tokenIdUOy54C, {from: accounts[1]});

		await expect(contractEir6VLE.approve.call(toHbYrF3E, tokenIdLOvmybx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfL6UK4m = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdbUvFF1v = BigInt("27")
		const toKy7PhzL = accounts[3]
		const tokenIdIr5cmzb = BigInt("535")
		const tokenIdNaUFzGr = BigInt("786")
		const toI0nPS2m = accounts[0]
		const fromdHEtrs = accounts[0]
		await contractfL6UK4m.approve.call(toKy7PhzL, tokenIdbUvFF1v, {from: accounts[4]});
		const nulltrTHPT = await contractfL6UK4m.ownerOf.call(tokenIdIr5cmzb, {from: accounts[2]});
		await contractfL6UK4m.safeTransferFrom.call(fromdHEtrs, toI0nPS2m, tokenIdNaUFzGr, {from: accounts[5]});
	});

	it('test for ERC721', async () => {
		const contractQMcnlZK = await ERC721.new({from: accounts[1]});
		const approvedKk5ufy1 = true
		const toMBI1OLR = accounts[1]
		const tokenIdj1U4u32 = BigInt("1223")
		const toBS5ae8 = accounts[3]
		const tokenIdHj8Nctz = BigInt("407")
		const tokenIdSzVEtlm = BigInt("520")
		const to1aiYh7 = accounts[3]
		const tokenIdW2y70lQ = BigInt("302")
		const toOI0OKIU = accounts[0]
		const fromWzCZvn4 = accounts[4]
		const ownerTyMivx = accounts[0]
		await contractQMcnlZK.setApprovalForAll.call(toMBI1OLR, approvedKk5ufy1, {from: accounts[1]});
		await contractQMcnlZK.approve.call(toBS5ae8, tokenIdj1U4u32, {from: accounts[0]});
		const nullBJLvJFr = await contractQMcnlZK.getApproved.call(tokenIdHj8Nctz, {from: accounts[2]});
		await contractQMcnlZK.approve.call(to1aiYh7, tokenIdSzVEtlm, {from: accounts[5]});
		await contractQMcnlZK.transferFrom.call(fromWzCZvn4, toOI0OKIU, tokenIdW2y70lQ, {from: accounts[0]});
		const nullOwzbpB7 = await contractQMcnlZK.balanceOf.call(ownerTyMivx, {from: accounts[0]});

		await expect(contractQMcnlZK.setApprovalForAll.call(toMBI1OLR, approvedKk5ufy1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})