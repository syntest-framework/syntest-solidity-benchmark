const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractteIpul4 = await ERC721.new({from: accounts[1]});
		const tokenIdmzAeuy4 = BigInt("1163")
		const toGzPtU9F = accounts[1]
		const tokenIdZnxcQ7 = BigInt("868")
		const ownerhb5Z09r = accounts[2]
		const approvednHPspGt = true
		const toeeet35Y = accounts[0]
		const _dataTzkdTq = "0x041d0d00091f11061e0a0208031b0b0c121b1c1315061714160507"
		const tokenIdcXtaF38 = BigInt("128")
		const topPliNC = accounts[1]
		const fromOX6ZCAn = accounts[0]
		await contractteIpul4.approve.call(toGzPtU9F, tokenIdmzAeuy4, {from: accounts[1]});
		const nullc4lKlPu = await contractteIpul4.getApproved.call(tokenIdZnxcQ7, {from: accounts[3]});
		const nullEcxkAE = await contractteIpul4.balanceOf.call(ownerhb5Z09r, {from: accounts[1]});
		await contractteIpul4.setApprovalForAll.call(toeeet35Y, approvednHPspGt, {from: accounts[3]});
		await contractteIpul4.safeTransferFrom.call(fromOX6ZCAn, topPliNC, tokenIdcXtaF38, _dataTzkdTq, {from: accounts[5]});

		await expect(contractteIpul4.approve.call(toGzPtU9F, tokenIdmzAeuy4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractzeS0JV = await ERC721.new({from: accounts[4]});
		const tokenIdPTgDe6f = BigInt("1921")
		const toPEFuHmh = accounts[4]
		const fromEpFCjuU = accounts[5]
		const approvedEe1p6F1 = true
		const toQQcbaCH = accounts[3]
		const operatorrSHX2PY = accounts[5]
		const ownergjS7s9B = accounts[2]
		const tokenIdulUkEqE = BigInt("1536")
		const ownerymmIrNe = "0x0000000000000000000000000000000000000001"
		await contractzeS0JV.transferFrom.call(fromEpFCjuU, toPEFuHmh, tokenIdPTgDe6f, {from: accounts[2]});
		await contractzeS0JV.setApprovalForAll.call(toQQcbaCH, approvedEe1p6F1, {from: accounts[4]});
		const nullpwHiTU = await contractzeS0JV.isApprovedForAll.call(ownergjS7s9B, operatorrSHX2PY, {from: accounts[0]});
		const nullycEY9Pn = await contractzeS0JV.ownerOf.call(tokenIdulUkEqE, {from: accounts[2]});
		const nullkkZBEvl = await contractzeS0JV.balanceOf.call(ownerymmIrNe, {from: accounts[3]});

		await expect(contractzeS0JV.transferFrom.call(fromEpFCjuU, toPEFuHmh, tokenIdPTgDe6f, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractkjeCnsj = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdlBrLAAH = BigInt("445")
		const toOKUvWN8 = accounts[1]
		const from96MMkt = accounts[4]
		const tokenIdx4L1Wi0 = BigInt("1503")
		const top8qhBYo = accounts[0]
		const _datadf3uBG = "0x121719161e0f0c20101720101f150f151a17120506091f110202180108"
		const tokenIdMN8HQgs = BigInt("604")
		const toMcIM7Z6 = accounts[2]
		const from9ivXho = accounts[5]
		const _datapLeKNei = "0x14200810091c03200e1e19111a2011"
		const tokenIdlEcyULB = BigInt("1901")
		const toF9VNIq = accounts[1]
		const fromEabuBNW = accounts[0]
		const tokenIdyRoGmeQ = BigInt("1834")
		const toFP4D2ft = accounts[4]
		await contractkjeCnsj.transferFrom.call(from96MMkt, toOKUvWN8, tokenIdlBrLAAH, {from: accounts[4]});
		await contractkjeCnsj.approve.call(top8qhBYo, tokenIdx4L1Wi0, {from: accounts[1]});
		await contractkjeCnsj.safeTransferFrom.call(from9ivXho, toMcIM7Z6, tokenIdMN8HQgs, _datadf3uBG, {from: accounts[0]});
		await contractkjeCnsj.safeTransferFrom.call(fromEabuBNW, toF9VNIq, tokenIdlEcyULB, _datapLeKNei, {from: accounts[2]});
		await contractkjeCnsj.approve.call(toFP4D2ft, tokenIdyRoGmeQ, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contracta74Mylx = await ERC721.new({from: accounts[4]});
		const _dataRDWvuXf = "0x190c1c0004161e171b1c0914"
		const tokenIddk8NIw = BigInt("396")
		const tov7kzwXE = accounts[4]
		const fromQztaPkt = accounts[3]
		const ownerPfsHjTH = accounts[1]
		const approvedkWnWeUj = true
		const toO1x5GF = accounts[2]
		const tokenIdLdLwQhx = BigInt("1814")
		const _datatyUSaZA = "0x070a1e0414090105050c0a0c061816091d190414050413"
		const tokenIdi09LG5R = BigInt("80")
		const tosdZSbE3 = accounts[2]
		const fromXr7BZ83 = accounts[5]
		await contracta74Mylx.safeTransferFrom.call(fromQztaPkt, tov7kzwXE, tokenIddk8NIw, _dataRDWvuXf, {from: accounts[0]});
		const nullYpaGL1o = await contracta74Mylx.balanceOf.call(ownerPfsHjTH, {from: accounts[4]});
		await contracta74Mylx.setApprovalForAll.call(toO1x5GF, approvedkWnWeUj, {from: accounts[4]});
		const nullbNgNHBR = await contracta74Mylx.getApproved.call(tokenIdLdLwQhx, {from: accounts[0]});
		await contracta74Mylx.safeTransferFrom.call(fromXr7BZ83, tosdZSbE3, tokenIdi09LG5R, _datatyUSaZA, {from: accounts[4]});

		await expect(contracta74Mylx.safeTransferFrom.call(fromQztaPkt, tov7kzwXE, tokenIddk8NIw, _dataRDWvuXf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractosptF5T = await ERC721.new({from: accounts[1]});
		const tokenIdydvNv4V = BigInt("934")
		const tomDpcVqX = accounts[2]
		const fromI9WyMb1 = accounts[3]
		const _data2yU6di = "0x190e1704150e1419050f151a0b001916021d120e02031408"
		const tokenIdwqaMPwY = BigInt("1163")
		const toswLnzx7 = accounts[4]
		const fromxswmXw3 = accounts[4]
		const tokenIdCFNBisY = BigInt("253")
		const tovGj2HrR = accounts[3]
		const tokenIdRlz937B = BigInt("1693")
		await contractosptF5T.safeTransferFrom.call(fromI9WyMb1, tomDpcVqX, tokenIdydvNv4V, {from: accounts[0]});
		await contractosptF5T.safeTransferFrom.call(fromxswmXw3, toswLnzx7, tokenIdwqaMPwY, _data2yU6di, {from: accounts[0]});
		await contractosptF5T.approve.call(tovGj2HrR, tokenIdCFNBisY, {from: accounts[4]});
		const nullodxqP6e = await contractosptF5T.getApproved.call(tokenIdRlz937B, {from: accounts[2]});

		await expect(contractosptF5T.safeTransferFrom.call(fromI9WyMb1, tomDpcVqX, tokenIdydvNv4V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractLA32qTr = await ERC721.new({from: accounts[2]});
		const ownerq9HLzdh = accounts[3]
		const tokenIdxKKPewL = BigInt("1516")
		const tocrRHAH = "0x0000000000000000000000000000000000000001"
		const operator4R7bPi = accounts[3]
		const ownerZrUuSg = accounts[4]
		const tokenIdheBspTs = BigInt("1057")
		const toKj77XT3 = accounts[3]
		const fromWNEBrsk = accounts[4]
		const nulllpe5vu4 = await contractLA32qTr.balanceOf.call(ownerq9HLzdh, {from: "0x0000000000000000000000000000000000000001"});
		await contractLA32qTr.approve.call(tocrRHAH, tokenIdxKKPewL, {from: accounts[1]});
		const nullUxRVeYk = await contractLA32qTr.isApprovedForAll.call(ownerZrUuSg, operator4R7bPi, {from: accounts[1]});
		await contractLA32qTr.transferFrom.call(fromWNEBrsk, toKj77XT3, tokenIdheBspTs, {from: accounts[0]});

		assert.equal(nulllpe5vu4, 0)
		await expect(contractLA32qTr.approve.call(tocrRHAH, tokenIdxKKPewL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXBhSZlO = await ERC721.new({from: accounts[0]});
		const approvedJUza0kL = true
		const toVfWFJvM = accounts[3]
		const approvedd1BlINX = true
		const toon7q0G = accounts[0]
		const tokenIde8lwaa = BigInt("1988")
		const operatorZmuVOtN = accounts[4]
		const ownerIucUlxk = accounts[4]
		const operatorxBvlfOH = accounts[2]
		const ownerGg1FqYi = accounts[5]
		await contractXBhSZlO.setApprovalForAll.call(toVfWFJvM, approvedJUza0kL, {from: accounts[2]});
		await contractXBhSZlO.setApprovalForAll.call(toon7q0G, approvedd1BlINX, {from: accounts[0]});
		const null4W0MdK = await contractXBhSZlO.ownerOf.call(tokenIde8lwaa, {from: accounts[3]});
		const nullpLhFwc = await contractXBhSZlO.isApprovedForAll.call(ownerIucUlxk, operatorZmuVOtN, {from: accounts[3]});
		const nullRORwXSN = await contractXBhSZlO.isApprovedForAll.call(ownerGg1FqYi, operatorxBvlfOH, {from: accounts[3]});

		await expect(contractXBhSZlO.setApprovalForAll.call(toVfWFJvM, approvedJUza0kL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxsQWNIj = await ERC721.new({from: accounts[4]});
		const ownerqDRhYLe = accounts[1]
		const operatorbnJtion = accounts[2]
		const ownereBzyvIH = "0x0000000000000000000000000000000000000001"
		const approvedOw1iFK5 = true
		const toXfNFqy6 = accounts[2]
		const tokenIdnDDXKga = BigInt("1814")
		const _dataZTIicl1 = "0x070a1e0414090105050c0a0c061816091d190414050413"
		const tokenIdqUqKyS = BigInt("80")
		const tofG0n3xT = accounts[2]
		const from9iwRYS = accounts[5]
		const nullV2gcS6f = await contractxsQWNIj.balanceOf.call(ownerqDRhYLe, {from: accounts[4]});
		const nulldxo8Bpw = await contractxsQWNIj.isApprovedForAll.call(ownereBzyvIH, operatorbnJtion, {from: "0x0000000000000000000000000000000000000001"});
		await contractxsQWNIj.setApprovalForAll.call(toXfNFqy6, approvedOw1iFK5, {from: accounts[4]});
		const nullmxOt6KJ = await contractxsQWNIj.getApproved.call(tokenIdnDDXKga, {from: accounts[0]});
		await contractxsQWNIj.safeTransferFrom.call(from9iwRYS, tofG0n3xT, tokenIdqUqKyS, _dataZTIicl1, {from: accounts[4]});

		assert.equal(nullV2gcS6f, 0)
		assert.equal(nulldxo8Bpw, false)
		await expect(contractxsQWNIj.setApprovalForAll.call(toXfNFqy6, approvedOw1iFK5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})