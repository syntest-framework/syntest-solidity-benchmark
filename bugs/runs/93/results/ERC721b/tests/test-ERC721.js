const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractstGesYi = await ERC721.new({from: accounts[3]});
		const tokenIdKtx2YM = BigInt("1865")
		const tozaBEJ7 = accounts[2]
		const fromn4UXrlO = accounts[2]
		const approvedu6cjiAN = false
		const toHKFLLt5 = "0x0000000000000000000000000000000000000001"
		const tokenIdno9wrOX = BigInt("350")
		await contractstGesYi.safeTransferFrom.call(fromn4UXrlO, tozaBEJ7, tokenIdKtx2YM, {from: "0x0000000000000000000000000000000000000001"});
		await contractstGesYi.setApprovalForAll.call(toHKFLLt5, approvedu6cjiAN, {from: accounts[4]});
		const nullXg0wy10 = await contractstGesYi.getApproved.call(tokenIdno9wrOX, {from: accounts[3]});

		await expect(contractstGesYi.safeTransferFrom.call(fromn4UXrlO, tozaBEJ7, tokenIdKtx2YM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWQlj7io = await ERC721.new({from: accounts[2]});
		const tokenIdQtR8Q4H = BigInt("150")
		const toP2Prtc5 = accounts[3]
		const tokenIdDitCDV = BigInt("1063")
		const toc6ec8ZR = accounts[2]
		const tokenIdLAh13fn = BigInt("191")
		const toE1zvEH8 = accounts[4]
		const fromhnpFOPL = accounts[1]
		await contractWQlj7io.approve.call(toP2Prtc5, tokenIdQtR8Q4H, {from: accounts[3]});
		await contractWQlj7io.approve.call(toc6ec8ZR, tokenIdDitCDV, {from: accounts[4]});
		await contractWQlj7io.safeTransferFrom.call(fromhnpFOPL, toE1zvEH8, tokenIdLAh13fn, {from: accounts[4]});

		await expect(contractWQlj7io.approve.call(toP2Prtc5, tokenIdQtR8Q4H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcT2w0pk = await ERC721.new({from: accounts[0]});
		const operatorhZJDv0 = accounts[1]
		const owneraZFIyZ2 = accounts[2]
		const ownerfDfgmfk = accounts[4]
		const nullq4Ow6E2 = await contractcT2w0pk.isApprovedForAll.call(owneraZFIyZ2, operatorhZJDv0, {from: "0x0000000000000000000000000000000000000001"});
		const nully4xGa4m = await contractcT2w0pk.balanceOf.call(ownerfDfgmfk, {from: accounts[0]});

		assert.equal(nullq4Ow6E2, false)
		assert.equal(nully4xGa4m, 0)
	});

	it('test for ERC721', async () => {
		const contractJOeBfhY = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdSOxPmZc = BigInt("1100")
		const toWBSpCj7 = accounts[4]
		const tokenIdOsDdXVD = BigInt("134")
		const _databIBiGKc = "0x11111b"
		const tokenIdIPT6XL3 = BigInt("700")
		const toCjxLOa2 = accounts[2]
		const fromwLl0lqA = accounts[5]
		const tokenIdDCMw16a = BigInt("308")
		const tonbRoaj = accounts[4]
		const fromxlQQZa = accounts[5]
		const operatorgfyg9ps = accounts[0]
		const owneryde9WdB = accounts[2]
		await contractJOeBfhY.approve.call(toWBSpCj7, tokenIdSOxPmZc, {from: accounts[2]});
		const nulli2RRv42 = await contractJOeBfhY.ownerOf.call(tokenIdOsDdXVD, {from: accounts[3]});
		await contractJOeBfhY.safeTransferFrom.call(fromwLl0lqA, toCjxLOa2, tokenIdIPT6XL3, _databIBiGKc, {from: accounts[0]});
		await contractJOeBfhY.safeTransferFrom.call(fromxlQQZa, tonbRoaj, tokenIdDCMw16a, {from: accounts[1]});
		const nullfUzbf7w = await contractJOeBfhY.isApprovedForAll.call(owneryde9WdB, operatorgfyg9ps, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contractW3F9YYZ = await ERC721.new({from: accounts[2]});
		const tokenIdZOluuOY = BigInt("277")
		const _dataDeDqWmx = "0x05181a1e0115021c12030c130b1b10060d10"
		const tokenIdTx84ycr = BigInt("20")
		const toD9kYzGi = accounts[1]
		const fromClM2BqD = accounts[0]
		const operatorN1g2AKS = accounts[4]
		const owner9zYip8 = accounts[3]
		const ownerkgkX9om = accounts[2]
		const nullwZuk8XT = await contractW3F9YYZ.getApproved.call(tokenIdZOluuOY, {from: accounts[0]});
		await contractW3F9YYZ.safeTransferFrom.call(fromClM2BqD, toD9kYzGi, tokenIdTx84ycr, _dataDeDqWmx, {from: accounts[1]});
		const nullMynLDMc = await contractW3F9YYZ.isApprovedForAll.call(owner9zYip8, operatorN1g2AKS, {from: accounts[1]});
		const nullEDApQEK = await contractW3F9YYZ.balanceOf.call(ownerkgkX9om, {from: accounts[1]});

		await expect(contractW3F9YYZ.getApproved.call(tokenIdZOluuOY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracttwxJSle = await ERC721.new({from: accounts[2]});
		const approvedkToWoWh = true
		const toobbAqOQ = accounts[3]
		const tokenIdwDFYweC = BigInt("483")
		const tokenIdq5lHoav = BigInt("1948")
		await contracttwxJSle.setApprovalForAll.call(toobbAqOQ, approvedkToWoWh, {from: accounts[2]});
		const nullfKwNvTv = await contracttwxJSle.ownerOf.call(tokenIdwDFYweC, {from: accounts[4]});
		const nullm2FBXJ = await contracttwxJSle.getApproved.call(tokenIdq5lHoav, {from: accounts[2]});

		await expect(contracttwxJSle.setApprovalForAll.call(toobbAqOQ, approvedkToWoWh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcI3JVHl = await ERC721.new({from: accounts[0]});
		const operatorG2AQ3I6 = accounts[1]
		const ownerqtKzfjz = accounts[2]
		const tokenIdMz3nrx2 = BigInt("1103")
		const tosZs7r9I = accounts[5]
		const fromO32fZE = accounts[3]
		const owners1zVVZi = accounts[4]
		const nulllJBqKPP = await contractcI3JVHl.isApprovedForAll.call(ownerqtKzfjz, operatorG2AQ3I6, {from: "0x0000000000000000000000000000000000000001"});
		await contractcI3JVHl.transferFrom.call(fromO32fZE, tosZs7r9I, tokenIdMz3nrx2, {from: accounts[2]});
		const nullppkyTrx = await contractcI3JVHl.balanceOf.call(owners1zVVZi, {from: accounts[0]});

		assert.equal(nulllJBqKPP, false)
		await expect(contractcI3JVHl.transferFrom.call(fromO32fZE, tosZs7r9I, tokenIdMz3nrx2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZKGgqjv = await ERC721.new({from: accounts[0]});
		const approvedFJA7j6 = false
		const to1AgxuU = accounts[0]
		const operatorulpubVK = accounts[1]
		const ownerXIV3txF = accounts[3]
		await contractZKGgqjv.setApprovalForAll.call(to1AgxuU, approvedFJA7j6, {from: accounts[0]});
		const nulliT57gnq = await contractZKGgqjv.isApprovedForAll.call(ownerXIV3txF, operatorulpubVK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractZKGgqjv.setApprovalForAll.call(to1AgxuU, approvedFJA7j6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})