const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractpb8Wzfh = await ERC721.new({from: accounts[3]});
		const approvedEMITgkf = true
		const tognbyeT1 = accounts[4]
		const operatorCNQznOF = accounts[5]
		const ownerunvwRXC = accounts[3]
		await contractpb8Wzfh.setApprovalForAll.call(tognbyeT1, approvedEMITgkf, {from: accounts[3]});
		const nullb0N1uVR = await contractpb8Wzfh.isApprovedForAll.call(ownerunvwRXC, operatorCNQznOF, {from: accounts[1]});

		assert.equal(nullb0N1uVR, false)
	});

	it('test for ERC721', async () => {
		const contractM1JXili = await ERC721.new({from: accounts[4]});
		const tokenIddpsdcQ6 = BigInt("1801")
		const toqBaJ7L0 = accounts[0]
		const fromugUKGtd = accounts[1]
		const tokenIdBdNDWWB = BigInt("1178")
		const tokenIdfWrDntX = BigInt("214")
		const toAACHeQL = accounts[2]
		const fromQVGe8JR = accounts[5]
		await contractM1JXili.transferFrom.call(fromugUKGtd, toqBaJ7L0, tokenIddpsdcQ6, {from: accounts[0]});
		const nullvyA0kb4 = await contractM1JXili.ownerOf.call(tokenIdBdNDWWB, {from: accounts[3]});
		await contractM1JXili.safeTransferFrom.call(fromQVGe8JR, toAACHeQL, tokenIdfWrDntX, {from: accounts[3]});

		await expect(contractM1JXili.transferFrom.call(fromugUKGtd, toqBaJ7L0, tokenIddpsdcQ6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPNWXqrj = await ERC721.new({from: accounts[1]});
		const tokenIdwpSJP7X = BigInt("1962")
		const toBUFVO6F = accounts[1]
		const tokenIdOu06oCZ = BigInt("224")
		const tokenIdceCGMyo = BigInt("10")
		const too6E2leK = accounts[5]
		await contractPNWXqrj.approve.call(toBUFVO6F, tokenIdwpSJP7X, {from: accounts[0]});
		const nullxdRxvY7 = await contractPNWXqrj.getApproved.call(tokenIdOu06oCZ, {from: accounts[1]});
		await contractPNWXqrj.approve.call(too6E2leK, tokenIdceCGMyo, {from: accounts[0]});

		await expect(contractPNWXqrj.approve.call(toBUFVO6F, tokenIdwpSJP7X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPttF4Jo = await ERC721.new({from: accounts[3]});
		const tokenIdRwl0usY = BigInt("464")
		const approvedvfzHGVf = true
		const tolfUUywH = accounts[4]
		const tokenIde9QBPcK = BigInt("1295")
		const tobnrGPm3 = accounts[2]
		const fromdZWLSl1 = accounts[4]
		const tokenIdyDxNkE6 = BigInt("1293")
		const touvJQAX7 = accounts[1]
		const nullseCgzlg = await contractPttF4Jo.getApproved.call(tokenIdRwl0usY, {from: accounts[5]});
		await contractPttF4Jo.setApprovalForAll.call(tolfUUywH, approvedvfzHGVf, {from: accounts[5]});
		await contractPttF4Jo.transferFrom.call(fromdZWLSl1, tobnrGPm3, tokenIde9QBPcK, {from: accounts[4]});
		await contractPttF4Jo.approve.call(touvJQAX7, tokenIdyDxNkE6, {from: accounts[4]});

		await expect(contractPttF4Jo.getApproved.call(tokenIdRwl0usY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractiDearlr = await ERC721.new({from: accounts[2]});
		const tokenIdg60LxnN = BigInt("136")
		const tofTpff4K = accounts[0]
		const fromCpJPos = accounts[1]
		const approvedUHQOFxc = false
		const toeJwKVDh = "0x0000000000000000000000000000000000000001"
		const tokenIdJgFNH5X = BigInt("1653")
		const toOtMRF5b = accounts[2]
		const _dataXPhP4OU = "0x0a08020d12110b1710190c0c0b140103191a0c16171d110a0919"
		const tokenIdQ4serdS = BigInt("1721")
		const tolpm7JeJ = accounts[1]
		const fromf1QDBA = accounts[4]
		const approvedVt2KQes = false
		const tokOHv5WA = accounts[3]
		await contractiDearlr.safeTransferFrom.call(fromCpJPos, tofTpff4K, tokenIdg60LxnN, {from: accounts[0]});
		await contractiDearlr.setApprovalForAll.call(toeJwKVDh, approvedUHQOFxc, {from: accounts[0]});
		await contractiDearlr.approve.call(toOtMRF5b, tokenIdJgFNH5X, {from: accounts[4]});
		await contractiDearlr.safeTransferFrom.call(fromf1QDBA, tolpm7JeJ, tokenIdQ4serdS, _dataXPhP4OU, {from: accounts[1]});
		await contractiDearlr.setApprovalForAll.call(tokOHv5WA, approvedVt2KQes, {from: accounts[3]});

		await expect(contractiDearlr.safeTransferFrom.call(fromCpJPos, tofTpff4K, tokenIdg60LxnN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractE4lW374 = await ERC721.new({from: accounts[3]});
		const operatorWYMt9M = accounts[6]
		const ownerjNjYUvf = accounts[3]
		const owner25iy19 = "0x0000000000000000000000000000000000000001"
		const null2LXTrk = await contractE4lW374.isApprovedForAll.call(ownerjNjYUvf, operatorWYMt9M, {from: accounts[1]});
		const nullQyEUueu = await contractE4lW374.balanceOf.call(owner25iy19, {from: accounts[4]});

		assert.equal(null2LXTrk, false)
		assert.equal(nullQyEUueu, 0)
	});

	it('test for ERC721', async () => {
		const contractLcJu2nI = await ERC721.new({from: accounts[3]});
		const approvedl1QEJD = false
		const toVv1cQAk = accounts[1]
		const operatorVRTBpgj = accounts[5]
		const ownerAqbTvvH = accounts[3]
		const tokenIdB1pDCxK = BigInt("560")
		const tom7iePyh = accounts[0]
		const fromjFSGf0n = accounts[1]
		const tokenIdnRYIUjf = BigInt("1118")
		const toSBrEPcM = accounts[5]
		await contractLcJu2nI.setApprovalForAll.call(toVv1cQAk, approvedl1QEJD, {from: accounts[1]});
		const nullgdTDfoJ = await contractLcJu2nI.isApprovedForAll.call(ownerAqbTvvH, operatorVRTBpgj, {from: accounts[1]});
		await contractLcJu2nI.safeTransferFrom.call(fromjFSGf0n, tom7iePyh, tokenIdB1pDCxK, {from: accounts[2]});
		await contractLcJu2nI.approve.call(toSBrEPcM, tokenIdnRYIUjf, {from: accounts[5]});

		await expect(contractLcJu2nI.setApprovalForAll.call(toVv1cQAk, approvedl1QEJD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBXTsDOP = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdCaGjCkp = BigInt("139")
		const toWS2KwDS = accounts[5]
		const tokenIdziSLy1p = BigInt("1282")
		const tozqLV7C0 = accounts[5]
		const frompT5VdqN = accounts[2]
		const operatorGEGyCN = accounts[4]
		const ownerVzx9Xkh = accounts[2]
		await contractBXTsDOP.approve.call(toWS2KwDS, tokenIdCaGjCkp, {from: accounts[1]});
		await contractBXTsDOP.safeTransferFrom.call(frompT5VdqN, tozqLV7C0, tokenIdziSLy1p, {from: accounts[4]});
		const nullE24P7RR = await contractBXTsDOP.isApprovedForAll.call(ownerVzx9Xkh, operatorGEGyCN, {from: accounts[2]});
	});
})