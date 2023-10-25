const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractniB6334 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdfxp14Yj = BigInt("73")
		const to4tmaLS = accounts[4]
		const fromiX2hmZ9 = accounts[1]
		const approvedCyYs7So = true
		const toReLV1H7 = accounts[3]
		const operatorjQQO74U = accounts[0]
		const ownerevMj3hf = accounts[1]
		await contractniB6334.safeTransferFrom.call(fromiX2hmZ9, to4tmaLS, tokenIdfxp14Yj, {from: accounts[3]});
		await contractniB6334.setApprovalForAll.call(toReLV1H7, approvedCyYs7So, {from: accounts[4]});
		const nullsfcbbKw = await contractniB6334.isApprovedForAll.call(ownerevMj3hf, operatorjQQO74U, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractnlHxnUB = await ERC721.new({from: accounts[4]});
		const tokenIdRO2PXgo = BigInt("882")
		const towDBa3y0 = accounts[1]
		const fromAYeKm3F = accounts[3]
		const tokenIdSiFIwAH = BigInt("1768")
		await contractnlHxnUB.safeTransferFrom.call(fromAYeKm3F, towDBa3y0, tokenIdRO2PXgo, {from: accounts[1]});
		const nullmnQsrje = await contractnlHxnUB.getApproved.call(tokenIdSiFIwAH, {from: accounts[0]});

		await expect(contractnlHxnUB.safeTransferFrom.call(fromAYeKm3F, towDBa3y0, tokenIdRO2PXgo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZt1mVRN = await ERC721.new({from: accounts[1]});
		const tokenIdxqbVVSD = BigInt("313")
		const tofmAY9dy = accounts[2]
		const frombo1boy = accounts[2]
		const tokenIdo5XiQKb = BigInt("735")
		const tokenIdtpOb5ar = BigInt("333")
		const toSn8DPON = accounts[3]
		await contractZt1mVRN.transferFrom.call(frombo1boy, tofmAY9dy, tokenIdxqbVVSD, {from: accounts[3]});
		const nullHHtqUjq = await contractZt1mVRN.ownerOf.call(tokenIdo5XiQKb, {from: accounts[3]});
		await contractZt1mVRN.approve.call(toSn8DPON, tokenIdtpOb5ar, {from: accounts[5]});

		await expect(contractZt1mVRN.transferFrom.call(frombo1boy, tofmAY9dy, tokenIdxqbVVSD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVQhvoxZ = await ERC721.new({from: accounts[5]});
		const operatorOHdIRKP = accounts[1]
		const ownert5p0pRm = accounts[0]
		const tokenIdPK8Axxy = BigInt("1150")
		const tokenIdrQbmNKK = BigInt("164")
		const _dataj31rYXV = "0x0f010e1d060415011e1811020c1813"
		const tokenIdxCl5vqe = BigInt("425")
		const tos0K7I7 = accounts[0]
		const frommf5asm2 = accounts[3]
		const tokenIdD6W9my5 = BigInt("1439")
		const approvedQAaJ6TZ = false
		const toEyBMWy = accounts[4]
		const nulloqdQOhp = await contractVQhvoxZ.isApprovedForAll.call(ownert5p0pRm, operatorOHdIRKP, {from: accounts[5]});
		const nullKhHxS5D = await contractVQhvoxZ.getApproved.call(tokenIdPK8Axxy, {from: accounts[0]});
		const nullxzOZjeI = await contractVQhvoxZ.ownerOf.call(tokenIdrQbmNKK, {from: "0x0000000000000000000000000000000000000001"});
		await contractVQhvoxZ.safeTransferFrom.call(frommf5asm2, tos0K7I7, tokenIdxCl5vqe, _dataj31rYXV, {from: accounts[2]});
		const nulllkJkto3 = await contractVQhvoxZ.getApproved.call(tokenIdD6W9my5, {from: accounts[2]});
		await contractVQhvoxZ.setApprovalForAll.call(toEyBMWy, approvedQAaJ6TZ, {from: accounts[5]});

		assert.equal(nulloqdQOhp, false)
		await expect(contractVQhvoxZ.getApproved.call(tokenIdPK8Axxy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractsRNNK6 = await ERC721.new({from: accounts[3]});
		const ownerASg5ouf = "0x0000000000000000000000000000000000000001"
		const tokenIdotiSFkd = BigInt("1106")
		const tosLSO50B = accounts[0]
		const nullJr7wXqI = await contractsRNNK6.balanceOf.call(ownerASg5ouf, {from: accounts[4]});
		await contractsRNNK6.approve.call(tosLSO50B, tokenIdotiSFkd, {from: accounts[4]});

		assert.equal(nullJr7wXqI, 0)
		await expect(contractsRNNK6.approve.call(tosLSO50B, tokenIdotiSFkd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDR4W2z4 = await ERC721.new({from: accounts[3]});
		const owneraI45KI = "0x0000000000000000000000000000000000000000"
		const tokenIdsj8VoHQ = BigInt("1131")
		const toQDN1SpK = accounts[0]
		const nullRrdYHD1 = await contractDR4W2z4.balanceOf.call(owneraI45KI, {from: accounts[4]});
		await contractDR4W2z4.approve.call(toQDN1SpK, tokenIdsj8VoHQ, {from: accounts[4]});

		await expect(contractDR4W2z4.balanceOf.call(owneraI45KI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMGZtjdl = await ERC721.new({from: accounts[4]});
		const approvedHy5HDUE = false
		const tooDU2qHa = accounts[1]
		const tokenIdBSImyjH = BigInt("225")
		const tohSFV8rZ = accounts[5]
		const frombiv291E = accounts[5]
		const tokenIdYUA6UxG = BigInt("844")
		const tolbt5T9p = accounts[1]
		const fromtILEF5U = accounts[3]
		await contractMGZtjdl.setApprovalForAll.call(tooDU2qHa, approvedHy5HDUE, {from: accounts[3]});
		await contractMGZtjdl.transferFrom.call(frombiv291E, tohSFV8rZ, tokenIdBSImyjH, {from: accounts[3]});
		await contractMGZtjdl.safeTransferFrom.call(fromtILEF5U, tolbt5T9p, tokenIdYUA6UxG, {from: accounts[1]});

		await expect(contractMGZtjdl.setApprovalForAll.call(tooDU2qHa, approvedHy5HDUE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractdhsuVsd = await ERC721.new({from: accounts[3]});
		const approvedcmnbYUe = true
		const toLzKydUA = accounts[4]
		const tokenIdV2WNDji = BigInt("1106")
		const tokJQDPJA = accounts[2]
		await contractdhsuVsd.setApprovalForAll.call(toLzKydUA, approvedcmnbYUe, {from: accounts[4]});
		await contractdhsuVsd.approve.call(tokJQDPJA, tokenIdV2WNDji, {from: accounts[4]});

		await expect(contractdhsuVsd.setApprovalForAll.call(toLzKydUA, approvedcmnbYUe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})