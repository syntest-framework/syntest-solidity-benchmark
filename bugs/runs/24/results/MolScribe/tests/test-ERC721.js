const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractD8wTOB = await ERC721.new({from: accounts[0]});
		const tokenIdCom9PC0 = BigInt("1636")
		const tokenIdk5rRmlz = BigInt("583")
		const tokenIdG2hjEab = BigInt("614")
		const toPbrNUm8 = accounts[0]
		const tokenIdwIefq8Q = BigInt("1788")
		const toQLAp4tX = accounts[0]
		const tokenIdP43Q6b = BigInt("988")
		const nullEb92rAW = await contractD8wTOB.ownerOf.call(tokenIdCom9PC0, {from: accounts[2]});
		const nullCI4QvbL = await contractD8wTOB.ownerOf.call(tokenIdk5rRmlz, {from: accounts[2]});
		await contractD8wTOB.approve.call(toPbrNUm8, tokenIdG2hjEab, {from: accounts[1]});
		await contractD8wTOB.approve.call(toQLAp4tX, tokenIdwIefq8Q, {from: accounts[3]});
		const nullkZ439tg = await contractD8wTOB.ownerOf.call(tokenIdP43Q6b, {from: accounts[3]});

		await expect(contractD8wTOB.ownerOf.call(tokenIdCom9PC0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractm0vGORN = await ERC721.new({from: accounts[2]});
		const approvedlleRXQo = true
		const toUOC6ccS = accounts[2]
		const tokenIddJW1NaM = BigInt("430")
		const tomaitnKC = accounts[0]
		const fromXIhFvzi = accounts[1]
		const tokenIdAXldJv = BigInt("102")
		const approvedbyFJXTw = false
		const toccUXGm1 = accounts[4]
		const operatorRC9Atzd = accounts[3]
		const ownerUCNBn2H = accounts[4]
		await contractm0vGORN.setApprovalForAll.call(toUOC6ccS, approvedlleRXQo, {from: accounts[1]});
		await contractm0vGORN.transferFrom.call(fromXIhFvzi, tomaitnKC, tokenIddJW1NaM, {from: accounts[4]});
		const nullEdoMlmy = await contractm0vGORN.ownerOf.call(tokenIdAXldJv, {from: accounts[2]});
		await contractm0vGORN.setApprovalForAll.call(toccUXGm1, approvedbyFJXTw, {from: accounts[3]});
		const nullc7W6lLr = await contractm0vGORN.isApprovedForAll.call(ownerUCNBn2H, operatorRC9Atzd, {from: accounts[5]});

		await expect(contractm0vGORN.setApprovalForAll.call(toUOC6ccS, approvedlleRXQo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrkOs0Ma = await ERC721.new({from: accounts[4]});
		const tokenIdmhHYPA = BigInt("1248")
		const tokenIdT5JPxwQ = BigInt("400")
		const tohv150iQ = accounts[2]
		const fromwfGtQ0 = accounts[5]
		const operatorLHeo8z7 = accounts[4]
		const ownereGxL9uG = "0x0000000000000000000000000000000000000001"
		const tokenIdN4HEL6 = BigInt("34")
		const nullZ7nYEK = await contractrkOs0Ma.getApproved.call(tokenIdmhHYPA, {from: accounts[2]});
		await contractrkOs0Ma.transferFrom.call(fromwfGtQ0, tohv150iQ, tokenIdT5JPxwQ, {from: accounts[1]});
		const nullXQnYLlb = await contractrkOs0Ma.isApprovedForAll.call(ownereGxL9uG, operatorLHeo8z7, {from: accounts[3]});
		const nullcoawfj1 = await contractrkOs0Ma.getApproved.call(tokenIdN4HEL6, {from: accounts[0]});

		await expect(contractrkOs0Ma.getApproved.call(tokenIdmhHYPA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractJqYfTG = await ERC721.new({from: accounts[4]});
		const operatorFQh08rj = accounts[1]
		const ownerXFceykQ = accounts[1]
		const ownerkhjdLlF = accounts[2]
		const approvedf5QtXL = true
		const toSEoCP4k = "0x0000000000000000000000000000000000000001"
		const _datakuDILVc = "0x0f19121607011e09081d0b0a010d070b1d0b130518091a020810061d"
		const tokenIdnRGMKAy = BigInt("925")
		const tobegOhzV = accounts[2]
		const fromG3vFTJH = accounts[2]
		const tokenId5K83qb = BigInt("1996")
		const toU8eHOqA = accounts[0]
		const fromr3q0AZ = accounts[5]
		const ownervL5533q = accounts[2]
		const nullFiSvrko = await contractJqYfTG.isApprovedForAll.call(ownerXFceykQ, operatorFQh08rj, {from: accounts[1]});
		const nullIx48Gt = await contractJqYfTG.balanceOf.call(ownerkhjdLlF, {from: accounts[0]});
		await contractJqYfTG.setApprovalForAll.call(toSEoCP4k, approvedf5QtXL, {from: "0x0000000000000000000000000000000000000001"});
		await contractJqYfTG.safeTransferFrom.call(fromG3vFTJH, tobegOhzV, tokenIdnRGMKAy, _datakuDILVc, {from: "0x0000000000000000000000000000000000000001"});
		await contractJqYfTG.transferFrom.call(fromr3q0AZ, toU8eHOqA, tokenId5K83qb, {from: accounts[3]});
		const nullJhJ1Ybw = await contractJqYfTG.balanceOf.call(ownervL5533q, {from: accounts[1]});

		assert.equal(nullFiSvrko, false)
		assert.equal(nullIx48Gt, 0)
		await expect(contractJqYfTG.setApprovalForAll.call(toSEoCP4k, approvedf5QtXL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractwbqiwf = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdLmNvaLp = BigInt("86")
		const toAg1rxPu = accounts[2]
		const approvedYpVP2GO = false
		const topITdSTr = accounts[4]
		const tokenIdZ1PGfsw = BigInt("982")
		const tokenIdLnwhNRJ = BigInt("1522")
		await contractwbqiwf.approve.call(toAg1rxPu, tokenIdLmNvaLp, {from: accounts[4]});
		await contractwbqiwf.setApprovalForAll.call(topITdSTr, approvedYpVP2GO, {from: accounts[0]});
		const nullATWL0hI = await contractwbqiwf.ownerOf.call(tokenIdZ1PGfsw, {from: accounts[0]});
		const nullKALqnPL = await contractwbqiwf.getApproved.call(tokenIdLnwhNRJ, {from: accounts[5]});
	});
})