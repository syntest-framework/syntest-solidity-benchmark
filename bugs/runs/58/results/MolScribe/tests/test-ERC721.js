const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractl0Dw57t = await ERC721.new({from: accounts[1]});
		const tokenIdxYusqEX = BigInt("198")
		const tokenIdkdTUI0c = BigInt("1657")
		const toGnkE5dr = accounts[0]
		const fromVBisyri = accounts[3]
		const nulleEftcjS = await contractl0Dw57t.getApproved.call(tokenIdxYusqEX, {from: accounts[0]});
		await contractl0Dw57t.transferFrom.call(fromVBisyri, toGnkE5dr, tokenIdkdTUI0c, {from: accounts[5]});

		await expect(contractl0Dw57t.getApproved.call(tokenIdxYusqEX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractLK6eATt = await ERC721.new({from: accounts[1]});
		const tokenIdCItzXW5 = BigInt("351")
		const toP0ZYhL0 = accounts[2]
		const fromwomGSWj = accounts[2]
		const approvedqE4W1cS = true
		const toY8PvyhA = "0x0000000000000000000000000000000000000001"
		await contractLK6eATt.transferFrom.call(fromwomGSWj, toP0ZYhL0, tokenIdCItzXW5, {from: accounts[4]});
		await contractLK6eATt.setApprovalForAll.call(toY8PvyhA, approvedqE4W1cS, {from: accounts[0]});

		await expect(contractLK6eATt.transferFrom.call(fromwomGSWj, toP0ZYhL0, tokenIdCItzXW5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKOwqyPB = await ERC721.new({from: accounts[0]});
		const tokenIdhXsQiKg = BigInt("1890")
		const toee6SyjU = "0x0000000000000000000000000000000000000001"
		const tokenIdw9URmku = BigInt("1499")
		const tokenIdP8NZAaT = BigInt("1985")
		const toDRiHLhB = accounts[0]
		const fromOLgmfwt = accounts[1]
		const tokenIdKLmarb = BigInt("669")
		const toQG0VwBB = accounts[2]
		const fromxHN7UG2 = accounts[2]
		await contractKOwqyPB.approve.call(toee6SyjU, tokenIdhXsQiKg, {from: accounts[0]});
		const nullO8KmGPN = await contractKOwqyPB.getApproved.call(tokenIdw9URmku, {from: accounts[3]});
		await contractKOwqyPB.safeTransferFrom.call(fromOLgmfwt, toDRiHLhB, tokenIdP8NZAaT, {from: accounts[5]});
		await contractKOwqyPB.safeTransferFrom.call(fromxHN7UG2, toQG0VwBB, tokenIdKLmarb, {from: accounts[4]});

		await expect(contractKOwqyPB.approve.call(toee6SyjU, tokenIdhXsQiKg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractsbwtHH5 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdGTIpawc = BigInt("993")
		const toFPjEUcH = accounts[4]
		const approvedmNPMFv = true
		const toLa04Ifn = accounts[4]
		const tokenIdvv5SBX3 = BigInt("1571")
		const operatorTKAEwaN = accounts[5]
		const ownerDfGcpyL = accounts[3]
		await contractsbwtHH5.approve.call(toFPjEUcH, tokenIdGTIpawc, {from: accounts[3]});
		await contractsbwtHH5.setApprovalForAll.call(toLa04Ifn, approvedmNPMFv, {from: accounts[2]});
		const nullsa2nLWm = await contractsbwtHH5.getApproved.call(tokenIdvv5SBX3, {from: accounts[2]});
		const nullPqJICJX = await contractsbwtHH5.isApprovedForAll.call(ownerDfGcpyL, operatorTKAEwaN, {from: accounts[5]});
	});

	it('test for ERC721', async () => {
		const contractcdoFgmL = await ERC721.new({from: accounts[1]});
		const approvedx2OdNY8 = false
		const tocS98ybK = accounts[4]
		const tokenIdOgssP3 = BigInt("351")
		const toW6vHoF = accounts[2]
		const fromX0x7Eo = accounts[3]
		await contractcdoFgmL.setApprovalForAll.call(tocS98ybK, approvedx2OdNY8, {from: accounts[4]});
		await contractcdoFgmL.transferFrom.call(fromX0x7Eo, toW6vHoF, tokenIdOgssP3, {from: accounts[4]});

		await expect(contractcdoFgmL.setApprovalForAll.call(tocS98ybK, approvedx2OdNY8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})