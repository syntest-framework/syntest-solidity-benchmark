const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractlHL20mJ = await ERC721.new({from: accounts[4]});
		const tokenIdvBoF3ly = BigInt("1898")
		const owner7VByTN = accounts[2]
		const tokenIdDQYwmMA = BigInt("459")
		const tokenIdcMPz4vz = BigInt("364")
		const towTF01PI = accounts[3]
		const fromNN2oJkx = accounts[2]
		const operatora13HZ82 = accounts[1]
		const ownerYGIQozj = accounts[3]
		const nullEERh6G = await contractlHL20mJ.getApproved.call(tokenIdvBoF3ly, {from: accounts[0]});
		const nullH3EWTYW = await contractlHL20mJ.balanceOf.call(owner7VByTN, {from: accounts[4]});
		const nulloO2dqEz = await contractlHL20mJ.ownerOf.call(tokenIdDQYwmMA, {from: accounts[4]});
		await contractlHL20mJ.safeTransferFrom.call(fromNN2oJkx, towTF01PI, tokenIdcMPz4vz, {from: accounts[4]});
		const nullNCE3ylL = await contractlHL20mJ.isApprovedForAll.call(ownerYGIQozj, operatora13HZ82, {from: accounts[1]});

		await expect(contractlHL20mJ.getApproved.call(tokenIdvBoF3ly, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractTeu82Z = await ERC721.new({from: accounts[2]});
		const tokenIdWeC25bA = BigInt("1803")
		const tokenIdNL7uLF5 = BigInt("672")
		const tohOV7loS = accounts[5]
		const fromTMQNnAz = accounts[4]
		const tokenIdexWSArH = BigInt("792")
		const toUNjtMnD = accounts[3]
		const nullInfMDXc = await contractTeu82Z.ownerOf.call(tokenIdWeC25bA, {from: accounts[0]});
		await contractTeu82Z.transferFrom.call(fromTMQNnAz, tohOV7loS, tokenIdNL7uLF5, {from: "0x0000000000000000000000000000000000000001"});
		await contractTeu82Z.approve.call(toUNjtMnD, tokenIdexWSArH, {from: accounts[0]});

		await expect(contractTeu82Z.ownerOf.call(tokenIdWeC25bA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractqjE4XMj = await ERC721.new({from: accounts[3]});
		const approvedn2T5CnH = true
		const too0q6HM = accounts[2]
		const tokenIdtTCO7jp = BigInt("83")
		const togOv3Qzl = accounts[4]
		const fromUb1C5sO = accounts[1]
		const operatorjfPkf5s = "0x0000000000000000000000000000000000000001"
		const ownerEfCXyyv = "0x0000000000000000000000000000000000000001"
		await contractqjE4XMj.setApprovalForAll.call(too0q6HM, approvedn2T5CnH, {from: accounts[4]});
		await contractqjE4XMj.transferFrom.call(fromUb1C5sO, togOv3Qzl, tokenIdtTCO7jp, {from: accounts[4]});
		const nullYclK5q1 = await contractqjE4XMj.isApprovedForAll.call(ownerEfCXyyv, operatorjfPkf5s, {from: accounts[4]});

		await expect(contractqjE4XMj.setApprovalForAll.call(too0q6HM, approvedn2T5CnH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractIo2wOHr = await ERC721.new({from: accounts[2]});
		const _datavywfOs = "0x0e03150f020a171816"
		const tokenIdcf4HKR = BigInt("1805")
		const toD8nfyl6 = accounts[2]
		const fromnqV0AI8 = accounts[2]
		const tokenIdG9orXl0 = BigInt("1105")
		const tonruVxKh = accounts[1]
		const fromn7V2wK = accounts[0]
		await contractIo2wOHr.safeTransferFrom.call(fromnqV0AI8, toD8nfyl6, tokenIdcf4HKR, _datavywfOs, {from: accounts[1]});
		await contractIo2wOHr.transferFrom.call(fromn7V2wK, tonruVxKh, tokenIdG9orXl0, {from: accounts[4]});

		await expect(contractIo2wOHr.safeTransferFrom.call(fromnqV0AI8, toD8nfyl6, tokenIdcf4HKR, _datavywfOs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVJDUosI = await ERC721.new({from: accounts[1]});
		const approveddYiEu13 = true
		const totg0x4HM = accounts[0]
		const tokenIdzYV2dpQ = BigInt("1880")
		const toiyD7cX3 = accounts[1]
		const fromz50DvzG = accounts[5]
		const tokenIdzThUDFG = BigInt("561")
		const tokenIdYnoSNHm = BigInt("1310")
		const tokenIdrh39efM = BigInt("1559")
		const toTvaPjOE = accounts[3]
		const operatorUb7dOhb = "0x0000000000000000000000000000000000000001"
		const owner8d1vNk = accounts[2]
		await contractVJDUosI.setApprovalForAll.call(totg0x4HM, approveddYiEu13, {from: accounts[2]});
		await contractVJDUosI.safeTransferFrom.call(fromz50DvzG, toiyD7cX3, tokenIdzYV2dpQ, {from: accounts[4]});
		const nullXFsLdgH = await contractVJDUosI.ownerOf.call(tokenIdzThUDFG, {from: "0x0000000000000000000000000000000000000001"});
		const nullmilWl4l = await contractVJDUosI.ownerOf.call(tokenIdYnoSNHm, {from: accounts[4]});
		await contractVJDUosI.approve.call(toTvaPjOE, tokenIdrh39efM, {from: accounts[2]});
		const nullOR46D3i = await contractVJDUosI.isApprovedForAll.call(owner8d1vNk, operatorUb7dOhb, {from: accounts[3]});

		await expect(contractVJDUosI.setApprovalForAll.call(totg0x4HM, approveddYiEu13, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCDmk46g = await ERC721.new({from: accounts[2]});
		const approvedlvSAfuy = false
		const toIUgGiqY = accounts[4]
		const approvedomDmFPD = true
		const toBREpJD = accounts[2]
		const _datapeGx1MG = "0x0e03150f020a171816"
		const tokenIdPYp4EZu = BigInt("1829")
		const toOQiSJGW = accounts[2]
		const fromThY3hB1 = accounts[2]
		const tokenIdeXlyTE7 = BigInt("1105")
		const toPahQ7f0 = accounts[1]
		const fromHhPGOkj = accounts[0]
		await contractCDmk46g.setApprovalForAll.call(toIUgGiqY, approvedlvSAfuy, {from: accounts[0]});
		await contractCDmk46g.setApprovalForAll.call(toBREpJD, approvedomDmFPD, {from: accounts[2]});
		await contractCDmk46g.safeTransferFrom.call(fromThY3hB1, toOQiSJGW, tokenIdPYp4EZu, _datapeGx1MG, {from: accounts[1]});
		await contractCDmk46g.transferFrom.call(fromHhPGOkj, toPahQ7f0, tokenIdeXlyTE7, {from: accounts[4]});

		await expect(contractCDmk46g.setApprovalForAll.call(toIUgGiqY, approvedlvSAfuy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFiE1GcE = await ERC721.new({from: accounts[2]});
		const tokenIdPm3MWo6 = BigInt("1109")
		const toHxDKrOU = accounts[1]
		const _dataojWKG81 = "0x0e03150f020a171816"
		const tokenIdPpbfT4W = BigInt("1819")
		const toR42daYe = accounts[2]
		const fromYaYUr5P = accounts[2]
		const _dataRAGtDvL = "0x0b001f0f1a1c19201b0c060f071612140304080c1d0b10031f1d1103191411"
		const tokenIdxBjdlD = BigInt("1330")
		const toR7QG3E2 = "0x0000000000000000000000000000000000000001"
		const fromdzrlY1R = accounts[0]
		const operatorOP6eaCD = accounts[1]
		const ownere378BQx = accounts[4]
		const tokenIdv5MVIs5 = BigInt("1105")
		const toW0uC9DK = accounts[1]
		const fromAdIt9Iy = accounts[0]
		await contractFiE1GcE.approve.call(toHxDKrOU, tokenIdPm3MWo6, {from: accounts[0]});
		await contractFiE1GcE.safeTransferFrom.call(fromYaYUr5P, toR42daYe, tokenIdPpbfT4W, _dataojWKG81, {from: accounts[1]});
		await contractFiE1GcE.safeTransferFrom.call(fromdzrlY1R, toR7QG3E2, tokenIdxBjdlD, _dataRAGtDvL, {from: accounts[0]});
		const nullF2xd0xF = await contractFiE1GcE.isApprovedForAll.call(ownere378BQx, operatorOP6eaCD, {from: accounts[2]});
		await contractFiE1GcE.transferFrom.call(fromAdIt9Iy, toW0uC9DK, tokenIdv5MVIs5, {from: accounts[4]});

		await expect(contractFiE1GcE.approve.call(toHxDKrOU, tokenIdPm3MWo6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxaS6ct = await ERC721.new({from: accounts[2]});
		const operatorDCNoMG2 = accounts[2]
		const ownersEwO3HI = "0x0000000000000000000000000000000000000001"
		const tokenIdiydLTQi = BigInt("266")
		const toutVpVOW = accounts[0]
		const tokenIdaMtbmap = BigInt("1861")
		const tolxB8Gpb = "0x0000000000000000000000000000000000000001"
		const fromtnML3kx = accounts[3]
		const tokenIdNNKnNso = BigInt("1811")
		const nullUaiAbX5 = await contractxaS6ct.isApprovedForAll.call(ownersEwO3HI, operatorDCNoMG2, {from: accounts[0]});
		await contractxaS6ct.approve.call(toutVpVOW, tokenIdiydLTQi, {from: accounts[2]});
		await contractxaS6ct.safeTransferFrom.call(fromtnML3kx, tolxB8Gpb, tokenIdaMtbmap, {from: accounts[5]});
		const nulljmDsvc = await contractxaS6ct.ownerOf.call(tokenIdNNKnNso, {from: accounts[0]});

		assert.equal(nullUaiAbX5, false)
		await expect(contractxaS6ct.approve.call(toutVpVOW, tokenIdiydLTQi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBL5TLmu = await ERC721.new({from: accounts[2]});
		const ownerhXDwEKi = accounts[1]
		const tokenIdpyxrH2q = BigInt("1105")
		const tooaMXOQR = accounts[1]
		const fromlLFTZq = accounts[1]
		const nulldLykVbB = await contractBL5TLmu.balanceOf.call(ownerhXDwEKi, {from: accounts[1]});
		await contractBL5TLmu.transferFrom.call(fromlLFTZq, tooaMXOQR, tokenIdpyxrH2q, {from: accounts[4]});

		assert.equal(nulldLykVbB, 0)
		await expect(contractBL5TLmu.transferFrom.call(fromlLFTZq, tooaMXOQR, tokenIdpyxrH2q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractV5u9mlf = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorfcpY0rL = "0x0000000000000000000000000000000000000001"
		const ownerz4orCn = accounts[1]
		const operatorAK0ZzhA = accounts[3]
		const owneruYRQxV = accounts[1]
		const tokenIdurDjH3B = BigInt("1445")
		const tosKsJ9xW = accounts[1]
		const fromMwKjdFG = accounts[2]
		const ownerIefHHds = accounts[2]
		const tokenIdREXTPlU = BigInt("1779")
		const nullhekLVh1 = await contractV5u9mlf.isApprovedForAll.call(ownerz4orCn, operatorfcpY0rL, {from: accounts[2]});
		const nullq5vEZ77 = await contractV5u9mlf.isApprovedForAll.call(owneruYRQxV, operatorAK0ZzhA, {from: accounts[2]});
		await contractV5u9mlf.safeTransferFrom.call(fromMwKjdFG, tosKsJ9xW, tokenIdurDjH3B, {from: accounts[1]});
		const nullRUXL9yY = await contractV5u9mlf.balanceOf.call(ownerIefHHds, {from: accounts[4]});
		const nullvZqozay = await contractV5u9mlf.getApproved.call(tokenIdREXTPlU, {from: accounts[1]});
	});
})