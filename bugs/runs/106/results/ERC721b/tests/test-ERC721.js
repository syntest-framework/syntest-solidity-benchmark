const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractoyIex0z = await ERC721.new({from: accounts[2]});
		const tokenIdGm6Wqec = BigInt("1699")
		const tonRh2PFh = accounts[4]
		const fromPSRIVj7 = accounts[3]
		const tokenIdviJtnDs = BigInt("784")
		await contractoyIex0z.transferFrom.call(fromPSRIVj7, tonRh2PFh, tokenIdGm6Wqec, {from: accounts[1]});
		const nullKiiYgGc = await contractoyIex0z.getApproved.call(tokenIdviJtnDs, {from: accounts[0]});

		await expect(contractoyIex0z.transferFrom.call(fromPSRIVj7, tonRh2PFh, tokenIdGm6Wqec, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractymm23U = await ERC721.new({from: accounts[5]});
		const tokenIdEjeR45J = BigInt("862")
		const tokenIdqoU4SZF = BigInt("262")
		const torTfaaoM = accounts[2]
		const fromQ5mSV7 = accounts[1]
		const operatornHqZGkX = accounts[3]
		const ownerVlSHkS = accounts[3]
		const nullFOXz5Tc = await contractymm23U.ownerOf.call(tokenIdEjeR45J, {from: accounts[1]});
		await contractymm23U.safeTransferFrom.call(fromQ5mSV7, torTfaaoM, tokenIdqoU4SZF, {from: accounts[0]});
		const nulloQr9Ezi = await contractymm23U.isApprovedForAll.call(ownerVlSHkS, operatornHqZGkX, {from: accounts[0]});

		await expect(contractymm23U.ownerOf.call(tokenIdEjeR45J, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWM0ZRmp = await ERC721.new({from: accounts[2]});
		const approvedHwg53z1 = false
		const toBvFuSyp = accounts[4]
		const approvedCVMBEKy = true
		const toqvkzJdp = accounts[4]
		const tokenIdd3BZjkl = BigInt("662")
		const toPwouPNa = accounts[0]
		const tokenIdx6vc54 = BigInt("1639")
		const ton9MKs1G = accounts[3]
		const fromLlLUed9 = accounts[4]
		const tokenIdCa904mb = BigInt("1288")
		const topHoBzO6 = accounts[5]
		const fromnaLUTyx = accounts[2]
		await contractWM0ZRmp.setApprovalForAll.call(toBvFuSyp, approvedHwg53z1, {from: accounts[1]});
		await contractWM0ZRmp.setApprovalForAll.call(toqvkzJdp, approvedCVMBEKy, {from: accounts[1]});
		await contractWM0ZRmp.approve.call(toPwouPNa, tokenIdd3BZjkl, {from: accounts[2]});
		await contractWM0ZRmp.safeTransferFrom.call(fromLlLUed9, ton9MKs1G, tokenIdx6vc54, {from: accounts[4]});
		await contractWM0ZRmp.safeTransferFrom.call(fromnaLUTyx, topHoBzO6, tokenIdCa904mb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractWM0ZRmp.setApprovalForAll.call(toBvFuSyp, approvedHwg53z1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKf1iRx = await ERC721.new({from: accounts[3]});
		const tokenIdbsB26Sy = BigInt("646")
		const ownerZFZpg7d = accounts[3]
		const nullcVSrIjO = await contractKf1iRx.getApproved.call(tokenIdbsB26Sy, {from: accounts[3]});
		const nullJzN7UX = await contractKf1iRx.balanceOf.call(ownerZFZpg7d, {from: accounts[3]});

		await expect(contractKf1iRx.getApproved.call(tokenIdbsB26Sy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthdJFra7 = await ERC721.new({from: accounts[1]});
		const approvedMmblDz = true
		const todcA5z3w = accounts[3]
		const tokenIddeLtLkt = BigInt("1188")
		const tod1oX00 = accounts[0]
		const fromsUMKJq = accounts[4]
		const tokenIdR6rmDvk = BigInt("1698")
		const toCts114x = accounts[3]
		const tokenIdt8h22gA = BigInt("57")
		const topE3y7wL = accounts[2]
		const fromOrPE1cV = accounts[2]
		await contracthdJFra7.setApprovalForAll.call(todcA5z3w, approvedMmblDz, {from: "0x0000000000000000000000000000000000000001"});
		await contracthdJFra7.safeTransferFrom.call(fromsUMKJq, tod1oX00, tokenIddeLtLkt, {from: "0x0000000000000000000000000000000000000001"});
		await contracthdJFra7.approve.call(toCts114x, tokenIdR6rmDvk, {from: accounts[5]});
		await contracthdJFra7.transferFrom.call(fromOrPE1cV, topE3y7wL, tokenIdt8h22gA, {from: accounts[3]});

		await expect(contracthdJFra7.setApprovalForAll.call(todcA5z3w, approvedMmblDz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractqbQzuz = await ERC721.new({from: accounts[3]});
		const approvedMMbueB5 = false
		const totLoqOA3 = accounts[1]
		const operatorIbvjjcx = accounts[3]
		const ownergMXRH8y = accounts[4]
		const tokenIds6cZO0f = BigInt("1606")
		const todafL31l = accounts[2]
		const fromgWZM0ND = accounts[5]
		await contractqbQzuz.setApprovalForAll.call(totLoqOA3, approvedMMbueB5, {from: accounts[1]});
		const nullQlYAwty = await contractqbQzuz.isApprovedForAll.call(ownergMXRH8y, operatorIbvjjcx, {from: accounts[4]});
		await contractqbQzuz.safeTransferFrom.call(fromgWZM0ND, todafL31l, tokenIds6cZO0f, {from: accounts[1]});

		await expect(contractqbQzuz.setApprovalForAll.call(totLoqOA3, approvedMMbueB5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpMPYHI2 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdZC9X226 = BigInt("1712")
		const tokenIdfs2Mxe2 = BigInt("979")
		const toGWGgKu9 = accounts[4]
		const fromfZfK13J = accounts[2]
		const tokenIdB505LQ = BigInt("195")
		const tocTEUI6L = accounts[1]
		const fromLus0zBI = accounts[3]
		const tokenIdzCQ7NDJ = BigInt("1854")
		const tokenIdSLPILA8 = BigInt("876")
		const tonCcM4Jg = accounts[1]
		const nulliXF9aRF = await contractpMPYHI2.getApproved.call(tokenIdZC9X226, {from: accounts[4]});
		await contractpMPYHI2.safeTransferFrom.call(fromfZfK13J, toGWGgKu9, tokenIdfs2Mxe2, {from: accounts[4]});
		await contractpMPYHI2.transferFrom.call(fromLus0zBI, tocTEUI6L, tokenIdB505LQ, {from: accounts[2]});
		const nullKjEO4Kz = await contractpMPYHI2.getApproved.call(tokenIdzCQ7NDJ, {from: accounts[2]});
		await contractpMPYHI2.approve.call(tonCcM4Jg, tokenIdSLPILA8, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractAtUTRzz = await ERC721.new({from: accounts[3]});
		const ownerbWZw8DX = accounts[3]
		const operatorP9WmZYh = accounts[4]
		const ownern5RB84G = accounts[3]
		const nullFfee3LO = await contractAtUTRzz.balanceOf.call(ownerbWZw8DX, {from: accounts[3]});
		const nulluZTT6Te = await contractAtUTRzz.isApprovedForAll.call(ownern5RB84G, operatorP9WmZYh, {from: accounts[5]});

		assert.equal(nullFfee3LO, 0)
		assert.equal(nulluZTT6Te, false)
	});
})