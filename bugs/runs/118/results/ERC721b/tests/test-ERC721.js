const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractBCH7ppT = await ERC721.new({from: accounts[3]});
		const tokenIdH44mK26 = BigInt("1075")
		const tokenId0fsjeJ = BigInt("1071")
		const toaxOyyz = accounts[2]
		const froms9iYrvB = accounts[4]
		const tokenIdC0ChenX = BigInt("190")
		const toHIaH8HB = "0x0000000000000000000000000000000000000001"
		const fromUYTPtNv = accounts[1]
		const tokenIdFMH4diz = BigInt("1880")
		const tonNtEW7x = accounts[5]
		const fromPr9UYLo = accounts[2]
		const tokenIdF9u103 = BigInt("1929")
		const toUPXkcRn = "0x0000000000000000000000000000000000000001"
		const fromY3Oum9C = accounts[0]
		const nullLm4pwdS = await contractBCH7ppT.ownerOf.call(tokenIdH44mK26, {from: accounts[1]});
		await contractBCH7ppT.transferFrom.call(froms9iYrvB, toaxOyyz, tokenId0fsjeJ, {from: accounts[1]});
		await contractBCH7ppT.safeTransferFrom.call(fromUYTPtNv, toHIaH8HB, tokenIdC0ChenX, {from: accounts[4]});
		await contractBCH7ppT.safeTransferFrom.call(fromPr9UYLo, tonNtEW7x, tokenIdFMH4diz, {from: accounts[4]});
		await contractBCH7ppT.transferFrom.call(fromY3Oum9C, toUPXkcRn, tokenIdF9u103, {from: accounts[2]});

		await expect(contractBCH7ppT.ownerOf.call(tokenIdH44mK26, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractIIgYoAu = await ERC721.new({from: accounts[1]});
		const tokenIdAETx2JG = BigInt("1069")
		const tone0xttd = accounts[2]
		const fromqj5Up5l = accounts[0]
		const tokenIdpBNV3l = BigInt("616")
		const tokenIdNP19YfM = BigInt("64")
		const toIiCZhzC = accounts[5]
		const fromsAaYR51 = accounts[0]
		const approvedD4NLNYi = false
		const toUTfD7GM = accounts[3]
		const tokenIdjMCC5uZ = BigInt("1")
		const tokRJp1F = accounts[0]
		await contractIIgYoAu.safeTransferFrom.call(fromqj5Up5l, tone0xttd, tokenIdAETx2JG, {from: accounts[4]});
		const nullMgCYwr9 = await contractIIgYoAu.getApproved.call(tokenIdpBNV3l, {from: accounts[3]});
		await contractIIgYoAu.transferFrom.call(fromsAaYR51, toIiCZhzC, tokenIdNP19YfM, {from: accounts[1]});
		await contractIIgYoAu.setApprovalForAll.call(toUTfD7GM, approvedD4NLNYi, {from: accounts[4]});
		await contractIIgYoAu.approve.call(tokRJp1F, tokenIdjMCC5uZ, {from: accounts[4]});

		await expect(contractIIgYoAu.safeTransferFrom.call(fromqj5Up5l, tone0xttd, tokenIdAETx2JG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWwcSFzI = await ERC721.new({from: accounts[0]});
		const tokenIdKHBeQvI = BigInt("1350")
		const toXmndoXa = accounts[3]
		const fromhrILmG = accounts[4]
		const tokenIdFpofYKs = BigInt("204")
		const toEVaapAZ = accounts[0]
		const tokenIdClpJC9M = BigInt("652")
		await contractWwcSFzI.transferFrom.call(fromhrILmG, toXmndoXa, tokenIdKHBeQvI, {from: accounts[0]});
		await contractWwcSFzI.approve.call(toEVaapAZ, tokenIdFpofYKs, {from: accounts[2]});
		const nullFx9atjV = await contractWwcSFzI.getApproved.call(tokenIdClpJC9M, {from: accounts[5]});

		await expect(contractWwcSFzI.transferFrom.call(fromhrILmG, toXmndoXa, tokenIdKHBeQvI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBfYxThe = await ERC721.new({from: accounts[0]});
		const tokenIdRkrT2aY = BigInt("516")
		const _dataaltzGnt = "0x181d111d01170e1e06030a1d0c1f010b0c0c03131d1e0d1f1f130d18131e"
		const tokenIdAuEtzk = BigInt("1719")
		const topyAMD0N = accounts[2]
		const fromuNfORG3 = accounts[0]
		const tokenIdJfAQgjg = BigInt("622")
		const toNuwlZ15 = accounts[3]
		const fromMlKllYa = accounts[4]
		const _dataU1q7mop = "0x161e091a0e17060a050c171c06150913"
		const tokenIdCxQN8B9 = BigInt("875")
		const toqmSDCY = accounts[3]
		const fromilg2ObC = accounts[1]
		const tokenIdshpTmU = BigInt("1224")
		const toKFNq3gq = accounts[4]
		const fromg9ftK2f = accounts[1]
		const nullObqrZte = await contractBfYxThe.getApproved.call(tokenIdRkrT2aY, {from: accounts[5]});
		await contractBfYxThe.safeTransferFrom.call(fromuNfORG3, topyAMD0N, tokenIdAuEtzk, _dataaltzGnt, {from: accounts[2]});
		await contractBfYxThe.transferFrom.call(fromMlKllYa, toNuwlZ15, tokenIdJfAQgjg, {from: accounts[1]});
		await contractBfYxThe.safeTransferFrom.call(fromilg2ObC, toqmSDCY, tokenIdCxQN8B9, _dataU1q7mop, {from: accounts[0]});
		await contractBfYxThe.transferFrom.call(fromg9ftK2f, toKFNq3gq, tokenIdshpTmU, {from: accounts[5]});

		await expect(contractBfYxThe.getApproved.call(tokenIdRkrT2aY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPHA2TFY = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const _datab40ErvL = "0x1a1009170018171807190d1201101b0e1803060d1b0e150e16140812"
		const tokenIdGMiVWqm = BigInt("1749")
		const tolzRxghG = accounts[5]
		const fromjBJAdBQ = accounts[5]
		const tokenIdbMLfbu6 = BigInt("270")
		const toWgQAXdc = accounts[1]
		const fromHtRYrt = accounts[0]
		const tokenIdRoab3fB = BigInt("1301")
		const touesOJa = accounts[4]
		const fromA0M4Kg1 = accounts[2]
		await contractPHA2TFY.safeTransferFrom.call(fromjBJAdBQ, tolzRxghG, tokenIdGMiVWqm, _datab40ErvL, {from: accounts[3]});
		await contractPHA2TFY.transferFrom.call(fromHtRYrt, toWgQAXdc, tokenIdbMLfbu6, {from: accounts[0]});
		await contractPHA2TFY.transferFrom.call(fromA0M4Kg1, touesOJa, tokenIdRoab3fB, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC721', async () => {
		const contractWJ1SDe = await ERC721.new({from: accounts[2]});
		const ownergt7AoV = accounts[2]
		const _dataMtdj4J = "0x1f01020f1d080d0a0c0a1b041e01170b1e061d17090d1b0d"
		const tokenIdKvcmPSu = BigInt("1435")
		const toEJvdVHI = accounts[3]
		const fromtfiWBsq = accounts[4]
		const tokenIdu6mG9YY = BigInt("1938")
		const nullZsTNW6n = await contractWJ1SDe.balanceOf.call(ownergt7AoV, {from: accounts[5]});
		await contractWJ1SDe.safeTransferFrom.call(fromtfiWBsq, toEJvdVHI, tokenIdKvcmPSu, _dataMtdj4J, {from: accounts[4]});
		const nullVKg6W5x = await contractWJ1SDe.ownerOf.call(tokenIdu6mG9YY, {from: accounts[1]});

		assert.equal(nullZsTNW6n, 0)
		await expect(contractWJ1SDe.safeTransferFrom.call(fromtfiWBsq, toEJvdVHI, tokenIdKvcmPSu, _dataMtdj4J, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractvUuKe4V = await ERC721.new({from: accounts[1]});
		const approvedVNy6kaE = false
		const toRvUR43i = accounts[1]
		const approvedvTTEIhq = true
		const toUzSVBGP = accounts[2]
		const tokenIdLsJMoc = BigInt("1476")
		const toU1qKafq = accounts[0]
		const fromT5eFhI2 = accounts[0]
		const tokenIduu3FPMv = BigInt("1169")
		await contractvUuKe4V.setApprovalForAll.call(toRvUR43i, approvedVNy6kaE, {from: accounts[2]});
		await contractvUuKe4V.setApprovalForAll.call(toUzSVBGP, approvedvTTEIhq, {from: accounts[1]});
		await contractvUuKe4V.safeTransferFrom.call(fromT5eFhI2, toU1qKafq, tokenIdLsJMoc, {from: accounts[2]});
		const nullG4T5aUo = await contractvUuKe4V.getApproved.call(tokenIduu3FPMv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractvUuKe4V.setApprovalForAll.call(toRvUR43i, approvedVNy6kaE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBGqqJb1 = await ERC721.new({from: accounts[0]});
		const operatormCFMLYD = accounts[5]
		const owneru4c6bb = accounts[0]
		const tokenIdzybkIQT = BigInt("1557")
		const tokenIdBGhZ9Ws = BigInt("792")
		const tooQtMjM = accounts[5]
		const fromNJJs657 = "0x0000000000000000000000000000000000000001"
		const approvede6MIRgy = false
		const toehTRdl = accounts[2]
		const approvedgcfJlSm = false
		const toWhwHoLs = accounts[5]
		const operators5QAK4y = accounts[3]
		const ownerbLU9DMA = accounts[4]
		const tokenIdlbECzV4 = BigInt("1214")
		const toG5ijAPv = accounts[4]
		const fromGfD4bsI = accounts[2]
		const tokenIdyUxL2q6 = BigInt("1859")
		const nullXJTZSB = await contractBGqqJb1.isApprovedForAll.call(owneru4c6bb, operatormCFMLYD, {from: accounts[4]});
		const nullOlw8XJ = await contractBGqqJb1.ownerOf.call(tokenIdzybkIQT, {from: accounts[5]});
		await contractBGqqJb1.transferFrom.call(fromNJJs657, tooQtMjM, tokenIdBGhZ9Ws, {from: accounts[0]});
		await contractBGqqJb1.setApprovalForAll.call(toehTRdl, approvede6MIRgy, {from: accounts[4]});
		await contractBGqqJb1.setApprovalForAll.call(toWhwHoLs, approvedgcfJlSm, {from: accounts[1]});
		const nullR7uvOvA = await contractBGqqJb1.isApprovedForAll.call(ownerbLU9DMA, operators5QAK4y, {from: "0x0000000000000000000000000000000000000001"});
		await contractBGqqJb1.transferFrom.call(fromGfD4bsI, toG5ijAPv, tokenIdlbECzV4, {from: accounts[1]});
		const nullgBJhKJ6 = await contractBGqqJb1.getApproved.call(tokenIdyUxL2q6, {from: accounts[2]});

		assert.equal(nullXJTZSB, false)
		await expect(contractBGqqJb1.ownerOf.call(tokenIdzybkIQT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractL6IomoE = await ERC721.new({from: accounts[0]});
		const tokenIdRU14MQG = BigInt("204")
		const toJm3gH0D = accounts[0]
		const tokenIdG7UPcr = BigInt("641")
		await contractL6IomoE.approve.call(toJm3gH0D, tokenIdRU14MQG, {from: accounts[2]});
		const nullwNG48xj = await contractL6IomoE.getApproved.call(tokenIdG7UPcr, {from: accounts[5]});

		await expect(contractL6IomoE.approve.call(toJm3gH0D, tokenIdRU14MQG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract4aFfaA = await ERC721.new({from: accounts[1]});
		const approvedM2uIU4p = true
		const toVQdFMrl = accounts[1]
		const tokenIdwfvLyCp = BigInt("1069")
		const toXGB6E8t = accounts[2]
		const fromDwwhzCi = accounts[0]
		const tokenIdLgXoK1 = BigInt("989")
		const tokenIdNmKxknS = BigInt("1447")
		const toplmHpmB = accounts[4]
		const fromLB8ec0l = accounts[2]
		const tokenIdfk9N1Jq = BigInt("616")
		const tokenIdi2Jntuc = BigInt("64")
		const tod8ffpPl = accounts[5]
		const fromCOK0Mmt = accounts[0]
		const approvedjEVqNGk = false
		const toY4dDvpE = accounts[3]
		const tokenIdv6CEhQQ = BigInt("1")
		const tom9kseax = accounts[0]
		await contract4aFfaA.setApprovalForAll.call(toVQdFMrl, approvedM2uIU4p, {from: accounts[1]});
		await contract4aFfaA.safeTransferFrom.call(fromDwwhzCi, toXGB6E8t, tokenIdwfvLyCp, {from: accounts[4]});
		const nullX4CVHIs = await contract4aFfaA.ownerOf.call(tokenIdLgXoK1, {from: accounts[2]});
		await contract4aFfaA.transferFrom.call(fromLB8ec0l, toplmHpmB, tokenIdNmKxknS, {from: accounts[4]});
		const nullbXWVA6 = await contract4aFfaA.getApproved.call(tokenIdfk9N1Jq, {from: accounts[3]});
		await contract4aFfaA.transferFrom.call(fromCOK0Mmt, tod8ffpPl, tokenIdi2Jntuc, {from: accounts[1]});
		await contract4aFfaA.setApprovalForAll.call(toY4dDvpE, approvedjEVqNGk, {from: accounts[4]});
		await contract4aFfaA.approve.call(tom9kseax, tokenIdv6CEhQQ, {from: accounts[4]});

		await expect(contract4aFfaA.setApprovalForAll.call(toVQdFMrl, approvedM2uIU4p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})