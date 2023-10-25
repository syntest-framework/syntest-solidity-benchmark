const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractvCKd6F = await ERC721.new({from: accounts[2]});
		const tokenIdumPIQom = BigInt("1196")
		const towSfX9pS = accounts[2]
		const fromxeI5ee = accounts[3]
		const tokenIdSMI8YSq = BigInt("1447")
		const toDyiNWhu = accounts[2]
		const fromSqK0FIq = accounts[5]
		await contractvCKd6F.safeTransferFrom.call(fromxeI5ee, towSfX9pS, tokenIdumPIQom, {from: accounts[5]});
		await contractvCKd6F.transferFrom.call(fromSqK0FIq, toDyiNWhu, tokenIdSMI8YSq, {from: accounts[0]});

		await expect(contractvCKd6F.safeTransferFrom.call(fromxeI5ee, towSfX9pS, tokenIdumPIQom, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractQcG0c5N = await ERC721.new({from: accounts[3]});
		const tokenIdJLd3wmN = BigInt("1636")
		const toj1MXvun = accounts[3]
		const tokenIdKYduL23 = BigInt("1329")
		const toQRhYaHO = accounts[0]
		const tokenIdU3Fvqfa = BigInt("1925")
		const toziOOoBC = accounts[3]
		const fromCsOAWuZ = accounts[0]
		const _databMVIr7 = "0x1c071f13061013071f0a020d1b"
		const tokenIdILx9Uox = BigInt("610")
		const toocrGSAO = accounts[3]
		const fromETjXiX8 = "0x0000000000000000000000000000000000000001"
		await contractQcG0c5N.approve.call(toj1MXvun, tokenIdJLd3wmN, {from: "0x0000000000000000000000000000000000000001"});
		await contractQcG0c5N.approve.call(toQRhYaHO, tokenIdKYduL23, {from: "0x0000000000000000000000000000000000000001"});
		await contractQcG0c5N.safeTransferFrom.call(fromCsOAWuZ, toziOOoBC, tokenIdU3Fvqfa, {from: accounts[3]});
		await contractQcG0c5N.safeTransferFrom.call(fromETjXiX8, toocrGSAO, tokenIdILx9Uox, _databMVIr7, {from: accounts[2]});

		await expect(contractQcG0c5N.approve.call(toj1MXvun, tokenIdJLd3wmN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrFpeLjM = await ERC721.new({from: accounts[4]});
		const tokenIdimJFSp = BigInt("178")
		const tokenIdvfaXjrf = BigInt("1575")
		const toqrRDKyQ = accounts[2]
		const fromEwqJOMK = accounts[0]
		const tokenIdA6LT3Ib = BigInt("1934")
		const topbxfLVb = accounts[1]
		const fromIOqLinS = accounts[1]
		const tokenIdoE97yu0 = BigInt("904")
		const toDUOhYQF = accounts[2]
		const frombLqsrSh = accounts[4]
		const tokenIddotAspB = BigInt("1331")
		const to2iNIjd = accounts[2]
		const fromrKxbQWL = accounts[3]
		const approvedNGDhnNS = true
		const toyPQHffV = accounts[0]
		const nullrZleDVg = await contractrFpeLjM.getApproved.call(tokenIdimJFSp, {from: accounts[1]});
		await contractrFpeLjM.transferFrom.call(fromEwqJOMK, toqrRDKyQ, tokenIdvfaXjrf, {from: accounts[2]});
		await contractrFpeLjM.safeTransferFrom.call(fromIOqLinS, topbxfLVb, tokenIdA6LT3Ib, {from: accounts[4]});
		await contractrFpeLjM.transferFrom.call(frombLqsrSh, toDUOhYQF, tokenIdoE97yu0, {from: accounts[3]});
		await contractrFpeLjM.safeTransferFrom.call(fromrKxbQWL, to2iNIjd, tokenIddotAspB, {from: accounts[4]});
		await contractrFpeLjM.setApprovalForAll.call(toyPQHffV, approvedNGDhnNS, {from: accounts[0]});

		await expect(contractrFpeLjM.getApproved.call(tokenIdimJFSp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractLZ859m = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatoryaD0rga = accounts[5]
		const ownerwQTCkt = accounts[1]
		const tokenIdtdE8hIP = BigInt("207")
		const toijic4A3 = accounts[2]
		const nullS6Bhn8Z = await contractLZ859m.isApprovedForAll.call(ownerwQTCkt, operatoryaD0rga, {from: accounts[4]});
		await contractLZ859m.approve.call(toijic4A3, tokenIdtdE8hIP, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contractvohzZRv = await ERC721.new({from: accounts[1]});
		const ownerEh6DK19 = accounts[1]
		const approveddWAzey = false
		const torlX6IV0 = accounts[5]
		const owneryL1QBmP = "0x0000000000000000000000000000000000000001"
		const tokenIdhYJRNbA = BigInt("1994")
		const approvedggh4jBA = false
		const tofoG8MWD = accounts[4]
		const approvediPfymfd = true
		const toCqbFWit = accounts[0]
		const nullk5uBlS = await contractvohzZRv.balanceOf.call(ownerEh6DK19, {from: accounts[1]});
		await contractvohzZRv.setApprovalForAll.call(torlX6IV0, approveddWAzey, {from: accounts[5]});
		const nullxg8GPqi = await contractvohzZRv.balanceOf.call(owneryL1QBmP, {from: accounts[1]});
		const nullNli24d3 = await contractvohzZRv.ownerOf.call(tokenIdhYJRNbA, {from: accounts[0]});
		await contractvohzZRv.setApprovalForAll.call(tofoG8MWD, approvedggh4jBA, {from: accounts[3]});
		await contractvohzZRv.setApprovalForAll.call(toCqbFWit, approvediPfymfd, {from: accounts[1]});

		assert.equal(nullk5uBlS, 0)
		await expect(contractvohzZRv.setApprovalForAll.call(torlX6IV0, approveddWAzey, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractdGfyj22 = await ERC721.new({from: accounts[1]});
		const ownerzBLARdJ = accounts[0]
		const ownerm6ipad = "0x0000000000000000000000000000000000000000"
		const tokenIdIZuL8bt = BigInt("1994")
		const approvedfN9hF5L = true
		const tobfrBiQJ = accounts[0]
		const nullKJ8QnoJ = await contractdGfyj22.balanceOf.call(ownerzBLARdJ, {from: accounts[1]});
		const nullCSpybtR = await contractdGfyj22.balanceOf.call(ownerm6ipad, {from: accounts[1]});
		const nullRBCzPv = await contractdGfyj22.ownerOf.call(tokenIdIZuL8bt, {from: accounts[0]});
		await contractdGfyj22.setApprovalForAll.call(tobfrBiQJ, approvedfN9hF5L, {from: accounts[1]});

		assert.equal(nullKJ8QnoJ, 0)
		await expect(contractdGfyj22.balanceOf.call(ownerm6ipad, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})