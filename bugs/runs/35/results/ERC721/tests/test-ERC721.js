const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractZ2xGWC = await ERC721.new({from: accounts[2]});
		const operatorPxBgUiC = accounts[3]
		const ownerxiHCjaQ = accounts[3]
		const tokenIdwes2w7I = BigInt("899")
		const toFVDRUgj = accounts[2]
		const fromI3B6HLo = accounts[0]
		const ownerUYubrR = accounts[5]
		const operatorDRNolQ = accounts[0]
		const ownerIPFvc9q = accounts[1]
		const nullMggcirS = await contractZ2xGWC.isApprovedForAll.call(ownerxiHCjaQ, operatorPxBgUiC, {from: accounts[3]});
		await contractZ2xGWC.safeTransferFrom.call(fromI3B6HLo, toFVDRUgj, tokenIdwes2w7I, {from: accounts[0]});
		const nullJWkj5L0 = await contractZ2xGWC.balanceOf.call(ownerUYubrR, {from: accounts[4]});
		const nulln9aVnb4 = await contractZ2xGWC.isApprovedForAll.call(ownerIPFvc9q, operatorDRNolQ, {from: accounts[3]});

		assert.equal(nullMggcirS, false)
		await expect(contractZ2xGWC.safeTransferFrom.call(fromI3B6HLo, toFVDRUgj, tokenIdwes2w7I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractmk9kJRA = await ERC721.new({from: accounts[3]});
		const tokenIdfdMGGdH = BigInt("761")
		const toZElQqxk = accounts[4]
		const fromBsJNZWE = accounts[5]
		const ownerFYT6JPb = accounts[2]
		const approvedhWV93wb = true
		const topTxBynK = accounts[0]
		const tokenIdANyhA6N = BigInt("1897")
		const todK4Ah9d = accounts[2]
		const fromDh1kwpd = accounts[1]
		const tokenIdZyVSEpt = BigInt("802")
		const tonuGdf8e = accounts[0]
		const fromoDm4BxP = accounts[3]
		await contractmk9kJRA.transferFrom.call(fromBsJNZWE, toZElQqxk, tokenIdfdMGGdH, {from: "0x0000000000000000000000000000000000000001"});
		const nullvQL7IeK = await contractmk9kJRA.balanceOf.call(ownerFYT6JPb, {from: accounts[0]});
		await contractmk9kJRA.setApprovalForAll.call(topTxBynK, approvedhWV93wb, {from: accounts[0]});
		await contractmk9kJRA.transferFrom.call(fromDh1kwpd, todK4Ah9d, tokenIdANyhA6N, {from: accounts[3]});
		await contractmk9kJRA.transferFrom.call(fromoDm4BxP, tonuGdf8e, tokenIdZyVSEpt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractmk9kJRA.transferFrom.call(fromBsJNZWE, toZElQqxk, tokenIdfdMGGdH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractHeomj3d = await ERC721.new({from: accounts[3]});
		const tokenIdaaUyfgH = BigInt("770")
		const tokenIduPccLXM = BigInt("1973")
		const toag5zqpj = "0x0000000000000000000000000000000000000001"
		const fromC7dlp7Q = accounts[0]
		const nullqC7vps = await contractHeomj3d.getApproved.call(tokenIdaaUyfgH, {from: "0x0000000000000000000000000000000000000001"});
		await contractHeomj3d.safeTransferFrom.call(fromC7dlp7Q, toag5zqpj, tokenIduPccLXM, {from: accounts[1]});

		await expect(contractHeomj3d.getApproved.call(tokenIdaaUyfgH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractHMBtyHY = await ERC721.new({from: accounts[5]});
		const tokenIdQlQXb2b = BigInt("12")
		const tokenIdgNrGJU0 = BigInt("656")
		const toKtsG1hQ = accounts[2]
		const _dataS8QYP1w = "0x1d070905031315030d090f1e03170d1a1a1a0d0e1e00160c11"
		const tokenIdrZFLJnL = BigInt("278")
		const tomlYHQvs = accounts[1]
		const fromeNa258A = accounts[2]
		const tokenIdVzeBIWJ = BigInt("1242")
		const toiVHoyo1 = accounts[0]
		const tokenIdq3aBkQO = BigInt("379")
		const toY0fexta = "0x0000000000000000000000000000000000000001"
		const fromQ9R2a1v = accounts[2]
		const nullZzcGBc3 = await contractHMBtyHY.ownerOf.call(tokenIdQlQXb2b, {from: accounts[0]});
		await contractHMBtyHY.approve.call(toKtsG1hQ, tokenIdgNrGJU0, {from: accounts[3]});
		await contractHMBtyHY.safeTransferFrom.call(fromeNa258A, tomlYHQvs, tokenIdrZFLJnL, _dataS8QYP1w, {from: accounts[5]});
		await contractHMBtyHY.approve.call(toiVHoyo1, tokenIdVzeBIWJ, {from: accounts[0]});
		await contractHMBtyHY.safeTransferFrom.call(fromQ9R2a1v, toY0fexta, tokenIdq3aBkQO, {from: accounts[3]});

		await expect(contractHMBtyHY.ownerOf.call(tokenIdQlQXb2b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrU42tuH = await ERC721.new({from: accounts[0]});
		const approvedabLYAw0 = false
		const toqlSZLfR = accounts[3]
		const tokenIdCPsY5KM = BigInt("1322")
		const tokenIdeZXIf4s = BigInt("1801")
		await contractrU42tuH.setApprovalForAll.call(toqlSZLfR, approvedabLYAw0, {from: accounts[5]});
		const nullKHKa4H = await contractrU42tuH.getApproved.call(tokenIdCPsY5KM, {from: accounts[5]});
		const nullVIV6NWd = await contractrU42tuH.getApproved.call(tokenIdeZXIf4s, {from: accounts[5]});

		await expect(contractrU42tuH.setApprovalForAll.call(toqlSZLfR, approvedabLYAw0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractaQ8T9FL = await ERC721.new({from: accounts[4]});
		const ownervpA2klA = accounts[3]
		const ownermfIVWDt = accounts[2]
		const tokenIdqSE1ABS = BigInt("1183")
		const tohbzqi2F = accounts[3]
		const ownerWFXHrPY = accounts[0]
		const nullyYywowb = await contractaQ8T9FL.balanceOf.call(ownervpA2klA, {from: accounts[1]});
		const nullvGftdA = await contractaQ8T9FL.balanceOf.call(ownermfIVWDt, {from: accounts[0]});
		await contractaQ8T9FL.approve.call(tohbzqi2F, tokenIdqSE1ABS, {from: accounts[5]});
		const nullp3b7ERL = await contractaQ8T9FL.balanceOf.call(ownerWFXHrPY, {from: accounts[5]});

		assert.equal(nullvGftdA, 0)
		assert.equal(nullyYywowb, 0)
		await expect(contractaQ8T9FL.approve.call(tohbzqi2F, tokenIdqSE1ABS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthrO59RL = await ERC721.new({from: accounts[3]});
		const approvedJVASLL = true
		const toqPUMvQH = accounts[2]
		const approvedYt34Iqh = false
		const toudMihI1 = accounts[2]
		const tokenIdk1gH6J1 = BigInt("1973")
		const tod3r1M2v = "0x0000000000000000000000000000000000000000"
		const fromKA793Th = accounts[0]
		await contracthrO59RL.setApprovalForAll.call(toqPUMvQH, approvedJVASLL, {from: accounts[0]});
		await contracthrO59RL.setApprovalForAll.call(toudMihI1, approvedYt34Iqh, {from: accounts[2]});
		await contracthrO59RL.safeTransferFrom.call(fromKA793Th, tod3r1M2v, tokenIdk1gH6J1, {from: accounts[1]});

		await expect(contracthrO59RL.setApprovalForAll.call(toqPUMvQH, approvedJVASLL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBakj4jo = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorJ7JYvTV = accounts[1]
		const owner3ZTktZ = "0x0000000000000000000000000000000000000001"
		const _datax1Tujh = "0x0b1c190e0c0b1c030e031b151f1c1f05121d15131e11160e101c041a08200b0e"
		const tokenIdvd6ALm = BigInt("721")
		const to6Jfsr4 = accounts[4]
		const fromMla3fh = accounts[2]
		const ownerkeutg19 = accounts[1]
		const tokenIdxvPZi0T = BigInt("1200")
		const tokenIdbFsUjM = BigInt("270")
		const toqmL6GJt = accounts[4]
		const fromnUDyZ4I = accounts[3]
		const nullFE1sY4r = await contractBakj4jo.isApprovedForAll.call(owner3ZTktZ, operatorJ7JYvTV, {from: accounts[2]});
		await contractBakj4jo.safeTransferFrom.call(fromMla3fh, to6Jfsr4, tokenIdvd6ALm, _datax1Tujh, {from: accounts[5]});
		const nullejoafTZ = await contractBakj4jo.balanceOf.call(ownerkeutg19, {from: accounts[2]});
		const nullibGzNMn = await contractBakj4jo.ownerOf.call(tokenIdxvPZi0T, {from: accounts[1]});
		await contractBakj4jo.transferFrom.call(fromnUDyZ4I, toqmL6GJt, tokenIdbFsUjM, {from: "0x0000000000000000000000000000000000000001"});
	});
})