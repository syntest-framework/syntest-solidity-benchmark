const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contracttQI727C = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdtcR1Dpf = BigInt("1913")
		const tokenIdoZ6nwER = BigInt("281")
		const toGMhReJ = accounts[3]
		const fromaPTNqIq = accounts[2]
		const tokenIdtWGQpu = BigInt("1181")
		const toLLcJRcr = accounts[2]
		const fromC3pDJF2 = accounts[0]
		const approvedQFn1XrO = false
		const toIhm8HU = accounts[2]
		const nullTHH3lk = await contracttQI727C.ownerOf.call(tokenIdtcR1Dpf, {from: accounts[5]});
		await contracttQI727C.safeTransferFrom.call(fromaPTNqIq, toGMhReJ, tokenIdoZ6nwER, {from: accounts[0]});
		await contracttQI727C.safeTransferFrom.call(fromC3pDJF2, toLLcJRcr, tokenIdtWGQpu, {from: accounts[1]});
		await contracttQI727C.setApprovalForAll.call(toIhm8HU, approvedQFn1XrO, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractOKngR2K = await ERC721.new({from: accounts[1]});
		const tokenId8Gq2Xq = BigInt("1299")
		const toDjOVePa = accounts[4]
		const fromtn8fH31 = "0x0000000000000000000000000000000000000001"
		const operatorneyg8f = accounts[4]
		const ownerpJ0310K = accounts[0]
		const owneru1LuvRA = accounts[0]
		const operatorfzF98M = accounts[2]
		const ownery92loZA = accounts[1]
		await contractOKngR2K.safeTransferFrom.call(fromtn8fH31, toDjOVePa, tokenId8Gq2Xq, {from: accounts[4]});
		const nulleeTyztk = await contractOKngR2K.isApprovedForAll.call(ownerpJ0310K, operatorneyg8f, {from: accounts[0]});
		const nullWAho7y = await contractOKngR2K.balanceOf.call(owneru1LuvRA, {from: accounts[0]});
		const nullq9R4M3z = await contractOKngR2K.isApprovedForAll.call(ownery92loZA, operatorfzF98M, {from: accounts[0]});

		await expect(contractOKngR2K.safeTransferFrom.call(fromtn8fH31, toDjOVePa, tokenId8Gq2Xq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBOhh7U = await ERC721.new({from: accounts[3]});
		const operatorhzPo2Sz = accounts[3]
		const ownerrYi9S1 = "0x0000000000000000000000000000000000000001"
		const tokenIdREeqzr = BigInt("1465")
		const tor6ZEU2d = accounts[0]
		const ownerhiYaS2m = accounts[5]
		const tokenIdEosTK4m = BigInt("402")
		const touJ577WF = "0x0000000000000000000000000000000000000001"
		const _datag3vfxyZ = "0x10010b111311180d1816011d091d130e1e1c02170b1b0202001812020c0817"
		const tokenIdRpg0u3P = BigInt("1278")
		const toSAl4CqW = accounts[1]
		const fromlsspfjn = accounts[3]
		const nullyChNbG1 = await contractBOhh7U.isApprovedForAll.call(ownerrYi9S1, operatorhzPo2Sz, {from: accounts[1]});
		await contractBOhh7U.approve.call(tor6ZEU2d, tokenIdREeqzr, {from: accounts[2]});
		const nulloyEsqN4 = await contractBOhh7U.balanceOf.call(ownerhiYaS2m, {from: accounts[2]});
		await contractBOhh7U.approve.call(touJ577WF, tokenIdEosTK4m, {from: accounts[2]});
		await contractBOhh7U.safeTransferFrom.call(fromlsspfjn, toSAl4CqW, tokenIdRpg0u3P, _datag3vfxyZ, {from: accounts[3]});

		assert.equal(nullyChNbG1, false)
		await expect(contractBOhh7U.approve.call(tor6ZEU2d, tokenIdREeqzr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractF59bK9I = await ERC721.new({from: accounts[1]});
		const tokenIdtaz6eO9 = BigInt("1564")
		const approvedUIycYcD = false
		const totDV3ggc = accounts[0]
		const tokenIdFgJLGzB = BigInt("498")
		const toy5R41Oj = accounts[1]
		const fromD3L1aC = accounts[4]
		const operatorczkiwvc = accounts[1]
		const ownerhqi8CCg = accounts[2]
		const tokenIdLNqkvYV = BigInt("1637")
		const nullFpHm1ac = await contractF59bK9I.getApproved.call(tokenIdtaz6eO9, {from: accounts[4]});
		await contractF59bK9I.setApprovalForAll.call(totDV3ggc, approvedUIycYcD, {from: accounts[5]});
		await contractF59bK9I.safeTransferFrom.call(fromD3L1aC, toy5R41Oj, tokenIdFgJLGzB, {from: accounts[0]});
		const nullL9zFDrD = await contractF59bK9I.isApprovedForAll.call(ownerhqi8CCg, operatorczkiwvc, {from: accounts[5]});
		const nullGlFfkuE = await contractF59bK9I.ownerOf.call(tokenIdLNqkvYV, {from: accounts[0]});

		await expect(contractF59bK9I.getApproved.call(tokenIdtaz6eO9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractRQIp61G = await ERC721.new({from: accounts[4]});
		const tokenIdvvnXfuP = BigInt("661")
		const toJt8J1nv = accounts[4]
		const fromKjR1wvJ = accounts[1]
		const operatorJ59KzJ = accounts[4]
		const ownerVUWsld = accounts[3]
		const _datatqwmxJK = "0x0304080014030a05181f01111a0412100717030f1c191e16131108031c0e08"
		const tokenIdRJghrnk = BigInt("320")
		const tohgrzB2z = accounts[0]
		const fromPfw7MRX = accounts[2]
		const tokenIdKcmbPgT = BigInt("105")
		const tokenIdFplPzZu = BigInt("363")
		const toxGqByGj = "0x0000000000000000000000000000000000000001"
		const fromOW3MFe = accounts[4]
		await contractRQIp61G.transferFrom.call(fromKjR1wvJ, toJt8J1nv, tokenIdvvnXfuP, {from: accounts[1]});
		const nulltpp0RGw = await contractRQIp61G.isApprovedForAll.call(ownerVUWsld, operatorJ59KzJ, {from: accounts[0]});
		await contractRQIp61G.safeTransferFrom.call(fromPfw7MRX, tohgrzB2z, tokenIdRJghrnk, _datatqwmxJK, {from: "0x0000000000000000000000000000000000000001"});
		const nullEZ9o1zj = await contractRQIp61G.getApproved.call(tokenIdKcmbPgT, {from: accounts[2]});
		await contractRQIp61G.transferFrom.call(fromOW3MFe, toxGqByGj, tokenIdFplPzZu, {from: accounts[0]});

		await expect(contractRQIp61G.transferFrom.call(fromKjR1wvJ, toJt8J1nv, tokenIdvvnXfuP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractLY7sNm = await ERC721.new({from: accounts[0]});
		const operatorhY4FNSV = accounts[0]
		const ownerCZL3Dx = accounts[4]
		const approvedENtEJG = false
		const tokjxM1Jt = "0x0000000000000000000000000000000000000001"
		const operatori1u5DhT = accounts[3]
		const ownerISEAQdV = accounts[2]
		const tokenIde6kG1tJ = BigInt("864")
		const toFzSqpD2 = accounts[3]
		const tokenIdpXL9xcw = BigInt("2003")
		const tobngMpHm = accounts[3]
		const nullZ0ctmV = await contractLY7sNm.isApprovedForAll.call(ownerCZL3Dx, operatorhY4FNSV, {from: accounts[4]});
		await contractLY7sNm.setApprovalForAll.call(tokjxM1Jt, approvedENtEJG, {from: "0x0000000000000000000000000000000000000001"});
		const nulldVbjs7p = await contractLY7sNm.isApprovedForAll.call(ownerISEAQdV, operatori1u5DhT, {from: "0x0000000000000000000000000000000000000001"});
		await contractLY7sNm.approve.call(toFzSqpD2, tokenIde6kG1tJ, {from: accounts[3]});
		await contractLY7sNm.approve.call(tobngMpHm, tokenIdpXL9xcw, {from: accounts[3]});

		assert.equal(nullZ0ctmV, false)
		await expect(contractLY7sNm.setApprovalForAll.call(tokjxM1Jt, approvedENtEJG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfyfaOlY = await ERC721.new({from: accounts[3]});
		const ownersxUF5qN = accounts[4]
		const tokenIdWXBW5cN = BigInt("1035")
		const toTD9l9aT = accounts[1]
		const fromem51Mib = accounts[5]
		const tokenIdICshcq = BigInt("123")
		const toOCv6gz = accounts[3]
		const fromQTcTAYY = accounts[2]
		const tokenIdJtoVLoE = BigInt("1417")
		const tokenIdUtNI06p = BigInt("357")
		const nullehJjwjX = await contractfyfaOlY.balanceOf.call(ownersxUF5qN, {from: "0x0000000000000000000000000000000000000001"});
		await contractfyfaOlY.safeTransferFrom.call(fromem51Mib, toTD9l9aT, tokenIdWXBW5cN, {from: accounts[0]});
		await contractfyfaOlY.safeTransferFrom.call(fromQTcTAYY, toOCv6gz, tokenIdICshcq, {from: accounts[0]});
		const nullrezgaXh = await contractfyfaOlY.ownerOf.call(tokenIdJtoVLoE, {from: accounts[0]});
		const nullxIq10EN = await contractfyfaOlY.ownerOf.call(tokenIdUtNI06p, {from: accounts[1]});

		assert.equal(nullehJjwjX, 0)
		await expect(contractfyfaOlY.safeTransferFrom.call(fromem51Mib, toTD9l9aT, tokenIdWXBW5cN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractaogIx2B = await ERC721.new({from: accounts[3]});
		const approvedekfe5PF = false
		const toZcMCT9L = accounts[1]
		const tokenIdaMwCtLU = BigInt("123")
		const toN7VZ0dI = accounts[3]
		const fromM3JSri9 = accounts[2]
		const tokenIdrJ1n3DE = BigInt("357")
		const tokenIdbowPxVo = BigInt("1722")
		const toINdXqes = accounts[4]
		await contractaogIx2B.setApprovalForAll.call(toZcMCT9L, approvedekfe5PF, {from: accounts[4]});
		await contractaogIx2B.safeTransferFrom.call(fromM3JSri9, toN7VZ0dI, tokenIdaMwCtLU, {from: accounts[0]});
		const nulliVhjyh = await contractaogIx2B.ownerOf.call(tokenIdrJ1n3DE, {from: accounts[1]});
		await contractaogIx2B.approve.call(toINdXqes, tokenIdbowPxVo, {from: accounts[5]});

		await expect(contractaogIx2B.setApprovalForAll.call(toZcMCT9L, approvedekfe5PF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})