const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractUMvZjeP = await ERC721.new({from: accounts[2]});
		const tokenIdNYyEIW6 = BigInt("875")
		const tovImokmE = accounts[2]
		const frommIahn9 = accounts[1]
		const tokenIda3B9W5P = BigInt("36")
		const tokenIdgyZ51uf = BigInt("1405")
		const tonhkWYNM = accounts[0]
		const frommTGeYdJ = accounts[0]
		const operatorA7Oxar5 = accounts[0]
		const ownerk5b4DRP = "0x0000000000000000000000000000000000000001"
		await contractUMvZjeP.safeTransferFrom.call(frommIahn9, tovImokmE, tokenIdNYyEIW6, {from: accounts[2]});
		const nullF02drjT = await contractUMvZjeP.ownerOf.call(tokenIda3B9W5P, {from: accounts[2]});
		await contractUMvZjeP.safeTransferFrom.call(frommTGeYdJ, tonhkWYNM, tokenIdgyZ51uf, {from: accounts[2]});
		const nullKRITnwN = await contractUMvZjeP.isApprovedForAll.call(ownerk5b4DRP, operatorA7Oxar5, {from: accounts[5]});

		await expect(contractUMvZjeP.safeTransferFrom.call(frommIahn9, tovImokmE, tokenIdNYyEIW6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCYsfmtx = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const _datazNRxKrg = "0x1f14150a0f"
		const tokenIdqn7uaCP = BigInt("731")
		const toPg4rwSy = accounts[0]
		const fromVEllQNt = accounts[0]
		const tokenIdsEcKOg3 = BigInt("353")
		const tokenIdpzdlYTW = BigInt("366")
		await contractCYsfmtx.safeTransferFrom.call(fromVEllQNt, toPg4rwSy, tokenIdqn7uaCP, _datazNRxKrg, {from: "0x0000000000000000000000000000000000000001"});
		const nullzlcrz86 = await contractCYsfmtx.getApproved.call(tokenIdsEcKOg3, {from: accounts[4]});
		const nullYutpVel = await contractCYsfmtx.ownerOf.call(tokenIdpzdlYTW, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractikP8N6R = await ERC721.new({from: accounts[2]});
		const tokenIdhEc2klV = BigInt("1089")
		const todBZWcfD = accounts[4]
		const tokenIdrWu5Wpx = BigInt("546")
		const toHezXuIA = accounts[3]
		const fromasgSUFl = accounts[0]
		const operatorBQYEy9r = accounts[1]
		const ownerKaDRzwG = accounts[0]
		const tokenIdM3cas8I = BigInt("797")
		const tokenIdjBGj3sg = BigInt("259")
		const toi8Mxt50 = accounts[1]
		const tokenIdpCBUEq = BigInt("139")
		const tolzc0ufy = accounts[3]
		await contractikP8N6R.approve.call(todBZWcfD, tokenIdhEc2klV, {from: "0x0000000000000000000000000000000000000001"});
		await contractikP8N6R.safeTransferFrom.call(fromasgSUFl, toHezXuIA, tokenIdrWu5Wpx, {from: accounts[2]});
		const nullaaamfNA = await contractikP8N6R.isApprovedForAll.call(ownerKaDRzwG, operatorBQYEy9r, {from: accounts[5]});
		const nullmt3imAp = await contractikP8N6R.getApproved.call(tokenIdM3cas8I, {from: accounts[1]});
		await contractikP8N6R.approve.call(toi8Mxt50, tokenIdjBGj3sg, {from: accounts[0]});
		await contractikP8N6R.approve.call(tolzc0ufy, tokenIdpCBUEq, {from: accounts[0]});

		await expect(contractikP8N6R.approve.call(todBZWcfD, tokenIdhEc2klV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractdaqCCRE = await ERC721.new({from: accounts[1]});
		const tokenIdw4LDa1t = BigInt("604")
		const tokenIdFVL9CbB = BigInt("1475")
		const tobIhv6aH = accounts[3]
		const fromZcAcNit = accounts[5]
		const _dataSVvEhcV = "0x141d161e08110f020707000609051c0d19140a13"
		const tokenIda6EBbn5 = BigInt("1098")
		const toykCt9Zh = accounts[4]
		const fromk9mD8y = accounts[4]
		const tokenIdKAZ5hJi = BigInt("99")
		const nullC9jKEqP = await contractdaqCCRE.getApproved.call(tokenIdw4LDa1t, {from: accounts[4]});
		await contractdaqCCRE.transferFrom.call(fromZcAcNit, tobIhv6aH, tokenIdFVL9CbB, {from: accounts[0]});
		await contractdaqCCRE.safeTransferFrom.call(fromk9mD8y, toykCt9Zh, tokenIda6EBbn5, _dataSVvEhcV, {from: accounts[4]});
		const nullQuegmb = await contractdaqCCRE.ownerOf.call(tokenIdKAZ5hJi, {from: accounts[4]});

		await expect(contractdaqCCRE.getApproved.call(tokenIdw4LDa1t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWEfpQiT = await ERC721.new({from: accounts[2]});
		const operatorYpkiQAH = accounts[3]
		const ownerLcMPA9V = accounts[0]
		const tokenIdbDwwMjf = BigInt("1542")
		const tokenIdFADTj5 = BigInt("229")
		const toJ9Cszed = accounts[5]
		const fromvoD4yHI = accounts[1]
		const nullMJTHff = await contractWEfpQiT.isApprovedForAll.call(ownerLcMPA9V, operatorYpkiQAH, {from: accounts[2]});
		const nulltahC3N = await contractWEfpQiT.ownerOf.call(tokenIdbDwwMjf, {from: accounts[0]});
		await contractWEfpQiT.transferFrom.call(fromvoD4yHI, toJ9Cszed, tokenIdFADTj5, {from: accounts[4]});

		assert.equal(nullMJTHff, false)
		await expect(contractWEfpQiT.ownerOf.call(tokenIdbDwwMjf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractzjmwfGM = await ERC721.new({from: accounts[4]});
		const tokenIdPYdvNyk = BigInt("1305")
		const toFLqTWsr = accounts[4]
		const fromldemWrI = accounts[1]
		const tokenIdyaboX2H = BigInt("33")
		await contractzjmwfGM.transferFrom.call(fromldemWrI, toFLqTWsr, tokenIdPYdvNyk, {from: accounts[4]});
		const nullTgeEY30 = await contractzjmwfGM.ownerOf.call(tokenIdyaboX2H, {from: accounts[4]});

		await expect(contractzjmwfGM.transferFrom.call(fromldemWrI, toFLqTWsr, tokenIdPYdvNyk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVocDYPs = await ERC721.new({from: accounts[4]});
		const approvedDddVPnT = true
		const to0N560g = accounts[2]
		const tokenIdnJC462 = BigInt("28")
		await contractVocDYPs.setApprovalForAll.call(to0N560g, approvedDddVPnT, {from: accounts[3]});
		const nullrbV6kcc = await contractVocDYPs.ownerOf.call(tokenIdnJC462, {from: accounts[4]});

		await expect(contractVocDYPs.setApprovalForAll.call(to0N560g, approvedDddVPnT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractY9FsNJ4 = await ERC721.new({from: accounts[5]});
		const operatorM6wxYIu = accounts[2]
		const ownerdCtDHYb = accounts[0]
		const approvedZoFnj9a = false
		const to59jrze = accounts[0]
		const tokenIduKK6hBB = BigInt("237")
		const toj0TxTZ = accounts[2]
		const tokenIdzBTcAE = BigInt("295")
		const tokenIdYUPdzif = BigInt("831")
		const toTR2s7uF = accounts[0]
		const tokenIdkvVNmuz = BigInt("1502")
		const tok8IeGVJ = accounts[5]
		const fromk2UjN3 = accounts[2]
		const tokenIdzjtk8o8 = BigInt("869")
		const nullBN5AWn = await contractY9FsNJ4.isApprovedForAll.call(ownerdCtDHYb, operatorM6wxYIu, {from: accounts[3]});
		await contractY9FsNJ4.setApprovalForAll.call(to59jrze, approvedZoFnj9a, {from: accounts[0]});
		await contractY9FsNJ4.approve.call(toj0TxTZ, tokenIduKK6hBB, {from: accounts[1]});
		const nullW93WjqB = await contractY9FsNJ4.ownerOf.call(tokenIdzBTcAE, {from: accounts[3]});
		await contractY9FsNJ4.approve.call(toTR2s7uF, tokenIdYUPdzif, {from: accounts[5]});
		await contractY9FsNJ4.transferFrom.call(fromk2UjN3, tok8IeGVJ, tokenIdkvVNmuz, {from: accounts[2]});
		const nullnXUDnLg = await contractY9FsNJ4.getApproved.call(tokenIdzjtk8o8, {from: accounts[2]});

		assert.equal(nullBN5AWn, false)
		await expect(contractY9FsNJ4.setApprovalForAll.call(to59jrze, approvedZoFnj9a, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractRzieCkQ = await ERC721.new({from: accounts[2]});
		const ownernpPxKw0 = accounts[0]
		const tokenIdsO9MfQ = BigInt("1089")
		const toYhblnw8 = accounts[4]
		const ownerfUTRQke = accounts[0]
		const tokenIdmYmojEy = BigInt("546")
		const toL5zRfMp = accounts[3]
		const fromtzPzeXL = accounts[0]
		const operatorvlH03ZT = accounts[1]
		const ownerJQXrqEA = accounts[0]
		const tokenIdldQVfyR = BigInt("259")
		const toTZGCNQK = accounts[1]
		const tokenIdBysHRUn = BigInt("139")
		const toikhtQO3 = accounts[3]
		const nulltbuZUYf = await contractRzieCkQ.balanceOf.call(ownernpPxKw0, {from: accounts[1]});
		await contractRzieCkQ.approve.call(toYhblnw8, tokenIdsO9MfQ, {from: "0x0000000000000000000000000000000000000001"});
		const nullSZchGUV = await contractRzieCkQ.balanceOf.call(ownerfUTRQke, {from: accounts[4]});
		await contractRzieCkQ.safeTransferFrom.call(fromtzPzeXL, toL5zRfMp, tokenIdmYmojEy, {from: accounts[2]});
		const nullIuvrlD7 = await contractRzieCkQ.isApprovedForAll.call(ownerJQXrqEA, operatorvlH03ZT, {from: accounts[5]});
		await contractRzieCkQ.approve.call(toTZGCNQK, tokenIdldQVfyR, {from: accounts[0]});
		await contractRzieCkQ.approve.call(toikhtQO3, tokenIdBysHRUn, {from: accounts[0]});

		assert.equal(nulltbuZUYf, 0)
		await expect(contractRzieCkQ.approve.call(toYhblnw8, tokenIdsO9MfQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})