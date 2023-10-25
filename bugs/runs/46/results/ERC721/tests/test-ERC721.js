const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractFoxf2py = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdwroYBdf = BigInt("1740")
		const tokenIdVzaHp7s = BigInt("490")
		const toFEvbieM = accounts[2]
		const tokenIdqTdyqTW = BigInt("1236")
		const todpg55VW = "0x0000000000000000000000000000000000000001"
		const fromUSZ8UqL = accounts[3]
		const operatorIZuN2aH = "0x0000000000000000000000000000000000000001"
		const ownerjI0iGFH = accounts[4]
		const nulljWmkPyP = await contractFoxf2py.getApproved.call(tokenIdwroYBdf, {from: accounts[2]});
		await contractFoxf2py.approve.call(toFEvbieM, tokenIdVzaHp7s, {from: accounts[0]});
		await contractFoxf2py.transferFrom.call(fromUSZ8UqL, todpg55VW, tokenIdqTdyqTW, {from: accounts[4]});
		const nullfZ6DKX = await contractFoxf2py.isApprovedForAll.call(ownerjI0iGFH, operatorIZuN2aH, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contractCaupVok = await ERC721.new({from: accounts[1]});
		const tokenIdxTQ3QVz = BigInt("738")
		const tokenIdDAKAkL = BigInt("1406")
		const toyoZFYnm = accounts[3]
		const nullmXq3zbz = await contractCaupVok.getApproved.call(tokenIdxTQ3QVz, {from: accounts[4]});
		await contractCaupVok.approve.call(toyoZFYnm, tokenIdDAKAkL, {from: accounts[1]});

		await expect(contractCaupVok.getApproved.call(tokenIdxTQ3QVz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracti4yOhV5 = await ERC721.new({from: accounts[0]});
		const tokenIdo3lbqR = BigInt("40")
		const toDrCBOxY = accounts[4]
		const fromh6LOveZ = accounts[1]
		const _dataSuHar76 = "0x0401161a13030c1e03141014151d1b0d070a1f0713"
		const tokenIdLSoTv1M = BigInt("756")
		const tomHDP7q4 = accounts[2]
		const fromiilEsT8 = accounts[1]
		const tokenIdHy21Nxu = BigInt("1739")
		const tokenIdAml6mjZ = BigInt("1327")
		const tognut3XM = accounts[4]
		const fromy9csJy0 = accounts[1]
		const tokenId4nL3q9 = BigInt("405")
		await contracti4yOhV5.safeTransferFrom.call(fromh6LOveZ, toDrCBOxY, tokenIdo3lbqR, {from: accounts[5]});
		await contracti4yOhV5.safeTransferFrom.call(fromiilEsT8, tomHDP7q4, tokenIdLSoTv1M, _dataSuHar76, {from: accounts[2]});
		const nullThcKuEp = await contracti4yOhV5.getApproved.call(tokenIdHy21Nxu, {from: accounts[1]});
		await contracti4yOhV5.transferFrom.call(fromy9csJy0, tognut3XM, tokenIdAml6mjZ, {from: accounts[1]});
		const nullWjDyRe6 = await contracti4yOhV5.ownerOf.call(tokenId4nL3q9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracti4yOhV5.safeTransferFrom.call(fromh6LOveZ, toDrCBOxY, tokenIdo3lbqR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractF1AxZxj = await ERC721.new({from: accounts[3]});
		const operator0sFwsG = accounts[3]
		const ownermKL3V0 = accounts[1]
		const tokenIdZleh0AD = BigInt("1009")
		const toRJeVXNh = accounts[0]
		const fromhrsn21h = "0x0000000000000000000000000000000000000001"
		const tokenIdsLHU8vN = BigInt("1616")
		const toIHGImJk = accounts[1]
		const fromMaWfcmL = accounts[3]
		const approvedCrt8HOT = false
		const ton1jo2pR = accounts[1]
		const nullqDSlJdj = await contractF1AxZxj.isApprovedForAll.call(ownermKL3V0, operator0sFwsG, {from: accounts[1]});
		await contractF1AxZxj.safeTransferFrom.call(fromhrsn21h, toRJeVXNh, tokenIdZleh0AD, {from: accounts[1]});
		await contractF1AxZxj.safeTransferFrom.call(fromMaWfcmL, toIHGImJk, tokenIdsLHU8vN, {from: accounts[5]});
		await contractF1AxZxj.setApprovalForAll.call(ton1jo2pR, approvedCrt8HOT, {from: accounts[0]});

		assert.equal(nullqDSlJdj, false)
		await expect(contractF1AxZxj.safeTransferFrom.call(fromhrsn21h, toRJeVXNh, tokenIdZleh0AD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFMngpY = await ERC721.new({from: accounts[1]});
		const tokenIdy3DWPg = BigInt("1045")
		const tom7Vj7ZE = accounts[1]
		const tokenIddAsxbe = BigInt("1233")
		const tozXKLiVZ = accounts[3]
		const tokenIdQHjU1Km = BigInt("936")
		const toEo0ozJP = accounts[2]
		const fromoxKpdHm = accounts[1]
		const approvedtfhl8Wn = true
		const toDDrZlEm = accounts[2]
		const approvedNVpNfzu = false
		const toQUsFJs = accounts[4]
		await contractFMngpY.approve.call(tom7Vj7ZE, tokenIdy3DWPg, {from: accounts[1]});
		await contractFMngpY.approve.call(tozXKLiVZ, tokenIddAsxbe, {from: accounts[1]});
		await contractFMngpY.transferFrom.call(fromoxKpdHm, toEo0ozJP, tokenIdQHjU1Km, {from: accounts[5]});
		await contractFMngpY.setApprovalForAll.call(toDDrZlEm, approvedtfhl8Wn, {from: accounts[1]});
		await contractFMngpY.setApprovalForAll.call(toQUsFJs, approvedNVpNfzu, {from: accounts[2]});

		await expect(contractFMngpY.approve.call(tom7Vj7ZE, tokenIdy3DWPg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractmwk9Ql = await ERC721.new({from: accounts[4]});
		const ownerILfBdch = accounts[3]
		const tokenIdWj4h3t = BigInt("429")
		const tot3QdRa5 = accounts[1]
		const fromZpybFAN = accounts[0]
		const nulllvukSiR = await contractmwk9Ql.balanceOf.call(ownerILfBdch, {from: "0x0000000000000000000000000000000000000001"});
		await contractmwk9Ql.safeTransferFrom.call(fromZpybFAN, tot3QdRa5, tokenIdWj4h3t, {from: accounts[3]});

		assert.equal(nulllvukSiR, 0)
		await expect(contractmwk9Ql.safeTransferFrom.call(fromZpybFAN, tot3QdRa5, tokenIdWj4h3t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractV6u9rXM = await ERC721.new({from: accounts[3]});
		const operatorggT7nhN = accounts[4]
		const ownerUpXv0d2 = accounts[4]
		const tokenIdz2ZTIiS = BigInt("274")
		const toCfswm0j = accounts[2]
		const fromZSyE5bs = "0x0000000000000000000000000000000000000001"
		const approvedY5BeIjm = true
		const to1MR91A = accounts[3]
		const nulllt20TUH = await contractV6u9rXM.isApprovedForAll.call(ownerUpXv0d2, operatorggT7nhN, {from: accounts[3]});
		await contractV6u9rXM.transferFrom.call(fromZSyE5bs, toCfswm0j, tokenIdz2ZTIiS, {from: accounts[4]});
		await contractV6u9rXM.setApprovalForAll.call(to1MR91A, approvedY5BeIjm, {from: accounts[3]});

		assert.equal(nulllt20TUH, false)
		await expect(contractV6u9rXM.transferFrom.call(fromZSyE5bs, toCfswm0j, tokenIdz2ZTIiS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracttYBPcRp = await ERC721.new({from: accounts[3]});
		const operatortW4iBXn = accounts[4]
		const ownerPvyodNy = accounts[4]
		const approvedTLl5SY = true
		const toxA9b3hZ = accounts[3]
		const nullXQiM6AO = await contracttYBPcRp.isApprovedForAll.call(ownerPvyodNy, operatortW4iBXn, {from: accounts[3]});
		await contracttYBPcRp.setApprovalForAll.call(toxA9b3hZ, approvedTLl5SY, {from: accounts[3]});

		assert.equal(nullXQiM6AO, false)
		await expect(contracttYBPcRp.setApprovalForAll.call(toxA9b3hZ, approvedTLl5SY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})