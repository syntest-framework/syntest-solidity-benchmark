const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractMbuUWrW = await ERC721.new({from: accounts[2]});
		const tokenIdXvmEgej = BigInt("975")
		const toJERO5f = accounts[2]
		const fromPVwOF6G = accounts[3]
		const tokenIdjIBXfzi = BigInt("267")
		const toACLZEf = accounts[3]
		const ownerlMU3Z7K = accounts[4]
		const tokenIdV2EB5Pl = BigInt("197")
		const tokenIdaeS1rIG = BigInt("1336")
		const tokenIdaZ7Xt3A = BigInt("101")
		await contractMbuUWrW.safeTransferFrom.call(fromPVwOF6G, toJERO5f, tokenIdXvmEgej, {from: accounts[4]});
		await contractMbuUWrW.approve.call(toACLZEf, tokenIdjIBXfzi, {from: accounts[2]});
		const nullfx5rBT = await contractMbuUWrW.balanceOf.call(ownerlMU3Z7K, {from: accounts[4]});
		const nullOi5TxOJ = await contractMbuUWrW.ownerOf.call(tokenIdV2EB5Pl, {from: accounts[2]});
		const nullu4HgVHn = await contractMbuUWrW.getApproved.call(tokenIdaeS1rIG, {from: accounts[3]});
		const nullABh5joS = await contractMbuUWrW.getApproved.call(tokenIdaZ7Xt3A, {from: accounts[0]});

		await expect(contractMbuUWrW.safeTransferFrom.call(fromPVwOF6G, toJERO5f, tokenIdXvmEgej, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFgATcxQ = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenId58kq2X = BigInt("1839")
		const todThQNKe = accounts[2]
		const fromIIlU7y = accounts[3]
		const tokenIdOFTYoQ = BigInt("1266")
		const ton6Yc3vr = accounts[1]
		const tokenId3UQkYL = BigInt("66")
		const toGrqwO0w = accounts[1]
		const approvedyK0huVF = true
		const toELdjZ3E = accounts[2]
		const _dataosaIlhp = "0x1b1b03110e061d141f040d1b041c1a0e0a0c011b031b0f1c1a1a"
		const tokenIdrRV0z1k = BigInt("1076")
		const toaysQwIC = accounts[4]
		const fromC9lK1ZU = accounts[3]
		await contractFgATcxQ.transferFrom.call(fromIIlU7y, todThQNKe, tokenId58kq2X, {from: accounts[3]});
		await contractFgATcxQ.approve.call(ton6Yc3vr, tokenIdOFTYoQ, {from: accounts[2]});
		await contractFgATcxQ.approve.call(toGrqwO0w, tokenId3UQkYL, {from: accounts[0]});
		await contractFgATcxQ.setApprovalForAll.call(toELdjZ3E, approvedyK0huVF, {from: accounts[5]});
		await contractFgATcxQ.safeTransferFrom.call(fromC9lK1ZU, toaysQwIC, tokenIdrRV0z1k, _dataosaIlhp, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractiPZtAAB = await ERC721.new({from: accounts[2]});
		const operatorfT0dtOk = accounts[1]
		const owneryy4NopV = accounts[4]
		const tokenIdJcHmN46 = BigInt("1323")
		const toTckZqYa = accounts[5]
		const fromDyVey0d = accounts[2]
		const operatorIW2F9zh = accounts[2]
		const ownercigk8w1 = accounts[4]
		const nullRucNH7B = await contractiPZtAAB.isApprovedForAll.call(owneryy4NopV, operatorfT0dtOk, {from: accounts[1]});
		await contractiPZtAAB.transferFrom.call(fromDyVey0d, toTckZqYa, tokenIdJcHmN46, {from: accounts[1]});
		const nullTGaZUFH = await contractiPZtAAB.isApprovedForAll.call(ownercigk8w1, operatorIW2F9zh, {from: accounts[4]});

		assert.equal(nullRucNH7B, false)
		await expect(contractiPZtAAB.transferFrom.call(fromDyVey0d, toTckZqYa, tokenIdJcHmN46, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGDjnbq = await ERC721.new({from: accounts[4]});
		const approvedVSJ7yDN = true
		const toyqSRfBw = accounts[3]
		const tokenIdssjYAl1 = BigInt("818")
		const toP9aHEhQ = accounts[0]
		const tokenIdTN57B9h = BigInt("1277")
		const _dataM8GodH3 = "0x171213151f0b191b1c160a20090e17160d0908030d101a0f170207130c"
		const tokenIdtxIh9VI = BigInt("1698")
		const toC62DOD = accounts[5]
		const fromT4xwUD5 = accounts[4]
		const tokenIdmXG3iA8 = BigInt("1681")
		const toVYsEkr3 = accounts[1]
		const fromIen7aZR = accounts[5]
		const operatorohhqvDS = accounts[4]
		const ownercdOYYOh = accounts[0]
		await contractGDjnbq.setApprovalForAll.call(toyqSRfBw, approvedVSJ7yDN, {from: accounts[3]});
		await contractGDjnbq.approve.call(toP9aHEhQ, tokenIdssjYAl1, {from: accounts[4]});
		const nullySyxSr = await contractGDjnbq.ownerOf.call(tokenIdTN57B9h, {from: accounts[2]});
		await contractGDjnbq.safeTransferFrom.call(fromT4xwUD5, toC62DOD, tokenIdtxIh9VI, _dataM8GodH3, {from: accounts[1]});
		await contractGDjnbq.transferFrom.call(fromIen7aZR, toVYsEkr3, tokenIdmXG3iA8, {from: accounts[1]});
		const nullEheZizQ = await contractGDjnbq.isApprovedForAll.call(ownercdOYYOh, operatorohhqvDS, {from: accounts[1]});

		await expect(contractGDjnbq.setApprovalForAll.call(toyqSRfBw, approvedVSJ7yDN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractYo7XVJ = await ERC721.new({from: accounts[2]});
		const ownerw7tnfBb = accounts[1]
		const tokenIdvWEJyoq = BigInt("1943")
		const tomgo6XbC = accounts[3]
		const fromrykrCx = accounts[0]
		const tokenIdEfCTWbo = BigInt("1954")
		const tobeQDwM = accounts[2]
		const fromL9GRZxe = accounts[3]
		const _datatPZV8TR = "0x070f0101031e0112160d0311161f17090204150c1c"
		const tokenIdRz8tnQ = BigInt("1692")
		const toBGL7yg = accounts[2]
		const fromCRpGzCu = accounts[2]
		const tokenIdb87uwT = BigInt("1795")
		const tokenIduuwJkhj = BigInt("1612")
		const tosBtJn0w = "0x0000000000000000000000000000000000000001"
		const nullNIOUWG4 = await contractYo7XVJ.balanceOf.call(ownerw7tnfBb, {from: accounts[5]});
		await contractYo7XVJ.safeTransferFrom.call(fromrykrCx, tomgo6XbC, tokenIdvWEJyoq, {from: accounts[1]});
		await contractYo7XVJ.transferFrom.call(fromL9GRZxe, tobeQDwM, tokenIdEfCTWbo, {from: accounts[4]});
		await contractYo7XVJ.safeTransferFrom.call(fromCRpGzCu, toBGL7yg, tokenIdRz8tnQ, _datatPZV8TR, {from: accounts[0]});
		const nullY6pR0lr = await contractYo7XVJ.ownerOf.call(tokenIdb87uwT, {from: accounts[1]});
		await contractYo7XVJ.approve.call(tosBtJn0w, tokenIduuwJkhj, {from: accounts[4]});

		assert.equal(nullNIOUWG4, 0)
		await expect(contractYo7XVJ.safeTransferFrom.call(fromrykrCx, tomgo6XbC, tokenIdvWEJyoq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBqUcAtq = await ERC721.new({from: accounts[3]});
		const operatorpgq9NZj = accounts[5]
		const ownerBI1Qjw0 = accounts[3]
		const tokenIdePZ8Ctw = BigInt("309")
		const ownerg1F22zH = accounts[2]
		const nullBjjazr6 = await contractBqUcAtq.isApprovedForAll.call(ownerBI1Qjw0, operatorpgq9NZj, {from: accounts[3]});
		const nullE6ARYmo = await contractBqUcAtq.getApproved.call(tokenIdePZ8Ctw, {from: accounts[4]});
		const nulldwztsqF = await contractBqUcAtq.balanceOf.call(ownerg1F22zH, {from: accounts[3]});

		assert.equal(nullBjjazr6, false)
		await expect(contractBqUcAtq.getApproved.call(tokenIdePZ8Ctw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcUcdFz2 = await ERC721.new({from: accounts[4]});
		const tokenIdQWBzjMv = BigInt("225")
		const tomJKS2CQ = accounts[4]
		const tokenIdb9cVfZR = BigInt("634")
		const toG8LtgPS = accounts[1]
		const tokenIdVyySGKo = BigInt("2037")
		await contractcUcdFz2.approve.call(tomJKS2CQ, tokenIdQWBzjMv, {from: accounts[0]});
		await contractcUcdFz2.approve.call(toG8LtgPS, tokenIdb9cVfZR, {from: accounts[2]});
		const nullyalYmTb = await contractcUcdFz2.getApproved.call(tokenIdVyySGKo, {from: accounts[3]});

		await expect(contractcUcdFz2.approve.call(tomJKS2CQ, tokenIdQWBzjMv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})