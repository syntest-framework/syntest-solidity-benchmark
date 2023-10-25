const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractR5sveuC = await ERC721.new({from: accounts[2]});
		const tokenIdoJfrUJz = BigInt("80")
		const tokenIdOOZaWO = BigInt("72")
		const to1Q00hK = accounts[3]
		const approvedkJcJ1Md = false
		const toWZBMtn8 = accounts[1]
		const nullNPcP2Nq = await contractR5sveuC.ownerOf.call(tokenIdoJfrUJz, {from: accounts[0]});
		await contractR5sveuC.approve.call(to1Q00hK, tokenIdOOZaWO, {from: accounts[2]});
		await contractR5sveuC.setApprovalForAll.call(toWZBMtn8, approvedkJcJ1Md, {from: accounts[1]});

		await expect(contractR5sveuC.ownerOf.call(tokenIdoJfrUJz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgQ1elDN = await ERC721.new({from: accounts[2]});
		const tokenIdGpM86Ft = BigInt("333")
		const toxffoDfN = accounts[1]
		const fromM5QDUF = accounts[4]
		const approvedSJsqJsJ = true
		const tovMDNkR = "0x0000000000000000000000000000000000000001"
		const tokenIdePsRZ4 = BigInt("1354")
		const toeVGCpAi = accounts[5]
		await contractgQ1elDN.transferFrom.call(fromM5QDUF, toxffoDfN, tokenIdGpM86Ft, {from: accounts[2]});
		await contractgQ1elDN.setApprovalForAll.call(tovMDNkR, approvedSJsqJsJ, {from: accounts[0]});
		await contractgQ1elDN.approve.call(toeVGCpAi, tokenIdePsRZ4, {from: accounts[5]});

		await expect(contractgQ1elDN.transferFrom.call(fromM5QDUF, toxffoDfN, tokenIdGpM86Ft, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractONZdgHT = await ERC721.new({from: accounts[2]});
		const tokenIdOpbBq55 = BigInt("1810")
		const toe4WSJbi = accounts[5]
		const fromJBJCzuk = accounts[4]
		const approved4tdxru = false
		const togKBbf7 = accounts[3]
		const approvedTYWN6DE = true
		const toiDLDJ5q = accounts[0]
		const tokenIdGaBzdCF = BigInt("1085")
		const to9WCgR0 = accounts[1]
		const fromNtvMDQN = accounts[3]
		await contractONZdgHT.safeTransferFrom.call(fromJBJCzuk, toe4WSJbi, tokenIdOpbBq55, {from: accounts[4]});
		await contractONZdgHT.setApprovalForAll.call(togKBbf7, approved4tdxru, {from: accounts[2]});
		await contractONZdgHT.setApprovalForAll.call(toiDLDJ5q, approvedTYWN6DE, {from: accounts[4]});
		await contractONZdgHT.transferFrom.call(fromNtvMDQN, to9WCgR0, tokenIdGaBzdCF, {from: accounts[1]});

		await expect(contractONZdgHT.safeTransferFrom.call(fromJBJCzuk, toe4WSJbi, tokenIdOpbBq55, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGsnbjaz = await ERC721.new({from: accounts[3]});
		const tokenIdwYpZSQh = BigInt("137")
		const toBAQvZBY = accounts[1]
		const tokenIdDlJ0RNO = BigInt("1091")
		const tou3sqCV0 = "0x0000000000000000000000000000000000000001"
		const fromOcGNFOq = accounts[4]
		await contractGsnbjaz.approve.call(toBAQvZBY, tokenIdwYpZSQh, {from: accounts[0]});
		await contractGsnbjaz.transferFrom.call(fromOcGNFOq, tou3sqCV0, tokenIdDlJ0RNO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractGsnbjaz.approve.call(toBAQvZBY, tokenIdwYpZSQh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKCSFqAg = await ERC721.new({from: accounts[3]});
		const approvedKSA3TEG = true
		const toXdBmxnT = accounts[0]
		const tokenIddoHPJSw = BigInt("1892")
		const tokenIdZxZuSO6 = BigInt("690")
		await contractKCSFqAg.setApprovalForAll.call(toXdBmxnT, approvedKSA3TEG, {from: accounts[0]});
		const nullIKlGYUZ = await contractKCSFqAg.getApproved.call(tokenIddoHPJSw, {from: accounts[4]});
		const nullF9jq3i5 = await contractKCSFqAg.getApproved.call(tokenIdZxZuSO6, {from: accounts[1]});

		await expect(contractKCSFqAg.setApprovalForAll.call(toXdBmxnT, approvedKSA3TEG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMB3pPNG = await ERC721.new({from: accounts[1]});
		const tokenIdufqdsny = BigInt("1968")
		const approvedwjwsWzz = false
		const toOClpXEN = accounts[5]
		const tokenIdZXjXACB = BigInt("882")
		const nullpEsQTiQ = await contractMB3pPNG.getApproved.call(tokenIdufqdsny, {from: accounts[3]});
		await contractMB3pPNG.setApprovalForAll.call(toOClpXEN, approvedwjwsWzz, {from: accounts[4]});
		const nullhMsaM3g = await contractMB3pPNG.ownerOf.call(tokenIdZXjXACB, {from: accounts[4]});

		await expect(contractMB3pPNG.getApproved.call(tokenIdufqdsny, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractiKms5M5 = await ERC721.new({from: accounts[3]});
		const ownerLw1nyhj = accounts[1]
		const tokenIdVHO1Szq = BigInt("137")
		const toCrnJpUX = accounts[1]
		const tokenIdSHcfwYK = BigInt("1992")
		const tokenIdCQzaEu2 = BigInt("1091")
		const toZBlAkAo = "0x0000000000000000000000000000000000000001"
		const fromXB71STY = accounts[4]
		const nullue4G5dd = await contractiKms5M5.balanceOf.call(ownerLw1nyhj, {from: accounts[2]});
		await contractiKms5M5.approve.call(toCrnJpUX, tokenIdVHO1Szq, {from: accounts[0]});
		const nullagmhRNc = await contractiKms5M5.ownerOf.call(tokenIdSHcfwYK, {from: accounts[0]});
		await contractiKms5M5.transferFrom.call(fromXB71STY, toZBlAkAo, tokenIdCQzaEu2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullue4G5dd, 0)
		await expect(contractiKms5M5.approve.call(toCrnJpUX, tokenIdVHO1Szq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxDBM3z8 = await ERC721.new({from: accounts[3]});
		const approvedCiDuOpM = true
		const toKQQbCMR = "0x0000000000000000000000000000000000000001"
		const tokenIdY56B5XD = BigInt("137")
		const toqV8Ey4T = accounts[2]
		const _datashgoSFJ = "0x1212170b0e1b011d131c0d0d16181e1e1e101e0c181713"
		const tokenIdHaKUcLK = BigInt("1582")
		const toGPCnWkB = "0x0000000000000000000000000000000000000001"
		const fromV71p9Ch = accounts[3]
		const operatorP9M7LAu = accounts[1]
		const ownerw8SlKZ = accounts[4]
		await contractxDBM3z8.setApprovalForAll.call(toKQQbCMR, approvedCiDuOpM, {from: accounts[1]});
		await contractxDBM3z8.approve.call(toqV8Ey4T, tokenIdY56B5XD, {from: accounts[0]});
		await contractxDBM3z8.safeTransferFrom.call(fromV71p9Ch, toGPCnWkB, tokenIdHaKUcLK, _datashgoSFJ, {from: "0x0000000000000000000000000000000000000001"});
		const nullFWyy9bd = await contractxDBM3z8.isApprovedForAll.call(ownerw8SlKZ, operatorP9M7LAu, {from: accounts[3]});

		await expect(contractxDBM3z8.setApprovalForAll.call(toKQQbCMR, approvedCiDuOpM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDYmawK = await ERC721.new({from: accounts[3]});
		const operatorcgJGc2q = accounts[2]
		const ownerbC4eoqZ = accounts[4]
		const ownerqTQre7D = "0x0000000000000000000000000000000000000001"
		const tokenIdGnvOikP = BigInt("137")
		const tovyXQuEO = accounts[1]
		const nullWi5epWe = await contractDYmawK.isApprovedForAll.call(ownerbC4eoqZ, operatorcgJGc2q, {from: accounts[1]});
		const nulltfVMYc = await contractDYmawK.balanceOf.call(ownerqTQre7D, {from: accounts[3]});
		await contractDYmawK.approve.call(tovyXQuEO, tokenIdGnvOikP, {from: accounts[0]});

		assert.equal(nullWi5epWe, false)
		assert.equal(nulltfVMYc, 0)
		await expect(contractDYmawK.approve.call(tovyXQuEO, tokenIdGnvOikP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGdc3Hgr = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdfVRv7RF = BigInt("1997")
		const tokenIdo8Umo8g = BigInt("1843")
		const tonOkuwcN = accounts[3]
		const fromKlhTcwx = accounts[2]
		const tokenIdeughMwo = BigInt("1378")
		const tokenIdkAMLX9 = BigInt("41")
		const toKWYBmQ2 = "0x0000000000000000000000000000000000000001"
		const operatorjfohhyT = accounts[4]
		const ownerqOjPzd0 = accounts[3]
		const nullAt8nuA = await contractGdc3Hgr.getApproved.call(tokenIdfVRv7RF, {from: accounts[0]});
		await contractGdc3Hgr.transferFrom.call(fromKlhTcwx, tonOkuwcN, tokenIdo8Umo8g, {from: accounts[3]});
		const nullu1Q5u1F = await contractGdc3Hgr.getApproved.call(tokenIdeughMwo, {from: accounts[1]});
		await contractGdc3Hgr.approve.call(toKWYBmQ2, tokenIdkAMLX9, {from: accounts[4]});
		const nullCnubcnW = await contractGdc3Hgr.isApprovedForAll.call(ownerqOjPzd0, operatorjfohhyT, {from: "0x0000000000000000000000000000000000000001"});
	});
})