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
		const contractjAAE3rP = await ERC721.new({from: accounts[4]});
		const approveduEtnNuz = true
		const toRnxB9xY = accounts[3]
		const tokenIdCnvkUqp = BigInt("1305")
		const toJQkQs6I = accounts[4]
		const fromiXAcYqv = accounts[1]
		const operatorX0SKFoH = accounts[3]
		const ownerI3xq1t = accounts[5]
		const tokenId9Rkb9C = BigInt("33")
		await contractjAAE3rP.setApprovalForAll.call(toRnxB9xY, approveduEtnNuz, {from: accounts[2]});
		await contractjAAE3rP.transferFrom.call(fromiXAcYqv, toJQkQs6I, tokenIdCnvkUqp, {from: accounts[4]});
		const nullDD8X7S = await contractjAAE3rP.isApprovedForAll.call(ownerI3xq1t, operatorX0SKFoH, {from: accounts[4]});
		const nullOqlIwgQ = await contractjAAE3rP.ownerOf.call(tokenId9Rkb9C, {from: accounts[4]});

		await expect(contractjAAE3rP.setApprovalForAll.call(toRnxB9xY, approveduEtnNuz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractqL1r3rl = await ERC721.new({from: accounts[4]});
		const ownerOopNQDN = accounts[1]
		const tokenIdiq2nBX = BigInt("1647")
		const toupVWHPm = accounts[2]
		const fromiQOUW95 = accounts[1]
		const tokenIdFiwnxOj = BigInt("1305")
		const tochBajEX = accounts[5]
		const frome1rETex = accounts[1]
		const tokenIdFeyID1X = BigInt("33")
		const nullWcerIRX = await contractqL1r3rl.balanceOf.call(ownerOopNQDN, {from: accounts[4]});
		await contractqL1r3rl.transferFrom.call(fromiQOUW95, toupVWHPm, tokenIdiq2nBX, {from: accounts[1]});
		await contractqL1r3rl.transferFrom.call(frome1rETex, tochBajEX, tokenIdFiwnxOj, {from: accounts[4]});
		const nullOPck1tY = await contractqL1r3rl.ownerOf.call(tokenIdFeyID1X, {from: accounts[4]});

		assert.equal(nullWcerIRX, 0)
		await expect(contractqL1r3rl.transferFrom.call(fromiQOUW95, toupVWHPm, tokenIdiq2nBX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractt4Sfxth = await ERC721.new({from: accounts[4]});
		const approvedr5V3khQ = false
		const toc8K54v6 = accounts[2]
		const tokenIdyM46hHn = BigInt("1305")
		const toccptIlz = accounts[4]
		const fromYQflyKB = accounts[1]
		await contractt4Sfxth.setApprovalForAll.call(toc8K54v6, approvedr5V3khQ, {from: accounts[2]});
		await contractt4Sfxth.transferFrom.call(fromYQflyKB, toccptIlz, tokenIdyM46hHn, {from: accounts[4]});

		await expect(contractt4Sfxth.setApprovalForAll.call(toc8K54v6, approvedr5V3khQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})