const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractCbDhaQ = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const approved9NCD3K = false
		const toT9hILrn = accounts[2]
		const tokenIdo5vayRV = BigInt("1073")
		const toz0LcGYf = "0x0000000000000000000000000000000000000001"
		const tokenIdgbaGnFt = BigInt("1518")
		const toziqj1t = accounts[4]
		const fromFPpACa0 = accounts[1]
		const tokenIdDIV7lBt = BigInt("736")
		const toGe0YG4r = accounts[2]
		const fromxqoQu7m = "0x0000000000000000000000000000000000000001"
		const tokenIdss4ygOZ = BigInt("284")
		await contractCbDhaQ.setApprovalForAll.call(toT9hILrn, approved9NCD3K, {from: accounts[0]});
		await contractCbDhaQ.approve.call(toz0LcGYf, tokenIdo5vayRV, {from: accounts[0]});
		await contractCbDhaQ.safeTransferFrom.call(fromFPpACa0, toziqj1t, tokenIdgbaGnFt, {from: accounts[2]});
		await contractCbDhaQ.transferFrom.call(fromxqoQu7m, toGe0YG4r, tokenIdDIV7lBt, {from: accounts[1]});
		const nullbe49jI = await contractCbDhaQ.getApproved.call(tokenIdss4ygOZ, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractZmWRH9 = await ERC721.new({from: accounts[2]});
		const operatorlv1tsP3 = accounts[3]
		const ownerb8SRKgO = accounts[5]
		const tokenIdO9bB3zO = BigInt("872")
		const tokenIdN0IDr3H = BigInt("502")
		const toYjTKV1M = accounts[5]
		const fromfJqNEBh = accounts[4]
		const tokenIdYQ6ogKK = BigInt("1693")
		const tokenIdYV3XduQ = BigInt("1225")
		const nullNvr2egn = await contractZmWRH9.isApprovedForAll.call(ownerb8SRKgO, operatorlv1tsP3, {from: accounts[5]});
		const nullspy2naO = await contractZmWRH9.ownerOf.call(tokenIdO9bB3zO, {from: accounts[0]});
		await contractZmWRH9.transferFrom.call(fromfJqNEBh, toYjTKV1M, tokenIdN0IDr3H, {from: accounts[5]});
		const nullKFaehki = await contractZmWRH9.getApproved.call(tokenIdYQ6ogKK, {from: accounts[0]});
		const nullgciCxFr = await contractZmWRH9.getApproved.call(tokenIdYV3XduQ, {from: accounts[0]});

		assert.equal(nullNvr2egn, false)
		await expect(contractZmWRH9.ownerOf.call(tokenIdO9bB3zO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractuSW5XbL = await ERC721.new({from: accounts[2]});
		const tokenIdlOiBhW = BigInt("1562")
		const toNZM0RmH = accounts[3]
		const approved2XEgQm = false
		const toy4Zp3lQ = accounts[2]
		await contractuSW5XbL.approve.call(toNZM0RmH, tokenIdlOiBhW, {from: accounts[1]});
		await contractuSW5XbL.setApprovalForAll.call(toy4Zp3lQ, approved2XEgQm, {from: accounts[2]});

		await expect(contractuSW5XbL.approve.call(toNZM0RmH, tokenIdlOiBhW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGQpMJhQ = await ERC721.new({from: accounts[0]});
		const ownerEUdAp0x = accounts[0]
		const tokenIdba7kKH = BigInt("1774")
		const tokenIdEEc54ou = BigInt("1655")
		const tow2PnnfJ = accounts[2]
		const fromWtqXZSJ = accounts[3]
		const nullnvZ8Jl2 = await contractGQpMJhQ.balanceOf.call(ownerEUdAp0x, {from: "0x0000000000000000000000000000000000000001"});
		const nullISCKlT3 = await contractGQpMJhQ.ownerOf.call(tokenIdba7kKH, {from: accounts[0]});
		await contractGQpMJhQ.transferFrom.call(fromWtqXZSJ, tow2PnnfJ, tokenIdEEc54ou, {from: accounts[5]});

		assert.equal(nullnvZ8Jl2, 0)
		await expect(contractGQpMJhQ.ownerOf.call(tokenIdba7kKH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracti2Ikkd = await ERC721.new({from: accounts[1]});
		const tokenIdhepqcjc = BigInt("95")
		const tokenIdeY012zc = BigInt("2")
		const toiRvGuNo = accounts[0]
		const fromi7ck09V = accounts[4]
		const tokenIdf5NekJ = BigInt("1888")
		const toHMWkzS3 = "0x0000000000000000000000000000000000000001"
		const fromlOvBt3c = accounts[5]
		const _datakJOm9RY = "0x0914151b12101f1609130f171a1915070f"
		const tokenIdiof4J8u = BigInt("124")
		const to1HzPUE = accounts[1]
		const fromY4GvJV0 = accounts[4]
		const nullYxBNBPe = await contracti2Ikkd.getApproved.call(tokenIdhepqcjc, {from: accounts[4]});
		await contracti2Ikkd.transferFrom.call(fromi7ck09V, toiRvGuNo, tokenIdeY012zc, {from: accounts[3]});
		await contracti2Ikkd.safeTransferFrom.call(fromlOvBt3c, toHMWkzS3, tokenIdf5NekJ, {from: accounts[0]});
		await contracti2Ikkd.safeTransferFrom.call(fromY4GvJV0, to1HzPUE, tokenIdiof4J8u, _datakJOm9RY, {from: accounts[1]});

		await expect(contracti2Ikkd.getApproved.call(tokenIdhepqcjc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWhGLGH6 = await ERC721.new({from: accounts[4]});
		const approvedyNOGpdD = true
		const toCqcn7P5 = accounts[1]
		const tokenIdBPB5Rl3 = BigInt("994")
		const toLy1YA97 = accounts[1]
		const fromLM3ytN3 = accounts[0]
		const tokenIdbz5UYm = BigInt("1162")
		const toCGgG9rf = accounts[5]
		const fromeOMQ5FJ = accounts[1]
		const tokenIdvLgb6Cc = BigInt("1635")
		const toStuqjZ1 = accounts[5]
		const fromJQhEo80 = accounts[4]
		const tokenIdDxfvVxh = BigInt("2006")
		const ownernb5JoI = accounts[3]
		await contractWhGLGH6.setApprovalForAll.call(toCqcn7P5, approvedyNOGpdD, {from: accounts[1]});
		await contractWhGLGH6.safeTransferFrom.call(fromLM3ytN3, toLy1YA97, tokenIdBPB5Rl3, {from: accounts[2]});
		await contractWhGLGH6.transferFrom.call(fromeOMQ5FJ, toCGgG9rf, tokenIdbz5UYm, {from: accounts[3]});
		await contractWhGLGH6.safeTransferFrom.call(fromJQhEo80, toStuqjZ1, tokenIdvLgb6Cc, {from: accounts[3]});
		const nullLZD4lys = await contractWhGLGH6.getApproved.call(tokenIdDxfvVxh, {from: accounts[2]});
		const nullJbJWzBa = await contractWhGLGH6.balanceOf.call(ownernb5JoI, {from: accounts[3]});

		await expect(contractWhGLGH6.setApprovalForAll.call(toCqcn7P5, approvedyNOGpdD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractLiZftEK = await ERC721.new({from: accounts[2]});
		const tokenIdy4xbUm7 = BigInt("226")
		const toTikmHy7 = accounts[1]
		const fromJ7110jM = accounts[5]
		const tokenId4Anmdp = BigInt("1562")
		const tolpfC3f5 = accounts[4]
		const approvedcbxeB7h = false
		const toDSYSIM = accounts[2]
		await contractLiZftEK.transferFrom.call(fromJ7110jM, toTikmHy7, tokenIdy4xbUm7, {from: accounts[3]});
		await contractLiZftEK.approve.call(tolpfC3f5, tokenId4Anmdp, {from: accounts[1]});
		await contractLiZftEK.setApprovalForAll.call(toDSYSIM, approvedcbxeB7h, {from: accounts[2]});

		await expect(contractLiZftEK.transferFrom.call(fromJ7110jM, toTikmHy7, tokenIdy4xbUm7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractv7zkIyw = await ERC721.new({from: accounts[2]});
		const tokenIdCMUJ5cI = BigInt("1888")
		const toheRj92 = accounts[0]
		const fromKBEKWnP = accounts[4]
		const tokenIdkgpyFax = BigInt("1557")
		const toMYYOKw7 = accounts[4]
		const tokenIdcc9GGhH = BigInt("738")
		const tonMwMEI1 = "0x0000000000000000000000000000000000000001"
		const fromUzI4RJD = accounts[4]
		await contractv7zkIyw.safeTransferFrom.call(fromKBEKWnP, toheRj92, tokenIdCMUJ5cI, {from: accounts[0]});
		await contractv7zkIyw.approve.call(toMYYOKw7, tokenIdkgpyFax, {from: accounts[1]});
		await contractv7zkIyw.safeTransferFrom.call(fromUzI4RJD, tonMwMEI1, tokenIdcc9GGhH, {from: accounts[3]});

		await expect(contractv7zkIyw.safeTransferFrom.call(fromKBEKWnP, toheRj92, tokenIdCMUJ5cI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})