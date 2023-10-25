const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contracteqYwYG8 = await ERC721.new({from: accounts[2]});
		const operatorDbQc7On = accounts[2]
		const ownervTMYy4Z = accounts[4]
		const ownerpEp5g5h = accounts[3]
		const operatorLGtGUMz = accounts[4]
		const ownerl2it8qJ = accounts[3]
		const nullWE8Oynr = await contracteqYwYG8.isApprovedForAll.call(ownervTMYy4Z, operatorDbQc7On, {from: accounts[4]});
		const nullg3s2K8K = await contracteqYwYG8.balanceOf.call(ownerpEp5g5h, {from: accounts[1]});
		const nullWkwT1yn = await contracteqYwYG8.isApprovedForAll.call(ownerl2it8qJ, operatorLGtGUMz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullWE8Oynr, false)
		assert.equal(nullWkwT1yn, false)
		assert.equal(nullg3s2K8K, 0)
	});

	it('test for ERC721', async () => {
		const contractt8b023y = await ERC721.new({from: accounts[4]});
		const tokenIdZ48znws = BigInt("1456")
		const tokenIdLJRuj1y = BigInt("428")
		const tokenIdYX5ybsT = BigInt("1670")
		const tokenIdJC3Z73B = BigInt("2022")
		const toB1Hwx7U = accounts[2]
		const fromxP16Kj0 = accounts[1]
		const operatorjtYJP0 = accounts[2]
		const ownerFMuseEW = accounts[0]
		const nullUOsAcwU = await contractt8b023y.getApproved.call(tokenIdZ48znws, {from: accounts[5]});
		const nullHvnVo41 = await contractt8b023y.ownerOf.call(tokenIdLJRuj1y, {from: accounts[3]});
		const nullf129bpJ = await contractt8b023y.getApproved.call(tokenIdYX5ybsT, {from: accounts[4]});
		await contractt8b023y.safeTransferFrom.call(fromxP16Kj0, toB1Hwx7U, tokenIdJC3Z73B, {from: accounts[5]});
		const nullen8KxNh = await contractt8b023y.isApprovedForAll.call(ownerFMuseEW, operatorjtYJP0, {from: accounts[1]});

		await expect(contractt8b023y.getApproved.call(tokenIdZ48znws, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDAkZtO = await ERC721.new({from: accounts[3]});
		const tokenId40GHuW = BigInt("450")
		const tokenIdLpKwUst = BigInt("996")
		const toI8HS38A = accounts[4]
		const nullCoeGc0J = await contractDAkZtO.ownerOf.call(tokenId40GHuW, {from: accounts[2]});
		await contractDAkZtO.approve.call(toI8HS38A, tokenIdLpKwUst, {from: accounts[0]});

		await expect(contractDAkZtO.ownerOf.call(tokenId40GHuW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractodIArIV = await ERC721.new({from: accounts[0]});
		const approvedWpZPvw = true
		const toEn5izRP = accounts[0]
		const tokenIdh2OpC30 = BigInt("1994")
		const toP55CfV1 = accounts[1]
		const tokenIdx9zqBTw = BigInt("616")
		const topI9zEhX = accounts[3]
		const fromhQSsGmD = accounts[2]
		const tokenIdqKS5dsd = BigInt("1184")
		const togg86Z8P = accounts[0]
		await contractodIArIV.setApprovalForAll.call(toEn5izRP, approvedWpZPvw, {from: accounts[4]});
		await contractodIArIV.approve.call(toP55CfV1, tokenIdh2OpC30, {from: accounts[5]});
		await contractodIArIV.transferFrom.call(fromhQSsGmD, topI9zEhX, tokenIdx9zqBTw, {from: accounts[4]});
		await contractodIArIV.approve.call(togg86Z8P, tokenIdqKS5dsd, {from: accounts[4]});

		await expect(contractodIArIV.setApprovalForAll.call(toEn5izRP, approvedWpZPvw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbu5kwVv = await ERC721.new({from: accounts[4]});
		const tokenIdpMZdX1u = BigInt("1706")
		const tooDfIUAy = accounts[1]
		const fromKhFUs6d = accounts[0]
		const ownert8cIufx = accounts[3]
		await contractbu5kwVv.transferFrom.call(fromKhFUs6d, tooDfIUAy, tokenIdpMZdX1u, {from: "0x0000000000000000000000000000000000000001"});
		const nullyXBtppn = await contractbu5kwVv.balanceOf.call(ownert8cIufx, {from: accounts[1]});

		await expect(contractbu5kwVv.transferFrom.call(fromKhFUs6d, tooDfIUAy, tokenIdpMZdX1u, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZvem6bO = await ERC721.new({from: accounts[0]});
		const approvednIZ1p3U = true
		const todtST2tg = accounts[0]
		const _datajrCoW2q = "0x1c14180b020c0707111b0511140212171c000307200e01121c08"
		const tokenId3xjSXG = BigInt("921")
		const toHyxCwSv = accounts[5]
		const fromOOseuQz = accounts[1]
		const tokenIdYHNX6Bs = BigInt("1994")
		const toRF4JYl = accounts[1]
		const tokenIdmSgVzve = BigInt("616")
		const tojzeCqIj = accounts[3]
		const fromEfun8lm = accounts[3]
		const tokenIdSV3b4bP = BigInt("1184")
		const totrImS91 = accounts[0]
		await contractZvem6bO.setApprovalForAll.call(todtST2tg, approvednIZ1p3U, {from: accounts[4]});
		await contractZvem6bO.safeTransferFrom.call(fromOOseuQz, toHyxCwSv, tokenId3xjSXG, _datajrCoW2q, {from: accounts[3]});
		await contractZvem6bO.approve.call(toRF4JYl, tokenIdYHNX6Bs, {from: accounts[5]});
		await contractZvem6bO.transferFrom.call(fromEfun8lm, tojzeCqIj, tokenIdmSgVzve, {from: accounts[4]});
		await contractZvem6bO.approve.call(totrImS91, tokenIdSV3b4bP, {from: accounts[4]});

		await expect(contractZvem6bO.setApprovalForAll.call(todtST2tg, approvednIZ1p3U, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVcihBHN = await ERC721.new({from: accounts[4]});
		const tokenIdPSmQe5g = BigInt("801")
		const toeVXY2G = accounts[4]
		const fromT3eSZLv = "0x0000000000000000000000000000000000000001"
		const tokenIdfl1f509 = BigInt("719")
		await contractVcihBHN.safeTransferFrom.call(fromT3eSZLv, toeVXY2G, tokenIdPSmQe5g, {from: accounts[0]});
		const nullrID3eYp = await contractVcihBHN.getApproved.call(tokenIdfl1f509, {from: accounts[2]});

		await expect(contractVcihBHN.safeTransferFrom.call(fromT3eSZLv, toeVXY2G, tokenIdPSmQe5g, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrFBv3UJ = await ERC721.new({from: accounts[0]});
		const approvedS5KWK8q = false
		const toMu5XpW8 = accounts[4]
		const tokenIdsHOFVWa = BigInt("1997")
		const toZLE4gnF = accounts[4]
		const approved1e5VB0 = true
		const tosGbNz0k = accounts[0]
		const tokenIdhdy0Y23 = BigInt("1994")
		const toWArIsYa = accounts[1]
		const tokenIdzvJoHbx = BigInt("616")
		const toXmeg3M = accounts[3]
		const fromXPmonE5 = accounts[2]
		const tokenIdyXGlzRG = BigInt("1184")
		const toPnj09eK = accounts[0]
		await contractrFBv3UJ.setApprovalForAll.call(toMu5XpW8, approvedS5KWK8q, {from: accounts[4]});
		await contractrFBv3UJ.approve.call(toZLE4gnF, tokenIdsHOFVWa, {from: accounts[5]});
		await contractrFBv3UJ.setApprovalForAll.call(tosGbNz0k, approved1e5VB0, {from: accounts[4]});
		await contractrFBv3UJ.approve.call(toWArIsYa, tokenIdhdy0Y23, {from: accounts[5]});
		await contractrFBv3UJ.transferFrom.call(fromXPmonE5, toXmeg3M, tokenIdzvJoHbx, {from: accounts[4]});
		await contractrFBv3UJ.approve.call(toPnj09eK, tokenIdyXGlzRG, {from: accounts[4]});

		await expect(contractrFBv3UJ.setApprovalForAll.call(toMu5XpW8, approvedS5KWK8q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractOeTgbVN = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdKrTzhrx = BigInt("1373")
		const tokenIduPLHj04 = BigInt("1743")
		const tor1GMkcZ = accounts[4]
		const frombZy5luY = accounts[0]
		const tokenIdIDZN809 = BigInt("1750")
		const topD8U3mV = "0x0000000000000000000000000000000000000001"
		const fromKIL87Gu = accounts[3]
		const tokenIdJMIBK1V = BigInt("1792")
		const toOgSH3JD = accounts[4]
		const fromIKEzfx = accounts[2]
		const operatorvPccsS = accounts[3]
		const ownerAC2N6QA = accounts[0]
		const tokenIdK96JM4w = BigInt("2026")
		const togO5iv2y = accounts[1]
		const fromJ4yWxeY = accounts[5]
		const nullqN3r3eF = await contractOeTgbVN.ownerOf.call(tokenIdKrTzhrx, {from: accounts[0]});
		await contractOeTgbVN.safeTransferFrom.call(frombZy5luY, tor1GMkcZ, tokenIduPLHj04, {from: accounts[2]});
		await contractOeTgbVN.transferFrom.call(fromKIL87Gu, topD8U3mV, tokenIdIDZN809, {from: accounts[4]});
		await contractOeTgbVN.transferFrom.call(fromIKEzfx, toOgSH3JD, tokenIdJMIBK1V, {from: "0x0000000000000000000000000000000000000001"});
		const null749hF9 = await contractOeTgbVN.isApprovedForAll.call(ownerAC2N6QA, operatorvPccsS, {from: "0x0000000000000000000000000000000000000001"});
		await contractOeTgbVN.transferFrom.call(fromJ4yWxeY, togO5iv2y, tokenIdK96JM4w, {from: accounts[1]});
	});
})