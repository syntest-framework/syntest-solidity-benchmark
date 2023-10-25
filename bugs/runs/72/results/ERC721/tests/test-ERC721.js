const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractPfdm386 = await ERC721.new({from: accounts[4]});
		const operatorB2NDhlI = accounts[0]
		const ownernPgxM1w = accounts[1]
		const approvedyouDf8O = true
		const toEYtGEIi = accounts[2]
		const nulle8ZlET1 = await contractPfdm386.isApprovedForAll.call(ownernPgxM1w, operatorB2NDhlI, {from: "0x0000000000000000000000000000000000000001"});
		await contractPfdm386.setApprovalForAll.call(toEYtGEIi, approvedyouDf8O, {from: accounts[1]});

		assert.equal(nulle8ZlET1, false)
	});

	it('test for ERC721', async () => {
		const contractmmJwTYE = await ERC721.new({from: accounts[3]});
		const tokenIda2bvPb2 = BigInt("1638")
		const operatorTT48lkl = accounts[4]
		const ownerlZPsmj1 = accounts[3]
		const _dataNcRExfw = "0x1d170c17001c0e1e03061b05"
		const tokenIdSmMlO3 = BigInt("883")
		const toiKz8w2U = accounts[2]
		const fromHece8LS = accounts[4]
		const nullRRJOPbX = await contractmmJwTYE.ownerOf.call(tokenIda2bvPb2, {from: accounts[3]});
		const nullu3sRaG = await contractmmJwTYE.isApprovedForAll.call(ownerlZPsmj1, operatorTT48lkl, {from: accounts[3]});
		await contractmmJwTYE.safeTransferFrom.call(fromHece8LS, toiKz8w2U, tokenIdSmMlO3, _dataNcRExfw, {from: accounts[3]});

		await expect(contractmmJwTYE.ownerOf.call(tokenIda2bvPb2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFcDRfT = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const ownergBPFLQl = accounts[1]
		const tokenIdn0sVAY9 = BigInt("779")
		const toMcnUOvT = accounts[0]
		const fromfOW5Hfz = accounts[1]
		const tokenIdmeXjQme = BigInt("306")
		const approvedUfdByom = true
		const toFsS3GdD = accounts[3]
		const nullmyqgBMu = await contractFcDRfT.balanceOf.call(ownergBPFLQl, {from: accounts[3]});
		await contractFcDRfT.safeTransferFrom.call(fromfOW5Hfz, toMcnUOvT, tokenIdn0sVAY9, {from: accounts[3]});
		const nullszB9yG8 = await contractFcDRfT.getApproved.call(tokenIdmeXjQme, {from: accounts[4]});
		await contractFcDRfT.setApprovalForAll.call(toFsS3GdD, approvedUfdByom, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractqjloZzz = await ERC721.new({from: accounts[1]});
		const tokenIdVemwITC = BigInt("153")
		const toOectB92 = accounts[3]
		const tokenIdPlWX4PS = BigInt("1924")
		const togJA3tQK = "0x0000000000000000000000000000000000000001"
		const fromZTEPIK = accounts[1]
		const tokenIdPnA8SPW = BigInt("182")
		const toTMb6gJS = accounts[3]
		const fromLqSWcRa = accounts[3]
		const operatorcKJ46uz = accounts[2]
		const ownerGFZdHjv = accounts[3]
		const tokenIduIEjQjZ = BigInt("1033")
		const operatord8GH0lD = accounts[1]
		const owneraZpqLnu = accounts[3]
		await contractqjloZzz.approve.call(toOectB92, tokenIdVemwITC, {from: accounts[2]});
		await contractqjloZzz.transferFrom.call(fromZTEPIK, togJA3tQK, tokenIdPlWX4PS, {from: accounts[2]});
		await contractqjloZzz.safeTransferFrom.call(fromLqSWcRa, toTMb6gJS, tokenIdPnA8SPW, {from: accounts[1]});
		const nullH5H05t8 = await contractqjloZzz.isApprovedForAll.call(ownerGFZdHjv, operatorcKJ46uz, {from: accounts[2]});
		const nullTq7lZC = await contractqjloZzz.getApproved.call(tokenIduIEjQjZ, {from: accounts[3]});
		const nullU1ClrtB = await contractqjloZzz.isApprovedForAll.call(owneraZpqLnu, operatord8GH0lD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractqjloZzz.approve.call(toOectB92, tokenIdVemwITC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractQn0aZfy = await ERC721.new({from: accounts[3]});
		const operatorwdiJCVe = "0x0000000000000000000000000000000000000001"
		const ownerdBidKxY = accounts[3]
		const operatorUo9Xl6m = accounts[3]
		const ownerr2LONb0 = accounts[1]
		const approvednWg20Ki = true
		const toCzHOPTM = accounts[3]
		const approvedonQ1ery = false
		const toWqaTfiN = accounts[4]
		const tokenIdDQK9Rnd = BigInt("174")
		const tosHUr8I = accounts[0]
		const tokenIdMOJQOg = BigInt("1207")
		const toWUP5wI = "0x0000000000000000000000000000000000000001"
		const fromXDR9hIR = accounts[2]
		const nullMUatsFe = await contractQn0aZfy.isApprovedForAll.call(ownerdBidKxY, operatorwdiJCVe, {from: accounts[5]});
		const nullZhh8mct = await contractQn0aZfy.isApprovedForAll.call(ownerr2LONb0, operatorUo9Xl6m, {from: accounts[3]});
		await contractQn0aZfy.setApprovalForAll.call(toCzHOPTM, approvednWg20Ki, {from: accounts[3]});
		await contractQn0aZfy.setApprovalForAll.call(toWqaTfiN, approvedonQ1ery, {from: accounts[0]});
		await contractQn0aZfy.approve.call(tosHUr8I, tokenIdDQK9Rnd, {from: accounts[0]});
		await contractQn0aZfy.transferFrom.call(fromXDR9hIR, toWUP5wI, tokenIdMOJQOg, {from: accounts[0]});

		assert.equal(nullMUatsFe, false)
		assert.equal(nullZhh8mct, false)
		await expect(contractQn0aZfy.setApprovalForAll.call(toCzHOPTM, approvednWg20Ki, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractNy5aQjO = await ERC721.new({from: accounts[4]});
		const tokenIdPrqxLGb = BigInt("836")
		const tokenIdZRvAWFt = BigInt("1495")
		const _dataqOp0ToF = "0x1720160c1c0805180d1109031c1b10080705120e071405090a08061f15020a"
		const tokenIde5nM9GD = BigInt("1957")
		const tobuXwrGg = accounts[2]
		const fromCZxHTO = accounts[3]
		const ownerJgy1BbH = accounts[4]
		const nullsxoMHsT = await contractNy5aQjO.getApproved.call(tokenIdPrqxLGb, {from: accounts[0]});
		const nullp82fHdU = await contractNy5aQjO.ownerOf.call(tokenIdZRvAWFt, {from: accounts[0]});
		await contractNy5aQjO.safeTransferFrom.call(fromCZxHTO, tobuXwrGg, tokenIde5nM9GD, _dataqOp0ToF, {from: accounts[4]});
		const nullR86kKG6 = await contractNy5aQjO.balanceOf.call(ownerJgy1BbH, {from: accounts[2]});

		await expect(contractNy5aQjO.getApproved.call(tokenIdPrqxLGb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractx58pEFf = await ERC721.new({from: accounts[0]});
		const tokenIdihZ1h6T = BigInt("414")
		const tox80vz2C = "0x0000000000000000000000000000000000000001"
		const fromKhg65DV = accounts[0]
		const tokenIdbIntcL = BigInt("688")
		const toOPpUmr = accounts[4]
		const _dataIS3f2N8 = "0x1410060b0a16130015170a1f1215"
		const tokenIdZygeG1 = BigInt("1625")
		const toaJEYpz = accounts[4]
		const fromTO8n3TX = accounts[0]
		const ownerGdul8fw = accounts[3]
		await contractx58pEFf.safeTransferFrom.call(fromKhg65DV, tox80vz2C, tokenIdihZ1h6T, {from: "0x0000000000000000000000000000000000000001"});
		await contractx58pEFf.approve.call(toOPpUmr, tokenIdbIntcL, {from: accounts[4]});
		await contractx58pEFf.safeTransferFrom.call(fromTO8n3TX, toaJEYpz, tokenIdZygeG1, _dataIS3f2N8, {from: accounts[4]});
		const nullVTbd5eh = await contractx58pEFf.balanceOf.call(ownerGdul8fw, {from: accounts[4]});

		await expect(contractx58pEFf.safeTransferFrom.call(fromKhg65DV, tox80vz2C, tokenIdihZ1h6T, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractoYuwl1L = await ERC721.new({from: accounts[1]});
		const approvedD3RcEGx = true
		const tonAcpck3 = accounts[3]
		const ownerlXAfF4v = accounts[0]
		const approvedrKzJggA = false
		const tovgOrRSL = accounts[2]
		await contractoYuwl1L.setApprovalForAll.call(tonAcpck3, approvedD3RcEGx, {from: accounts[4]});
		const nullgWAOfYM = await contractoYuwl1L.balanceOf.call(ownerlXAfF4v, {from: accounts[1]});
		await contractoYuwl1L.setApprovalForAll.call(tovgOrRSL, approvedrKzJggA, {from: accounts[2]});

		assert.equal(nullgWAOfYM, 0)
		await expect(contractoYuwl1L.balanceOf.call(ownerlXAfF4v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractG4voqbW = await ERC721.new({from: accounts[4]});
		const operatorfMvVWSP = accounts[0]
		const ownerh2humuY = accounts[2]
		const operatorneIbjKz = "0x0000000000000000000000000000000000000001"
		const ownerHb2a2Z1 = "0x0000000000000000000000000000000000000001"
		const tokenIdDoHX6KT = BigInt("1462")
		const tomPithhG = accounts[0]
		const fromTJWPXzu = accounts[5]
		const nullrFm49XE = await contractG4voqbW.isApprovedForAll.call(ownerh2humuY, operatorfMvVWSP, {from: "0x0000000000000000000000000000000000000001"});
		const nullUxdIUnm = await contractG4voqbW.isApprovedForAll.call(ownerHb2a2Z1, operatorneIbjKz, {from: accounts[1]});
		await contractG4voqbW.transferFrom.call(fromTJWPXzu, tomPithhG, tokenIdDoHX6KT, {from: accounts[3]});

		assert.equal(nullUxdIUnm, false)
		assert.equal(nullrFm49XE, false)
		await expect(contractG4voqbW.transferFrom.call(fromTJWPXzu, tomPithhG, tokenIdDoHX6KT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpL8ycH8 = await ERC721.new({from: accounts[0]});
		const owner2Dz1xA = "0x0000000000000000000000000000000000000000"
		const tokenIdn91zQB0 = BigInt("1096")
		const tokenIdSihbFo4 = BigInt("6")
		const toqErvz3m = accounts[1]
		const tokenIdd52v67a = BigInt("326")
		const tosvNpAI = accounts[1]
		const nullfNYiWZi = await contractpL8ycH8.balanceOf.call(owner2Dz1xA, {from: accounts[1]});
		const nullLtr9qrg = await contractpL8ycH8.getApproved.call(tokenIdn91zQB0, {from: accounts[1]});
		await contractpL8ycH8.approve.call(toqErvz3m, tokenIdSihbFo4, {from: accounts[4]});
		await contractpL8ycH8.approve.call(tosvNpAI, tokenIdd52v67a, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractpL8ycH8.balanceOf.call(owner2Dz1xA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})