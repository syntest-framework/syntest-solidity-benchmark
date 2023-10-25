const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractKHSLocu = await ERC721.new({from: accounts[3]});
		const tokenIdgvslacf = BigInt("164")
		const tonIe1Rx1 = accounts[4]
		const tokenId6oDlqm = BigInt("1761")
		const toKZDKMPY = accounts[5]
		const tokenIdTQXjICe = BigInt("701")
		const tokenIdsGsy9m = BigInt("112")
		const toVz3UOtD = accounts[4]
		const fromvMyjzx9 = accounts[1]
		await contractKHSLocu.approve.call(tonIe1Rx1, tokenIdgvslacf, {from: accounts[3]});
		await contractKHSLocu.approve.call(toKZDKMPY, tokenId6oDlqm, {from: accounts[1]});
		const nullU9YKcqN = await contractKHSLocu.ownerOf.call(tokenIdTQXjICe, {from: accounts[2]});
		await contractKHSLocu.safeTransferFrom.call(fromvMyjzx9, toVz3UOtD, tokenIdsGsy9m, {from: accounts[2]});

		await expect(contractKHSLocu.approve.call(tonIe1Rx1, tokenIdgvslacf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractsiHeR9j = await ERC721.new({from: accounts[3]});
		const _data5UNC7u = "0x0f0a10110d141d0e0218201113060d0e161b031c1f150219120e"
		const tokenIdzH4GybY = BigInt("1803")
		const toNDx8hb0 = accounts[4]
		const fromWURBT2T = accounts[1]
		const tokenIdxgNlTZ = BigInt("368")
		const toHev4cn = "0x0000000000000000000000000000000000000001"
		await contractsiHeR9j.safeTransferFrom.call(fromWURBT2T, toNDx8hb0, tokenIdzH4GybY, _data5UNC7u, {from: accounts[4]});
		await contractsiHeR9j.approve.call(toHev4cn, tokenIdxgNlTZ, {from: accounts[0]});

		await expect(contractsiHeR9j.safeTransferFrom.call(fromWURBT2T, toNDx8hb0, tokenIdzH4GybY, _data5UNC7u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract3d2cR0 = await ERC721.new({from: accounts[2]});
		const tokenIdgH4vIm2 = BigInt("953")
		const toZNRVqB = accounts[1]
		const fromz6o5hyK = accounts[4]
		const approvedFztq1gF = false
		const toEBUdzsE = accounts[4]
		const operatorTU0rOsJ = accounts[1]
		const ownerAChtTO = accounts[2]
		const tokenIdYMywPpU = BigInt("327")
		const toSLiUH0L = accounts[0]
		const fromi58pTlv = accounts[0]
		await contract3d2cR0.transferFrom.call(fromz6o5hyK, toZNRVqB, tokenIdgH4vIm2, {from: accounts[1]});
		await contract3d2cR0.setApprovalForAll.call(toEBUdzsE, approvedFztq1gF, {from: accounts[5]});
		const nullCrGa4qZ = await contract3d2cR0.isApprovedForAll.call(ownerAChtTO, operatorTU0rOsJ, {from: accounts[1]});
		await contract3d2cR0.transferFrom.call(fromi58pTlv, toSLiUH0L, tokenIdYMywPpU, {from: accounts[0]});

		await expect(contract3d2cR0.transferFrom.call(fromz6o5hyK, toZNRVqB, tokenIdgH4vIm2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractlzTjEm8 = await ERC721.new({from: accounts[1]});
		const tokenIdIJQhyf = BigInt("1170")
		const tokenIdSsGkmT = BigInt("950")
		const toStScMzb = accounts[0]
		const operatoryn1uiXI = accounts[2]
		const ownerJz8Ay2C = accounts[3]
		const tokenIdPreucuT = BigInt("915")
		const tokenIdyEzMuEV = BigInt("1688")
		const _dataO4kNtOJ = "0x1f111d0f03000f1d000e060f151d"
		const tokenIdwKX7YTj = BigInt("1222")
		const to3E6ZKC = accounts[4]
		const fromTHUEtsS = accounts[3]
		const nulltCZTsFo = await contractlzTjEm8.getApproved.call(tokenIdIJQhyf, {from: accounts[3]});
		await contractlzTjEm8.approve.call(toStScMzb, tokenIdSsGkmT, {from: accounts[2]});
		const nullce7drUj = await contractlzTjEm8.isApprovedForAll.call(ownerJz8Ay2C, operatoryn1uiXI, {from: accounts[0]});
		const nullfC0o91X = await contractlzTjEm8.ownerOf.call(tokenIdPreucuT, {from: accounts[0]});
		const nulljFa7sDI = await contractlzTjEm8.getApproved.call(tokenIdyEzMuEV, {from: accounts[0]});
		await contractlzTjEm8.safeTransferFrom.call(fromTHUEtsS, to3E6ZKC, tokenIdwKX7YTj, _dataO4kNtOJ, {from: accounts[4]});

		await expect(contractlzTjEm8.getApproved.call(tokenIdIJQhyf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractIBYE4B5 = await ERC721.new({from: accounts[1]});
		const tokenId9683Vh = BigInt("1720")
		const toZYwhkAJ = "0x0000000000000000000000000000000000000001"
		const fromLpAoNMG = "0x0000000000000000000000000000000000000001"
		const tokenIdEAp0gUf = BigInt("1106")
		const toyzxzrgB = accounts[2]
		const fromead2gAu = accounts[3]
		const tokenIdR05OF3I = BigInt("1587")
		const ownerJ0AzNG6 = accounts[3]
		const tokenIdZfZwGOg = BigInt("231")
		const tofyCDkXD = accounts[4]
		const tokenIdlVuvCux = BigInt("725")
		const toXICtdVo = accounts[4]
		await contractIBYE4B5.safeTransferFrom.call(fromLpAoNMG, toZYwhkAJ, tokenId9683Vh, {from: accounts[2]});
		await contractIBYE4B5.transferFrom.call(fromead2gAu, toyzxzrgB, tokenIdEAp0gUf, {from: accounts[1]});
		const nullenvXlUs = await contractIBYE4B5.getApproved.call(tokenIdR05OF3I, {from: accounts[3]});
		const nullBRVGNs = await contractIBYE4B5.balanceOf.call(ownerJ0AzNG6, {from: accounts[3]});
		await contractIBYE4B5.approve.call(tofyCDkXD, tokenIdZfZwGOg, {from: accounts[5]});
		await contractIBYE4B5.approve.call(toXICtdVo, tokenIdlVuvCux, {from: accounts[0]});

		await expect(contractIBYE4B5.safeTransferFrom.call(fromLpAoNMG, toZYwhkAJ, tokenId9683Vh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractIHMBvhx = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const approvedw7JCVem = true
		const toJoRZaeE = accounts[4]
		const approvedzXXF3dd = true
		const todc6VYyg = accounts[1]
		const operatorGhSzFIJ = accounts[1]
		const ownerWSDWrV = "0x0000000000000000000000000000000000000001"
		const tokenIdAjPcdLx = BigInt("830")
		const tomQu729W = accounts[3]
		const fromDKbRDs = accounts[4]
		const approvedaLjDvC9 = false
		const toPm3uVvh = "0x0000000000000000000000000000000000000001"
		await contractIHMBvhx.setApprovalForAll.call(toJoRZaeE, approvedw7JCVem, {from: accounts[1]});
		await contractIHMBvhx.setApprovalForAll.call(todc6VYyg, approvedzXXF3dd, {from: accounts[2]});
		const nullh4beXEJ = await contractIHMBvhx.isApprovedForAll.call(ownerWSDWrV, operatorGhSzFIJ, {from: accounts[4]});
		await contractIHMBvhx.transferFrom.call(fromDKbRDs, tomQu729W, tokenIdAjPcdLx, {from: accounts[3]});
		await contractIHMBvhx.setApprovalForAll.call(toPm3uVvh, approvedaLjDvC9, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractxou2CKn = await ERC721.new({from: accounts[4]});
		const ownerwsrxo3J = accounts[2]
		const operatorFqaHYZY = accounts[0]
		const ownerAbs3CDD = accounts[1]
		const tokenIdmuPnhBt = BigInt("1339")
		const tocp0y887 = accounts[0]
		const fromAhf25Pm = accounts[3]
		const approved8TAMw4 = true
		const toDT0TDjY = accounts[3]
		const tokenIdDYPb5HR = BigInt("117")
		const nullmSA1nMZ = await contractxou2CKn.balanceOf.call(ownerwsrxo3J, {from: accounts[5]});
		const nullqqBhzgU = await contractxou2CKn.isApprovedForAll.call(ownerAbs3CDD, operatorFqaHYZY, {from: accounts[3]});
		await contractxou2CKn.transferFrom.call(fromAhf25Pm, tocp0y887, tokenIdmuPnhBt, {from: accounts[5]});
		await contractxou2CKn.setApprovalForAll.call(toDT0TDjY, approved8TAMw4, {from: accounts[0]});
		const nullcJWtdGj = await contractxou2CKn.getApproved.call(tokenIdDYPb5HR, {from: accounts[1]});

		assert.equal(nullmSA1nMZ, 0)
		assert.equal(nullqqBhzgU, false)
		await expect(contractxou2CKn.transferFrom.call(fromAhf25Pm, tocp0y887, tokenIdmuPnhBt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVbmzW1F = await ERC721.new({from: accounts[2]});
		const approvedcMgdO37 = true
		const tovvb7xks = accounts[4]
		const tokenIdAY8ya4V = BigInt("842")
		const approvedZT53nW = true
		const tolika6l7 = accounts[2]
		const operatorL3zcW43 = accounts[2]
		const ownerBUFGnpT = accounts[0]
		await contractVbmzW1F.setApprovalForAll.call(tovvb7xks, approvedcMgdO37, {from: "0x0000000000000000000000000000000000000001"});
		const nullUCC6gkM = await contractVbmzW1F.getApproved.call(tokenIdAY8ya4V, {from: accounts[4]});
		await contractVbmzW1F.setApprovalForAll.call(tolika6l7, approvedZT53nW, {from: "0x0000000000000000000000000000000000000001"});
		const nulljmSRJXM = await contractVbmzW1F.isApprovedForAll.call(ownerBUFGnpT, operatorL3zcW43, {from: accounts[4]});

		await expect(contractVbmzW1F.setApprovalForAll.call(tovvb7xks, approvedcMgdO37, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrJbc4Q2 = await ERC721.new({from: accounts[0]});
		const ownerX3wXAd2 = accounts[2]
		const approvediX02W2R = true
		const toSSL3XMp = accounts[3]
		const _dataKRIWz4m = "0x081d0b1a0f15121b1a08141a031e070802040300180405131218"
		const tokenIdlBEPj8 = BigInt("777")
		const todB9zCpt = accounts[2]
		const fromvJEkTEM = accounts[2]
		const operatorzEiaLi = accounts[3]
		const ownerU5zJ9ml = accounts[2]
		const tokenId99hiI5 = BigInt("1690")
		const toMBmmuA5 = accounts[4]
		const fromml710Jv = accounts[2]
		const operatorETNzP5D = accounts[1]
		const ownervmyDt1A = accounts[0]
		const nullOoFW0gD = await contractrJbc4Q2.balanceOf.call(ownerX3wXAd2, {from: accounts[0]});
		await contractrJbc4Q2.setApprovalForAll.call(toSSL3XMp, approvediX02W2R, {from: accounts[3]});
		await contractrJbc4Q2.safeTransferFrom.call(fromvJEkTEM, todB9zCpt, tokenIdlBEPj8, _dataKRIWz4m, {from: accounts[4]});
		const null04jksC = await contractrJbc4Q2.isApprovedForAll.call(ownerU5zJ9ml, operatorzEiaLi, {from: accounts[0]});
		await contractrJbc4Q2.transferFrom.call(fromml710Jv, toMBmmuA5, tokenId99hiI5, {from: "0x0000000000000000000000000000000000000001"});
		const nullt8atE7 = await contractrJbc4Q2.isApprovedForAll.call(ownervmyDt1A, operatorETNzP5D, {from: accounts[4]});

		assert.equal(nullOoFW0gD, 0)
		await expect(contractrJbc4Q2.setApprovalForAll.call(toSSL3XMp, approvediX02W2R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})