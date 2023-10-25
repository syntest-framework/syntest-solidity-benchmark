const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contracturWXVZO = await ERC721.new({from: accounts[0]});
		const tokenIdq1F9MM = BigInt("1639")
		const tokenIdWdxCltE = BigInt("1341")
		const togWogE7T = accounts[1]
		const fromyKY85aT = accounts[2]
		const tokenIdrHSeAYk = BigInt("1475")
		const tokenIdew5wVyF = BigInt("2008")
		const tohBtVPkK = accounts[3]
		const approvedoxvPnUv = false
		const toDhPQ4ZN = accounts[4]
		const operatorxZWqrPl = accounts[2]
		const ownerkTpcLdm = accounts[1]
		const nulld1aVnRb = await contracturWXVZO.ownerOf.call(tokenIdq1F9MM, {from: accounts[1]});
		await contracturWXVZO.safeTransferFrom.call(fromyKY85aT, togWogE7T, tokenIdWdxCltE, {from: accounts[3]});
		const nullyvQrMG = await contracturWXVZO.ownerOf.call(tokenIdrHSeAYk, {from: accounts[1]});
		await contracturWXVZO.approve.call(tohBtVPkK, tokenIdew5wVyF, {from: accounts[2]});
		await contracturWXVZO.setApprovalForAll.call(toDhPQ4ZN, approvedoxvPnUv, {from: "0x0000000000000000000000000000000000000001"});
		const nullKwvDk3 = await contracturWXVZO.isApprovedForAll.call(ownerkTpcLdm, operatorxZWqrPl, {from: accounts[3]});

		await expect(contracturWXVZO.ownerOf.call(tokenIdq1F9MM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractrhMXJs5 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatoreIBAmBs = accounts[5]
		const ownerDAJuyME = accounts[3]
		const tokenIdoeEMVx = BigInt("1918")
		const tokenIdIABo9f7 = BigInt("869")
		const nulllxxL4DZ = await contractrhMXJs5.isApprovedForAll.call(ownerDAJuyME, operatoreIBAmBs, {from: accounts[3]});
		const nullKQQlXP2 = await contractrhMXJs5.ownerOf.call(tokenIdoeEMVx, {from: accounts[2]});
		const nullfRiry1n = await contractrhMXJs5.ownerOf.call(tokenIdIABo9f7, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contractXCOtWnT = await ERC721.new({from: accounts[3]});
		const approvedalS1Xt0 = true
		const toTxsowCD = accounts[3]
		const approvedvOlFNFE = false
		const toDD44gV = accounts[2]
		const tokenIdwUVFsAx = BigInt("1554")
		await contractXCOtWnT.setApprovalForAll.call(toTxsowCD, approvedalS1Xt0, {from: accounts[0]});
		await contractXCOtWnT.setApprovalForAll.call(toDD44gV, approvedvOlFNFE, {from: accounts[4]});
		const nulleykSXG = await contractXCOtWnT.ownerOf.call(tokenIdwUVFsAx, {from: accounts[0]});

		await expect(contractXCOtWnT.setApprovalForAll.call(toTxsowCD, approvedalS1Xt0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWOT8ig5 = await ERC721.new({from: accounts[5]});
		const tokenIdxNlZjRp = BigInt("1793")
		const tokenIdt6egWsV = BigInt("826")
		const toj8HmCm = accounts[4]
		const fromNG5atUJ = accounts[4]
		const operatorlLdoyeA = accounts[4]
		const ownerfBi6so7 = accounts[2]
		const _dataIInbxO = "0x181f1d050b0c0809150c160f1d050e0512030d0d0100"
		const tokenIdgGQMhDA = BigInt("1227")
		const toUn3m6M = "0x0000000000000000000000000000000000000001"
		const fromLt4yaSV = accounts[5]
		const nulllChsy0 = await contractWOT8ig5.getApproved.call(tokenIdxNlZjRp, {from: accounts[0]});
		await contractWOT8ig5.transferFrom.call(fromNG5atUJ, toj8HmCm, tokenIdt6egWsV, {from: "0x0000000000000000000000000000000000000001"});
		const nulluGDfzHd = await contractWOT8ig5.isApprovedForAll.call(ownerfBi6so7, operatorlLdoyeA, {from: accounts[2]});
		await contractWOT8ig5.safeTransferFrom.call(fromLt4yaSV, toUn3m6M, tokenIdgGQMhDA, _dataIInbxO, {from: accounts[0]});

		await expect(contractWOT8ig5.getApproved.call(tokenIdxNlZjRp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractv47B3T = await ERC721.new({from: accounts[2]});
		const tokenIdmbqR2mh = BigInt("1655")
		const tofdBaWFz = accounts[4]
		const fromvEr6O4 = accounts[3]
		const ownerxUqhq0w = accounts[1]
		const operatorLZ8herx = accounts[5]
		const ownersJJspbh = accounts[1]
		await contractv47B3T.transferFrom.call(fromvEr6O4, tofdBaWFz, tokenIdmbqR2mh, {from: accounts[3]});
		const nullpRjYnSi = await contractv47B3T.balanceOf.call(ownerxUqhq0w, {from: accounts[3]});
		const nullahZQLn = await contractv47B3T.isApprovedForAll.call(ownersJJspbh, operatorLZ8herx, {from: accounts[1]});

		await expect(contractv47B3T.transferFrom.call(fromvEr6O4, tofdBaWFz, tokenIdmbqR2mh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractoGtIEUc = await ERC721.new({from: accounts[1]});
		const operatorZCwKM4 = accounts[4]
		const ownerI1XN209 = accounts[3]
		const tokenIdIJQWE8o = BigInt("1867")
		const toyFFfxOw = "0x0000000000000000000000000000000000000001"
		const fromjw78ECk = accounts[4]
		const tokenIds4DIIn = BigInt("860")
		const approvedY6X5aXq = true
		const toMmgGEib = accounts[2]
		const tokenIdfjQkco = BigInt("122")
		const toBedGP3I = accounts[5]
		const fromQ2q1SNT = accounts[4]
		const nullTTXtb1x = await contractoGtIEUc.isApprovedForAll.call(ownerI1XN209, operatorZCwKM4, {from: accounts[1]});
		await contractoGtIEUc.transferFrom.call(fromjw78ECk, toyFFfxOw, tokenIdIJQWE8o, {from: accounts[0]});
		const nullNLRcPXx = await contractoGtIEUc.ownerOf.call(tokenIds4DIIn, {from: accounts[5]});
		await contractoGtIEUc.setApprovalForAll.call(toMmgGEib, approvedY6X5aXq, {from: accounts[0]});
		await contractoGtIEUc.safeTransferFrom.call(fromQ2q1SNT, toBedGP3I, tokenIdfjQkco, {from: accounts[4]});

		assert.equal(nullTTXtb1x, false)
		await expect(contractoGtIEUc.transferFrom.call(fromjw78ECk, toyFFfxOw, tokenIdIJQWE8o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractvaRFFwS = await ERC721.new({from: accounts[0]});
		const tokenIdthztWJ = BigInt("739")
		const toqFRw7YE = accounts[1]
		const ownerA1txZrx = accounts[1]
		const tokenIdAC2XNqc = BigInt("1581")
		const tokenIdHCwyVWh = BigInt("1817")
		const toPbhsDXa = accounts[5]
		const tokenIdG8GDAQ1 = BigInt("1746")
		const tosQXedgd = accounts[1]
		const fromV3FU6TW = accounts[2]
		await contractvaRFFwS.approve.call(toqFRw7YE, tokenIdthztWJ, {from: accounts[4]});
		const nullTbVHb7P = await contractvaRFFwS.balanceOf.call(ownerA1txZrx, {from: accounts[3]});
		const nullUqmOZD = await contractvaRFFwS.ownerOf.call(tokenIdAC2XNqc, {from: "0x0000000000000000000000000000000000000001"});
		await contractvaRFFwS.approve.call(toPbhsDXa, tokenIdHCwyVWh, {from: accounts[4]});
		await contractvaRFFwS.transferFrom.call(fromV3FU6TW, tosQXedgd, tokenIdG8GDAQ1, {from: accounts[0]});

		await expect(contractvaRFFwS.approve.call(toqFRw7YE, tokenIdthztWJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthkgN7jh = await ERC721.new({from: accounts[2]});
		const tokenIdbBwA3j1 = BigInt("437")
		const toVGMPbPh = accounts[0]
		const fromBluya2V = accounts[0]
		const approvedM13taw6 = false
		const toTmh751v = accounts[4]
		const tokenIdLprAXDW = BigInt("525")
		const toLjVwXNg = accounts[2]
		const fromyJpGr5e = accounts[0]
		const _dataQm6NhdN = "0x1b0220"
		const tokenIdR9GjTH = BigInt("1433")
		const totjkZRLu = accounts[3]
		const fromGYYKTb1 = accounts[4]
		const approvedufaRga = false
		const tonbOsw2y = accounts[3]
		await contracthkgN7jh.safeTransferFrom.call(fromBluya2V, toVGMPbPh, tokenIdbBwA3j1, {from: accounts[4]});
		await contracthkgN7jh.setApprovalForAll.call(toTmh751v, approvedM13taw6, {from: accounts[2]});
		await contracthkgN7jh.transferFrom.call(fromyJpGr5e, toLjVwXNg, tokenIdLprAXDW, {from: accounts[0]});
		await contracthkgN7jh.safeTransferFrom.call(fromGYYKTb1, totjkZRLu, tokenIdR9GjTH, _dataQm6NhdN, {from: accounts[2]});
		await contracthkgN7jh.setApprovalForAll.call(tonbOsw2y, approvedufaRga, {from: accounts[4]});

		await expect(contracthkgN7jh.safeTransferFrom.call(fromBluya2V, toVGMPbPh, tokenIdbBwA3j1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractL4lbNlR = await ERC721.new({from: accounts[5]});
		const ownerRs9uEzf = accounts[1]
		const tokenIdPshr3ml = BigInt("1045")
		const nullS3Dihp8 = await contractL4lbNlR.balanceOf.call(ownerRs9uEzf, {from: accounts[1]});
		const nullGZlwGQU = await contractL4lbNlR.ownerOf.call(tokenIdPshr3ml, {from: accounts[3]});

		assert.equal(nullS3Dihp8, 0)
		await expect(contractL4lbNlR.ownerOf.call(tokenIdPshr3ml, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractsutvnw = await ERC721.new({from: accounts[0]});
		const approvedNlguWCl = false
		const totwEsrxc = accounts[2]
		const approvedx9bi8v5 = true
		const toIaL4Dca = accounts[2]
		await contractsutvnw.setApprovalForAll.call(totwEsrxc, approvedNlguWCl, {from: accounts[4]});
		await contractsutvnw.setApprovalForAll.call(toIaL4Dca, approvedx9bi8v5, {from: accounts[2]});

		await expect(contractsutvnw.setApprovalForAll.call(totwEsrxc, approvedNlguWCl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})