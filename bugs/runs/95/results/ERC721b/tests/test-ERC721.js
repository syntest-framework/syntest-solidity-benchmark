const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractBQxAk2q = await ERC721.new({from: accounts[2]});
		const operatoreGTs3cT = accounts[2]
		const ownerifooWXb = accounts[2]
		const operatorHxfaKW2 = accounts[5]
		const ownerCCmbDtv = accounts[0]
		const tokenIdlXFKyeP = BigInt("1880")
		const tonKldGqT = accounts[5]
		const fromcRGMMiO = accounts[2]
		const tokenIdLgEYnN1 = BigInt("1117")
		const nullQ5h8bCy = await contractBQxAk2q.isApprovedForAll.call(ownerifooWXb, operatoreGTs3cT, {from: accounts[1]});
		const nulldb8WPKw = await contractBQxAk2q.isApprovedForAll.call(ownerCCmbDtv, operatorHxfaKW2, {from: accounts[2]});
		await contractBQxAk2q.transferFrom.call(fromcRGMMiO, tonKldGqT, tokenIdlXFKyeP, {from: accounts[2]});
		const nullX59bisG = await contractBQxAk2q.getApproved.call(tokenIdLgEYnN1, {from: accounts[4]});

		assert.equal(nullQ5h8bCy, false)
		assert.equal(nulldb8WPKw, false)
		await expect(contractBQxAk2q.transferFrom.call(fromcRGMMiO, tonKldGqT, tokenIdlXFKyeP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWahQJw = await ERC721.new({from: accounts[4]});
		const tokenIdOKbJ9dq = BigInt("120")
		const tokenIdZvSMsIM = BigInt("542")
		const approvedpygL3u = false
		const tozQhQlip = accounts[0]
		const nullUqtdVHp = await contractWahQJw.ownerOf.call(tokenIdOKbJ9dq, {from: accounts[5]});
		const nullZKCKWHI = await contractWahQJw.ownerOf.call(tokenIdZvSMsIM, {from: accounts[0]});
		await contractWahQJw.setApprovalForAll.call(tozQhQlip, approvedpygL3u, {from: accounts[4]});

		await expect(contractWahQJw.ownerOf.call(tokenIdOKbJ9dq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGbQmgY6 = await ERC721.new({from: accounts[0]});
		const tokenIdDQeb5ak = BigInt("1062")
		const toMYgmsb = accounts[1]
		const tokenIdw4ZM5UU = BigInt("846")
		const tohJNTVLR = accounts[4]
		const tokenIdUkNsTwX = BigInt("963")
		const toR0zhijH = accounts[2]
		const fromnXFr5fd = accounts[2]
		const tokenIdsPqR8zK = BigInt("1837")
		await contractGbQmgY6.approve.call(toMYgmsb, tokenIdDQeb5ak, {from: accounts[3]});
		await contractGbQmgY6.approve.call(tohJNTVLR, tokenIdw4ZM5UU, {from: accounts[2]});
		await contractGbQmgY6.safeTransferFrom.call(fromnXFr5fd, toR0zhijH, tokenIdUkNsTwX, {from: accounts[2]});
		const nullQ6VLSqw = await contractGbQmgY6.getApproved.call(tokenIdsPqR8zK, {from: accounts[2]});

		await expect(contractGbQmgY6.approve.call(toMYgmsb, tokenIdDQeb5ak, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractAia0gi = await ERC721.new({from: accounts[3]});
		const approvedJ3sFNT = true
		const totXZ1nDZ = accounts[0]
		const operatorDP6tdr = accounts[3]
		const ownerHeW57QF = "0x0000000000000000000000000000000000000001"
		const tokenIdld1ktAn = BigInt("619")
		const _data6MS39I = "0x071b0306030b12100716050d150f0d1d07080e021c15"
		const tokenIde6kqP4g = BigInt("71")
		const toqyNORIp = accounts[3]
		const fromCmNqzxJ = accounts[5]
		const ownerQJsPG91 = accounts[5]
		const approvedMaVna2 = false
		const tobbto2kX = accounts[4]
		await contractAia0gi.setApprovalForAll.call(totXZ1nDZ, approvedJ3sFNT, {from: accounts[2]});
		const nullwAStVyV = await contractAia0gi.isApprovedForAll.call(ownerHeW57QF, operatorDP6tdr, {from: "0x0000000000000000000000000000000000000001"});
		const nullgUFArLE = await contractAia0gi.getApproved.call(tokenIdld1ktAn, {from: "0x0000000000000000000000000000000000000001"});
		await contractAia0gi.safeTransferFrom.call(fromCmNqzxJ, toqyNORIp, tokenIde6kqP4g, _data6MS39I, {from: "0x0000000000000000000000000000000000000001"});
		const nullJ5BIujj = await contractAia0gi.balanceOf.call(ownerQJsPG91, {from: "0x0000000000000000000000000000000000000001"});
		await contractAia0gi.setApprovalForAll.call(tobbto2kX, approvedMaVna2, {from: accounts[2]});

		assert.equal(nullwAStVyV, false)
		await expect(contractAia0gi.isApprovedForAll.call(ownerHeW57QF, operatorDP6tdr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractLNs6xEs = await ERC721.new({from: accounts[0]});
		const tokenIdaiOFXl8 = BigInt("676")
		const toZkSgafH = accounts[1]
		const fromg8nlJf = accounts[1]
		const _dataO1w2pXD = "0x1f1f0d060d04160005101e"
		const tokenIddj89bdV = BigInt("908")
		const tofJAP7Az = accounts[4]
		const fromo2fOgYp = accounts[1]
		const tokenId3WPR1k = BigInt("1642")
		await contractLNs6xEs.safeTransferFrom.call(fromg8nlJf, toZkSgafH, tokenIdaiOFXl8, {from: accounts[2]});
		await contractLNs6xEs.safeTransferFrom.call(fromo2fOgYp, tofJAP7Az, tokenIddj89bdV, _dataO1w2pXD, {from: accounts[2]});
		const nullDrV3NNB = await contractLNs6xEs.getApproved.call(tokenId3WPR1k, {from: accounts[4]});

		await expect(contractLNs6xEs.safeTransferFrom.call(fromg8nlJf, toZkSgafH, tokenIdaiOFXl8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPmAlAo1 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdLgGb5b9 = BigInt("210")
		const toqGEWvJ = accounts[1]
		const operatorC9zwIx = accounts[5]
		const ownerLeJLsVy = accounts[0]
		const operatorEbsymdM = accounts[3]
		const ownerkqSFl3e = accounts[1]
		const approvedAasKPa7 = false
		const toa8mNUCA = accounts[3]
		await contractPmAlAo1.approve.call(toqGEWvJ, tokenIdLgGb5b9, {from: accounts[5]});
		const nullfYVavHg = await contractPmAlAo1.isApprovedForAll.call(ownerLeJLsVy, operatorC9zwIx, {from: accounts[5]});
		const nullXe9jaXj = await contractPmAlAo1.isApprovedForAll.call(ownerkqSFl3e, operatorEbsymdM, {from: accounts[2]});
		await contractPmAlAo1.setApprovalForAll.call(toa8mNUCA, approvedAasKPa7, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contractSGnYHtx = await ERC721.new({from: accounts[4]});
		const ownerGKv16vo = accounts[5]
		const tokenIdqkiVCYJ = BigInt("138")
		const nullgCziB6B = await contractSGnYHtx.balanceOf.call(ownerGKv16vo, {from: accounts[1]});
		const nullxHDmuDy = await contractSGnYHtx.ownerOf.call(tokenIdqkiVCYJ, {from: accounts[5]});

		assert.equal(nullgCziB6B, 0)
		await expect(contractSGnYHtx.ownerOf.call(tokenIdqkiVCYJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxZs3Ec = await ERC721.new({from: accounts[2]});
		const operatoryzSgdwV = accounts[4]
		const ownerhDNk6LW = accounts[5]
		const operatorU4ZOdES = accounts[4]
		const ownerHymsaDU = accounts[5]
		const approvedb5bxne = false
		const toZLu6D3e = accounts[1]
		const nullUphFWqb = await contractxZs3Ec.isApprovedForAll.call(ownerhDNk6LW, operatoryzSgdwV, {from: accounts[1]});
		const nullp3FuVHP = await contractxZs3Ec.isApprovedForAll.call(ownerHymsaDU, operatorU4ZOdES, {from: accounts[3]});
		await contractxZs3Ec.setApprovalForAll.call(toZLu6D3e, approvedb5bxne, {from: accounts[1]});

		assert.equal(nullUphFWqb, false)
		assert.equal(nullp3FuVHP, false)
		await expect(contractxZs3Ec.setApprovalForAll.call(toZLu6D3e, approvedb5bxne, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})