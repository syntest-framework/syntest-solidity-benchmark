const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractxLaapBc = await ERC721.new({from: accounts[0]});
		const _datac6CB2ig = "0x1e0f0b071a0b1d141c070608111612090d1a"
		const tokenIdVh2hIXG = BigInt("1676")
		const toWhM2sD1 = accounts[0]
		const fromCdV5vP5 = accounts[4]
		const approvedT5VtLaW = false
		const totuj2sO = accounts[4]
		const ownerIroFf2i = accounts[0]
		const ownerC213YS = accounts[0]
		const tokenIdGFFwpNB = BigInt("45")
		await contractxLaapBc.safeTransferFrom.call(fromCdV5vP5, toWhM2sD1, tokenIdVh2hIXG, _datac6CB2ig, {from: accounts[3]});
		await contractxLaapBc.setApprovalForAll.call(totuj2sO, approvedT5VtLaW, {from: "0x0000000000000000000000000000000000000001"});
		const nullXIbd9N = await contractxLaapBc.balanceOf.call(ownerIroFf2i, {from: accounts[1]});
		const nullEKgUDWk = await contractxLaapBc.balanceOf.call(ownerC213YS, {from: accounts[0]});
		const nully5x3bEc = await contractxLaapBc.ownerOf.call(tokenIdGFFwpNB, {from: accounts[5]});

		await expect(contractxLaapBc.safeTransferFrom.call(fromCdV5vP5, toWhM2sD1, tokenIdVh2hIXG, _datac6CB2ig, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractHxQbiGr = await ERC721.new({from: accounts[2]});
		const tokenIdZwsuI7X = BigInt("1917")
		const tox2tqlPc = accounts[4]
		const approved5k1Gqc = true
		const todi4UPf = "0x0000000000000000000000000000000000000001"
		const tokenIdDmVC69g = BigInt("318")
		await contractHxQbiGr.approve.call(tox2tqlPc, tokenIdZwsuI7X, {from: accounts[4]});
		await contractHxQbiGr.setApprovalForAll.call(todi4UPf, approved5k1Gqc, {from: accounts[4]});
		const nullQ4Wtih3 = await contractHxQbiGr.getApproved.call(tokenIdDmVC69g, {from: accounts[5]});

		await expect(contractHxQbiGr.approve.call(tox2tqlPc, tokenIdZwsuI7X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractOzHERrc = await ERC721.new({from: accounts[1]});
		const tokenIdlMdbXbT = BigInt("1560")
		const to9529C9 = accounts[3]
		const fromFb3JeJc = accounts[4]
		const tokenIdZdpqbU6 = BigInt("1181")
		const tonyYhksY = accounts[3]
		const tokenIdVm3jo1t = BigInt("646")
		const tokenIdKbhzGMy = BigInt("1795")
		const tofEDgGW = accounts[2]
		const fromAr8AUxv = accounts[4]
		await contractOzHERrc.safeTransferFrom.call(fromFb3JeJc, to9529C9, tokenIdlMdbXbT, {from: accounts[0]});
		await contractOzHERrc.approve.call(tonyYhksY, tokenIdZdpqbU6, {from: accounts[2]});
		const nulluHCToW = await contractOzHERrc.ownerOf.call(tokenIdVm3jo1t, {from: accounts[2]});
		await contractOzHERrc.safeTransferFrom.call(fromAr8AUxv, tofEDgGW, tokenIdKbhzGMy, {from: accounts[3]});

		await expect(contractOzHERrc.safeTransferFrom.call(fromFb3JeJc, to9529C9, tokenIdlMdbXbT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpJwWLHE = await ERC721.new({from: accounts[2]});
		const ownerVgiTHgc = accounts[3]
		const approvedYv7c5A = false
		const toACWAldJ = accounts[2]
		const tokenIdHRDm8zI = BigInt("29")
		const tokenIdoF9nn8N = BigInt("596")
		const approvedtetm5K = false
		const toAF94Yi = accounts[2]
		const tokenIdN6tEKVp = BigInt("615")
		const tohoh7XNB = accounts[3]
		const fromHAZTGBw = accounts[1]
		const nullWubJG5r = await contractpJwWLHE.balanceOf.call(ownerVgiTHgc, {from: accounts[1]});
		await contractpJwWLHE.setApprovalForAll.call(toACWAldJ, approvedYv7c5A, {from: accounts[2]});
		const nullL5FRA6D = await contractpJwWLHE.getApproved.call(tokenIdHRDm8zI, {from: accounts[0]});
		const nullNxkAoaZ = await contractpJwWLHE.getApproved.call(tokenIdoF9nn8N, {from: accounts[0]});
		await contractpJwWLHE.setApprovalForAll.call(toAF94Yi, approvedtetm5K, {from: accounts[2]});
		await contractpJwWLHE.safeTransferFrom.call(fromHAZTGBw, tohoh7XNB, tokenIdN6tEKVp, {from: accounts[2]});

		assert.equal(nullWubJG5r, 0)
		await expect(contractpJwWLHE.setApprovalForAll.call(toACWAldJ, approvedYv7c5A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractqm6a68o = await ERC721.new({from: accounts[1]});
		const tokenIdryiMwfI = BigInt("748")
		const tokenIdU0ux4ET = BigInt("141")
		const toECRVFM = accounts[3]
		const fromukknXs7 = accounts[0]
		const tokenIdsxGToie = BigInt("1190")
		const nullsfVUtdv = await contractqm6a68o.getApproved.call(tokenIdryiMwfI, {from: accounts[3]});
		await contractqm6a68o.safeTransferFrom.call(fromukknXs7, toECRVFM, tokenIdU0ux4ET, {from: accounts[3]});
		const nulltOd2zmu = await contractqm6a68o.ownerOf.call(tokenIdsxGToie, {from: accounts[3]});

		await expect(contractqm6a68o.getApproved.call(tokenIdryiMwfI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgjx1q77 = await ERC721.new({from: accounts[5]});
		const tokenIdWIlVw3u = BigInt("77")
		const toyh0x9Y = accounts[0]
		const fromcs0JyiR = accounts[1]
		const tokenIdmClVnWD = BigInt("598")
		const toHDVgol3 = accounts[1]
		const tokenIde9gmLnx = BigInt("1413")
		const tojttqdI6 = accounts[0]
		const tokenIdCE6DqNe = BigInt("1370")
		const tokenIdUVnObEg = BigInt("103")
		const tooIzwGbN = accounts[0]
		const tokenIdqGLkh57 = BigInt("1046")
		await contractgjx1q77.transferFrom.call(fromcs0JyiR, toyh0x9Y, tokenIdWIlVw3u, {from: accounts[3]});
		await contractgjx1q77.approve.call(toHDVgol3, tokenIdmClVnWD, {from: accounts[4]});
		await contractgjx1q77.approve.call(tojttqdI6, tokenIde9gmLnx, {from: accounts[4]});
		const nulllrGTZzf = await contractgjx1q77.ownerOf.call(tokenIdCE6DqNe, {from: accounts[4]});
		await contractgjx1q77.approve.call(tooIzwGbN, tokenIdUVnObEg, {from: accounts[3]});
		const nullC5qOcDG = await contractgjx1q77.getApproved.call(tokenIdqGLkh57, {from: accounts[1]});

		await expect(contractgjx1q77.transferFrom.call(fromcs0JyiR, toyh0x9Y, tokenIdWIlVw3u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractmFAxLCd = await ERC721.new({from: accounts[2]});
		const operatorNwOgA3 = accounts[2]
		const owneri2WLWeL = accounts[1]
		const tokenIdsh0NhU3 = BigInt("1917")
		const toCNvO0x2 = accounts[5]
		const tokenIdU43bZk3 = BigInt("403")
		const toXjIsA59 = accounts[5]
		const fromRuuJb5 = "0x0000000000000000000000000000000000000001"
		const approvedk2OGH6b = true
		const toamqlPzV = "0x0000000000000000000000000000000000000001"
		const tokenIdt9oYNmc = BigInt("318")
		const nullvHdbV96 = await contractmFAxLCd.isApprovedForAll.call(owneri2WLWeL, operatorNwOgA3, {from: accounts[1]});
		await contractmFAxLCd.approve.call(toCNvO0x2, tokenIdsh0NhU3, {from: accounts[4]});
		await contractmFAxLCd.transferFrom.call(fromRuuJb5, toXjIsA59, tokenIdU43bZk3, {from: accounts[2]});
		await contractmFAxLCd.setApprovalForAll.call(toamqlPzV, approvedk2OGH6b, {from: accounts[4]});
		const nullXDBtS9m = await contractmFAxLCd.getApproved.call(tokenIdt9oYNmc, {from: accounts[5]});

		assert.equal(nullvHdbV96, false)
		await expect(contractmFAxLCd.approve.call(toCNvO0x2, tokenIdsh0NhU3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractAihigAJ = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const _datahu6Wk8W = "0x0a190211121c0e01051c1b161717090717110b1f0e0507021a"
		const tokenIdzs9lyTK = BigInt("170")
		const toxDIVtSn = accounts[2]
		const fromwjb2xLs = accounts[0]
		const tokenIdfjczzj = BigInt("261")
		const toGeb7FJu = accounts[4]
		await contractAihigAJ.safeTransferFrom.call(fromwjb2xLs, toxDIVtSn, tokenIdzs9lyTK, _datahu6Wk8W, {from: accounts[2]});
		await contractAihigAJ.approve.call(toGeb7FJu, tokenIdfjczzj, {from: accounts[3]});
	});
})