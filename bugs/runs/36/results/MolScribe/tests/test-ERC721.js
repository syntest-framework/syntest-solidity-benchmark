const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractTYgDVQr = await ERC721.new({from: accounts[5]});
		const tokenIdxkKCvc3 = BigInt("1831")
		const toLW1YJ2c = "0x0000000000000000000000000000000000000001"
		const fromlKjZWjQ = accounts[1]
		const _datauqCbC4c = "0x0a1b140f170d200c14021f0305041c040f0d1d071916151419020c0e1e1b"
		const tokenIdRQsjP7n = BigInt("259")
		const tojKOXbYS = accounts[5]
		const frommz6xd0 = accounts[1]
		const tokenIdb3EDxpb = BigInt("676")
		const toLZVrBN = accounts[2]
		const fromi7hrHFD = accounts[3]
		const tokenIdVIS3aBW = BigInt("89")
		const toY97RAjR = accounts[1]
		const fromll7KgUo = accounts[0]
		const approvedieujoj6 = true
		const toiXCcflT = accounts[1]
		await contractTYgDVQr.transferFrom.call(fromlKjZWjQ, toLW1YJ2c, tokenIdxkKCvc3, {from: accounts[0]});
		await contractTYgDVQr.safeTransferFrom.call(frommz6xd0, tojKOXbYS, tokenIdRQsjP7n, _datauqCbC4c, {from: accounts[0]});
		await contractTYgDVQr.transferFrom.call(fromi7hrHFD, toLZVrBN, tokenIdb3EDxpb, {from: accounts[4]});
		await contractTYgDVQr.safeTransferFrom.call(fromll7KgUo, toY97RAjR, tokenIdVIS3aBW, {from: accounts[4]});
		await contractTYgDVQr.setApprovalForAll.call(toiXCcflT, approvedieujoj6, {from: accounts[3]});

		await expect(contractTYgDVQr.transferFrom.call(fromlKjZWjQ, toLW1YJ2c, tokenIdxkKCvc3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxgMqFJe = await ERC721.new({from: accounts[4]});
		const tokenIdbAXaSqh = BigInt("1597")
		const approvedfVT8gO0 = true
		const toQr0FkV = accounts[2]
		const _dataxw4ZLal = "0x1f02140611121c171d16191307071f001703080c"
		const tokenIdA9qmWjo = BigInt("90")
		const toiX5BhWN = accounts[0]
		const fromAtaVVTy = accounts[1]
		const nullljJ1q2B = await contractxgMqFJe.ownerOf.call(tokenIdbAXaSqh, {from: accounts[3]});
		await contractxgMqFJe.setApprovalForAll.call(toQr0FkV, approvedfVT8gO0, {from: accounts[4]});
		await contractxgMqFJe.safeTransferFrom.call(fromAtaVVTy, toiX5BhWN, tokenIdA9qmWjo, _dataxw4ZLal, {from: accounts[0]});

		await expect(contractxgMqFJe.ownerOf.call(tokenIdbAXaSqh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractEROLa6k = await ERC721.new({from: accounts[4]});
		const operatorxZQISV = accounts[2]
		const ownerk9bMFg7 = accounts[2]
		const tokenIdu9FiQdZ = BigInt("1858")
		const approvedSE25waW = false
		const toqMkUBJT = accounts[2]
		const owneronVqGTf = accounts[4]
		const approvedU9DVALS = true
		const toEWGQbul = accounts[1]
		const nullnwYTKei = await contractEROLa6k.isApprovedForAll.call(ownerk9bMFg7, operatorxZQISV, {from: accounts[0]});
		const nullPc8cr3 = await contractEROLa6k.getApproved.call(tokenIdu9FiQdZ, {from: accounts[1]});
		await contractEROLa6k.setApprovalForAll.call(toqMkUBJT, approvedSE25waW, {from: accounts[0]});
		const nullTzumJt = await contractEROLa6k.balanceOf.call(owneronVqGTf, {from: accounts[5]});
		await contractEROLa6k.setApprovalForAll.call(toEWGQbul, approvedU9DVALS, {from: accounts[0]});

		assert.equal(nullnwYTKei, false)
		await expect(contractEROLa6k.getApproved.call(tokenIdu9FiQdZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfySFMZB = await ERC721.new({from: accounts[4]});
		const ownerMhIogjv = accounts[5]
		const approvedBhEEOS = false
		const toeKhC3qi = accounts[3]
		const tokenIdfFV6zUp = BigInt("1882")
		const tokenIdxuJGxPH = BigInt("1165")
		const approvedEie6GB = true
		const toR3tpIx5 = accounts[0]
		const nullYkkVDK = await contractfySFMZB.balanceOf.call(ownerMhIogjv, {from: "0x0000000000000000000000000000000000000001"});
		await contractfySFMZB.setApprovalForAll.call(toeKhC3qi, approvedBhEEOS, {from: accounts[3]});
		const nullezTjraX = await contractfySFMZB.ownerOf.call(tokenIdfFV6zUp, {from: "0x0000000000000000000000000000000000000001"});
		const nullDWpL0GK = await contractfySFMZB.ownerOf.call(tokenIdxuJGxPH, {from: accounts[0]});
		await contractfySFMZB.setApprovalForAll.call(toR3tpIx5, approvedEie6GB, {from: accounts[2]});

		assert.equal(nullYkkVDK, 0)
		await expect(contractfySFMZB.setApprovalForAll.call(toeKhC3qi, approvedBhEEOS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrhpwzAj = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdqR6fGpj = BigInt("102")
		const tokenIdhVFdF0o = BigInt("538")
		const tokenIdmeMIt7S = BigInt("1208")
		const toR2YHcj6 = accounts[1]
		const nullUpKwPtP = await contractrhpwzAj.getApproved.call(tokenIdqR6fGpj, {from: accounts[3]});
		const nullbyY5GyN = await contractrhpwzAj.getApproved.call(tokenIdhVFdF0o, {from: accounts[2]});
		await contractrhpwzAj.approve.call(toR2YHcj6, tokenIdmeMIt7S, {from: accounts[0]});
	});
})