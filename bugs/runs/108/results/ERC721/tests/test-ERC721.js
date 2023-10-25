const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractP49SfYU = await ERC721.new({from: accounts[0]});
		const tokenIdIWbQvgn = BigInt("1262")
		const approvedaLYy5g = false
		const tofDtRKEk = accounts[3]
		const approvedQp3cgZ1 = true
		const tokXJXhiz = accounts[5]
		const nullkLWd5X = await contractP49SfYU.getApproved.call(tokenIdIWbQvgn, {from: accounts[4]});
		await contractP49SfYU.setApprovalForAll.call(tofDtRKEk, approvedaLYy5g, {from: accounts[0]});
		await contractP49SfYU.setApprovalForAll.call(tokXJXhiz, approvedQp3cgZ1, {from: accounts[3]});

		await expect(contractP49SfYU.getApproved.call(tokenIdIWbQvgn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrAOFNOZ = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const approvedvQZHZ7l = false
		const toLNNgAyx = accounts[2]
		const tokenIddRShLDw = BigInt("2004")
		const toRuAYxv8 = accounts[0]
		const tokenIdrX2VuX6 = BigInt("1790")
		const tokenIdc5nshWp = BigInt("847")
		await contractrAOFNOZ.setApprovalForAll.call(toLNNgAyx, approvedvQZHZ7l, {from: accounts[2]});
		await contractrAOFNOZ.approve.call(toRuAYxv8, tokenIddRShLDw, {from: accounts[5]});
		const nulluBU7dCq = await contractrAOFNOZ.getApproved.call(tokenIdrX2VuX6, {from: "0x0000000000000000000000000000000000000001"});
		const nullmw6SVBP = await contractrAOFNOZ.ownerOf.call(tokenIdc5nshWp, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contractllGzmLN = await ERC721.new({from: accounts[5]});
		const tokenIdFCk5Oa7 = BigInt("1718")
		const approvedkvVnoZD = true
		const tohkxDKBR = accounts[3]
		const tokenIdZ1d9Ye = BigInt("387")
		const tobCJipDZ = accounts[0]
		const fromzdjScTC = accounts[3]
		const tokenIdqe9tiAP = BigInt("1007")
		const approvedv7Gqukh = true
		const toZa0rPzZ = accounts[1]
		const tokenIdS6RJlYq = BigInt("390")
		const nullzAhGfsT = await contractllGzmLN.ownerOf.call(tokenIdFCk5Oa7, {from: accounts[4]});
		await contractllGzmLN.setApprovalForAll.call(tohkxDKBR, approvedkvVnoZD, {from: accounts[3]});
		await contractllGzmLN.transferFrom.call(fromzdjScTC, tobCJipDZ, tokenIdZ1d9Ye, {from: accounts[0]});
		const nullqyxyoVq = await contractllGzmLN.ownerOf.call(tokenIdqe9tiAP, {from: accounts[3]});
		await contractllGzmLN.setApprovalForAll.call(toZa0rPzZ, approvedv7Gqukh, {from: accounts[0]});
		const nulluXT7wdj = await contractllGzmLN.getApproved.call(tokenIdS6RJlYq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractllGzmLN.ownerOf.call(tokenIdFCk5Oa7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractjgbJ4Ms = await ERC721.new({from: accounts[4]});
		const tokenIdrySvFsX = BigInt("1977")
		const toDr8PdF8 = accounts[1]
		const fromgyMgZXj = accounts[4]
		const ownerqnhayZv = accounts[1]
		const tokenIdOqqWfQ = BigInt("65")
		const touzzy5NF = "0x0000000000000000000000000000000000000001"
		const frompAmR7Ng = accounts[2]
		const tokenIdIkv6Xan = BigInt("52")
		const toLgFnuf6 = accounts[2]
		const tokenIdigR1e52 = BigInt("519")
		const tohp6YMid = accounts[1]
		const fromS7Am9UK = accounts[4]
		const tokenIdo8g7Z65 = BigInt("416")
		await contractjgbJ4Ms.safeTransferFrom.call(fromgyMgZXj, toDr8PdF8, tokenIdrySvFsX, {from: accounts[4]});
		const nullWTWgRT3 = await contractjgbJ4Ms.balanceOf.call(ownerqnhayZv, {from: "0x0000000000000000000000000000000000000001"});
		await contractjgbJ4Ms.safeTransferFrom.call(frompAmR7Ng, touzzy5NF, tokenIdOqqWfQ, {from: accounts[4]});
		await contractjgbJ4Ms.approve.call(toLgFnuf6, tokenIdIkv6Xan, {from: accounts[1]});
		await contractjgbJ4Ms.safeTransferFrom.call(fromS7Am9UK, tohp6YMid, tokenIdigR1e52, {from: accounts[0]});
		const nullkR7yrj = await contractjgbJ4Ms.getApproved.call(tokenIdo8g7Z65, {from: accounts[4]});

		await expect(contractjgbJ4Ms.safeTransferFrom.call(fromgyMgZXj, toDr8PdF8, tokenIdrySvFsX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractp6hNNOL = await ERC721.new({from: accounts[3]});
		const tokenIdSCRF4AW = BigInt("1721")
		const toDCLmJZm = accounts[3]
		const approvedRx4jX6e = false
		const todk5NpoL = "0x0000000000000000000000000000000000000001"
		const tokenIdGEHt0Lz = BigInt("1095")
		const toQ7YZ2IP = accounts[2]
		const fromuUAnp0G = accounts[2]
		const approvedLIT7nb6 = false
		const toSbAMda = accounts[0]
		const tokenIdtvpKwSv = BigInt("604")
		await contractp6hNNOL.approve.call(toDCLmJZm, tokenIdSCRF4AW, {from: accounts[5]});
		await contractp6hNNOL.setApprovalForAll.call(todk5NpoL, approvedRx4jX6e, {from: accounts[0]});
		await contractp6hNNOL.transferFrom.call(fromuUAnp0G, toQ7YZ2IP, tokenIdGEHt0Lz, {from: "0x0000000000000000000000000000000000000001"});
		await contractp6hNNOL.setApprovalForAll.call(toSbAMda, approvedLIT7nb6, {from: "0x0000000000000000000000000000000000000001"});
		const nulltV6zdc7 = await contractp6hNNOL.getApproved.call(tokenIdtvpKwSv, {from: accounts[0]});

		await expect(contractp6hNNOL.approve.call(toDCLmJZm, tokenIdSCRF4AW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractyiFeQUE = await ERC721.new({from: accounts[1]});
		const operatorlpJOOsu = accounts[1]
		const ownersorlOc = "0x0000000000000000000000000000000000000001"
		const tokenIdzJoVeCg = BigInt("538")
		const tokenIdhOLdepa = BigInt("831")
		const toQ0szasN = accounts[0]
		const tokenIdO3aCCH2 = BigInt("1366")
		const toM2sQEir = accounts[4]
		const tokenIdwYXj5tG = BigInt("1495")
		const toewQ4CMg = accounts[2]
		const nullM7IwPVR = await contractyiFeQUE.isApprovedForAll.call(ownersorlOc, operatorlpJOOsu, {from: accounts[0]});
		const nulloSNCMHV = await contractyiFeQUE.ownerOf.call(tokenIdzJoVeCg, {from: accounts[1]});
		await contractyiFeQUE.approve.call(toQ0szasN, tokenIdhOLdepa, {from: accounts[4]});
		await contractyiFeQUE.approve.call(toM2sQEir, tokenIdO3aCCH2, {from: accounts[2]});
		await contractyiFeQUE.approve.call(toewQ4CMg, tokenIdwYXj5tG, {from: accounts[3]});

		assert.equal(nullM7IwPVR, false)
		await expect(contractyiFeQUE.ownerOf.call(tokenIdzJoVeCg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractigbbyBH = await ERC721.new({from: accounts[4]});
		const ownerfK52Evb = accounts[1]
		const tokenIdhUqKDae = BigInt("65")
		const toqSCXbUV = "0x0000000000000000000000000000000000000001"
		const fromCTllp9j = accounts[2]
		const tokenIdPXLfCpg = BigInt("52")
		const tokJbya6A = accounts[2]
		const tokenIduA78Idz = BigInt("519")
		const topFvmH6e = accounts[1]
		const fromURGQv3U = accounts[4]
		const tokenIdKMRbST = BigInt("416")
		const nullhq9YehA = await contractigbbyBH.balanceOf.call(ownerfK52Evb, {from: "0x0000000000000000000000000000000000000001"});
		await contractigbbyBH.safeTransferFrom.call(fromCTllp9j, toqSCXbUV, tokenIdhUqKDae, {from: accounts[4]});
		await contractigbbyBH.approve.call(tokJbya6A, tokenIdPXLfCpg, {from: accounts[1]});
		await contractigbbyBH.safeTransferFrom.call(fromURGQv3U, topFvmH6e, tokenIduA78Idz, {from: accounts[0]});
		const nullOjYABT6 = await contractigbbyBH.getApproved.call(tokenIdKMRbST, {from: accounts[4]});

		assert.equal(nullhq9YehA, 0)
		await expect(contractigbbyBH.safeTransferFrom.call(fromCTllp9j, toqSCXbUV, tokenIdhUqKDae, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfLxuiD = await ERC721.new({from: accounts[5]});
		const approveddOMGoZZ = true
		const toNvt9cgg = accounts[0]
		const operatorjrf9TQS = "0x0000000000000000000000000000000000000001"
		const ownernfzDHBL = accounts[0]
		const operatorxKrpjfZ = accounts[4]
		const ownerGyuStZ2 = accounts[0]
		const tokenIdhxd9y4c = BigInt("1180")
		const toNRnmuMn = accounts[3]
		const frombIHfeP5 = accounts[0]
		const tokenIdrRMXMN2 = BigInt("336")
		const toNdk8Fpp = accounts[6]
		const tokenIdmn21jDU = BigInt("1491")
		const toOZuaOSv = accounts[0]
		await contractfLxuiD.setApprovalForAll.call(toNvt9cgg, approveddOMGoZZ, {from: accounts[3]});
		const nullEFXHuD3 = await contractfLxuiD.isApprovedForAll.call(ownernfzDHBL, operatorjrf9TQS, {from: accounts[5]});
		const nullo3k3Lk = await contractfLxuiD.isApprovedForAll.call(ownerGyuStZ2, operatorxKrpjfZ, {from: "0x0000000000000000000000000000000000000001"});
		await contractfLxuiD.safeTransferFrom.call(frombIHfeP5, toNRnmuMn, tokenIdhxd9y4c, {from: accounts[2]});
		await contractfLxuiD.approve.call(toNdk8Fpp, tokenIdrRMXMN2, {from: accounts[5]});
		await contractfLxuiD.approve.call(toOZuaOSv, tokenIdmn21jDU, {from: accounts[2]});

		assert.equal(nullEFXHuD3, false)
		assert.equal(nullo3k3Lk, false)
		await expect(contractfLxuiD.isApprovedForAll.call(ownerGyuStZ2, operatorxKrpjfZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractHyzScOC = await ERC721.new({from: accounts[1]});
		const tokenIdTPRjfNs = BigInt("1966")
		const toPbV67KA = "0x0000000000000000000000000000000000000001"
		const fromAdlmFaR = accounts[1]
		const tokenIdn4bN0rr = BigInt("538")
		const tokenIdfsyUdCD = BigInt("1457")
		const tokcYfdpk = accounts[2]
		await contractHyzScOC.transferFrom.call(fromAdlmFaR, toPbV67KA, tokenIdTPRjfNs, {from: accounts[4]});
		const nulliLbKPPO = await contractHyzScOC.ownerOf.call(tokenIdn4bN0rr, {from: accounts[1]});
		await contractHyzScOC.approve.call(tokcYfdpk, tokenIdfsyUdCD, {from: accounts[3]});

		await expect(contractHyzScOC.transferFrom.call(fromAdlmFaR, toPbV67KA, tokenIdTPRjfNs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWLg9s9u = await ERC721.new({from: accounts[3]});
		const approvedR41SEw = false
		const tozTc5Tya = accounts[0]
		const approvedKZpk7ln = false
		const tok4i0H1Y = accounts[3]
		await contractWLg9s9u.setApprovalForAll.call(tozTc5Tya, approvedR41SEw, {from: accounts[2]});
		await contractWLg9s9u.setApprovalForAll.call(tok4i0H1Y, approvedKZpk7ln, {from: accounts[3]});

		await expect(contractWLg9s9u.setApprovalForAll.call(tozTc5Tya, approvedR41SEw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})